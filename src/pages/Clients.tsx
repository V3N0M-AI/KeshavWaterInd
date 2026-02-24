import { CharacterReveal } from '../components/CharacterReveal'
import { Reveal } from '../components/Reveal'
import { clientCategories } from '../lib/clients'
import { PartnerIcon } from '../components/PartnerIcons'
import { IMAGES } from '../content/images'

type Project = {
  title: string
  client: string
  location: string
  size: string
  scope: string
  image: string
}

const projects: Project[] = [
  {
    title: 'Dialysis RO Plant Installation',
    client: 'Hospital Partner (Dialysis Unit)',
    location: 'Delhi NCR',
    size: '1,000 LPH • SS 316L loop-ready',
    scope: 'Pre-treatment + RO skid + storage + commissioning',
    image: IMAGES.projects.a,
  },
  {
    title: 'ETP Commissioning',
    client: 'Industrial Partner',
    location: 'Greater Noida, UP',
    size: '75 KLD',
    scope: 'Equalization + dosing + aeration + clarification',
    image: IMAGES.projects.b,
  },
  {
    title: 'Industrial RO Plant',
    client: 'Manufacturing Partner',
    location: 'Delhi',
    size: '5,000 LPH',
    scope: 'Pre-treatment + RO + instrumentation + training',
    image: IMAGES.projects.c,
  },
]

type Testimonial = {
  name: string
  role: string
  rating: number
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Operations Manager',
    role: 'Hospital Dialysis Unit',
    rating: 5,
    quote:
      'Keshav Water Industries delivered stable output and a clean installation. The team explained the process clearly and the system has been reliable from day one.',
  },
  {
    name: 'Plant Head',
    role: 'Industrial Manufacturing',
    rating: 4.5,
    quote:
      'Strong build quality and smooth commissioning. We saw immediate improvement in consistency and the maintenance plan is easy to follow.',
  },
  {
    name: 'Facility Manager',
    role: 'Commercial Building',
    rating: 5,
    quote:
      'Professional team, premium fit & finish. The RO plant runs quietly and the service support has been prompt.',
  },
]

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const half = rating - full >= 0.5

  return (
    <div className="flex items-center gap-1" aria-label={`Rating ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const isFull = i < full
        const isHalf = i === full && half

        return (
          <span key={i} className="text-[14px] tracking-[-0.08em] text-navy-950">
            {isFull ? '★' : isHalf ? '⯨' : '☆'}
          </span>
        )
      })}
      <span className="ml-2 text-xs font-semibold tracking-[0.16em] text-navy-950/60">{rating.toFixed(1)}/5</span>
    </div>
  )
}

export function Clients() {
  return (
    <div>
      <section className="kwi-container py-40">
        <CharacterReveal as="h1" className="kwi-h1" text="Trusted by partners." />
        <Reveal delay={0.08}>
          <p className="mt-8 max-w-[70ch] text-navy-950/70">
            A premium gallery of healthcare and industrial partners who trust KWI for performance and compliance.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-20">
          {clientCategories.map((cat) => (
            <div key={cat.title}>
              <Reveal>
                <CharacterReveal as="h2" className="kwi-h2" text={cat.title} />
              </Reveal>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {cat.items.map((name, idx) => (
                  <Reveal key={name} delay={0.06 + 0.03 * idx} y={20}>
                    <div className="group rounded-3xl border border-blue-100 bg-blue-50/50 p-8 transition hover:bg-blue-50">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                          <PartnerIcon
                            kind={cat.title.includes('Hospital') ? 'hospital' : 'industry'}
                            className="h-6 w-6 text-navy-950/70 transition group-hover:text-navy-950"
                          />
                        </div>
                        <div>
                          <p className="text-[12px] uppercase tracking-[0.2em] text-navy-950/60">Partner</p>
                          <p className="mt-1 text-[13px] font-semibold leading-6 tracking-[0.06em] text-navy-950">{name}</p>
                        </div>
                      </div>
                      <div className="mt-6 h-px w-12 bg-navy-950/10 transition group-hover:w-16" />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="kwi-sep" />

      <section className="kwi-container py-40">
        <div className="text-center">
          <h2 className="kwi-h2 mx-auto max-w-4xl leading-tight">Installed projects.</h2>
          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-navy-950">
            A curated set of installations across healthcare and industrial sites. (Photos are premium placeholders
            from your assets; swap them anytime via <span className="font-semibold">src/content/images.ts</span>.)
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <Reveal key={p.title} delay={0.05 * idx} y={22}>
              <div className="group overflow-hidden rounded-[40px] border border-blue-100 bg-white shadow-[0_18px_60px_rgba(0,27,61,0.08)]">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-950/60">{p.location}</p>
                  <p className="mt-3 font-serif text-xl text-navy-950">{p.title}</p>
                  <p className="mt-3 text-sm text-navy-950/80">Client: {p.client}</p>
                  <p className="mt-2 text-sm text-navy-950/80">Size: {p.size}</p>
                  <p className="mt-2 text-sm text-navy-950/70">Scope: {p.scope}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="kwi-sep" />

      <section className="kwi-container py-40">
        <div className="text-center">
          <h2 className="kwi-h2 mx-auto max-w-4xl leading-tight">Testimonials.</h2>
          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-navy-950">
            Verified-style feedback from stakeholders across clinical and industrial environments.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Reveal key={t.name + t.role} delay={0.05 * idx} y={18}>
              <div className="rounded-[40px] border border-blue-100 bg-[#F0F9FF] p-10 shadow-[0_18px_60px_rgba(0,27,61,0.06)]">
                <Stars rating={t.rating} />
                <p className="mt-6 text-[15px] leading-relaxed text-navy-950">“{t.quote}”</p>
                <div className="mt-8 h-px bg-navy-950/10" />
                <p className="mt-6 font-semibold text-navy-950">{t.name}</p>
                <p className="mt-1 text-sm text-navy-950/70">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
