export const ATTACK_TYPES = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
] as const

export const MULTIPLIER_BUCKETS = [
  '4x',
  '2x',
  '1x',
  '0.5x',
  '0.25x',
  '0x',
] as const

export type AttackType = (typeof ATTACK_TYPES)[number]
export type MultiplierBucket = (typeof MULTIPLIER_BUCKETS)[number]
export type GameMode = 'normal' | 'review'
export type SideTab = 'stats' | 'review'
export type MobileTab = 'play' | SideTab

export interface BaseStats {
  hp: number
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
  total: number
}

export interface PokemonEntry {
  id: number
  slug: string
  speciesKey: string
  nameJa: string
  nameEn: string
  imagePath: string
  types: readonly AttackType[]
  baseStats: BaseStats
  generation: number
  debutTitle: string
  isDefault: boolean
}

export interface Question {
  id: string
  pokemon: PokemonEntry
  attackType: AttackType
  multiplier: number
  bucket: MultiplierBucket
}

export interface QuestionProgress {
  questionId: string
  missCount: number
  seenCount: number
  learned: boolean
  lastMissedAt: number | null
  lastSeenAt: number | null
}

export interface SessionRecord {
  startedAt: number
  endedAt: number
  bestStreak: number
  totalAnswered: number
  accuracy: number
}

export interface AppStorageState {
  version: number
  sessions: SessionRecord[]
  progress: Record<string, QuestionProgress>
}

export interface QuestionPool {
  all: Question[]
  byId: Record<string, Question>
  buckets: Record<MultiplierBucket, Question[]>
  review: Question[]
}

export interface AttackTypePerformance {
  attackType: AttackType
  seenCount: number
  missCount: number
  accuracy: number
}

export interface RecentMiss {
  question: Question
  progress: QuestionProgress
}

export interface AnswerResult {
  correct: boolean
  correctAnswer: MultiplierBucket
  selectedAnswer: MultiplierBucket
}
