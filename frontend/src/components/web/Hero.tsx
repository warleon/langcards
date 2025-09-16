'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { Intro } from './intro'
import { Globe } from './globe'
import { CODES_BY_LANG } from '@/lib/consts'
import { Intro as IntroContent } from '@/payload-types'
import { LocalizedDoc } from '@/lib/utils'
import { findContentByLocale } from '@/lib/utils'
import { useMultistepForm } from '@/hooks/useMultStepForm'
import { useOnboarding } from '@/lib/redux/features/onboarding'

interface Props {
  languages: string[]
  introContent: LocalizedDoc<IntroContent>[]
}
const BASE: React.CSSProperties = {
  fill: 'var(--muted-foreground)',
  stroke: 'var(--muted)',
  strokeWidth: 0.5,
  outline: 'none',
}

const GLOW: React.CSSProperties = {
  fill: 'var(--primary)',
  stroke: 'var(--muted)',
  strokeWidth: 1,
  filter: 'drop-shadow(0 4px 6px var(--primary))',
  outline: 'none',
}
export const Hero: React.FC<Props> = ({ languages, introContent }) => {
  const { onboarding, setLocale } = useOnboarding()

  const [langs, setLangs] = useState<string[]>([onboarding.detectedLocale.label as string])
  const codes = useMemo(() => {
    return langs.flatMap((l) => CODES_BY_LANG.get(l) ?? [])
  }, [langs])
  const { step, next } = useMultistepForm([
    <Intro
      key="intro"
      defaultLanguage={onboarding.locale.label as string}
      classname="px-4"
      languages={languages}
      selected={langs}
      onChoose={setLangs}
      content={findContentByLocale(
        introContent,
        onboarding.locale.label as string,
        onboarding.detectedLocale.label as string,
      )}
      onButtonClick={() => {
        console.log('button clicked')
        next()
      }}
    ></Intro>,
  ])

  return (
    <section className="py-8 flex flex-wrap">
      {step}
      <Globe
        key="globe"
        className="grow w-1/4 my-2 mx-auto"
        rotationSpeed={1}
        onSelect={() => {}}
        resumeRotationTime={2000}
        enabledCodes={codes}
        defaultAllEnabled={false}
        style={{
          selected: GLOW,
          disabled: BASE,
          enabled: GLOW,
          hover: GLOW,
          pressed: GLOW,
        }}
      ></Globe>
    </section>
  )
}
