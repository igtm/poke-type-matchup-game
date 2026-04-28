import { createEffect, createMemo, createSignal, onCleanup, onMount } from 'solid-js'
import { AnswerGrid } from './components/AnswerGrid.tsx'
import { PokemonCard } from './components/PokemonCard.tsx'
import { ReviewPanel } from './components/ReviewPanel.tsx'
import { StatsPanel } from './components/StatsPanel.tsx'
import { POKEMON_DATA_GENERATED_AT, POKEMON_ENTRIES } from './data/pokemon.ts'
import {
  buildAttackTypePerformance,
  buildRecentMisses,
  countLearnedQuestions,
  rankSessions,
} from './lib/stats.ts'
import {
  appendSessionRecord,
  loadStorageState,
  markQuestionLearned,
  pruneProgressForQuestions,
  recordQuestionAttempt,
  resetLearnedQuestions,
  saveStorageState,
} from './lib/storage.ts'
import { buildQuestionPool, gradeAnswer, indexReviewProgress, pickNextQuestion } from './lib/question-pool.ts'
import { createSessionRng } from './lib/rng.ts'
import type {
  AppStorageState,
  GameMode,
  MobileTab,
  MultiplierBucket,
  Question,
  SideTab,
} from './lib/types.ts'
import './App.css'

interface FeedbackState {
  status: 'correct' | 'wrong'
  selectedAnswer: MultiplierBucket
  correctAnswer: MultiplierBucket
  message: string
}

interface RunState {
  startedAt: number
  streak: number
  answered: number
}

const ADVANCE_DELAY_MS = 720
const VALID_QUESTION_IDS = buildQuestionPool(POKEMON_ENTRIES, {}).all.map(
  (question) => question.id,
)

function App() {
  const rng = createSessionRng(Date.now() >>> 0)
  const now = Date.now()
  const browserStorage =
    typeof window === 'undefined' ? undefined : window.localStorage
  const loadedStorage = loadStorageState(browserStorage)
  const initialStorage = pruneProgressForQuestions(loadedStorage, VALID_QUESTION_IDS)
  const didPruneProgress = initialStorage !== loadedStorage
  const [storageState, setStorageState] = createSignal<AppStorageState>(
    initialStorage,
  )
  const [mode, setMode] = createSignal<GameMode>('normal')
  const [sideTab, setSideTab] = createSignal<SideTab>('stats')
  const [mobileTab, setMobileTab] = createSignal<MobileTab>('play')
  const [currentQuestion, setCurrentQuestion] = createSignal<Question | null>(null)
  const [feedback, setFeedback] = createSignal<FeedbackState | null>(null)
  const [runState, setRunState] = createSignal<RunState>({
    startedAt: now,
    streak: 0,
    answered: 0,
  })
  let advanceTimer: number | undefined

  const questionPool = createMemo(() => {
    indexReviewProgress(storageState().progress)
    return buildQuestionPool(POKEMON_ENTRIES, storageState().progress)
  })
  const rankedSessions = createMemo(() => rankSessions(storageState().sessions))
  const attackPerformance = createMemo(() =>
    buildAttackTypePerformance(questionPool().byId, storageState().progress),
  )
  const recentMisses = createMemo(() =>
    buildRecentMisses(questionPool().byId, storageState().progress),
  )
  const learnedCount = createMemo(() =>
    countLearnedQuestions(storageState().progress),
  )
  const reviewCount = createMemo(() => questionPool().review.length)
  const currentAccuracy = createMemo(() => {
    const answered = runState().answered
    return answered === 0 ? 0 : runState().streak / answered
  })

  const persistState = (nextState: AppStorageState) => {
    setStorageState(nextState)
    saveStorageState(browserStorage, nextState)
  }

  const cancelScheduledAdvance = () => {
    window.clearTimeout(advanceTimer)
    advanceTimer = undefined
  }

  const ensureQuestion = () => {
    const pool = questionPool()
    const activeMode = mode()
    const next = pickQuestionAvoidingRepeat(pool, currentQuestion(), activeMode, rng)
    setCurrentQuestion(next)
  }

  const scheduleAdvance = () => {
    cancelScheduledAdvance()
    advanceTimer = window.setTimeout(() => {
      setFeedback(null)

      if (mode() === 'review' && reviewCount() === 0) {
        setMode('normal')
      }

      ensureQuestion()
    }, ADVANCE_DELAY_MS)
  }

  const handleAnswer = (answer: MultiplierBucket) => {
    const question = currentQuestion()

    if (!question || feedback()) {
      return
    }

    const result = gradeAnswer(question, answer)
    const timestamp = Date.now()
    let nextState = recordQuestionAttempt(storageState(), question.id, result.correct, timestamp)

    if (result.correct) {
      setRunState((current) => ({
        ...current,
        streak: current.streak + 1,
        answered: current.answered + 1,
      }))
    } else {
      const currentRun = runState()
      nextState = appendSessionRecord(nextState, {
        startedAt: currentRun.startedAt,
        endedAt: timestamp,
        bestStreak: currentRun.streak,
        totalAnswered: currentRun.answered + 1,
        accuracy:
          currentRun.answered + 1 === 0
            ? 0
            : currentRun.answered / (currentRun.answered + 1),
      })
      setRunState({
        startedAt: timestamp,
        streak: 0,
        answered: 0,
      })
    }

    persistState(nextState)

    setFeedback({
      status: result.correct ? 'correct' : 'wrong',
      selectedAnswer: result.selectedAnswer,
      correctAnswer: result.correctAnswer,
      message: result.correct
        ? '正解。次の問題へ進みます。'
        : `不正解。正解は ${result.correctAnswer} です。`,
    })

    scheduleAdvance()
  }

  const handleLearned = () => {
    const question = currentQuestion()

    if (!question) {
      return
    }

    cancelScheduledAdvance()
    const nextState = markQuestionLearned(storageState(), question.id)
    persistState(nextState)
    setFeedback(null)

    if (mode() === 'review' && reviewCount() === 0) {
      setMode('normal')
    }

    ensureQuestion()
  }

  const handleModeChange = (nextMode: GameMode) => {
    if (nextMode === 'review' && reviewCount() === 0) {
      return
    }

    cancelScheduledAdvance()
    setFeedback(null)
    setMode(nextMode)
    setMobileTab('play')
    ensureQuestion()
  }

  const handleResetLearned = () => {
    cancelScheduledAdvance()
    setFeedback(null)
    persistState(resetLearnedQuestions(storageState()))
    ensureQuestion()
  }

  createEffect(() => {
    if (mode() === 'review' && reviewCount() === 0) {
      setMode('normal')
    }

    const question = currentQuestion()
    const currentMode = mode()
    const pool = questionPool()

    if (!question) {
      ensureQuestion()
      return
    }

    const stillEligible =
      currentMode === 'review'
        ? pool.review.some((entry) => entry.id === question.id)
        : pool.buckets[question.bucket].some((entry) => entry.id === question.id)

    if (!stillEligible && !feedback()) {
      ensureQuestion()
    }
  })

  onMount(() => {
    if (didPruneProgress) {
      saveStorageState(browserStorage, initialStorage)
    }

    ensureQuestion()
  })

  onCleanup(() => {
    cancelScheduledAdvance()
  })

  const feedbackState = () => feedback()

  return (
    <div class="app-shell" data-mobile-tab={mobileTab()}>
      <main class="workspace" data-hidden={mobileTab() !== 'play'}>
        <header class="workspace__header">
          <div>
            <p class="brand-mark">TYPE MATCHUP</p>
            <h1>ポケモンタイプ相性学習ゲーム</h1>
            <p class="workspace__subtitle">
              攻撃タイプを見て、防御側の倍率を 6 択で答える単画面トレーナー。
            </p>
          </div>

          <div class="workspace__controls">
            <div class="segmented-control" role="tablist" aria-label="出題モード">
              <button
                type="button"
                class="segmented-control__button"
                data-active={mode() === 'normal'}
                onClick={() => handleModeChange('normal')}
              >
                通常
              </button>
              <button
                type="button"
                class="segmented-control__button"
                data-active={mode() === 'review'}
                disabled={reviewCount() === 0}
                onClick={() => handleModeChange('review')}
              >
                復習
              </button>
            </div>

            <div class="run-metrics">
              <div>
                <span class="meta-label">連続正解</span>
                <strong>{runState().streak}</strong>
              </div>
              <div>
                <span class="meta-label">run 正答率</span>
                <strong>{Math.round(currentAccuracy() * 100)}%</strong>
              </div>
              <div>
                <span class="meta-label">復習待ち</span>
                <strong>{reviewCount()}</strong>
              </div>
            </div>
          </div>
        </header>

        <section class="workspace__content">
          {currentQuestion() ? (
            <>
              <PokemonCard
                pokemon={currentQuestion()!.pokemon}
                attackType={currentQuestion()!.attackType}
                feedbackStatus={feedbackState()?.status ?? 'idle'}
              />

              <div class="answer-panel">
                <div class="answer-panel__head">
                  <div>
                    <p class="eyebrow">回答</p>
                    <h2>{mode() === 'normal' ? '通常出題' : '復習モード'}</h2>
                  </div>
                  <button type="button" class="ghost-button" onClick={handleLearned}>
                    覚えた
                  </button>
                </div>

                <AnswerGrid
                  disabled={feedbackState() !== null}
                  selected={feedbackState()?.selectedAnswer ?? null}
                  correctAnswer={feedbackState()?.correctAnswer ?? null}
                  onSelect={handleAnswer}
                />

                <p
                  class="feedback-line"
                  data-status={feedbackState()?.status ?? 'idle'}
                  data-idle={feedbackState() === null}
                >
                  {feedbackState()?.message ??
                    '問題は自動で切り替わります。縦スクロールなしでテンポよく復習できます。'}
                </p>
              </div>
            </>
          ) : (
            <section class="empty-state">
              <p class="eyebrow">出題終了</p>
              <h2>{mode() === 'review' ? '復習待ちがありません' : 'すべて学習済みです'}</h2>
              <p>
                {mode() === 'review'
                  ? '通常モードに戻るか、新しい誤答が溜まるまで待機してください。'
                  : '統計タブから学習済みリセットを行うと再出題できます。'}
              </p>
            </section>
          )}
        </section>
      </main>

      <aside class="inspector" data-hidden={mobileTab() === 'play'}>
        <header class="inspector__header">
          <div class="segmented-control" role="tablist" aria-label="情報パネル">
            <button
              type="button"
              class="segmented-control__button"
              data-active={sideTab() === 'stats'}
              onClick={() => {
                setSideTab('stats')
                setMobileTab('stats')
              }}
            >
              統計
            </button>
            <button
              type="button"
              class="segmented-control__button"
              data-active={sideTab() === 'review'}
              onClick={() => {
                setSideTab('review')
                setMobileTab('review')
              }}
            >
              復習
            </button>
          </div>

          <p class="inspector__stamp">
            Data {POKEMON_DATA_GENERATED_AT ? 'ready' : 'pending'}
          </p>
        </header>

        <div class="inspector__body">
          {sideTab() === 'stats' ? (
            <StatsPanel
              activeMode={mode()}
              rankedSessions={rankedSessions()}
              attackPerformance={attackPerformance()}
              learnedCount={learnedCount()}
              totalQuestions={questionPool().all.length}
              reviewCount={reviewCount()}
              onResetLearned={handleResetLearned}
              onSwitchMode={handleModeChange}
              hasReviewQuestions={reviewCount() > 0}
            />
          ) : (
            <ReviewPanel
              reviewCount={reviewCount()}
              recentMisses={recentMisses()}
              onSwitchMode={handleModeChange}
            />
          )}
        </div>
      </aside>

      <nav class="mobile-nav" aria-label="モバイルタブ">
        <button
          type="button"
          class="mobile-nav__button"
          data-active={mobileTab() === 'play'}
          onClick={() => setMobileTab('play')}
        >
          出題
        </button>
        <button
          type="button"
          class="mobile-nav__button"
          data-active={mobileTab() === 'stats'}
          onClick={() => {
            setSideTab('stats')
            setMobileTab('stats')
          }}
        >
          統計
        </button>
        <button
          type="button"
          class="mobile-nav__button"
          data-active={mobileTab() === 'review'}
          onClick={() => {
            setSideTab('review')
            setMobileTab('review')
          }}
        >
          復習
        </button>
      </nav>
    </div>
  )
}

function pickQuestionAvoidingRepeat(
  pool: ReturnType<typeof buildQuestionPool>,
  currentQuestion: Question | null,
  mode: GameMode,
  rng: ReturnType<typeof createSessionRng>,
) {
  const attempts = Math.min(5, pool.all.length)

  for (let index = 0; index < attempts; index += 1) {
    const next = pickNextQuestion(pool, rng, mode)

    if (!currentQuestion || !next || next.id !== currentQuestion.id) {
      return next
    }
  }

  return pickNextQuestion(pool, rng, mode)
}

export default App
