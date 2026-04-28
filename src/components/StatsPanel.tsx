import { For } from 'solid-js'
import { formatDateTime, formatRate, typeLabel } from '../lib/format.ts'
import type {
  AttackTypePerformance,
  GameMode,
  SessionRecord,
} from '../lib/types.ts'

interface StatsPanelProps {
  activeMode: GameMode
  rankedSessions: readonly SessionRecord[]
  attackPerformance: readonly AttackTypePerformance[]
  learnedCount: number
  totalQuestions: number
  reviewCount: number
  onResetLearned: () => void
  onSwitchMode: (mode: GameMode) => void
  hasReviewQuestions: boolean
}

export function StatsPanel(props: StatsPanelProps) {
  return (
    <div class="panel-stack">
      <section class="panel-section">
        <div class="section-heading">
          <div>
            <p class="eyebrow">学習状況</p>
            <h2>進行中のデータ</h2>
          </div>
          <button type="button" class="ghost-button" onClick={props.onResetLearned}>
            学習済みリセット
          </button>
        </div>

        <div class="summary-grid">
          <div>
            <span class="meta-label">学習済み</span>
            <strong>
              {props.learnedCount} / {props.totalQuestions}
            </strong>
          </div>
          <div>
            <span class="meta-label">復習待ち</span>
            <strong>{props.reviewCount}</strong>
          </div>
          <div>
            <span class="meta-label">現在モード</span>
            <strong>{props.activeMode === 'normal' ? '通常' : '復習'}</strong>
          </div>
        </div>

        <div class="mode-actions">
          <button type="button" class="ghost-button" onClick={() => props.onSwitchMode('normal')}>
            通常出題
          </button>
          <button
            type="button"
            class="ghost-button"
            disabled={!props.hasReviewQuestions}
            onClick={() => props.onSwitchMode('review')}
          >
            復習モード
          </button>
        </div>
      </section>

      <section class="panel-section">
        <div class="section-heading">
          <div>
            <p class="eyebrow">ランキング</p>
            <h2>ベスト連続正解</h2>
          </div>
        </div>

        <div class="rank-list">
          <For each={props.rankedSessions.slice(0, 6)}>
            {(session, index) => (
              <div class="rank-row">
                <span class="rank-index">#{index() + 1}</span>
                <div>
                  <strong>{session.bestStreak} 連続</strong>
                  <p>
                    {session.totalAnswered} 問 / 正答率 {formatRate(session.accuracy)}
                  </p>
                </div>
                <span>{formatDateTime(session.endedAt)}</span>
              </div>
            )}
          </For>
          <ShowFallback when={props.rankedSessions.length === 0}>
            まだ run の履歴がありません。
          </ShowFallback>
        </div>
      </section>

      <section class="panel-section">
        <div class="section-heading">
          <div>
            <p class="eyebrow">苦手タイプ</p>
            <h2>攻撃タイプ別</h2>
          </div>
        </div>

        <div class="type-performance-list">
          <For each={props.attackPerformance.slice(0, 8)}>
            {(entry) => (
              <div class="type-performance-row">
                <div>
                  <strong>{typeLabel(entry.attackType)}</strong>
                  <p>
                    ミス {entry.missCount} / 出題 {entry.seenCount}
                  </p>
                </div>
                <span>{formatRate(entry.accuracy)}</span>
              </div>
            )}
          </For>
        </div>
      </section>
    </div>
  )
}

function ShowFallback(props: { when: boolean; children: string }) {
  return props.when ? <p class="panel-note">{props.children}</p> : null
}
