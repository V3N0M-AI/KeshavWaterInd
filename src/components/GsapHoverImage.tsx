import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

type GsapHoverImageProps = {
  src: string
  alt: string
  className?: string
}

export function GsapHoverImage({ src, alt, className }: GsapHoverImageProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const img = el.querySelector<HTMLElement>('img')
    if (!img) return

    const ctx = gsap.context(() => {
      const enter = () => {
        gsap.to(el, { rotate: 2, scale: 1.03, duration: 0.45, ease: 'power3.out' })
        gsap.to(img, { filter: 'brightness(1.1)', duration: 0.45, ease: 'power3.out' })
        gsap.to(el, { boxShadow: '0 30px 90px rgba(0, 27, 61, 0.20)', duration: 0.45, ease: 'power3.out' })
      }
      const leave = () => {
        gsap.to(el, { rotate: 0, scale: 1, duration: 0.6, ease: 'power3.out' })
        gsap.to(img, { filter: 'brightness(1)', duration: 0.6, ease: 'power3.out' })
        gsap.to(el, { boxShadow: '0 18px 60px rgba(0, 27, 61, 0.10)', duration: 0.6, ease: 'power3.out' })
      }

      el.addEventListener('pointerenter', enter)
      el.addEventListener('pointerleave', leave)

      return () => {
        el.removeEventListener('pointerenter', enter)
        el.removeEventListener('pointerleave', leave)
      }
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={ref}
      className={
        [
          'will-change-transform overflow-hidden rounded-[80px] bg-white',
          'shadow-[0_18px_60px_rgba(0,27,61,0.10)]',
          className,
        ]
          .filter(Boolean)
          .join(' ')
      }
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  )
}
