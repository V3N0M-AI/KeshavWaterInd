import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-porcelain">
      <NavBar />
      <main className="pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
