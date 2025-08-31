'use client'

import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { useRef } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { Audio, Image, Sentence } from '@/payload-types'

export function SentenceCard({
  sentence,
  audioPronunciation,
  conjugation,
  image,
  audioEffect,
}: Sentence) {
  const audioPronRef = useRef<HTMLAudioElement>(null)
  const audioEffectRef = useRef<HTMLAudioElement>(null)

  const handlePlay = async () => {
    if (audioPronRef.current) {
      await audioPronRef.current.play()
      audioPronRef.current.onended = () => {
        if (audioEffect && audioEffectRef.current) {
          audioEffectRef.current.play()
        }
      }
    }
  }

  return (
    <Card
      className="cursor-pointer hover:shadow-md transition max-w-4xl h-fit mx-auto"
      onClick={handlePlay}
    >
      <CardHeader>
        <CardTitle className="text-lg font-medium mx-auto">{sentence}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={(image as Image).url!} alt={sentence} className="rounded-lg object-cover" />
        <audio ref={audioPronRef} src={(audioPronunciation as Audio).url!} preload="auto" />
        {audioEffect && (
          <audio ref={audioEffectRef} src={(audioEffect as Audio).url!} preload="auto" />
        )}
      </CardContent>
    </Card>
  )
}
