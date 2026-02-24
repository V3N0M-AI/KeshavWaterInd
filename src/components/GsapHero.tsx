import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

type GsapHeroProps = {
  children: React.ReactNode
}

export function GsapHero({ children }: GsapHeroProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const el = rootRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      const chars = el.querySelectorAll<HTMLElement>('[data-char]')
      gsap.set(chars, { y: 50, opacity: 0 })
      gsap.to(chars, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.018,
        delay: 0.15,
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return <div ref={rootRef}>{children}</div>
}
