import { GENERATION_LABELS, TYPE_COLORS, TYPE_GLOWS, TYPE_LABELS } from './type-data.ts'
import type { AttackType } from './types.ts'

const dateFormatter = new Intl.DateTimeFormat('ja-JP', {
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
})

export const STAT_LABELS = [
  ['hp', 'HP'],
  ['attack', 'こうげき'],
  ['defense', 'ぼうぎょ'],
  ['specialAttack', 'とくこう'],
  ['specialDefense', 'とくぼう'],
  ['speed', 'すばやさ'],
] as const

export function formatGeneration(generation: number) {
  return GENERATION_LABELS[generation] ?? `第${generation}世代`
}

export function formatDateTime(timestamp: number | null) {
  if (timestamp === null) {
    return '未記録'
  }

  return dateFormatter.format(timestamp)
}

export function formatRate(value: number) {
  return `${Math.round(value * 100)}%`
}

export function resolvePublicAssetPath(relativePath: string) {
  const normalized = relativePath.replace(/^\/+/, '')
  return `${import.meta.env.BASE_URL}${normalized}`
}

export function typeLabel(type: AttackType) {
  return TYPE_LABELS[type]
}

export function typeStyles(type: AttackType) {
  return {
    '--type-color': TYPE_COLORS[type],
    '--type-glow': TYPE_GLOWS[type],
  }
}
