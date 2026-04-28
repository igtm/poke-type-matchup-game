import { For } from 'solid-js'
import { formatDateTime } from '../lib/format.ts'
import { TypeBadge } from './TypeBadge.tsx'
import type { RecentMiss } from '../lib/types.ts'

interface ReviewPanelProps {
  reviewCount: number
  recentMisses: readonly RecentMiss[]
  onSwitchMode: (mode: 'review') => void
}

export function ReviewPanel(props: ReviewPanelProps) {
  return (
    <div class="panel-stack">
      <section class="panel-section panel-section--accent">
        <div class="section-heading">
          <div>
            <p class="eyebrow">復習キュー</p>
            <h2>{props.reviewCount} 問が待機中</h2>
          </div>
          <button
            type="button"
            class="accent-button"
            disabled={props.reviewCount === 0}
            onClick={() => props.onSwitchMode('review')}
          >
            復習を始める
          </button>
        </div>
        <p class="panel-note">
          過去に誤答したうち、まだ「覚えた」にしていない問題だけを再出題します。
        </p>
      </section>

      <section class="panel-section">
        <div class="section-heading">
          <div>
            <p class="eyebrow">最近の誤答</p>
            <h2>直近の見直し候補</h2>
          </div>
        </div>

        <div class="review-list">
          <For each={props.recentMisses}>
            {(entry) => (
              <div class="review-row">
                <div class="review-row__head">
                  <div>
                    <strong>{entry.question.pokemon.nameJa}</strong>
                    <p>
                      {entry.question.pokemon.nameEn} / {entry.question.pokemon.slug}
                    </p>
                  </div>
                  <TypeBadge type={entry.question.attackType} compact />
                </div>
                <div class="review-row__meta">
                  <span>正解: {entry.question.bucket}</span>
                  <span>ミス {entry.progress.missCount}</span>
                  <span>{formatDateTime(entry.progress.lastMissedAt)}</span>
                </div>
              </div>
            )}
          </For>
          <ShowFallback when={props.recentMisses.length === 0}>
            まだ誤答履歴がありません。
          </ShowFallback>
        </div>
      </section>
    </div>
  )
}

function ShowFallback(props: { when: boolean; children: string }) {
  return props.when ? <p class="panel-note">{props.children}</p> : null
}
