'use client'

import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { useRef } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { Audio, Image, Word } from '@/payload-types'

// ----------- WordCard -------------

export function WordCard({ word, audioPronunciation, image, audioEffect }: Word) {
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
    <Card className="cursor-pointer hover:shadow-xl transition" onClick={handlePlay}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{word}</CardTitle>
      </CardHeader>
      <CardContent>
        <AspectRatio ratio={16 / 9}>
          <img src={(image as Image).url!} alt={word} className="rounded-xl object-cover" />
        </AspectRatio>
        <audio ref={audioPronRef} src={(audioPronunciation as Audio).url!} preload="auto" />
        {audioEffect && (
          <audio ref={audioEffectRef} src={(audioEffect as Audio).url!} preload="auto" />
        )}
      </CardContent>
    </Card>
  )
}
