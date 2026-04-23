import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowLeft, ArrowRight, Camera, Palette, Music } from 'lucide-react'
import MosaicGrid from '../components/MosaicGrid'

export default function ProjetPerso() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const baseUrl = import.meta.env.BASE_URL

  const sections = [
    {
      tag: 'Posters & Illustrations', title: 'Cinéma & Créations',
      items: [
        { src: `${baseUrl}images/projets-crea/captain-miller.png`, alt: 'Captain Miller Poster' },
        { src: `${baseUrl}images/projets-crea/kok-poster.jpg`, alt: 'KOK Poster' },
        { src: `${baseUrl}images/projets-crea/kok-car.png`, alt: 'KOK Car Design' },
        { src: `${baseUrl}images/projets-crea/animal.png`, alt: 'Animal Poster' },
        { src: `${baseUrl}images/projets-crea/cover-magazine.jpeg`, alt: 'Cover Magazine' },
      ]
    }
  ]

  return (
    <main className="relative bg-primary">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="grid-overlay" />
      </div>

      {/* Hero Header */}
      <div className="relative h-[60vh] overflow-hidden" ref={containerRef}>
        <motion.img 
          src={`${baseUrl}images/couvertures/projets-crea.png`} 
          alt="Créations Personnelles" 
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
              Projets <span className="text-accent-light italic">Perso.</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Project Meta */}
      <section className="section-container grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-white/5">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Type</span>
          <p className="font-bold text-sm md:text-base">Créations Libres</p>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Focus</span>
          <p className="font-bold text-sm md:text-base">Illustrations & Posters</p>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Outils</span>
          <p className="font-bold text-sm md:text-base">Photoshop, Illustrator</p>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Thème</span>
          <p className="font-bold text-sm md:text-base">Cinéma & Culture</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-container py-24">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-2xl md:text-5xl font-bold mb-10 tracking-tight">Expression <span className="highlight">libre</span>.</h2>
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                Mes projets personnels me permettent d'explorer de nouvelles techniques et de rendre hommage aux œuvres qui m'inspirent, notamment le cinéma sud-indien.
              </p>
              <p>
                Chaque poster est le fruit d'un travail sur la composition, la typographie et la gestion des couleurs pour capturer l'essence de l'œuvre originale.
              </p>
            </div>
          </div>
          <div className="grid gap-8">
            <div className="p-8 rounded-3xl bg-secondary border border-white/5">
              <Palette className="text-accent-light mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Direction Artistique</h3>
              <p className="text-text-muted text-sm">Exploration de styles graphiques variés, du minimalisme au néon-synthwave.</p>
            </div>
            <div className="p-8 rounded-3xl bg-secondary border border-white/5">
              <Camera className="text-accent-light mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Traitement d'Image</h3>
              <p className="text-text-muted text-sm">Manipulation avancée de photos et création de montages complexes sur Photoshop.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <MosaicGrid sections={sections} />

      {/* Next Project */}
      <section className="section-container py-32 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4 block">Projet suivant</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Futsal Drancy</h2>
          </div>
          <Link to="/projets/futsal" className="btn-premium gap-3 text-lg px-12 py-5">
            Découvrir <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  )
}
