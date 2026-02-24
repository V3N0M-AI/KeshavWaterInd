import { AnchorImage } from '../components/AnchorImage'

import { IMAGES } from '../content/images'

type Product = {
  title: string
  slug:
    | 'industrialRo'
    | 'commercialRo'
    | 'softener'
    | 'dmPlant'
    | 'etp'
    | 'stp'
    | 'dialysis'
  subtitle: string
  image: string
  capacity: string
  specs: string[]
  applications: string[]
  process: string
  advantages: string[]
  warranty: string
}

const products: Product[] = [
  {
    title: 'Industrial RO Plant',
    slug: 'industrialRo',
    subtitle: 'High-output reverse osmosis for process lines, utilities, and manufacturing.',
    image: IMAGES.products.industrialRo,
    capacity: '250 LPH – 10,000 LPH',
    specs: [
      'FRP / SS skid mounting with vibration-safe piping routes',
      'Multi-stage high-pressure pump with low-pressure cut-off + dry-run protection',
      'Pre-treatment: sand filter + activated carbon + micron cartridge filtration',
      'Membrane array sized for recovery (typically 40–75%) and TDS rejection',
      'Online instrumentation: pressure gauges, flow meters, TDS / conductivity (optional)',
    ],
    applications: ['Factories', 'Boilers & cooling towers', 'Food processing units', 'Bottling plants', 'Utilities'],
    process:
      'Raw water → multi-media filtration → carbon filtration → micron filtration → high-pressure RO membranes → permeate storage. Concentrate is safely rejected or routed for reuse as per site plan.',
    advantages: [
      'Stable permeate quality and predictable performance',
      'Lower operating cost via optimized recovery',
      'Modular membrane banks for easy scaling and servicing',
      'Protection interlocks to reduce pump/membrane failures',
    ],
    warranty: '12 months on manufacturing defects (extended AMC options available).',
  },
  {
    title: 'Commercial RO Plant',
    slug: 'commercialRo',
    subtitle: 'Compact RO plants designed for hotels, schools, offices, and commercial buildings.',
    image: IMAGES.products.commercialRo,
    capacity: '25 LPH – 2,000 LPH',
    specs: [
      'Space-optimized skid with quick-service filter housings',
      'Automatic flushing to reduce scaling and improve membrane life',
      'UV / ozone post-treatment (optional) for storage hygiene',
      'Auto cut-off with float switch for tank control',
      'TDS controller / blending valve (optional) for taste optimization',
    ],
    applications: ['Hotels', 'Restaurants', 'Schools', 'Commercial buildings', 'Pantries & canteens'],
    process:
      'Feed water → pre-filtration → RO membrane separation → permeate stored in tank → optional UV for disinfection. Reject water is diverted to drain/reuse.',
    advantages: [
      'Consistent drinking/process water quality',
      'Easy maintenance with serviceable cartridges',
      'Low downtime and fast commissioning',
      'Quiet operation suitable for indoor utility rooms',
    ],
    warranty: '12 months warranty with standard spares support.',
  },
  {
    title: 'Water Softener Plant',
    slug: 'softener',
    subtitle: 'Hardness removal systems for scale control and equipment protection.',
    image: IMAGES.products.softener,
    capacity: '500 LPH – 50,000 LPH',
    specs: [
      'Resin vessel (FRP/MSRL/SS) with graded distribution system',
      'Multi-port / butterfly valve arrangement for service, backwash, rinse',
      'Brine tank with saturation control for consistent regeneration',
      'Hardness leakage control via resin selection + correct EBCT',
      'Optional twin softener for uninterrupted supply',
    ],
    applications: ['Hotels', 'Hospitals', 'Boilers', 'Laundry plants', 'Cooling towers'],
    process:
      'Hard water passes through cation resin → calcium/magnesium exchanged with sodium → softened water supplied. Resin is periodically regenerated using brine solution.',
    advantages: [
      'Prevents scaling on heat exchangers and plumbing',
      'Improves RO membrane life when used as pre-treatment',
      'Lower maintenance cost for boilers/heaters',
      'Consistent hardness control with proper regeneration cycles',
    ],
    warranty: '12 months warranty (resin performance depends on raw water quality + operations).',
  },
  {
    title: 'DM Plant',
    slug: 'dmPlant',
    subtitle: 'Demineralization plants for low-conductivity water and critical processes.',
    image: IMAGES.products.dmPlant,
    capacity: '250 LPH – 30,000 LPH',
    specs: [
      'Mixed bed / two-bed / three-bed configuration based on conductivity target',
      'Strong acid cation + strong base anion resins with rinsing cycles',
      'Degasser tower (optional) to reduce CO₂ load and improve output',
      'Conductivity monitoring with auto divert (optional)',
      'Regeneration-ready design with safe chemical dosing points',
    ],
    applications: ['Pharma', 'Laboratories', 'Boilers & steam', 'Electronics', 'Process industries'],
    process:
      'Pre-treated water → cation exchange → anion exchange → optional mixed bed polishing → low-conductivity DM water to storage or process point.',
    advantages: [
      'Achieves very low conductivity levels',
      'Reliable for boiler feed and sensitive processes',
      'Long service life with correct regeneration practice',
      'Scalable configuration (add polishing stage if needed)',
    ],
    warranty: '12 months warranty on plant & fittings; consumables covered as per usage.',
  },
  {
    title: 'ETP (Effluent Treatment Plant)',
    slug: 'etp',
    subtitle: 'Industrial wastewater treatment designed for compliance and reuse.',
    image: IMAGES.products.etp,
    capacity: '1 KLD – 500 KLD',
    specs: ['Collection tank', 'Aeration tank', 'Clarifier', 'Sludge drying bed', 'Dosing system'],
    applications: ['Chemical industries', 'Textile factories', 'Pharmaceutical plants', 'Food processing units'],
    process:
      'Industrial wastewater collected → chemical treatment → aeration process → solid separation → treated water reused or discharged safely.',
    advantages: [
      'Meets pollution control norms',
      'Reduces environmental impact',
      'Water reuse option',
      'Compliance with government standards',
    ],
    warranty: '12 months warranty on plant components (AMC and O&M support available).',
  },
  {
    title: 'STP (Sewage Treatment Plant)',
    slug: 'stp',
    subtitle: 'Environment-friendly sewage treatment systems customized to site conditions.',
    image: IMAGES.products.stp,
    capacity: '1 KLD – 500 KLD',
    specs: [
      'MBBR / SBR process options based on inlet load and footprint',
      'Blowers with diffusers for efficient aeration',
      'Settling + filtration modules for polishing',
      'Chlorination / UV (optional) for final disinfection',
      'Odor control provisions (optional) for compact urban sites',
    ],
    applications: ['Hospitals', 'Hotels', 'Residential societies', 'Institutions', 'Commercial complexes'],
    process:
      'Sewage collection → screening/equalization → biological treatment → settling → filtration → disinfected treated water for reuse (gardening/flushing) or safe discharge.',
    advantages: [
      'Low operating & maintenance cost',
      'Low power consumption with optimized aeration',
      'Minimum footprint area with modular tanks',
      'Consistent treated water output with minimal chemicals',
    ],
    warranty: '12 months warranty with support for commissioning and training.',
  },
  {
    title: 'Dialysis RO Plant',
    slug: 'dialysis',
    subtitle: 'Medical-grade RO systems built for dialysis centers and hospitals.',
    image: IMAGES.products.dialysis,
    capacity: '250 LPH – 2,000 LPH (configurable as per beds)',
    specs: [
      'SS 316L contact parts (as per design) for hygienic durability',
      'Dual-pass RO (optional) for tighter quality targets',
      'Auto flushing, UV loop options, and endotoxin control-ready layout',
      'Integrated mixing tanks for Acid and Bi-carb mixtures with automated control panels (as required)',
      'Alarm interlocks and logging-ready instrumentation (optional)',
    ],
    applications: ['Hospitals', 'Dialysis centers', 'Clinical facilities'],
    process:
      'Pre-treatment → RO membranes → permeate loop/storage → optional UV/disinfection loop → supply to dialysis distribution as per center design.',
    advantages: [
      'Stable output for critical clinical workflows',
      'Service-first design for quick maintenance',
      'Built for compliance-first environments',
      'Expandable architecture as bed count grows',
    ],
    warranty: '12 months warranty (validation/consumables as per usage and standards).',
  },
]

export function Products() {
  return (
    <div>
      <section className="kwi-container py-40">
        <div className="text-center">
          <h1 className="kwi-h1 mx-auto max-w-4xl leading-tight">Solutions, engineered.</h1>
          <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-navy-950">
            A premium catalog designed around the environments we serve.
            <br />
            Medical precision. Industrial reliability. Long-term compliance.
          </p>
        </div>
      </section>

      <div className="kwi-sep" />

      {products.map((p, idx) => {
        const reverse = idx % 2 === 1
        return (
          <section key={p.title} className="kwi-container py-40">
            <div
              className={[
                'grid items-center gap-10 lg:grid-cols-2',
                reverse ? 'lg:[&>*:first-child]:order-2' : '',
              ].join(' ')}
            >
              <div className="text-center lg:text-left">
                <div className="mx-auto w-fit rounded-full bg-[#F0F9FF] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-navy-950 lg:mx-0">
                  Capacity Range: {p.capacity}
                </div>
                <h2 className="kwi-h2 mx-auto mt-10 max-w-4xl leading-tight lg:mx-0">{p.title}</h2>
                <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-navy-950 lg:mx-0">
                  {p.subtitle}
                </p>

                <div className="mx-auto mt-10 max-w-4xl rounded-[40px] border border-blue-100 bg-white/70 p-8 text-left shadow-[0_18px_60px_rgba(0,27,61,0.06)] backdrop-blur lg:mx-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-950">Technical Specifications</p>
                  <ul className="mt-5 grid gap-2 text-[15px] leading-relaxed text-navy-950">
                    {p.specs.map((s) => (
                      <li key={s}>• {s}</li>
                    ))}
                  </ul>

                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-navy-950">Applications</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.applications.map((a) => (
                      <span
                        key={a}
                        className="rounded-full border border-blue-100 bg-[#F0F9FF] px-4 py-2 text-[12px] font-semibold tracking-[0.14em] text-navy-950"
                      >
                        {a}
                      </span>
                    ))}
                  </div>

                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-navy-950">Working Process</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-navy-950">{p.process}</p>

                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-navy-950">Advantages</p>
                  <ul className="mt-5 grid gap-2 text-[15px] leading-relaxed text-navy-950">
                    {p.advantages.map((a) => (
                      <li key={a}>• {a}</li>
                    ))}
                  </ul>

                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-navy-950">Warranty</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-navy-950">{p.warranty}</p>
                </div>
              </div>

              <AnchorImage
                src={p.image}
                alt={p.title}
                flip={reverse}
                anchorClassName={idx % 2 === 0 ? 'bg-[#22D3EE]' : 'bg-[#0EA5E9]'}
              />
            </div>
          </section>
        )
      })}
    </div>
  )
}
