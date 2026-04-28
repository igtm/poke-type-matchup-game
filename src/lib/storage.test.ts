import { describe, expect, it } from 'vitest'
import {
  appendSessionRecord,
  createEmptyStorageState,
  loadStorageState,
  markQuestionLearned,
  pruneProgressForQuestions,
  recordQuestionAttempt,
  resetLearnedQuestions,
  saveStorageState,
} from './storage.ts'

describe('storage helpers', () => {
  it('safely resets when JSON is broken', () => {
    window.localStorage.setItem('poke-type-matchup-game:v1', '{broken')
    expect(loadStorageState(window.localStorage)).toEqual(createEmptyStorageState())
  })

  it('records misses, saves failed runs, and survives reload', () => {
    let state = createEmptyStorageState()
    state = recordQuestionAttempt(state, 'geodude::water', false, 100)
    state = appendSessionRecord(state, {
      startedAt: 50,
      endedAt: 100,
      bestStreak: 2,
      totalAnswered: 3,
      accuracy: 2 / 3,
    })

    saveStorageState(window.localStorage, state)
    const restored = loadStorageState(window.localStorage)

    expect(restored.sessions).toHaveLength(1)
    expect(restored.sessions[0]?.bestStreak).toBe(2)
    expect(restored.progress['geodude::water']?.missCount).toBe(1)
    expect(restored.progress['geodude::water']?.lastMissedAt).toBe(100)
  })

  it('can reset learned flags without discarding mistake history', () => {
    let state = createEmptyStorageState()
    state = markQuestionLearned(state, 'geodude::water', true)
    state = recordQuestionAttempt(state, 'geodude::water', false, 200)
    state = resetLearnedQuestions(state)

    expect(state.progress['geodude::water']?.learned).toBe(false)
    expect(state.progress['geodude::water']?.missCount).toBe(1)
  })

  it('prunes orphaned progress when question IDs disappear', () => {
    let state = createEmptyStorageState()
    state = markQuestionLearned(state, 'old-question', true)
    state = recordQuestionAttempt(state, 'old-question', false, 300)
    state = recordQuestionAttempt(state, 'new-question', true, 400)

    const pruned = pruneProgressForQuestions(state, ['new-question'])

    expect(Object.keys(pruned.progress)).toEqual(['new-question'])
  })
})
