import { motion, useReducedMotion } from 'framer-motion'
import { useMemo } from 'react'

type LineRevealProps = {
  text: string
  className?: string
  lineClassName?: string
  stagger?: number
}

/**
 * A minimal “split-type” line reveal.
 * - We keep it dependency-free by splitting on explicit newlines.
 * - Use \n in copy to control lines editorially (like the reference site).
 */
export function LineReveal({
  text,
  className,
  lineClassName,
  stagger = 0.12,
}: LineRevealProps) {
  const reduce = useReducedMotion()
  const lines = useMemo(() => text.split(/\n+/g), [text])

  if (reduce) {
    return (
      <div className={className}>
        {lines.map((l, i) => (
          <p key={i} className={lineClassName}>
            {l}
          </p>
        ))}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -18% 0px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
    >
      {lines.map((l, i) => (
        <motion.p
          key={i}
          className={lineClassName}
          variants={{
            hidden: { opacity: 0, y: 14, filter: 'blur(6px)' },
            show: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {l}
        </motion.p>
      ))}
    </motion.div>
  )
}
