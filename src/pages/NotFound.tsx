import { Link } from 'react-router-dom'
import { CharacterReveal } from '../components/CharacterReveal'

export function NotFound() {
  return (
    <section className="kwi-container py-24">
      <CharacterReveal as="h1" className="kwi-h1" text="Page not found" />
      <p className="mt-6 max-w-[60ch] text-navy-950/70">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <div className="mt-10">
        <Link to="/" className="kwi-button">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
