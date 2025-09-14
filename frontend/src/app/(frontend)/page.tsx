import { getPayload, SanitizedLocalizationConfig } from 'payload'
import config from '@payload-config'
import { Hero } from '@/components/web/Hero'
import { explodeLocales } from '@/lib/utils'
import { getUserLocale } from '@/lib/userLocale'

export default async function HomePage() {
  const payload = await getPayload({ config })
  const intros = await payload.find({
    collection: 'intros',
    locale: 'all',
    limit: 1,
  })
  const localizationConfig = (await config).localization as SanitizedLocalizationConfig
  const locales = localizationConfig.locales
  const content = intros.docs.flatMap((d) => explodeLocales(d, locales))
  const userLocale = await getUserLocale(
    locales.map((l) => l.code),
    localizationConfig.defaultLocale,
  )
  const defaultLang = locales.find((l) => l.code === userLocale)?.label
  const languages = locales.map((l) => l.label as string)
  return (
    <Hero
      languages={languages}
      defaultLanguage={defaultLang as string}
      introContent={content}
    ></Hero>
  )
}
