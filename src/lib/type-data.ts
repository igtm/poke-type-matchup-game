import type { AttackType, MultiplierBucket } from './types.ts'

export const TYPE_LABELS: Record<AttackType, string> = {
  normal: 'ノーマル',
  fire: 'ほのお',
  water: 'みず',
  electric: 'でんき',
  grass: 'くさ',
  ice: 'こおり',
  fighting: 'かくとう',
  poison: 'どく',
  ground: 'じめん',
  flying: 'ひこう',
  psychic: 'エスパー',
  bug: 'むし',
  rock: 'いわ',
  ghost: 'ゴースト',
  dragon: 'ドラゴン',
  dark: 'あく',
  steel: 'はがね',
  fairy: 'フェアリー',
}

export const TYPE_COLORS: Record<AttackType, string> = {
  normal: '#9fa19f',
  fire: '#ff7f4d',
  water: '#5896ff',
  electric: '#f7c948',
  grass: '#5ec773',
  ice: '#7bd6e6',
  fighting: '#d65f74',
  poison: '#b168cc',
  ground: '#c89a47',
  flying: '#7f9cff',
  psychic: '#ff6c9c',
  bug: '#8eb84d',
  rock: '#b0a15c',
  ghost: '#6c72cf',
  dragon: '#5b6ef6',
  dark: '#5f5967',
  steel: '#6f9eb5',
  fairy: '#ec8ae5',
}

export const TYPE_GLOWS: Record<AttackType, string> = {
  normal: 'rgba(159, 161, 159, 0.28)',
  fire: 'rgba(255, 127, 77, 0.28)',
  water: 'rgba(88, 150, 255, 0.28)',
  electric: 'rgba(247, 201, 72, 0.28)',
  grass: 'rgba(94, 199, 115, 0.28)',
  ice: 'rgba(123, 214, 230, 0.28)',
  fighting: 'rgba(214, 95, 116, 0.28)',
  poison: 'rgba(177, 104, 204, 0.28)',
  ground: 'rgba(200, 154, 71, 0.28)',
  flying: 'rgba(127, 156, 255, 0.28)',
  psychic: 'rgba(255, 108, 156, 0.28)',
  bug: 'rgba(142, 184, 77, 0.28)',
  rock: 'rgba(176, 161, 92, 0.28)',
  ghost: 'rgba(108, 114, 207, 0.28)',
  dragon: 'rgba(91, 110, 246, 0.28)',
  dark: 'rgba(95, 89, 103, 0.28)',
  steel: 'rgba(111, 158, 181, 0.28)',
  fairy: 'rgba(236, 138, 229, 0.28)',
}

export const MULTIPLIER_VALUES: Record<MultiplierBucket, number> = {
  '4x': 4,
  '2x': 2,
  '1x': 1,
  '0.5x': 0.5,
  '0.25x': 0.25,
  '0x': 0,
}

export const NORMAL_BUCKET_WEIGHTS: Record<MultiplierBucket, number> = {
  '4x': 8,
  '2x': 5,
  '1x': 2,
  '0.5x': 5,
  '0.25x': 6,
  '0x': 7,
}

export const GENERATION_LABELS: Record<number, string> = {
  1: '第1世代',
  2: '第2世代',
  3: '第3世代',
  4: '第4世代',
  5: '第5世代',
  6: '第6世代',
  7: '第7世代',
  8: '第8世代',
  9: '第9世代',
}
