import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/clients', label: 'Clients' },
  { to: '/contact', label: 'Contact' },
]

export function NavBar() {
  const [open, setOpen] = useState(false)
  const whatsappUrl =
    'https://wa.me/919958453111?text=Hello%20Keshav%20Water%20Industries,%20I%20am%20interested%20in%20your%20water%20treatment%20solutions.'

  // Close mobile menu on route change / escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }

    // Close menu if user navigates via browser back/forward.
    const onPopState = () => setOpen(false)

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('popstate', onPopState)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('popstate', onPopState)
    }
  }, [])

  return (
    <header className="fixed left-0 top-0 z-[100] w-full">
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <div className="rounded-full border border-white/20 bg-white/70 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <div className="rounded-full border border-blue-50 bg-white px-8 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <NavLink
                to="/"
                className="flex items-baseline gap-2 text-[13px] font-semibold tracking-[0.14em] text-navy-950"
              >
                <span className="font-serif text-[18px] tracking-[-0.02em]">KWI</span>
                <span className="hidden sm:inline">Keshav Water Industries</span>
              </NavLink>
            </div>

            <nav className="hidden items-center gap-2 md:flex">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    [
                      'relative rounded-full px-4 py-2 text-xs tracking-[0.14em] transition',
                      isActive ? 'text-navy-950' : 'text-navy-950/70 hover:text-navy-950',
                    ].join(' ')
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{l.label}</span>
                      {isActive ? (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-0 rounded-full bg-white/70"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      ) : null}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-950/10 bg-white/70 text-navy-950 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-lg md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span className="sr-only">Menu</span>
              <div className="grid gap-[5px]">
                <span className={['h-[2px] w-5 bg-navy-950 transition', open ? 'translate-y-[7px] rotate-45' : ''].join(' ')} />
                <span className={['h-[2px] w-5 bg-navy-950 transition', open ? 'opacity-0' : ''].join(' ')} />
                <span className={['h-[2px] w-5 bg-navy-950 transition', open ? '-translate-y-[7px] -rotate-45' : ''].join(' ')} />
              </div>
            </button>

            <div className="hidden sm:block">
              <a
                className="kwi-button kwi-button--ghost"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden"
          >
            {/* Backdrop */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[90] bg-navy-950/10 backdrop-blur-sm"
              aria-label="Close menu backdrop"
            />

            {/* Panel */}
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              className="fixed left-0 right-0 top-20 z-[100] mx-auto w-[calc(100%-2rem)] max-w-[520px] rounded-[40px] border border-white/30 bg-white/80 p-6 shadow-[0_18px_60px_rgba(0,27,61,0.12)] backdrop-blur-xl"
              data-lenis-prevent
            >
              <div className="grid gap-2">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      [
                        'rounded-2xl px-4 py-3 text-sm font-semibold tracking-[0.12em]',
                        isActive ? 'bg-[#F0F9FF] text-navy-950' : 'text-navy-950/80 hover:bg-white',
                      ].join(' ')
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-5 h-px bg-navy-950/10" />

              <a
                className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-navy-950/20 bg-white px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-navy-950"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
