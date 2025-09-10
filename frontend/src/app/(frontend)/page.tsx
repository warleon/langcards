'use client'
import { Globe } from '@/components/globe'
import { LANGS_BY_MAP_CODE } from '@/lib/consts'
import { useCallback } from 'react'

export default function HomePage() {
  const onSelect = useCallback<(code: string, all: string[]) => void>((code, all) => {
    const lang = LANGS_BY_MAP_CODE.get(code)
    console.log(all.length, lang)
  }, [])
  return (
    <main className="">
      <Globe
        className="w-1/3 ml-auto my-8 mr-8"
        rotationSpeed={0.5}
        onSelect={onSelect}
        resumeRotationTime={2000}
        style={{
          slected: {
            fill: '#4F46E5',
            stroke: '#999',
            strokeWidth: 0.5,
            outline: 'none',
            cursor: 'pointer',
          },
          disabled: {
            fill: '#DDD',
            stroke: '#999',
            strokeWidth: 0.5,
            outline: 'none',
          },
          enabled: {
            fill: '#DDD',
            stroke: '#999',
            strokeWidth: 0.5,
            outline: 'none',
          },
          hover: {
            fill: '#4F46E5',
            stroke: '#222',
            strokeWidth: 1,
            filter: 'drop-shadow(0px 0px 6px rgba(79, 70, 229, 0.7))',
            cursor: 'pointer',
            outline: 'none',
          },
          pressed: {
            fill: '#4338CA',
            stroke: '#111',
            filter: 'drop-shadow(0px 0px 8px rgba(79, 70, 229, 1))',
            outline: 'none',
          },
        }}
      ></Globe>
    </main>
  )
}
