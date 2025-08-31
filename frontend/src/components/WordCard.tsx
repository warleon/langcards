'use client'

import { useRef } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { Audio, Image, Word } from '@/payload-types'

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
    <Card
      className="cursor-pointer hover:shadow-xl transition max-w-lg h-fit mx-auto"
      onClick={handlePlay}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold mx-auto">{word}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={(image as Image).url!} alt={word} className="rounded-xl object-cover " />
        <audio ref={audioPronRef} src={(audioPronunciation as Audio).url!} preload="auto" />
        {audioEffect && (
          <audio ref={audioEffectRef} src={(audioEffect as Audio).url!} preload="auto" />
        )}
      </CardContent>
    </Card>
  )
}
