import { useEffect, useRef } from 'react'

export function useDragRotation(
  ref: React.RefObject<HTMLElement | null>,
  onDrag: (deltaX: number) => void,
) {
  const startX = useRef<number | null>(null)

  useEffect(() => {
    const element = ref?.current
    if (!element) return

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

    element.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      element.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [ref, onDrag])
}
