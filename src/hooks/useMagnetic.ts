import { useEffect } from 'react'
import gsap from 'gsap'

type UseMagneticOptions = {
  strength?: number
}

/**
 * Magnetic hover: element subtly follows cursor within its bounds.
 */
export function useMagnetic(ref: React.RefObject<HTMLElement | null>, options?: UseMagneticOptions) {
  const strength = options?.strength ?? 0.25

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      const relX = (e.clientX - rect.left) / rect.width - 0.5
      const relY = (e.clientY - rect.top) / rect.height - 0.5

      gsap.to(el, {
        x: relX * rect.width * strength,
        y: relY * rect.height * strength,
        duration: 0.35,
        ease: 'power3.out',
      })
    }

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'power3.out' })
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)

    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [ref, strength])
}
