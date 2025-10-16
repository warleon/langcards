import React, { useMemo } from 'react'
import TitledCard from '@/components/ui/titledCard'
import { useOnboarding } from '@/lib/redux/features/onboarding'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface SimpleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  selected?: string
}

export default function FrontCard({ title, selected, ...props }: SimpleCardProps) {
  return (
    <TitledCard title={title} {...props} className={selected && ' border-primary/30'}>
      <Card
        className={cn('hover:cursor-pointer hover:shadow-inner', selected && ' border-primary/80')}
      >
        {selected ?? '?'}
      </Card>
    </TitledCard>
  )
}
