'use client'

import { useEffect, useRef } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { Audio, Image, Word } from '@/payload-types'
import NextImage from 'next/image'

export function WordCard({ word, audioPronunciation, image }: Word) {
  const audioPronRef = useRef<HTMLAudioElement>(null)

  const handlePlay = async () => {
    if (audioPronRef.current) {
      await audioPronRef.current.play()
    }
  }

  useEffect(() => {
    handlePlay()
  }, [])

  return (
    <Card
      className="cursor-pointer hover:shadow-xl transition max-w-lg h-fit mx-auto"
      onClick={handlePlay}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold mx-auto">{word}</CardTitle>
      </CardHeader>
      <CardContent>
        <NextImage
          width={1024}
          height={1024}
          src={(image as Image).url!}
          alt={word}
          className="rounded-xl object-cover "
        />
        <audio ref={audioPronRef} src={(audioPronunciation as Audio).url!} preload="auto" />
      </CardContent>
    </Card>
  )
}
