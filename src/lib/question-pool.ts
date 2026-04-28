import { getMultiplier, toMultiplierBucket } from './matchup.ts'
import { pickWeightedIndex, type MersenneTwister } from './rng.ts'
import { NORMAL_BUCKET_WEIGHTS } from './type-data.ts'
import { ATTACK_TYPES, MULTIPLIER_BUCKETS } from './types.ts'
import type {
  AnswerResult,
  AppStorageState,
  GameMode,
  MultiplierBucket,
  PokemonEntry,
  Question,
  QuestionPool,
} from './types.ts'

export function buildQuestionPool(
  pokemonEntries: readonly PokemonEntry[],
  progressState: AppStorageState['progress'],
): QuestionPool {
  const pool: QuestionPool = {
    all: [],
    byId: {},
    buckets: {
      '4x': [],
      '2x': [],
      '1x': [],
      '0.5x': [],
      '0.25x': [],
      '0x': [],
    },
    review: [],
  }

  for (const pokemon of pokemonEntries) {
    for (const attackType of ATTACK_TYPES) {
      const multiplier = getMultiplier(attackType, pokemon.types)
      const bucket = toMultiplierBucket(multiplier)
      const question: Question = {
        id: `${pokemon.slug}::${attackType}`,
        pokemon,
        attackType,
        multiplier,
        bucket,
      }
      const progress = progressState[question.id]

      pool.all.push(question)
      pool.byId[question.id] = question

      if (progress?.learned) {
        continue
      }

      pool.buckets[bucket].push(question)

      if ((progress?.missCount ?? 0) > 0) {
        pool.review.push(question)
      }
    }
  }

  return pool
}

export function pickNextQuestion(
  pool: QuestionPool,
  rng: MersenneTwister,
  mode: GameMode,
): Question | null {
  if (mode === 'review') {
    if (pool.review.length === 0) {
      return null
    }

    const orderedByFreshness = [...pool.review]
      .map((question) => ({
        question,
        lastMissedAt: poolProgressValue(question.id, 'lastMissedAt'),
        missCount: poolProgressValue(question.id, 'missCount'),
      }))
      .sort((left, right) => right.lastMissedAt - left.lastMissedAt)

    const freshnessRank = new Map<string, number>()
    orderedByFreshness.forEach((entry, index) => {
      freshnessRank.set(entry.question.id, orderedByFreshness.length - index)
    })

    const weights = pool.review.map((question) => {
      const missCount = poolProgressValue(question.id, 'missCount')
      return missCount * 12 + (freshnessRank.get(question.id) ?? 1)
    })

    const selected = pickWeightedIndex(weights, rng)
    return pool.review[selected] ?? pool.review[0] ?? null
  }

  const availableBuckets = MULTIPLIER_BUCKETS.filter(
    (bucket) => pool.buckets[bucket].length > 0,
  )

  if (availableBuckets.length === 0) {
    return null
  }

  const bucketWeights = availableBuckets.map((bucket) => NORMAL_BUCKET_WEIGHTS[bucket])
  const selectedBucketIndex = pickWeightedIndex(bucketWeights, rng)
  const bucket = availableBuckets[selectedBucketIndex] ?? availableBuckets[0]
  const questions = bucket ? pool.buckets[bucket] : []

  if (questions.length === 0) {
    return null
  }

  return questions[rng.nextIndex(questions.length)] ?? questions[0] ?? null
}

export function gradeAnswer(
  question: Question,
  answerBucket: MultiplierBucket,
): AnswerResult {
  return {
    correct: question.bucket === answerBucket,
    correctAnswer: question.bucket,
    selectedAnswer: answerBucket,
  }
}

const reviewProgress = new Map<
  string,
  { missCount: number; lastMissedAt: number }
>()

export function indexReviewProgress(progressState: AppStorageState['progress']) {
  reviewProgress.clear()

  for (const progress of Object.values(progressState)) {
    reviewProgress.set(progress.questionId, {
      missCount: progress.missCount,
      lastMissedAt: progress.lastMissedAt ?? 0,
    })
  }
}

function poolProgressValue(
  questionId: string,
  key: 'missCount' | 'lastMissedAt',
): number {
  const value = reviewProgress.get(questionId)

  if (!value) {
    return 0
  }

  return value[key]
}
