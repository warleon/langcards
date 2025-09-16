'use client'
import React, { useEffect, useMemo } from 'react'
import { IntroStep } from './onboarding/intro'
import { Globe } from './globe'
import { CODES_BY_LANG } from '@/lib/consts'
import { Intro as IntroContent } from '@/payload-types'
import { LocalizedDoc } from '@/lib/utils'
import { findContentByLocale } from '@/lib/utils'
import { useMultistepForm } from '@/hooks/useMultStepForm'
import { useOnboarding } from '@/lib/redux/features/onboarding'
import { LanguageSelectionStep } from './onboarding/languageSelection'

interface Props {
  introContent: LocalizedDoc<IntroContent>[]
}
export const Hero: React.FC<Props> = ({ introContent }) => {
  const { onboarding, setStep } = useOnboarding()
  const codes = useMemo(() => {
    switch (onboarding.step) {
      case 0:
        return [onboarding.locale].flatMap((l) => CODES_BY_LANG.get(l.label as string) ?? [])
      case 1:
        return onboarding.languages.flatMap((l) => CODES_BY_LANG.get(l.label as string) ?? [])
      default:
        return []
    }
  }, [onboarding.languages, onboarding.locale, onboarding.step])

  const { stage, next, back, step } = useMultistepForm(
    [
      <IntroStep
        key="intro"
        classname="px-4"
        content={findContentByLocale(
          introContent,
          onboarding.locale.label as string,
          onboarding.detectedLocale.label as string,
        )}
        next={() => {
          next()
        }}
      />,
      <LanguageSelectionStep
        key="intro"
        classname="px-4"
        content={findContentByLocale(
          introContent,
          onboarding.locale.label as string,
          onboarding.detectedLocale.label as string,
        )}
        next={() => {
          next()
        }}
        back={() => {
          back()
        }}
      />,
    ],
    onboarding.step,
  )
  useEffect(() => {
    setStep(step)
  }, [setStep, step])

  return (
    <section className="py-8 flex flex-wrap">
      {stage}
      <Globe
        key="globe"
        className="grow w-1/4 my-2 mx-auto"
        rotationSpeed={0.7}
        onSelect={() => {}}
        resumeRotationTime={2000}
        enabledCodes={codes}
        defaultAllEnabled={false}
      ></Globe>
    </section>
  )
}
