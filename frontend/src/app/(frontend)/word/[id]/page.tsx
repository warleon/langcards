import { getPayload } from 'payload'
import config from '@payload-config'
import { Word } from '@/payload-types'

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const payload = await getPayload({ config })

  const words = await payload.find({
    collection: 'words',
    pagination: false,
  })

  return words.docs.map((w) => ({
    id: w.id.toString(),
  }))
}

export default async function WordPage({ params }: { params: Promise<{ id: string }> }) {
  const payload = await getPayload({ config })

  const queryResult = await payload.find({
    collection: 'words',
    pagination: false,
    where: {
      id: {
        equals: (await params).id,
      },
    },
  })
  const word = queryResult.docs[0]
  return <div>{JSON.stringify(word)}</div>
}
