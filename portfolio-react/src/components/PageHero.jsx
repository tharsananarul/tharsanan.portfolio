import { motion } from 'framer-motion'

/**
 * PageHero — Réutilisable immersive hero header for all inner pages.
 * Provides a consistent premium look matching the 3D home hero:
 * deep blue atmosphere, animated text entrance, decorative accents.
 * 
 * Props:
 *   tag      — Small uppercase label (e.g. "Expertise")
 *   title    — Main h1 (can include JSX like <span>)
 *   subtitle — Optional description paragraph
 *   compact  — If true, less padding (for pages with immediate content below)
 */
export default function PageHero({ tag, title, subtitle, compact = false }) {
  return (
    <section className={`relative overflow-hidden ${compact ? 'pt-24 pb-4 md:pt-32 md:pb-6' : 'pt-28 pb-16 md:pt-40 md:pb-28'}`}>
      {/* Decorative background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[70%] bg-accent/8 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
        {/* Subtle grid */}
        <div className="grid-overlay opacity-50" />
      </div>

      {/* Animated horizontal accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[45%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-light/10 to-transparent origin-left"
      />

      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-accent-light font-bold tracking-[0.3em] uppercase mb-5 md:mb-6 text-[10px] md:text-xs flex items-center gap-3">
              <span className="w-8 h-px bg-accent-light/60" />
              {tag}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 md:mb-8 tracking-tighter leading-[1.05]"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-sm md:text-xl text-text-muted leading-relaxed max-w-2xl font-medium"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  )
}
