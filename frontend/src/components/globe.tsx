'use client'
import React, { useState, useEffect, useRef } from 'react'
import { timer } from 'd3'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import { useDragRotation } from '@/hooks/useDragRotation'
import axios from 'axios'

export const Globe: React.FC = () => {
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 23.5])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [autoRotate, setAutoRotate] = useState(true)
  const globeRef = useRef<HTMLElement>(null)
  // Hook: Drag to rotate
  useDragRotation(globeRef, (deltaX) => {
    setAutoRotate(false)
    setRotation((prev) => [prev[0] + deltaX * 0.2, prev[1], prev[2]])
  })

  // Auto-rotate effect
  useEffect(() => {
    if (!autoRotate) return
    const t = timer(() => {
      setRotation((prev) => [prev[0] + 0.2, prev[1], prev[2]])
    })
    return () => t.stop()
  }, [autoRotate])

  return (
    <ComposableMap
      //@ts-expect-error correct use of ref
      ref={globeRef}
      width={800}
      height={200}
      projection="geoOrthographic"
      projectionConfig={{
        rotate: rotation,
        scale: 100,
      }}
    >
      <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onClick={() => {
                console.log('DEBUG geo:', geo)
                setSelectedCountry(geo.id)
              }}
              style={{
                default: {
                  fill: selectedCountry === geo.id ? '#4F46E5' : '#DDD',
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
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}
