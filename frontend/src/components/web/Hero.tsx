'use client'
import React, { useMemo, useState } from 'react'
import { Intro } from './intro'
import { Globe } from './globe'
import { CODES_BY_LANG } from '@/lib/consts'
import { Intro as IntroContent } from '@/payload-types'
import { LocalizedDoc } from '@/lib/utils'
import { findContentByLocale } from '@/lib/utils'

interface Props {
  languages: string[]
  defaultLanguage: string
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
export const Hero: React.FC<Props> = ({ languages, defaultLanguage, introContent }) => {
  const [langs, setLangs] = useState<string[]>([defaultLanguage])
  const codes = useMemo(() => {
    return langs.flatMap((l) => CODES_BY_LANG.get(l) ?? [])
  }, [langs])

  return (
    <section className="py-8 flex flex-wrap">
      <Intro
        defaultLanguage={defaultLanguage}
        classname="px-4"
        languages={languages}
        selected={langs}
        onChoose={setLangs}
        content={findContentByLocale(introContent, langs[0], defaultLanguage)}
      ></Intro>
      <Globe
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
