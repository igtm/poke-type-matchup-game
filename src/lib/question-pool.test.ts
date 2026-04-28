import { describe, expect, it } from 'vitest'
import { buildQuestionPool, gradeAnswer, indexReviewProgress, pickNextQuestion } from './question-pool.ts'
import { createSessionRng } from './rng.ts'
import type { AppStorageState, PokemonEntry } from './types.ts'

const SAMPLE_POKEMON: readonly PokemonEntry[] = [
  {
    id: 74,
    slug: 'geodude',
    speciesKey: 'geodude',
    nameJa: 'イシツブテ',
    nameEn: 'Geodude',
    imagePath: 'pokemon-icons/geodude.png',
    types: ['rock', 'ground'],
    baseStats: {
      hp: 40,
      attack: 80,
      defense: 100,
      specialAttack: 30,
      specialDefense: 30,
      speed: 20,
      total: 300,
    },
    generation: 1,
    debutTitle: 'ポケットモンスター 赤・緑',
    isDefault: true,
  },
  {
    id: 123,
    slug: 'scyther',
    speciesKey: 'scyther',
    nameJa: 'ストライク',
    nameEn: 'Scyther',
    imagePath: 'pokemon-icons/scyther.png',
    types: ['bug', 'flying'],
    baseStats: {
      hp: 70,
      attack: 110,
      defense: 80,
      specialAttack: 55,
      specialDefense: 80,
      speed: 105,
      total: 500,
    },
    generation: 1,
    debutTitle: 'ポケットモンスター 赤・緑',
    isDefault: true,
  },
] as const

function createState(progress = {}): AppStorageState {
  return {
    version: 1,
    sessions: [],
    progress,
  }
}

describe('buildQuestionPool', () => {
  it('excludes learned questions from every mode', () => {
    const state = createState({
      'geodude::water': {
        questionId: 'geodude::water',
        missCount: 1,
        seenCount: 1,
        learned: true,
        lastMissedAt: 100,
        lastSeenAt: 100,
      },
    })
    const pool = buildQuestionPool(SAMPLE_POKEMON, state.progress)

    expect(pool.all.some((question) => question.id === 'geodude::water')).toBe(true)
    expect(pool.review.some((question) => question.id === 'geodude::water')).toBe(false)
    expect(pool.buckets['4x'].some((question) => question.id === 'geodude::water')).toBe(false)
  })

  it('keeps only missed and unlearned questions in review mode', () => {
    const state = createState({
      'geodude::water': {
        questionId: 'geodude::water',
        missCount: 3,
        seenCount: 3,
        learned: false,
        lastMissedAt: 500,
        lastSeenAt: 500,
      },
      'scyther::rock': {
        questionId: 'scyther::rock',
        missCount: 0,
        seenCount: 2,
        learned: false,
        lastMissedAt: null,
        lastSeenAt: 450,
      },
    })
    const pool = buildQuestionPool(SAMPLE_POKEMON, state.progress)

    expect(pool.review.map((question) => question.id)).toEqual(['geodude::water'])
  })

  it('does not collapse normal selection into only 1x questions', () => {
    const pool = buildQuestionPool(SAMPLE_POKEMON, {})
    const rng = createSessionRng(1234)
    indexReviewProgress({})
    const seenBuckets = new Set<string>()

    for (let index = 0; index < 120; index += 1) {
      const question = pickNextQuestion(pool, rng, 'normal')
      if (question) {
        seenBuckets.add(question.bucket)
      }
    }

    expect(seenBuckets.has('1x')).toBe(true)
    expect(seenBuckets.has('4x')).toBe(true)
    expect(seenBuckets.size).toBeGreaterThan(2)
  })

  it('grades answers against the question bucket', () => {
    const pool = buildQuestionPool(SAMPLE_POKEMON, {})
    const question = pool.byId['geodude::water']
    expect(gradeAnswer(question, '4x').correct).toBe(true)
    expect(gradeAnswer(question, '2x').correct).toBe(false)
  })
})
