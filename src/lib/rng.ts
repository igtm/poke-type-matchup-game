export class MersenneTwister {
  private static readonly N = 624
  private static readonly M = 397
  private static readonly MATRIX_A = 0x9908b0df
  private static readonly UPPER_MASK = 0x80000000
  private static readonly LOWER_MASK = 0x7fffffff

  private readonly state = new Uint32Array(MersenneTwister.N)
  private index = MersenneTwister.N

  constructor(seed: number) {
    this.seed(seed)
  }

  seed(seed: number) {
    this.state[0] = seed >>> 0

    for (let i = 1; i < MersenneTwister.N; i += 1) {
      const previous = this.state[i - 1] ?? 0
      this.state[i] = (
        Math.imul(1812433253, previous ^ (previous >>> 30)) + i
      ) >>> 0
    }

    this.index = MersenneTwister.N
  }

  nextInt32(): number {
    if (this.index >= MersenneTwister.N) {
      this.twist()
    }

    let value = this.state[this.index] ?? 0
    this.index += 1

    value ^= value >>> 11
    value ^= (value << 7) & 0x9d2c5680
    value ^= (value << 15) & 0xefc60000
    value ^= value >>> 18

    return value >>> 0
  }

  nextFloat(): number {
    return this.nextInt32() / 0x100000000
  }

  nextIndex(maxExclusive: number): number {
    if (maxExclusive <= 0) {
      return 0
    }

    return Math.floor(this.nextFloat() * maxExclusive)
  }

  private twist() {
    for (let i = 0; i < MersenneTwister.N; i += 1) {
      const next = (i + 1) % MersenneTwister.N
      const offset = (i + MersenneTwister.M) % MersenneTwister.N
      const bits =
        ((this.state[i] ?? 0) & MersenneTwister.UPPER_MASK) |
        ((this.state[next] ?? 0) & MersenneTwister.LOWER_MASK)
      let value = (this.state[offset] ?? 0) ^ (bits >>> 1)

      if ((bits & 1) !== 0) {
        value ^= MersenneTwister.MATRIX_A
      }

      this.state[i] = value >>> 0
    }

    this.index = 0
  }
}

export function createSessionRng(seed = Date.now() >>> 0) {
  return new MersenneTwister(seed)
}

export function pickWeightedIndex(weights: readonly number[], rng: MersenneTwister) {
  const total = weights.reduce((sum, weight) => sum + Math.max(0, weight), 0)

  if (total <= 0) {
    return -1
  }

  let threshold = rng.nextFloat() * total

  for (let index = 0; index < weights.length; index += 1) {
    threshold -= Math.max(0, weights[index] ?? 0)

    if (threshold <= 0) {
      return index
    }
  }

  return weights.length - 1
}
