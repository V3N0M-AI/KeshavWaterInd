import { useEffect, type ReactNode } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type LenisProviderProps = {
  children: ReactNode
}

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      duration: 1.65,
      wheelMultiplier: 0.75,
      touchMultiplier: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
    })

    // Apply Lenis classnames to <html> so CSS fixes + smooth scrolling are consistent.
    document.documentElement.classList.add('lenis')

    // Make Lenis available for route-level scroll-to-top fixes.
    ;(window as unknown as { __lenis?: Lenis }).__lenis = lenis

    // Keep ScrollTrigger in sync with Lenis
    lenis.on('scroll', ScrollTrigger.update)

    // Use GSAP ticker for a single, consistent RAF source.
    gsap.ticker.lagSmoothing(0)
    const tick = (time: number) => {
      // GSAP supplies time in seconds; Lenis expects ms.
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tick)

    // Ensure triggers calculate after Lenis starts.
    requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      document.documentElement.classList.remove('lenis')
      ;(window as unknown as { __lenis?: Lenis }).__lenis = undefined
    }
  }, [])

  return <>{children}</>
}
