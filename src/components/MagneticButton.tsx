import { useRef } from 'react'
import { useMagnetic } from '../hooks/useMagnetic'

type MagneticButtonProps = {
  href: string
  children: React.ReactNode
  className?: string
}

export function MagneticButton({ href, children, className }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null)
  useMagnetic(ref, { strength: 0.18 })

  return (
    <a
      ref={ref}
      href={href}
      className={
        [
          'inline-flex items-center justify-center rounded-full border-2 border-white/90 bg-white/10 px-12 py-5',
          'text-[12px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-lg',
          'transition hover:bg-white hover:text-navy-950',
          className,
        ]
          .filter(Boolean)
          .join(' ')
      }
    >
      {children}
    </a>
  )
}
