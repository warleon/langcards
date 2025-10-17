import React, { useMemo } from 'react'
import TitledCard from '@/components/ui/titledCard'
import { Card } from '@/components/ui/card'
import { LangLevel, useOnboarding } from '@/lib/redux/features/onboarding'
import { cn } from '@/lib/utils'

interface SimpleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
}
const LEVELS: LangLevel[] = ['beginner', 'intermediate', 'advanced', 'native']

export default function BackCard({ title, ...props }: SimpleCardProps) {
  const { onboarding, upsertLanguage, removeLanguage } = useOnboarding()
  const selected = useMemo(
    () => onboarding.languages.find((lang) => lang.label === title)?.level,
    [onboarding.languages, title],
  )
  return (
    <TitledCard
      title={title}
      {...props}
      className={cn(
        'text-muted-foreground',
        selected ? ' border-primary/80 text-primary/80' : 'border-foreground/80',
      )}
    >
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        {LEVELS.map((level) => (
          <Card
            key={level}
            className={cn(
              'hover:cursor-pointer hover:shadow-inner text-muted-foreground',
              selected === level ? ' border-primary/50 text-primary/50' : 'border-foreground/30',
            )}
            role="button"
            onClick={() => {
              if (selected === level) {
                removeLanguage(title)
              } else {
                upsertLanguage({ ...onboarding.locales.find((l) => l.label === title)!, level })
              }
            }}
          >
            {level}
          </Card>
        ))}
      </div>
    </TitledCard>
  )
}
