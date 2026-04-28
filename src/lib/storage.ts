import type { AppStorageState, QuestionProgress, SessionRecord } from './types.ts'

export const STORAGE_KEY = 'poke-type-matchup-game:v1'
export const STORAGE_VERSION = 1

export interface StorageLike {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
  removeItem(key: string): void
}

export function createEmptyStorageState(): AppStorageState {
  return {
    version: STORAGE_VERSION,
    sessions: [],
    progress: {},
  }
}

export function loadStorageState(storage: StorageLike | undefined): AppStorageState {
  if (!isStorageLike(storage)) {
    return createEmptyStorageState()
  }

  const raw = storage.getItem(STORAGE_KEY)

  if (!raw) {
    return createEmptyStorageState()
  }

  try {
    const parsed = JSON.parse(raw) as Partial<AppStorageState> | null

    if (
      !parsed ||
      parsed.version !== STORAGE_VERSION ||
      !Array.isArray(parsed.sessions) ||
      typeof parsed.progress !== 'object' ||
      parsed.progress === null
    ) {
      return createEmptyStorageState()
    }

    const progress: Record<string, QuestionProgress> = {}

    for (const [questionId, value] of Object.entries(parsed.progress)) {
      if (!value || typeof value !== 'object') {
        continue
      }

      progress[questionId] = normalizeProgress(questionId, value as Partial<QuestionProgress>)
    }

    const sessions = parsed.sessions
      .filter(isValidSessionRecord)
      .map((session) => ({
        startedAt: session.startedAt,
        endedAt: session.endedAt,
        bestStreak: session.bestStreak,
        totalAnswered: session.totalAnswered,
        accuracy: session.accuracy,
      }))

    return {
      version: STORAGE_VERSION,
      sessions,
      progress,
    }
  } catch {
    return createEmptyStorageState()
  }
}

export function saveStorageState(
  storage: StorageLike | undefined,
  state: AppStorageState,
) {
  if (!isStorageLike(storage)) {
    return
  }

  storage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function clearStorageState(storage: StorageLike | undefined) {
  if (!isStorageLike(storage)) {
    return
  }

  storage.removeItem(STORAGE_KEY)
}

export function recordQuestionAttempt(
  state: AppStorageState,
  questionId: string,
  wasCorrect: boolean,
  timestamp: number,
): AppStorageState {
  const current = state.progress[questionId]
  const progress = normalizeProgress(questionId, current)

  progress.seenCount += 1
  progress.lastSeenAt = timestamp

  if (!wasCorrect) {
    progress.missCount += 1
    progress.lastMissedAt = timestamp
  }

  return {
    ...state,
    progress: {
      ...state.progress,
      [questionId]: progress,
    },
  }
}

export function markQuestionLearned(
  state: AppStorageState,
  questionId: string,
  learned = true,
): AppStorageState {
  const current = state.progress[questionId]
  const progress = normalizeProgress(questionId, current)
  progress.learned = learned

  return {
    ...state,
    progress: {
      ...state.progress,
      [questionId]: progress,
    },
  }
}

export function resetLearnedQuestions(state: AppStorageState): AppStorageState {
  const progressEntries = Object.entries(state.progress).map(([questionId, progress]) => [
    questionId,
    {
      ...progress,
      learned: false,
    },
  ])

  return {
    ...state,
    progress: Object.fromEntries(progressEntries),
  }
}

export function appendSessionRecord(
  state: AppStorageState,
  session: SessionRecord,
): AppStorageState {
  return {
    ...state,
    sessions: [...state.sessions, session],
  }
}

export function pruneProgressForQuestions(
  state: AppStorageState,
  validQuestionIds: Iterable<string>,
): AppStorageState {
  const validIds = new Set(validQuestionIds)
  const entries = Object.entries(state.progress).filter(([questionId]) =>
    validIds.has(questionId),
  )

  if (entries.length === Object.keys(state.progress).length) {
    return state
  }

  return {
    ...state,
    progress: Object.fromEntries(entries),
  }
}

function normalizeProgress(
  questionId: string,
  value: Partial<QuestionProgress> | undefined,
): QuestionProgress {
  return {
    questionId,
    missCount: Number.isFinite(value?.missCount) ? Math.max(0, value?.missCount ?? 0) : 0,
    seenCount: Number.isFinite(value?.seenCount) ? Math.max(0, value?.seenCount ?? 0) : 0,
    learned: Boolean(value?.learned),
    lastMissedAt:
      typeof value?.lastMissedAt === 'number' ? value.lastMissedAt : null,
    lastSeenAt: typeof value?.lastSeenAt === 'number' ? value.lastSeenAt : null,
  }
}

function isValidSessionRecord(value: unknown): value is SessionRecord {
  if (!value || typeof value !== 'object') {
    return false
  }

  const candidate = value as SessionRecord
  return (
    Number.isFinite(candidate.startedAt) &&
    Number.isFinite(candidate.endedAt) &&
    Number.isFinite(candidate.bestStreak) &&
    Number.isFinite(candidate.totalAnswered) &&
    Number.isFinite(candidate.accuracy)
  )
}

function isStorageLike(storage: StorageLike | undefined): storage is StorageLike {
  return Boolean(
    storage &&
      typeof storage.getItem === 'function' &&
      typeof storage.setItem === 'function' &&
      typeof storage.removeItem === 'function',
  )
}
