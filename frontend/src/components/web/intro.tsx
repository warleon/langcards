'use client'
import { motion } from 'framer-motion'
import { Selector } from './selector'
import { cn } from '@/lib/utils'
import { ActionButton } from './actionButton'
import { Button } from '../ui/button'

interface Props {
  languages: string[]
  selected: string[]
  onChoose: (langs: string[]) => void
  classname?: string
}

export const Intro: React.FC<Props> = ({ languages, selected, classname, onChoose }) => {
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
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Unlock Your Potential Through Language
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Start your journey today — choose your first language and open the door to new
        opportunities.
      </p>

      <Selector
        classname="max-w-md w-full"
        onSelect={(o, r) => {
          onChoose([...r, o])
        }}
        onUnselect={(_, a) => {
          onChoose(a)
        }}
        heading="Supported Languages"
        notFound="Language not supported"
        options={languages}
        searchPlaceholder="Search Language"
        showPills={false}
      ></Selector>

      <ActionButton disabled={!selected.length}>Lets go!</ActionButton>
    </motion.div>
  )
}
