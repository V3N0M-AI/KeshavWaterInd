import { Reveal } from '../components/Reveal'

export function Contact() {
  return (
    <section className="bg-[#F0F9FF]">
      <div className="kwi-container py-40">
        <div className="text-center">
          <h1 className="kwi-h1 mx-auto max-w-4xl leading-tight">Let’s build a cleaner system.</h1>
          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-navy-950">
            Share your requirements and capacity range. We’ll respond with a minimal, precise proposal.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
        <Reveal>
          <form className="rounded-[60px] border border-blue-100 bg-white p-10 shadow-[0_18px_60px_rgba(0,27,61,0.10)]">
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-950">NAME</span>
                <input
                  className="rounded-full border border-blue-200 bg-white/70 px-6 py-4 text-[15px] font-medium text-navy-950 outline-none focus:bg-white"
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-950">EMAIL</span>
                <input
                  className="rounded-full border border-blue-200 bg-white/70 px-6 py-4 text-[15px] font-medium text-navy-950 outline-none focus:bg-white"
                  placeholder="you@company.com"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-950">MESSAGE</span>
                <textarea
                  className="min-h-[160px] rounded-[40px] border border-blue-200 bg-white/70 px-6 py-5 text-[15px] font-medium text-navy-950 outline-none focus:bg-white"
                  placeholder="Dialysis RO / ETP-STP / Industrial RO — capacity and site details"
                />
              </label>

              <button type="button" className="kwi-button w-fit">
                Send Message
              </button>
            </div>
          </form>
        </Reveal>

          <div className="grid gap-6">
          <Reveal>
            <div className="rounded-[60px] border border-blue-100 bg-white p-10 shadow-[0_18px_60px_rgba(0,27,61,0.08)]">
              <p className="text-xs tracking-[0.16em] text-navy-950/60">COMPLIANCE</p>
              <div className="mt-5 grid gap-2 text-sm text-navy-950/75">
                <p>
                  <span className="text-navy-950/55">GSTIN</span> 07ATHPK7730P1Z3
                </p>
                <p>
                  <span className="text-navy-950/55">Udyam</span> UDYAM-DL-08-0031761
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="rounded-[60px] border border-blue-100 bg-white p-10 shadow-[0_18px_60px_rgba(0,27,61,0.08)]">
              <p className="text-xs tracking-[0.16em] text-navy-950/60">CONNECT</p>
              <p className="mt-4 text-sm text-navy-950/70">
                WhatsApp and Google Maps links will be connected once the official numbers/addresses are confirmed.
              </p>
            </div>
          </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
