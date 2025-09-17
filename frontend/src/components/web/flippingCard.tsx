import { cn } from '@/lib/utils'
import React, { HTMLProps, useState } from 'react'
interface Props extends HTMLProps<'div'> {
  front: React.ReactNode
  back: React.ReactNode
  onFlip?: () => void
}
export const TwoSided: React.FC<Props> = ({ back, front, className, onFlip }) => {
  const [flipped, setFlipped] = useState<boolean>(false)
  return (
    <div
      className={cn(
        'relative w-full transition-transform duration-500 transform-3d',
        flipped && 'rotate-y-180',
        className,
      )}
      onClick={(e) => {
        e.preventDefault()
        if (onFlip) onFlip()
        setFlipped((f) => !f)
      }}
    >
      <div className="grid invisible">
        <div className="col-start-1 row-start-1">{front}</div>
        <div className="col-start-1 row-start-1">{back}</div>
      </div>
      <div className="absolute inset-0 backface-hidden">{front}</div>
      <div className="absolute inset-0 backface-hidden rotate-y-180">{back}</div>
    </div>
  )
}
