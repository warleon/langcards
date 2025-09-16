import { getPayload, SanitizedLocalizationConfig } from 'payload'
import config from '@payload-config'
import { Hero } from '@/components/web/Hero'
import { explodeLocales } from '@/lib/utils'

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
  return <Hero introContent={content}></Hero>
}
