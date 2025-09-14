import { getPayload, SanitizedLocalizationConfig } from 'payload'
import config from '@payload-config'
import { Hero } from '@/components/web/Hero'
import { explodeLocales } from '@/lib/utils'
import { getUserLocale } from '@/lib/useLocale'
import { Intro } from '@/payload-types'

export default async function HomePage() {
  const payload = await getPayload({ config })
  const intros = await payload.find({
    collection: 'intros',
    locale: 'all',
    limit: 1,
  })
  const localizationConfig = (await config).localization as SanitizedLocalizationConfig
  const locales = localizationConfig.locales
  const userLocale = await getUserLocale(
    locales.map((l) => l.code),
    localizationConfig.defaultLocale,
  )
  console.log('user locale:', userLocale)
  const content = intros.docs.flatMap((d) => explodeLocales(d, locales))
  console.log('Localized Content: ', content)
  const defaultLang = locales.find((l) => l.code === userLocale)?.label
  console.log('default language:', defaultLang)
  const languages = locales.map((l) => l.label as string)
  return (
    <Hero
      languages={languages}
      defaultLanguage={defaultLang as string}
      introContent={content}
    ></Hero>
  )
}
