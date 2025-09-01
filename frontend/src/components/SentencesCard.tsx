'use client'

import { useEffect, useRef } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { Audio, Image, Sentence } from '@/payload-types'
import { SpecialText } from './ui/SpecialText'
import NextImage from 'next/image'

export function SentenceCard({ sentence, audioPronunciation, image }: Sentence) {
  const audioPronRef = useRef<HTMLAudioElement>(null)

  const handlePlay = async () => {
    if (audioPronRef.current) {
      await audioPronRef.current.play()
    }
  }

  return (
    <Card
      className="cursor-pointer hover:shadow-md transition max-w-4xl h-fit mx-auto"
      onClick={handlePlay}
    >
      <CardHeader>
        <CardTitle className="text-lg font-medium mx-auto">
          <SpecialText text={sentence}></SpecialText>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <NextImage
          width={1024}
          height={1024}
          src={(image as Image).url!}
          alt={sentence}
          className="rounded-lg object-cover"
        />
        <audio ref={audioPronRef} src={(audioPronunciation as Audio).url!} preload="auto" />
      </CardContent>
    </Card>
  )
}
