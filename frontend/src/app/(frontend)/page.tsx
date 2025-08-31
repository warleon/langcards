import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import { SentenceCard } from '@/components/SentencesCard'
import { WordCard } from '@/components/WordCard'

//export default async function HomePage() {
//const headers = await getHeaders()
//const payloadConfig = await config
//const payload = await getPayload({ config: payloadConfig })
//const { user } = await payload.auth({ headers })

//const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

//return <div className="container bg-red-500"> hola</div>
//}

// ----------- Example Page -------------
export default function WordPage() {
  // Simulated Payload CMS data
  const word = {
    word: 'Dog',
    imageUrl: '/dog.jpg',
    audioPronunciationUrl: '/dog-pron.mp3',
    audioEffectUrl: '/dog-bark.mp3',
  }

  const sentences = [
    {
      sentence: 'The dog runs fast.',
      imageUrl: '/dog-run.jpg',
      audioPronunciationUrl: '/dog-run-pron.mp3',
    },
    {
      sentence: 'I have a dog.',
      imageUrl: '/dog-owner.jpg',
      audioPronunciationUrl: '/dog-owner-pron.mp3',
      audioEffectUrl: '/dog-happy.mp3',
    },
  ]

  return (
    <div className="space-y-8 p-6">
      <WordCard {...word} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sentences.map((s, i) => (
          <SentenceCard key={i} {...s} />
        ))}
      </div>
    </div>
  )
}
