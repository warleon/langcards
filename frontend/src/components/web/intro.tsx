'use client'
import { motion } from 'framer-motion'
import { Selector } from './selector'
import { cn } from '@/lib/utils'
import { ActionButton } from './actionButton'
import { Intro as IntroContent } from '@/payload-types'

type Props = {
  languages: string[]
  selected: string[]
  classname?: string
  onChoose: (values: string[]) => void
  content: IntroContent
  defaultLanguage: string
}

export const Intro: React.FC<Props> = ({
  languages,
  selected,
  defaultLanguage,
  classname,
  onChoose,
  content,
}) => {
  return (
    <motion.div
      className={cn(
        'flex flex-col items-center gap-8 max-w-2xl mx-auto text-center space-y-6',
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
        onSelect={(o, r) => {
          onChoose([...r, o])
        }}
        onUnselect={(_, a) => {
          onChoose(a)
        }}
        heading={content.selectorHeading}
        notFound={content.selectorNotFound}
        options={languages}
        searchPlaceholder={content.selectorSearchPlaceholder}
        showPills={false}
        defaultSelection={defaultLanguage}
      />

      <ActionButton disabled={!selected.length}>{content.buttonLabel}</ActionButton>
    </motion.div>
  )
}
