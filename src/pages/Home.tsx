import { motion, useScroll, useTransform } from 'framer-motion'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GsapHero } from '../components/GsapHero'
import { GsapSplitText } from '../components/GsapSplitText'
import { MagneticButton } from '../components/MagneticButton'
import { IMAGES } from '../content/images'

export function Home() {
  const heroRef = useRef<HTMLElement | null>(null)
  const introRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18])
  const imgRadius = useTransform(scrollYProgress, [0, 1], ['60px', '24px'])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const el = introRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      const lines = el.querySelectorAll<HTMLElement>('[data-line]')
      gsap.set(lines, { y: 18, opacity: 0 })
      gsap.to(lines, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: el,
          start: 'top 78%',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          {/* Cinematic hero image + 20% dark tint */}
          <img
            src={IMAGES.home.hero}
            alt="High-end industrial water treatment plant"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/20" />
          {/* Blue-tinted dark gradient so white serif pops (liquid luxury) */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-navy-950/80" />
        </div>

        <div className="kwi-container relative py-28 md:py-44">
          <GsapHero>
            <div className="text-center">
              <div className="mx-auto w-fit rounded-full border border-white/30 bg-white/10 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-lg">
                MEDICAL • INDUSTRIAL • COMPLIANCE
              </div>

              <GsapSplitText
                as="h1"
                className="kwi-h1 mx-auto mt-10 max-w-4xl leading-tight [text-wrap:balance] text-white"
                text="Liquid purity, engineered for critical systems."
              />

              <div className="mx-auto mt-10 max-w-4xl text-white/90">
                <p data-line className="text-lg leading-relaxed">
                  Dialysis RO plants. Industrial RO.
                </p>
                <p data-line className="mt-3 text-lg leading-relaxed">
                  ETP / STP systems built for performance, compliance, and long service life.
                </p>
              </div>

              <div className="mt-14 flex flex-wrap justify-center gap-4">
                <MagneticButton href="/products">Explore Solutions</MagneticButton>
                <MagneticButton href="/clients">View Partners</MagneticButton>
              </div>
            </div>
          </GsapHero>

          {/* Expanding pill image */}
          <div className="mt-16 md:mt-24">
            <motion.div
              style={{ scale: imgScale, borderRadius: imgRadius }}
              className="relative mx-auto aspect-[16/7] w-full max-w-[1040px] overflow-hidden border border-white/30 bg-white/10 backdrop-blur-md"
            >
              {/* Feature image + tint */}
              <img
                src={IMAGES.home.feature}
                alt="Stainless water treatment equipment"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-navy-950/15 to-navy-950/60" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <p className="text-[12px] uppercase tracking-[0.2em] text-white/80">CLEAN-ROOM AESTHETIC</p>
                <p className="mt-3 max-w-[56ch] font-serif text-[22px] md:text-[26px] tracking-[-0.02em] text-white">
                  Stainless systems, simplified interfaces—built to feel quiet and precise.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Placeholder for next sections */}
      <div className="kwi-sep" />
      <section ref={introRef} className="kwi-container py-40">
        <div className="text-center">
          <h2 className="kwi-h2 mx-auto max-w-4xl leading-tight">Engineered for trust.</h2>
          <p data-line className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed">
            Premium fit & finish, minimal interfaces, and robust internal geometry—built for environments that
            demand absolute control.
          </p>
        </div>
      </section>
    </div>
  )
}
