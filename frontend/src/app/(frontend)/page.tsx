import { getPayload, SanitizedLocalizationConfig } from 'payload'
import config from '@payload-config'
import { Hero } from '@/components/web/Hero'
import { explodeLocales } from '@/lib/utils'

export default async function HomePage() {
  const payload = await getPayload({ config })
  const intros = await payload.findGlobal({
    slug: 'intros',
    locale: 'all',
  })
  const localizationConfig = (await config).localization as SanitizedLocalizationConfig
  const locales = localizationConfig.locales
  const content = explodeLocales(intros, locales)
  return <Hero introContent={content}></Hero>
}
