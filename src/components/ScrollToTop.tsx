import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Ensure route transitions always start at top so in-view reveals are visible.
    type LenisLike = { scrollTo: (target: number, options?: { immediate?: boolean }) => void }
    const maybeLenis = (window as unknown as { __lenis?: LenisLike }).__lenis
    if (maybeLenis) {
      maybeLenis.scrollTo(0, { immediate: true })
      return
    }
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
