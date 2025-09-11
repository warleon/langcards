import React from 'react'
import { X } from 'lucide-react'

interface Props {
  id: string
  value: string
  onRemove?: (key: string, value: string) => void
  onClick?: (key: string, value: string) => void
}
export const Pill: React.FC<Props> = ({ id, value, onClick, onRemove }) => {
  return (
    <span
      className="flex items-center gap-1 bg-primary/10 text-sm px-2 py-1 rounded-full"
      onClick={onClick ? () => onClick(id, value) : undefined}
    >
      {value}
      {onRemove && (
        <button onClick={() => onRemove(id, value)} className="hover:text-destructive">
          <X className="w-3 h-3" />
        </button>
      )}
    </span>
  )
}
