import { For } from 'solid-js'
import type { MultiplierBucket } from '../lib/types.ts'

interface AnswerGridProps {
  disabled: boolean
  selected: MultiplierBucket | null
  correctAnswer: MultiplierBucket | null
  onSelect: (value: MultiplierBucket) => void
}

const ANSWER_ORDER: readonly MultiplierBucket[] = [
  '4x',
  '2x',
  '1x',
  '0.5x',
  '0.25x',
  '0x',
]

export function AnswerGrid(props: AnswerGridProps) {
  return (
    <div class="answer-grid">
      <For each={ANSWER_ORDER}>
        {(answer) => {
          const isSelected = () => props.selected === answer
          const isCorrect = () => props.correctAnswer === answer

          return (
            <button
              type="button"
              class="answer-button"
              data-selected={isSelected()}
              data-correct={isCorrect()}
              disabled={props.disabled}
              onClick={() => props.onSelect(answer)}
            >
              <span class="answer-button__label">{answer}</span>
              <span class="answer-button__subcopy">倍率</span>
            </button>
          )
        }}
      </For>
    </div>
  )
}
