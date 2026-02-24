import { AnchorImage } from '../components/AnchorImage'
import { GsapHoverImage } from '../components/GsapHoverImage'

import aboutWide from '../assets/WhatsApp Image 2026-02-24 at 10.17.22 AM.jpeg'
import a1 from '../assets/WhatsApp Image 2026-02-24 at 10.17.19 AM (2).jpeg'
import a2 from '../assets/WhatsApp Image 2026-02-24 at 10.17.23 AM (2).jpeg'
import a3 from '../assets/WhatsApp Image 2026-02-24 at 10.17.24 AM (2).jpeg'

export function About() {
  return (
    <div>
      {/* Variation A: stacked editorial */}
      <section className="kwi-container-wide py-40">
        <div className="flex flex-col items-start justify-center text-left md:items-center md:text-center">
          <h1 className="kwi-h1 max-w-4xl leading-tight">A legacy of purity since 2011.</h1>
          <p className="mt-10 max-w-4xl text-lg leading-[1.6] text-navy-950">
            Keshav Water Industries builds water-treatment systems where failure is not an option—healthcare,
            manufacturing, utilities, and high-duty industrial lines.
          </p>
          <p className="mt-6 max-w-4xl text-lg leading-[1.6] text-navy-950">
            We design with <span className="font-serif italic">stainless discipline</span>, predictable
            maintenance, and clean-room thinking—so the system feels quiet, controlled, and dependable.
          </p>
        </div>

        <div className="mt-16">
          <GsapHoverImage
            src={aboutWide}
            alt="High-end water treatment plant"
            className="aspect-[16/7] w-full"
          />
        </div>
      </section>

      <div className="kwi-sep" />

      {/* Variation B: staggered multi-image grid + anchored hero image */}
      <section className="kwi-container-wide py-40">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center text-left md:items-center md:text-center lg:items-start lg:text-left">
            <h2 className="kwi-h2 max-w-4xl leading-tight">What we build.</h2>
            <p className="mt-8 max-w-4xl text-lg leading-[1.6] text-navy-950">
              Our work is centered on three verticals—each engineered for uptime, compliance, and
              <span className="font-serif italic"> medical-grade output</span>.
            </p>
            <p className="mt-6 max-w-4xl text-lg leading-[1.6] text-navy-950">
              From small facilities to large duty cycles, we design the internal geometry to be maintainable,
              serviceable, and stable over long runtimes.
            </p>
          </div>

          <div className="relative min-h-[420px]">
            <div className="absolute left-0 top-0 w-[72%]">
              <GsapHoverImage src={a1} alt="Treatment equipment" className="aspect-[4/5]" />
            </div>
            <div className="absolute right-0 top-16 w-[62%]">
              <GsapHoverImage src={a2} alt="Stainless assembly" className="aspect-[4/5]" />
            </div>
            <div className="absolute left-[18%] bottom-0 w-[64%]">
              <GsapHoverImage src={a3} alt="RO plant details" className="aspect-[4/5]" />
            </div>
          </div>
        </div>

        <div className="mt-24 grid items-center gap-14 lg:grid-cols-2">
          <AnchorImage src={a2} alt="Compliance-ready machinery" anchorClassName="bg-[#0EA5E9]" />

          <div className="flex flex-col items-start justify-center text-left md:items-center md:text-center lg:items-start lg:text-left">
            <h2 className="kwi-h2 max-w-4xl leading-tight">Compliance + documentation.</h2>
            <p className="mt-8 max-w-4xl text-lg leading-[1.6] text-navy-950">
              We keep compliance visible and documentation clean—because the best systems feel quiet, controlled,
              and easy to maintain.
            </p>

            <div className="mt-10 w-full max-w-4xl rounded-[60px] border border-blue-100 bg-white p-10 text-left shadow-[0_18px_60px_rgba(0,27,61,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-950">Registrations</p>
              <div className="mt-5 grid gap-2 text-lg text-navy-950">
                <p>
                  <span className="font-semibold">GSTIN</span> 07ATHPK7730P1Z3
                </p>
                <p>
                  <span className="font-semibold">Udyam</span> UDYAM-DL-08-0031761
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
