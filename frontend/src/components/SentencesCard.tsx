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
    <Card className="cursor-pointer hover:shadow-md transition" onClick={handlePlay}>
      <CardHeader>
        <CardTitle className="text-lg font-medium">{sentence}</CardTitle>
      </CardHeader>
      <CardContent>
        <AspectRatio ratio={16 / 9}>
          <img src={(image as Image).url!} alt={sentence} className="rounded-lg object-cover" />
        </AspectRatio>
        <audio ref={audioPronRef} src={(audioPronunciation as Audio).url!} preload="auto" />
        {audioEffect && (
          <audio ref={audioEffectRef} src={(audioEffect as Audio).url!} preload="auto" />
        )}
      </CardContent>
    </Card>
  )
}
