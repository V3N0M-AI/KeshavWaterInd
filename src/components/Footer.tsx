export function Footer() {
  const whatsappUrl =
    'https://wa.me/919958453111?text=Hello%20Keshav%20Water%20Industries,%20I%20am%20interested%20in%20your%20water%20treatment%20solutions.'

  return (
    <footer className="mt-24 bg-navy-950 text-porcelain">
      <div className="kwi-container py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-serif text-2xl">Keshav Water Industries</p>
            <p className="mt-4 max-w-[56ch] text-sm text-porcelain/75">
              Medical-grade dialysis RO systems, industrial RO plants, and ETP/STP solutions engineered for
              reliability, compliance, and long-term performance.
            </p>

            <div className="mt-7 grid gap-2 text-sm text-porcelain/75">
              <p>
                <span className="text-porcelain/55">Name:</span> JAI SHANKAR KUMAR
              </p>
              <p>
                <span className="text-porcelain/55">Phone:</span> +919958453111
              </p>
              <p>
                <span className="text-porcelain/55">Tel:</span> 011-40157217
              </p>
              <p>
                <span className="text-porcelain/55">Email:</span> info@aquaticsolns.com
              </p>

              <div className="mt-2 leading-relaxed">
                <p>
                  <span className="text-porcelain/55">Location</span>
                </p>
                <p>Floor No.: GROUND &amp; FIRST FLOOR PARTIALLY</p>
                <p>Building No./Flat No.: A-1-A DDA SHED, OPP A-45</p>
                <p>Road/Street: DDA SHED INDUSTRIAL AREA OKHLA PHASE-1</p>
                <p>City/Town/Village: New Delhi</p>
                <p>District: South East Delhi</p>
                <p>State: Delhi</p>
                <p>PIN Code: 110020</p>
              </div>
            </div>
            <div className="mt-6">
              <a
                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-lg transition hover:bg-white hover:text-navy-950"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
            <p className="mt-10 text-xs text-porcelain/55">© {new Date().getFullYear()} Keshav Water Industries.</p>
          </div>

          <div className="w-full max-w-[520px]">
            <div className="rounded-[40px] border border-white/10 bg-white/10 p-10 backdrop-blur-lg">
              <p className="text-[12px] uppercase tracking-[0.2em] text-porcelain/70">COMPLIANCE</p>
              <div className="mt-6 grid gap-3 text-sm text-porcelain/85">
                <p>
                  <span className="text-porcelain/55">GSTIN</span> 07ATHPK7730P1Z3
                </p>
                <p>
                  <span className="text-porcelain/55">UDYAM</span> UDYAM-DL-08-0031761
                </p>
              </div>
              <div className="mt-8 h-px bg-white/10" />
              <p className="mt-6 text-[12px] uppercase tracking-[0.2em] text-porcelain/55">
                Built for compliance-first environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
