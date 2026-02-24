import { GsapHoverImage } from '../components/GsapHoverImage'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IMAGES } from '../content/images'


export function About() {
  const clusterRef = useRef<HTMLDivElement | null>(null)
  const bottomARef = useRef<HTMLDivElement | null>(null)
  const bottomBRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const cluster = clusterRef.current
    const a = bottomARef.current
    const b = bottomBRef.current
    if (!cluster || !a || !b) return

    const ctx = gsap.context(() => {
      gsap.to(a, {
        y: -18,
        ease: 'none',
        scrollTrigger: {
          trigger: cluster,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to(b, {
        y: -34,
        ease: 'none',
        scrollTrigger: {
          trigger: cluster,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-white">
      {/* Editorial Mosaic */}
      <section className="mx-auto max-w-7xl px-12 py-24">
        <div className="grid items-stretch gap-12 lg:grid-cols-[45%_55%]">
          {/* Text */}
          <div className="flex">
            <div className="flex w-full flex-col items-start justify-center text-left">
              <h1 className="font-serif text-5xl leading-[1.05] text-[#001B3D] md:text-6xl">
                A legacy of purity since 2011.
              </h1>
              <p className="mt-10 max-w-[52ch] text-lg leading-relaxed text-[#001B3D]">
                Keshav Water Industries engineers water-treatment systems for healthcare and high-duty industrial
                environments—built around <span className="font-serif italic">stainless discipline</span>,
                serviceability, and compliance-first documentation.
              </p>
              <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-[#001B3D]">
                Our goal is simple: stable output, predictable maintenance, and a fit & finish that feels quiet
                and controlled.
              </p>
            </div>
          </div>

          {/* Image cluster */}
          <div ref={clusterRef} className="relative">
            {/* Anchor wash card */}
            <div className="pointer-events-none absolute -inset-6 rounded-[100px] bg-[#F0F9FF] rotate-[-2deg]" />

            <div className="relative grid gap-6 rounded-[100px] p-6">
              {/* Top large */}
              <GsapHoverImage
                src={IMAGES.about.topWide}
                alt="Cinematic industrial water plant"
                className="aspect-video w-full rounded-[60px]"
              />

              {/* Bottom two */}
              <div className="grid grid-cols-2 gap-6">
                <div ref={bottomARef}>
                  <GsapHoverImage
                    src={IMAGES.about.bottomLeft}
                    alt="Dialysis mixing tanks and control panels"
                    className="aspect-square w-full rounded-[40px]"
                  />
                </div>
                <div ref={bottomBRef}>
                  <GsapHoverImage
                    src={IMAGES.about.bottomRight}
                    alt="RO membrane system"
                    className="aspect-square w-full rounded-[40px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="kwi-sep" />

      {/* Machine Documentation */}
      <section className="mx-auto max-w-7xl px-12 py-24">
        <div className="text-center">
          <h2 className="kwi-h2 mx-auto max-w-4xl leading-tight text-[#001B3D]">Our solutions, documented.</h2>
          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-[#001B3D]">
            Clear process logic, efficient operations, and compliance-ready builds—engineered to perform over long
            runtimes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[60px] border border-blue-100 bg-white p-10 shadow-[0_18px_60px_rgba(0,27,61,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#001B3D]">STP</p>
            <h3 className="mt-4 font-serif text-2xl text-[#001B3D]">Sewage Treatment Plants</h3>
            <ul className="mt-6 grid gap-3 text-[15px] leading-relaxed text-[#001B3D]">
              <li>Environment-friendly systems, customized to suit site conditions.</li>
              <li>Low operating & maintenance cost, low power consumption, minimum footprint area.</li>
              <li>Consistent supply of treated water with minimum use of chemicals.</li>
            </ul>
          </div>

          <div className="rounded-[60px] border border-blue-100 bg-white p-10 shadow-[0_18px_60px_rgba(0,27,61,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#001B3D]">ETP</p>
            <h3 className="mt-4 font-serif text-2xl text-[#001B3D]">Effluent Treatment Plants</h3>
            <ul className="mt-6 grid gap-3 text-[15px] leading-relaxed text-[#001B3D]">
              <li>One-stop sourcing for all WTP components and plant needs.</li>
              <li>
                Components: high-pressure pumps, membrane housings, multi-port valves, dosing pumps, and resin
                vessels.
              </li>
              <li>Built to ISO 9001:2008 standards for industrial wastewater discharge.</li>
            </ul>
          </div>

          <div className="rounded-[60px] border border-blue-100 bg-white p-10 shadow-[0_18px_60px_rgba(0,27,61,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#001B3D]">DIALYSIS RO</p>
            <h3 className="mt-4 font-serif text-2xl text-[#001B3D]">Dialysis RO Systems</h3>
            <ul className="mt-6 grid gap-3 text-[15px] leading-relaxed text-[#001B3D]">
              <li>
                Medical-grade precision using <span className="font-serif italic">SS 316L</span> materials.
              </li>
              <li>
                Integrated mixing tanks for Acid and Bi-carb mixtures with automated control panels.
              </li>
              <li>Stable output logic engineered for critical healthcare workflows.</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-[60px] border border-blue-100 bg-[#F0F9FF] p-10 text-left shadow-[0_18px_60px_rgba(0,27,61,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#001B3D]">Registrations</p>
          <div className="mt-5 grid gap-2 text-lg text-[#001B3D]">
            <p>
              <span className="font-semibold">GSTIN</span> 07ATHPK7730P1Z3
            </p>
            <p>
              <span className="font-semibold">Udyam</span> UDYAM-DL-08-0031761
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
