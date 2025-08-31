'use client'

import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { useRef } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'

// ----------- WordCard -------------
type WordCardProps = {
  word: string
  imageUrl: string
  audioPronunciationUrl: string
  audioEffectUrl?: string
}

export function WordCard({ word, imageUrl, audioPronunciationUrl, audioEffectUrl }: WordCardProps) {
  const audioPronRef = useRef<HTMLAudioElement>(null)
  const audioEffectRef = useRef<HTMLAudioElement>(null)

  const handlePlay = async () => {
    if (audioPronRef.current) {
      await audioPronRef.current.play()
      audioPronRef.current.onended = () => {
        if (audioEffectUrl && audioEffectRef.current) {
          audioEffectRef.current.play()
        }
      }
    }
  }

  return (
    <Card className="cursor-pointer hover:shadow-xl transition" onClick={handlePlay}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{word}</CardTitle>
      </CardHeader>
      <CardContent>
        <AspectRatio ratio={16 / 9}>
          <img src={imageUrl} alt={word} className="rounded-xl object-cover" />
        </AspectRatio>
        <audio ref={audioPronRef} src={audioPronunciationUrl} preload="auto" />
        {audioEffectUrl && <audio ref={audioEffectRef} src={audioEffectUrl} preload="auto" />}
      </CardContent>
    </Card>
  )
}
