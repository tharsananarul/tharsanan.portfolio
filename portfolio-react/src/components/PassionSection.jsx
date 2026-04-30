import { motion } from 'framer-motion'
import { Bike, Camera, Gamepad2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'

const passions = [
  {
    id: "gaming",
    title: "Gaming",
    subtitle: "Open World & Immersion",
    desc: "Passionné par les univers ouverts comme GTA V, Red Dead Redemption ou Watch Dogs, j'apprécie les expériences immersives où narration et liberté de jeu se complètent.",
    icon: Gamepad2,
    color: "text-[var(--color-creative-cyan)]",
    bg: "rgba(34, 211, 238, 0.1)",
    hasMore: false
  },
  {
    id: "velo",
    title: "Cyclisme",
    subtitle: "Liberté & Endurance",
    desc: "Le cyclisme me permet de me dépasser et de m'évader. C'est un équilibre entre effort, découverte et discipline.",
    icon: Bike,
    color: "text-[var(--color-creative-yellow)]",
    bg: "rgba(250, 204, 21, 0.1)",
    hasMore: false
  },
  {
    id: "photo",
    title: "Photographie",
    subtitle: "Instants & Lumière",
    desc: "La photographie développe mon regard et mon sens du détail, des compétences que j'applique directement dans mes projets en communication.",
    icon: Camera,
    color: "text-[var(--color-creative-blue)]",
    bg: "rgba(244, 63, 94, 0.1)",
    hasMore: true
  }
]

export default function PassionSection() {
  const baseUrl = import.meta.env.BASE_URL
  const videoRef = useRef(null)

  // Loop only the first 15 seconds
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      if (video.currentTime >= 15) {
        video.currentTime = 0
      }
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    return () => video.removeEventListener('timeupdate', handleTimeUpdate)
  }, [])

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-transparent border-y border-white/5">
      {/* YouTube Background with Cinematic Enhancements */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 95%)',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 95%)'
        }}
      >
        {/* Vignette Overlay - reduced to let more video through */}
        <div className="absolute inset-0 z-10 bg-black/30" />
        
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.05]"
          style={{ filter: 'brightness(1.1) saturate(1.2) contrast(1.1)' }}
        >
          <source src={`${baseUrl}videos/bmw-bg.mp4`} type="video/mp4" />
        </video>


        {/* Decorative cinematic scanlines/grain */}
        <div className="absolute inset-0 z-20 bg-noise opacity-[0.05] pointer-events-none" />
      </div>


      {/* Frame accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-creative-cyan)] to-transparent opacity-20" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-creative-blue)] to-transparent opacity-20" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white font-black tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-[var(--color-creative-cyan)]" />
              En dehors du digital
            </p>
            <h2 className="text-4xl md:text-7xl font-black mb-4 md:mb-8 tracking-tighter uppercase text-white relative inline-block">
              Ce qui me <br />
              <span className="text-[var(--color-creative-blue)] mt-2 inline-block" style={{ WebkitTextStroke: '2px white' }}>définit aussi.</span>
              <div className="sticker-shape sticker-yellow absolute -top-10 -right-20 rotate-12 hidden md:block">Life</div>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {passions.map((p, i) => {
            const CardContent = (
              <>
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center mb-4 md:mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                  <p.icon className={p.color} size={24} />
                </div>
                <h3 className="text-lg md:text-3xl font-bold mb-1 md:mb-2 tracking-tight text-white">{p.title}</h3>
                <p className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${p.color} mb-3 md:mb-6 opacity-90`}>{p.subtitle}</p>
                <p className="text-white/80 text-xs md:text-base leading-relaxed mb-4 md:mb-8 line-clamp-3 md:line-clamp-none font-medium">{p.desc}</p>
                {p.hasMore && (
                  <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                    Photos <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 md:w-32 md:h-32 bg-white/5 blur-[40px] md:blur-[50px] rounded-full group-hover:bg-white/20 transition-colors" />
              </>
            )

            const cardClasses = "group p-6 md:p-10 rounded-none border-2 md:border-4 border-black shadow-[4px_4px_0_0_#000] md:shadow-[8px_8px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#000] md:hover:shadow-[4px_4px_0_0_#000] transition-all duration-500 relative overflow-hidden bg-black/40 backdrop-blur-xl"
            const accentStyle = { borderTopColor: p.color.includes('cyan') ? 'var(--color-creative-cyan)' : p.color.includes('yellow') ? 'var(--color-creative-yellow)' : 'var(--color-creative-blue)' }

            return p.hasMore ? (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="contents"
              >
                <Link
                  to="/photographie"
                  className={cardClasses}
                  style={accentStyle}
                >
                  {CardContent}
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cardClasses}
                style={accentStyle}
              >
                {CardContent}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
