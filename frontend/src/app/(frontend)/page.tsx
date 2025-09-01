import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import { SentenceCard } from '@/components/SentencesCard'
import { WordCard } from '@/components/WordCard'
import { Word } from '@/payload-types'
import { GetStaticPaths, GetStaticProps } from 'next'

//export default async function HomePage() {
//const headers = await getHeaders()
//const payloadConfig = await config
//const payload = await getPayload({ config: payloadConfig })
//const { user } = await payload.auth({ headers })

//const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

//return <div className="container bg-red-500"> hola</div>
//}

// ----------- Example Page -------------
export default async function WordPage() {
  const payload = await getPayload({ config })

  const words = (
    await payload.find({
      collection: 'words',
      pagination: false,
      depth: 0,
      where: {
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
  ).docs

  return (
    <div className="space-y-8 p-6">
      <div>There are {words.length} available words</div>
      <ul>
        {words.map((w) => (
          <li key={w.id}>
            <a href={`/word/${w.id}`}>{w.word}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
