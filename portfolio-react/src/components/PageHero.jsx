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
export default function PageHero({ tag, title, subtitle, compact = false, themeColor = 'blue' }) {
  const getColors = () => {
    switch(themeColor) {
      case 'yellow': return ['var(--color-creative-yellow)', 'var(--color-creative-blue)']
      case 'cyan': return ['var(--color-creative-blue)', 'var(--color-creative-orange)']
      case 'orange': return ['var(--color-creative-orange)', 'var(--color-creative-blue)']
      case 'green': return ['var(--color-creative-orange)', 'var(--color-creative-yellow)']
      case 'blue': 
      default: return ['var(--color-creative-blue)', 'var(--color-creative-yellow)']
    }
  }
  
  const [color1, color2] = getColors()

  return (
    <section className={`relative overflow-hidden ${compact ? 'pt-24 pb-4 md:pt-32 md:pb-6' : 'pt-28 pb-16 md:pt-40 md:pb-28'}`}>
      {/* Decorative background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient glow - colorful creative style */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[120%] bg-[var(--color-creative-blue)] opacity-0 mix-blend-screen" style={{ backgroundColor: color1, filter: 'blur(150px)', borderRadius: '100%', opacity: 0.2 }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[100%] bg-[var(--color-creative-yellow)] opacity-0 mix-blend-screen" style={{ backgroundColor: color2, filter: 'blur(150px)', borderRadius: '100%', opacity: 0.2 }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] bg-[var(--color-creative-blue)] blur-[120px] rounded-full opacity-[0.15] mix-blend-screen" />

        {/* Subtle grid */}
        <div className="grid-overlay opacity-30" />
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
            <p className="text-accent-light font-bold tracking-[0.3em] uppercase mb-5 md:mb-6 text-[11px] md:text-sm flex items-center gap-3">
              <span className="w-10 h-px bg-accent-light/60" />
              {tag}
            </p>
          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-black mb-6 md:mb-8 tracking-tighter leading-[1] uppercase"
            style={{ fontSize: 'clamp(2.2rem, 8vw, 7rem)' }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-sm md:text-xl text-white/90 leading-relaxed max-w-2xl font-medium"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  )
}
