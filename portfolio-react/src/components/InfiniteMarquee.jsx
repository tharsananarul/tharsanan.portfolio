import { motion } from 'framer-motion'

import { Sparkles, Star, Zap } from 'lucide-react'

const skills = [
  "Photoshop", "Illustrator", "After Effects", "InDesign", 
  "HTML5", "CSS3", "React.js", "Figma", "Premiere Pro", 
  "UI/UX Design", "Communication Strategique"
]

const icons = [Sparkles, Star, Zap]

export default function InfiniteMarquee() {
  return (
    <div className="py-8 md:py-12 overflow-hidden bg-[var(--color-creative-cyan)] relative border-y-4 border-black shadow-[0_10px_30px_rgba(0,255,255,0.3)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-plus-pattern opacity-[0.05] pointer-events-none" />
      
      <div className="flex whitespace-nowrap">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex items-center gap-10 md:gap-20 pr-10 md:pr-20"
        >
          {[...skills, ...skills].map((skill, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div key={i} className="flex items-center gap-10 md:gap-20 group">
                <span className="text-lg md:text-2xl font-black uppercase tracking-widest text-black font-heading transition-all duration-500 group-hover:scale-110">
                  {skill}
                </span>
                <Icon className="text-black/30 w-4 h-4 md:w-5 md:h-5" />
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Decorative gradient overlays for smooth fade */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[var(--color-creative-cyan)] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[var(--color-creative-cyan)] to-transparent z-10" />
    </div>
  )
}
