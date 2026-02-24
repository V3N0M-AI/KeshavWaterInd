import { useMemo } from 'react'

type GsapSplitTextProps = {
  as?: 'h1' | 'h2' | 'p'
  text: string
  className?: string
  /** Adds class to each character span */
  charClassName?: string
}

/**
 * Simple, dependency-free character splitter for GSAP.
 * Animations are handled by a parent component via querySelectorAll('[data-char]') or '.gsap-char'.
 */
export function GsapSplitText({ as = 'h1', text, className, charClassName }: GsapSplitTextProps) {
  const Tag = as
  // Preserve whitespace tokens and prevent words from being split mid-word
  const tokens = useMemo(() => text.split(/(\s+)/), [text])

  return (
    <Tag className={className} aria-label={text}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {tokens.map((token, tokenIndex) => {
          if (/^\s+$/.test(token)) {
            // whitespace
            return (
              <span
                key={`ws-${tokenIndex}`}
                data-char
                className={['gsap-char inline-block', charClassName].filter(Boolean).join(' ')}
                style={{ whiteSpace: 'pre' }}
              >
                {token}
              </span>
            )
          }

          // word
          const chars = Array.from(token)
          return (
            <span key={`word-${tokenIndex}`} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              {chars.map((c, i) => (
                <span
                  key={`${tokenIndex}-${c}-${i}`}
                  data-char
                  className={['gsap-char inline-block', charClassName].filter(Boolean).join(' ')}
                >
                  {c}
                </span>
              ))}
            </span>
          )
        })}
      </span>
    </Tag>
  )
}
