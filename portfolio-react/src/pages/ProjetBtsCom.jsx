import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowLeft, ArrowRight, Palette, Layers, PenTool } from 'lucide-react'
import MosaicGrid from '../components/MosaicGrid'

export default function ProjetBtsCom() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const baseUrl = import.meta.env.BASE_URL

  const sections = [
    {
      tag: 'Print & Branding', title: 'Mockups & Com Visuelle',
      items: [
        { src: `${baseUrl}images/bts-com/kakemono.jpg`, alt: 'Kakemono BTS Com' },
        { src: `${baseUrl}images/bts-com/affichea0.jpg`, alt: 'Affiche A0' },
        { src: `${baseUrl}images/bts-com/affiche-inscription.jpg`, alt: 'Affiche Inscription' },
        { src: `${baseUrl}images/bts-com/expo-com.jpg`, alt: 'Expo Com' },
        { src: `${baseUrl}images/bts-com/expocompost.jpg`, alt: 'Post Expo Com' },
        { src: `${baseUrl}images/bts-com/newsletter.jpg`, alt: 'Newsletter' },
        { src: `${baseUrl}images/bts-com/sdcipost.jpg`, alt: 'Post SDCI' },
        { src: `${baseUrl}images/bts-com/postscc01.jpg`, alt: 'Post SCC 01' },
        { src: `${baseUrl}images/bts-com/postscc02.jpg`, alt: 'Post SCC 02' },
        { src: `${baseUrl}images/bts-com/flyer-bmw.jpg`, alt: 'Flyer BMW' },
        { src: `${baseUrl}images/bts-com/kakemono-mockup.jpg`, alt: 'Mockup Kakemono' },
        { src: `${baseUrl}images/bts-com/affichea0mockup.jpg`, alt: 'Mockup Affiche' },
        { src: `${baseUrl}images/bts-com/instgram-mockup.jpg`, alt: 'Mockup Instagram' },
        { src: `${baseUrl}images/bts-com/rollup-mockup.jpg`, alt: 'Mockup Roll-Up' },
        { src: `${baseUrl}images/bts-com/mockuppull.jpg`, alt: 'Mockup Pull' },
      ]
    }
  ]

  return (
    <main className="relative bg-transparent min-h-screen">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="grid-overlay" />
      </div>

      {/* Hero Header */}
      <div className="relative h-[60vh] overflow-hidden" ref={containerRef}>
        <motion.img 
          src={`${baseUrl}images/couvertures/bts-com.png`} 
          alt="BTS Communication" 
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
              BTS <span className="text-accent-light italic">Com.</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Project Meta */}
      <section className="section-container grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-white/5">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Contexte</span>
          <p className="font-bold text-sm md:text-base">Lycée Jacques Brel</p>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Période</span>
          <p className="font-bold text-sm md:text-base">2024 — 2026</p>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Outils</span>
          <p className="font-bold text-sm md:text-base">Photoshop, Illustrator</p>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Type</span>
          <p className="font-bold text-sm md:text-base">Design Graphique</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-container py-24">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-2xl md:text-5xl font-bold mb-10 tracking-tight">Théorie et <span className="highlight">pratique créative</span>.</h2>
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                Dans le cadre de mon BTS Communication, j'ai réalisé de nombreux supports visuels alliant réflexion stratégique et exécution graphique.
              </p>
              <p>
                De la création d'affiches publicitaires à la conception de mockups pour diverses marques, ce parcours me permet de maîtriser l'ensemble de la chaîne graphique.
              </p>
            </div>
          </div>
          <div className="grid gap-8">
            <div className="p-8 rounded-3xl bg-secondary border border-white/5">
              <PenTool className="text-accent-light mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Conception Visuelle</h3>
              <p className="text-text-muted text-sm">Maîtrise des outils de création vectorielle et de retouche d'image.</p>
            </div>
            <div className="p-8 rounded-3xl bg-secondary border border-white/5">
              <Layers className="text-accent-light mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Supports Print</h3>
              <p className="text-text-muted text-sm">Réalisation de flyers, brochures et affiches conformes aux contraintes techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <MosaicGrid sections={sections} accentColor="#3b82f6" />

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
