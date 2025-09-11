import { useEffect } from 'react'

export function useOutsideClick(
  ref: React.RefObject<HTMLElement | null>,
  onOutsideClick: () => void,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick()
      }
    }

    // Bind both desktop and mobile events
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [ref, onOutsideClick])
}
