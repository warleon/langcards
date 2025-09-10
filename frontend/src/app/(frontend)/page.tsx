'use client'
import { Globe } from '@/components/globe'
import { LANGS_BY_MAP_CODE } from '@/lib/consts'
import { useCallback } from 'react'

export default function HomePage() {
  const onSelect = useCallback<(code: string) => void>((code) => {
    const lang = LANGS_BY_MAP_CODE.get(code)
    console.log(lang)
  }, [])
  return <Globe onSelect={onSelect}></Globe>
}
