import { fireEvent, render, screen, waitFor } from '@solidjs/testing-library'
import { describe, expect, it, vi } from 'vitest'
import { getMultiplier, toMultiplierBucket } from './lib/matchup.ts'
import { TYPE_LABELS } from './lib/type-data.ts'
import { loadStorageState } from './lib/storage.ts'
import type { AttackType } from './lib/types.ts'

vi.mock('./data/pokemon.ts', () => ({
  POKEMON_ENTRIES: [
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
  ],
  POKEMON_DATA_GENERATED_AT: '2026-04-27T00:00:00.000Z',
}))

import App from './App.tsx'

const LABEL_TO_TYPE = Object.fromEntries(
  Object.entries(TYPE_LABELS).map(([type, label]) => [label, type]),
) as Record<string, AttackType>

function currentAttackType(container: HTMLElement) {
  const badge = container.querySelector('.question-card__prompt .type-badge')
  expect(badge).not.toBeNull()
  const label = badge?.textContent ?? ''
  return LABEL_TO_TYPE[label]
}

describe('App', () => {
  it('shows answer feedback and persists failed runs', async () => {
    vi.useFakeTimers()
    const { container } = render(() => <App />)

    expect(screen.getByRole('heading', { name: 'イシツブテ' })).toBeInTheDocument()
    const attackType = currentAttackType(container)
    const correct = toMultiplierBucket(getMultiplier(attackType, ['rock', 'ground']))
    const wrong = correct === '4x' ? '2x' : '4x'

    fireEvent.click(screen.getByRole('button', { name: new RegExp(`^${wrong}`) }))
    expect(screen.getByText(/不正解/)).toBeInTheDocument()

    const stored = loadStorageState(window.localStorage)
    expect(stored.sessions).toHaveLength(1)
    expect(stored.progress[`geodude::${attackType}`]?.missCount).toBe(1)

    vi.advanceTimersByTime(800)
    await waitFor(() => {
      expect(screen.queryByText(/不正解/)).not.toBeInTheDocument()
    })
  })

  it('marks a question as learned and keeps it out of the pool', async () => {
    const { container } = render(() => <App />)

    const attackType = currentAttackType(container)
    fireEvent.click(screen.getByRole('button', { name: '覚えた' }))

    await waitFor(() => {
      const stored = loadStorageState(window.localStorage)
      expect(stored.progress[`geodude::${attackType}`]?.learned).toBe(true)
    })
  })

  it('cancels stale auto-advance when a learned action happens during feedback', async () => {
    vi.useFakeTimers()
    const { container } = render(() => <App />)

    const firstAttack = currentAttackType(container)
    const correct = toMultiplierBucket(getMultiplier(firstAttack, ['rock', 'ground']))
    fireEvent.click(screen.getByRole('button', { name: new RegExp(`^${correct}`) }))
    expect(screen.getByText('正解。次の問題へ進みます。')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: '覚えた' }))
    const attackAfterLearn = currentAttackType(container)

    vi.advanceTimersByTime(800)
    await waitFor(() => {
      expect(currentAttackType(container)).toBe(attackAfterLearn)
    })
  })

  it('shows weaker attack types first in stats when they have more misses', () => {
    window.localStorage.setItem(
      'poke-type-matchup-game:v1',
      JSON.stringify({
        version: 1,
        sessions: [],
        progress: {
          'geodude::water': {
            questionId: 'geodude::water',
            missCount: 3,
            seenCount: 4,
            learned: false,
            lastMissedAt: 300,
            lastSeenAt: 300,
          },
          'geodude::grass': {
            questionId: 'geodude::grass',
            missCount: 1,
            seenCount: 2,
            learned: false,
            lastMissedAt: 200,
            lastSeenAt: 200,
          },
        },
      }),
    )

    const { container } = render(() => <App />)
    const rows = [...container.querySelectorAll('.type-performance-row strong')].map(
      (node) => node.textContent,
    )

    expect(rows[0]).toBe('みず')
    expect(rows[1]).toBe('くさ')
  })
})
