import React from 'react'
import TitledCard from '@/components/ui/titledCard'
import { Card } from '@/components/ui/card'
import { LangLevel } from '@/lib/redux/features/onboarding'

interface SimpleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
}
const LEVELS: LangLevel[] = ['beginner', 'intermediate', 'advanced', 'native']

export default function BackCard({ title, ...props }: SimpleCardProps) {
  return (
    <TitledCard title={title} {...props}>
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        {LEVELS.map((level) => (
          <Card
            key={level}
            className="hover:cursor-pointer hover:shadow-inner"
            role="button"
            onClick={() => {}}
          >
            {level}
          </Card>
        ))}
      </div>
    </TitledCard>
  )
}
