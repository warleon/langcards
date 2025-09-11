'use client'
import React from 'react'
import { Intro } from './intro'
import { Globe } from './globe'

interface Props {
  languages: string[]
}
export const Hero: React.FC<Props> = ({ languages }) => {
  return (
    <section className="py-8 flex flex-wrap">
      <Intro classname="px-4" languages={languages}></Intro>
      <Globe
        className="grow w-1/4 my-8 mx-auto"
        rotationSpeed={0.5}
        onSelect={() => {}}
        resumeRotationTime={2000}
        style={{
          selected: {
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
    </section>
  )
}
