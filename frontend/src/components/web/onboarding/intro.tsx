'use client'
import { motion } from 'framer-motion'
import { Selector } from '../selector'
import { cn } from '@/lib/utils'
import { ActionButton } from '../actionButton'
import { Intro as IntroContent } from '@/payload-types'
import { useOnboarding } from '@/lib/redux/features/onboarding'
import { useMemo } from 'react'
import { ArrowRight } from 'lucide-react'

type Props = {
  classname?: string
  content: IntroContent
  next: () => void
}

export const IntroStep: React.FC<Props> = ({ classname, content, next }) => {
  const { onboarding, setLocale } = useOnboarding()
  const languages = useMemo(
    () => onboarding.locales.map((l) => l.label as string),
    [onboarding.locales],
  )

  return (
    <motion.div
      className={cn(
        'flex flex-col items-center gap-8 max-w-2xl mx-auto text-center space-y-6 mb-2',
        classname,
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{content.title}</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{content.subtitle}</p>

      <Selector
        classname="max-w-md w-full"
        onSelect={(o, _) => {
          const locale = onboarding.locales.find((l) => l.label === o) ?? onboarding.locale
          setLocale(locale)
        }}
        heading={content.selectorHeading}
        notFound={content.selectorNotFound}
        options={languages}
        searchPlaceholder={content.selectorSearchPlaceholder}
        showPills={false}
        defaultSelection={onboarding.locale.label as string}
        canBeEmpty={false}
      />

      <ActionButton
        onClick={(e) => {
          e.preventDefault()
          next()
        }}
      >
        {content.buttonLabel}
        <ArrowRight></ArrowRight>
      </ActionButton>
    </motion.div>
  )
}
