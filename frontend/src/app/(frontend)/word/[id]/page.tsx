import { getPayload } from 'payload'
import config from '@payload-config'
import { Sentence } from '@/payload-types'
import { WordCard } from '@/components/web/WordCard'
import { SentenceCard } from '@/components/web/SentencesCard'
import { redirect, RedirectType } from 'next/navigation'

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

  const wordQuery = await payload.find({
    collection: 'words',
    pagination: false,
    where: {
      id: {
        equals: (await params).id,
      },
      approved: {
        equals: true,
      },
      image: {
        exists: true,
      },
      audioPronunciation: {
        exists: true,
      },
    },
  })
  const word = wordQuery.docs[0]

  if (!word) {
    redirect('/', RedirectType.replace)
  }

  const sentencesQuery = await payload.find({
    collection: 'sentences',
    pagination: false,
    where: {
      word: {
        equals: word.id,
      },
    },
  })

  const sentences = sentencesQuery.docs

  return (
    <div>
      <div className="h-[80vh] flex flex-col">
        <div className="grow"></div>
        <WordCard {...word}></WordCard>
        <div className="grow"></div>
      </div>
      <div className="flex flex-col gap-8 mb-16">
        {sentences &&
          sentences.map((s) => (
            <div key={(s as Sentence).id}>
              <SentenceCard {...(s as Sentence)}></SentenceCard>
            </div>
          ))}
      </div>
    </div>
  )
}
