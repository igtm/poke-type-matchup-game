import { ATTACK_TYPES } from './types.ts'
import type {
  AppStorageState,
  AttackTypePerformance,
  Question,
  RecentMiss,
  SessionRecord,
} from './types.ts'

export function rankSessions(sessions: readonly SessionRecord[]) {
  return [...sessions].sort((left, right) => {
    if (right.bestStreak !== left.bestStreak) {
      return right.bestStreak - left.bestStreak
    }

    return right.endedAt - left.endedAt
  })
}

export function buildAttackTypePerformance(
  questionsById: Record<string, Question>,
  progressState: AppStorageState['progress'],
): AttackTypePerformance[] {
  return ATTACK_TYPES.map((attackType) => {
    const related = Object.values(progressState).filter(
      (progress) => questionsById[progress.questionId]?.attackType === attackType,
    )
    const seenCount = related.reduce((sum, progress) => sum + progress.seenCount, 0)
    const missCount = related.reduce((sum, progress) => sum + progress.missCount, 0)
    const correctCount = Math.max(0, seenCount - missCount)

    return {
      attackType,
      seenCount,
      missCount,
      accuracy: seenCount === 0 ? 1 : correctCount / seenCount,
    }
  }).sort((left, right) => {
    if (right.missCount !== left.missCount) {
      return right.missCount - left.missCount
    }

    return left.accuracy - right.accuracy
  })
}

export function buildRecentMisses(
  questionsById: Record<string, Question>,
  progressState: AppStorageState['progress'],
  limit = 8,
): RecentMiss[] {
  return Object.values(progressState)
    .filter((progress) => progress.lastMissedAt !== null)
    .sort((left, right) => (right.lastMissedAt ?? 0) - (left.lastMissedAt ?? 0))
    .map((progress) => {
      const question = questionsById[progress.questionId]
      return question ? { question, progress } : null
    })
    .filter((value): value is RecentMiss => value !== null)
    .slice(0, limit)
}

export function countLearnedQuestions(progressState: AppStorageState['progress']) {
  return Object.values(progressState).filter((progress) => progress.learned).length
}
