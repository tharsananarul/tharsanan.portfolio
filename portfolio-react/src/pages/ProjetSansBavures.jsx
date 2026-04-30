import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowLeft, ArrowRight, Video, Palette, Mic2 } from 'lucide-react'
import MosaicGrid from '../components/MosaicGrid'

export default function ProjetSansBavures() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const baseUrl = import.meta.env.BASE_URL

  const sections = [{
    items: [
      { src: `${baseUrl}images/sans-bavures/logo.png`, alt: 'Logo Sans Bavures' },
      { src: `${baseUrl}images/sans-bavures/affiche.png`, alt: 'Affiche Sans Bavures', tall: true },
      { src: `${baseUrl}images/sans-bavures/brochure.png`, alt: 'Brochure' },
      { src: `${baseUrl}images/sans-bavures/post-insta.png`, alt: 'Post Instagram' },
      { src: `${baseUrl}images/sans-bavures/post.png`, alt: 'Post 1' },
      { src: `${baseUrl}images/sans-bavures/post2.png`, alt: 'Post 2' },
      { src: `${baseUrl}images/sans-bavures/post3.png`, alt: 'Post 3' },
    ]
  }]

  return (
    <main className="relative bg-transparent min-h-screen">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="grid-overlay" />
      </div>

      {/* Hero Header */}
      <div className="relative h-[60vh] overflow-hidden" ref={containerRef}>
        <motion.img 
          src={`${baseUrl}images/couvertures/sans-bavures.png`} 
          alt="Sans Bavures" 
          className="w-full h-full object-cover"
          style={{ y }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end section-container pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter font-heading">
              Sans <span className="text-accent-light italic">Bavures.</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Project Meta */}
      <section className="section-container grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-white/5">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Rôle</span>
          <p className="font-bold text-sm md:text-base">Montage & Production</p>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Période</span>
          <p className="font-bold text-sm md:text-base">Sept. 2023 – Janv. 2024</p>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Outils</span>
          <p className="font-bold text-sm md:text-base">Premiere Pro, Illustrator</p>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Type</span>
          <p className="font-bold text-sm md:text-base">Reportage Multimédia</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-container py-24">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-2xl md:text-5xl font-bold mb-10 tracking-tight">Informer & <span className="highlight">Sensibiliser</span>.</h2>
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                Projet collaboratif visant à produire un reportage multimédia sur un sujet d'actualité. Mon rôle principal a été la production technique et le montage audiovisuel.
              </p>
              <p>
                J'ai utilisé Adobe Premiere Pro pour synchroniser les séquences, ajuster la colorimétrie et intégrer des transitions dynamiques, tout en assurant une narration immersive.
              </p>
            </div>
          </div>
          <div className="grid gap-8">
            <div className="p-8 rounded-3xl bg-secondary border border-white/5 group hover:border-accent-light/30 transition-all">
              <Video className="text-accent-light mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Montage & Vidéo</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Utilisation de Premiere Pro pour le montage, l'étalonnage et la synchronisation audio-visuelle du reportage.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-secondary border border-white/5 group hover:border-accent-light/30 transition-all">
              <Mic2 className="text-accent-light mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Voix-off & Design</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Traduction du script en anglais, enregistrement de la voix-off et création de visuels via Photoshop et Illustrator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <MosaicGrid sections={sections} accentColor="#8b5cf6" />

      {/* Next Project */}
      <section className="section-container py-32 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4 block">Projet suivant</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Créations Perso</h2>
          </div>
          <Link to="/projets/perso" className="btn-premium gap-3 text-lg px-12 py-5">
            Découvrir <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  )
}
