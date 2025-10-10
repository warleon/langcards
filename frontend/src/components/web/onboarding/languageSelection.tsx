'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ActionButton } from '../actionButton'
import { Intro as IntroContent } from '@/payload-types'
import { useOnboarding } from '@/lib/redux/features/onboarding'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { TwoSided } from '@/components/utils/twoSided'
import FrontCard from './frontCard'
import BackCard from './backCard'

type Props = {
  classname?: string
  content: IntroContent
  next: () => void
  back: () => void
}

export const LanguageSelectionStep: React.FC<Props> = ({ classname, content, next, back }) => {
  const { onboarding, setLocale, setLanguages } = useOnboarding()

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
      <div className="flex gap-4 flex-wrap">
        {onboarding.locales
          .filter((lang) => lang !== onboarding.locale)
          .map((lang, i) => (
            <TwoSided
              key={i}
              front={<FrontCard title={lang.label as string}>{lang.code}</FrontCard>}
              back={<BackCard title={lang.label as string}>{lang.code}</BackCard>}
            />
          ))}
      </div>

      <div className="flex gap-8">
        <ActionButton
          onClick={(e) => {
            e.preventDefault()
            back()
          }}
        >
          <ArrowLeft className="mx-4"></ArrowLeft>
        </ActionButton>
        <ActionButton
          onClick={(e) => {
            e.preventDefault()
            next()
          }}
        >
          {content.buttonLabel}
          <ArrowRight></ArrowRight>
        </ActionButton>
      </div>
    </motion.div>
  )
}
