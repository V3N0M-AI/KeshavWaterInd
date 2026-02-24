import { motion, useReducedMotion } from 'framer-motion'
import { useMemo } from 'react'

type CharacterRevealProps = {
  as?: 'h1' | 'h2'
  text: string
  className?: string
}

export function CharacterReveal({ as = 'h1', text, className }: CharacterRevealProps) {
  const shouldReduce = useReducedMotion()
  const Tag = as

  // Preserve whitespace tokens and prevent words from being split mid-word
  const tokens = useMemo(() => text.split(/(\s+)/), [text])

  if (shouldReduce) {
    return <Tag className={className}>{text}</Tag>
  }

  return (
    <Tag className={className} aria-label={text}>
      {/* a11y: provide full text for screen readers */}
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        style={{ display: 'inline-block' }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '0px 0px -18% 0px' }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.018,
              delayChildren: 0.06,
            },
          },
        }}
      >
        {tokens.map((token, tokenIndex) => {
          // whitespace token
          if (/^\s+$/.test(token)) {
            return (
              <motion.span
                key={`ws-${tokenIndex}`}
                style={{ display: 'inline-block', whiteSpace: 'pre' }}
                variants={{
                  hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {token}
              </motion.span>
            )
          }

          // word token
          const chars = Array.from(token)
          return (
            <span key={`word-${tokenIndex}`} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              {chars.map((c, i) => (
                <motion.span
                  key={`${tokenIndex}-${c}-${i}`}
                  style={{ display: 'inline-block' }}
                  variants={{
                    hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: 'blur(0px)',
                      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  {c}
                </motion.span>
              ))}
            </span>
          )
        })}
      </motion.span>
    </Tag>
  )
}
