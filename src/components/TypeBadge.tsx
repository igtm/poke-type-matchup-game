import { typeLabel, typeStyles } from '../lib/format.ts'
import type { AttackType } from '../lib/types.ts'

interface TypeBadgeProps {
  type: AttackType
  compact?: boolean
}

export function TypeBadge(props: TypeBadgeProps) {
  return (
    <span
      classList={{
        'type-badge': true,
        'type-badge--compact': Boolean(props.compact),
      }}
      style={typeStyles(props.type)}
    >
      {typeLabel(props.type)}
    </span>
  )
}
