import { useEffect, useRef } from 'react'

export function useDragX(
  ref: React.RefObject<HTMLElement | null>,
  onDrag: (deltaX: number) => void,
) {
  const startX = useRef<number | null>(null)

  useEffect(() => {
    const element = ref?.current
    if (!element) return

    // --- Mouse handlers ---
    const handleMouseDown = (e: MouseEvent) => {
      startX.current = e.clientX
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (startX.current !== null) {
        const deltaX = e.clientX - startX.current
        startX.current = e.clientX
        onDrag(deltaX)
      }
    }

    const handleMouseUp = () => {
      startX.current = null
    }

    // --- Touch handlers ---
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        startX.current = e.touches[0].clientX
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (startX.current !== null && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - startX.current
        startX.current = e.touches[0].clientX
        onDrag(deltaX)
      }
    }

    const handleTouchEnd = () => {
      startX.current = null
    }

    // --- Attach listeners ---
    element.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    element.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchend', handleTouchEnd)

    return () => {
      element.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)

      element.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [ref, onDrag])
}
