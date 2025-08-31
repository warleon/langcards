import { getPayload } from 'payload'
import config from '@payload-config'
import { Word } from '@/payload-types'

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const payload = await getPayload({ config })

  const words = await payload.find({
    collection: 'words',
    pagination: false,
    depth: 1,
  })

  return words.docs
}

export default async function WordPage({ params }: { params: Promise<Word> }) {
  return <div>{JSON.stringify(await params)}</div>
}
