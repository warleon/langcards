import { getPayload } from 'payload'
import config from '@payload-config'
import { Hero } from '@/components/web/Hero'

export default async function HomePage() {
  const payload = await getPayload({ config })
  const languages = await payload.findGlobal({
    slug: 'supported_languages',
  })
  return <Hero languages={languages.languages.map((l) => l.language)}></Hero>
}
