import { describe, expect, it } from 'vitest'
import { getMultiplier, toMultiplierBucket } from './matchup.ts'

describe('getMultiplier', () => {
  it('handles single-type effectiveness and immunity', () => {
    expect(getMultiplier('fire', ['grass'])).toBe(2)
    expect(getMultiplier('fire', ['water'])).toBe(0.5)
    expect(getMultiplier('normal', ['ghost'])).toBe(0)
  })

  it('handles dual-type 4x and 0.25x matchups', () => {
    expect(getMultiplier('water', ['rock', 'ground'])).toBe(4)
    expect(getMultiplier('grass', ['fire', 'flying'])).toBe(0.25)
  })

  it('keeps immunity at 0 even with another weakness', () => {
    expect(getMultiplier('ground', ['electric', 'flying'])).toBe(0)
    expect(toMultiplierBucket(getMultiplier('ground', ['electric', 'flying']))).toBe('0x')
  })
})
