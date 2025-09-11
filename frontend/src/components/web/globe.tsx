'use client'
import React, { useState, useEffect, useRef, type CSSProperties, useCallback } from 'react'
import { timer } from 'd3'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { useDragX } from '@/hooks/useDragRotation'

interface Props {
  onSelect: (code: string, rest: string[]) => void
  enabledCodes?: string[]
  defaultAllEnabled?: boolean
  multiSelect?: boolean
  resumeRotationTime?: number
  rotationSpeed?: number
  style?: {
    enabled?: CSSProperties
    disabled?: CSSProperties
    selected?: CSSProperties
    hover?: CSSProperties
    pressed?: CSSProperties
  }
  className?: string
}

export const Globe: React.FC<Props> = ({
  onSelect,
  enabledCodes = [],
  defaultAllEnabled = true,
  multiSelect = false,
  style,
  resumeRotationTime,
  className,
  rotationSpeed = 0.2,
}) => {
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 23.5])
  const [selectedCountry, setSelectedCountry] = useState<string>()
  const [selectedCountries, setSelectedCountries] = useState<Set<string>>(new Set())
  const [autoRotate, setAutoRotate] = useState(true)
  const globeRef = useRef<HTMLElement>(null)
  const lastTimeout = useRef<NodeJS.Timeout>(null)
  const [_, setCount] = useState<number>(0)

  const stopRotation = useCallback(() => {
    setAutoRotate(false)
    if (lastTimeout.current) clearTimeout(lastTimeout.current)
    if (!resumeRotationTime) return
    lastTimeout.current = setTimeout(() => {
      setAutoRotate(true)
    }, resumeRotationTime)
  }, [resumeRotationTime])

  const isEnabled = useCallback(
    (code: string) => {
      if (enabledCodes.length && enabledCodes.includes(code)) {
        return true
      }
      if (!enabledCodes.length && defaultAllEnabled) {
        return true
      }
      return false
    },

    [defaultAllEnabled, enabledCodes],
  )
  const isSelected = useCallback(
    (code: string) => {
      if (!code) return
      if (multiSelect) {
        return selectedCountries.has(code)
      }
      return selectedCountry === code
    },
    [multiSelect, selectedCountries, selectedCountry],
  )
  const select = useCallback(
    (code: string) => {
      stopRotation()
      setCount((num) => num + 1)
      if (multiSelect) {
        onSelect(code, [...selectedCountries])
        setSelectedCountries((curr) => curr.add(code))
        return
      }
      setSelectedCountry(code)
      onSelect(code, [code])
    },
    [multiSelect, onSelect, selectedCountries, stopRotation],
  )
  const unselect = useCallback(
    (code: string) => {
      stopRotation()
      setCount((num) => num + 1)
      if (multiSelect) {
        setSelectedCountries((curr) => {
          curr.delete(code)
          return curr
        })
      }
      setSelectedCountry(undefined)
    },
    [multiSelect, stopRotation],
  )
  // Hook: Drag to rotate
  useDragX(globeRef, (deltaX) => {
    stopRotation()
    setRotation((prev) => [prev[0] + deltaX * rotationSpeed, prev[1], prev[2]])
  })

  // Auto-rotate effect
  useEffect(() => {
    if (!autoRotate) return
    const t = timer(() => {
      setRotation((prev) => [prev[0] + rotationSpeed, prev[1], prev[2]])
    })
    return () => t.stop()
  }, [autoRotate, rotationSpeed])

  return (
    <div className={className}>
      <ComposableMap
        //@ts-expect-error correct use of ref
        ref={globeRef}
        width={1000}
        height={1000}
        projection="geoOrthographic"
        projectionConfig={{
          rotate: rotation,
          scale: 500,
        }}
      >
        {/* <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"> */}
        <Geographies geography="/countries-110m.json">
          {({ geographies }) =>
            geographies.map((geo) =>
              isEnabled(geo.id) ? (
                isSelected(geo.id) ? (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => {
                      unselect(geo.id)
                    }}
                    style={{
                      default: style?.selected,
                      hover: style?.selected,
                      pressed: style?.selected,
                    }}
                  />
                ) : (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => {
                      select(geo.id)
                    }}
                    style={{
                      default: style?.enabled,
                      hover: style?.hover ?? style?.enabled,
                      pressed: style?.pressed ?? style?.enabled,
                    }}
                  />
                )
              ) : (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: style?.disabled,
                    hover: style?.disabled,
                    pressed: style?.disabled,
                  }}
                />
              ),
            )
          }
        </Geographies>
      </ComposableMap>
    </div>
  )
}
