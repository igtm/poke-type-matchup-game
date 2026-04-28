import { For } from 'solid-js'
import { formatGeneration, resolvePublicAssetPath, STAT_LABELS } from '../lib/format.ts'
import { TypeBadge } from './TypeBadge.tsx'
import type { AttackType, PokemonEntry } from '../lib/types.ts'

interface PokemonCardProps {
  pokemon: PokemonEntry
  attackType: AttackType
  feedbackStatus: 'idle' | 'correct' | 'wrong'
}

export function PokemonCard(props: PokemonCardProps) {
  const stats = () => [
    ['hp', props.pokemon.baseStats.hp],
    ['attack', props.pokemon.baseStats.attack],
    ['defense', props.pokemon.baseStats.defense],
    ['specialAttack', props.pokemon.baseStats.specialAttack],
    ['specialDefense', props.pokemon.baseStats.specialDefense],
    ['speed', props.pokemon.baseStats.speed],
  ] as const

  return (
    <section class="question-card" data-feedback={props.feedbackStatus}>
      <header class="question-card__header">
        <div>
          <p class="eyebrow">対象ポケモン</p>
          <h1>{props.pokemon.nameJa}</h1>
          <p class="question-card__slug">
            {props.pokemon.nameEn} / {props.pokemon.slug}
          </p>
        </div>
        <div class="question-card__series">
          <span>{formatGeneration(props.pokemon.generation)}</span>
          <span>{props.pokemon.debutTitle}</span>
        </div>
      </header>

      <div class="question-card__body">
        <div class="question-card__figure">
          <div class="sprite-frame">
            <img
              src={resolvePublicAssetPath(props.pokemon.imagePath)}
              alt={props.pokemon.nameJa}
              loading="eager"
              width="128"
              height="128"
            />
          </div>
          <div class="type-row">
            <For each={props.pokemon.types}>{(type) => <TypeBadge type={type} />}</For>
          </div>
          <div class="question-card__prompt">
            <p class="eyebrow">この攻撃タイプの倍率は？</p>
            <TypeBadge type={props.attackType} />
          </div>
        </div>

        <div class="question-card__meta">
          <div class="meta-grid">
            <div>
              <span class="meta-label">種族値合計</span>
              <strong>{props.pokemon.baseStats.total}</strong>
            </div>
            <div>
              <span class="meta-label">フォーム</span>
              <strong>{props.pokemon.isDefault ? '通常' : '派生'}</strong>
            </div>
            <div>
              <span class="meta-label">出題 ID</span>
              <strong>{props.pokemon.id}</strong>
            </div>
          </div>

          <div class="stat-list">
            <For each={stats()}>
              {(entry) => {
                const label =
                  STAT_LABELS.find(([key]) => key === entry[0])?.[1] ?? entry[0]
                const width = `${Math.min(100, (entry[1] / 255) * 100)}%`

                return (
                  <div class="stat-row">
                    <span>{label}</span>
                    <strong>{entry[1]}</strong>
                    <div class="stat-bar">
                      <div class="stat-bar__fill" style={{ width }} />
                    </div>
                  </div>
                )
              }}
            </For>
          </div>
        </div>
      </div>
    </section>
  )
}
