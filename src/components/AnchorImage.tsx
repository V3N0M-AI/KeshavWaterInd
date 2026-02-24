import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type AnchorImageProps = {
  src: string
  alt: string
  className?: string
  /** Anchor background palette class, e.g. bg-[#22D3EE] or bg-sky-500 */
  anchorClassName?: string
  /** Flips the anchor offset direction */
  flip?: boolean
}

/**
 * Minimalist “Anchor Card Physics”:
 * - Big rounded card behind image (offset + color)
 * - GSAP ScrollTrigger: card slides in, image scales 0.8→1
 */
export function AnchorImage({ src, alt, className, anchorClassName, flip }: AnchorImageProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const el = rootRef.current
    if (!el) return

    const card = el.querySelector<HTMLElement>('[data-anchor-card]')
    const imgWrap = el.querySelector<HTMLElement>('[data-anchor-image]')

    if (!card || !imgWrap) return

    const ctx = gsap.context(() => {
      gsap.set(card, { x: flip ? 80 : -80, opacity: 0 })
      gsap.set(imgWrap, { scale: 0.8, opacity: 0 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 78%',
        },
      })

      tl.to(card, { x: 0, opacity: 1, duration: 0.75, ease: 'power3.out' })
        .to(imgWrap, { scale: 1, opacity: 1, duration: 0.9, ease: 'power3.out' }, '-=0.45')
    }, el)

    return () => ctx.revert()
  }, [flip])

  return (
    <div ref={rootRef} className={['relative', className].filter(Boolean).join(' ')}>
      <div
        data-anchor-card
        className={[
          'pointer-events-none absolute inset-0 hidden rounded-[100px] lg:block',
          'rotate-[-2deg]',
          flip ? 'translate-x-10 translate-y-10' : '-translate-x-10 translate-y-10',
          anchorClassName ?? 'bg-[#22D3EE]',
        ].join(' ')}
      />

      <div data-anchor-image className="relative z-10 overflow-hidden rounded-[80px] bg-white shadow-2xl">
        <div className="aspect-[4/5] w-full overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover transition-transform duration-700 will-change-transform hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent" />
      </div>
    </div>
  )
}
