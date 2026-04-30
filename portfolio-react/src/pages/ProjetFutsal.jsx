import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowLeft, ArrowRight, Camera, Share2, Users, Palette, Globe, ExternalLink } from 'lucide-react'
import MosaicGrid from '../components/MosaicGrid'
import Magnetic from '../components/Magnetic'

export default function ProjetFutsal() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const baseUrl = import.meta.env.BASE_URL

  const sections = [
    {
      tag: 'Identité visuelle', title: 'Branding & Équipements',
      items: [
        { src: `${baseUrl}images/futsal-drancy/logofinal.png`, alt: 'Logo final' },
        { src: `${baseUrl}images/futsal-drancy/planlogo.png`, alt: 'Plan logo' },
        { src: `${baseUrl}images/futsal-drancy/maillotlogovert.png`, alt: 'Maillot vert' },
        { src: `${baseUrl}images/futsal-drancy/logomaillotblanc.png`, alt: 'Maillot blanc' },
        { src: `${baseUrl}images/futsal-drancy/logomaillotnoir.png`, alt: 'Maillot noir' },
        { src: `${baseUrl}images/futsal-drancy/gobelet-01.png`, alt: 'Gobelet design' },
        { src: `${baseUrl}images/futsal-drancy/gobelet-02.png`, alt: 'Gobelet design 2' },
      ]
    },
    {
      tag: 'Communication & Événements', title: 'Affiches & Campagnes',
      items: [
        { src: `${baseUrl}images/futsal-drancy/affiche-tournoi.png`, alt: 'Affiche Tournoi', tall: true },
        { src: `${baseUrl}images/futsal-drancy/afficheldc.png`, alt: 'Affiche LDC' },
        { src: `${baseUrl}images/futsal-drancy/affichelangevin.png`, alt: 'Affiche Langevin' },
        { src: `${baseUrl}images/futsal-drancy/recutement-langevin.png`, alt: 'Recrutement Langevin' },
        { src: `${baseUrl}images/futsal-drancy/recutement-langevin02.png`, alt: 'Recrutement Langevin 2' },
        { src: `${baseUrl}images/futsal-drancy/affiche-equipement.png`, alt: 'Affiche Équipement', tall: true },
        { src: `${baseUrl}images/futsal-drancy/affiche-reunion.png`, alt: 'Affiche Réunion' },
        { src: `${baseUrl}images/futsal-drancy/coursenor.png`, alt: 'Course Or' },
      ]
    },
    {
      tag: 'Vie du Club', title: 'Action Sociale & Festive',
      items: [
        { src: `${baseUrl}images/futsal-drancy/fete-de-la-ville.png`, alt: 'Fête de la ville' },
        { src: `${baseUrl}images/futsal-drancy/fetedenoel01.png`, alt: 'Fête de Noël' },
        { src: `${baseUrl}images/futsal-drancy/affiche-telethon01.png`, alt: 'Téléthon 1' },
        { src: `${baseUrl}images/futsal-drancy/affiche-telethon02.png`, alt: 'Téléthon 2' },
        { src: `${baseUrl}images/futsal-drancy/guiliascup.png`, alt: 'Guilias Cup' },
      ]
    },
    {
      tag: 'Social Media', title: 'Réseaux Sociaux',
      items: [
        { src: `${baseUrl}images/futsal-drancy/1.png`, alt: 'Post 1' },
        { src: `${baseUrl}images/futsal-drancy/2.png`, alt: 'Post 2' },
        { src: `${baseUrl}images/futsal-drancy/3.png`, alt: 'Post 3' },
        { src: `${baseUrl}images/futsal-drancy/5.png`, alt: 'Post 5' },
        { src: `${baseUrl}images/futsal-drancy/7.png`, alt: 'Post 7' },
        { src: `${baseUrl}images/futsal-drancy/12.png`, alt: 'Post 12' },
        { src: `${baseUrl}images/futsal-drancy/13.png`, alt: 'Post 13' },
        { src: `${baseUrl}images/futsal-drancy/14.png`, alt: 'Post 14' },
      ]
    }
  ]

  return (
    <main className="relative bg-transparent min-h-screen">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="grid-overlay" />
      </div>

      {/* Optimized Hero Header */}
      <div className="relative h-[40vh] md:h-[60vh] overflow-hidden" ref={containerRef}>
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-[#0d1525]"
        >
          <img 
            src={`${baseUrl}images/couvertures/futsal-drancy.png`} 
            alt="Futsal Drancy Cover" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end section-container pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter leading-none font-heading">
              Futsal <span className="text-accent-light italic">Drancy.</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Project Meta */}
      <section className="section-container grid grid-cols-2 md:grid-cols-4 gap-8 py-12 md:py-16 border-b border-white/5">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Rôle</span>
          <p className="font-bold text-sm md:text-base">Chargé de Communication</p>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Période</span>
          <p className="font-bold text-sm md:text-base">2024 — Présent</p>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Outils</span>
          <p className="font-bold text-sm md:text-base">Adobe Suite, React</p>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Contexte</span>
          <p className="font-bold text-sm md:text-base">Service Civique & CDD</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-2xl md:text-5xl font-bold mb-10 tracking-tight leading-tight">Structurer la <span className="highlight">communication</span> d'un club de sport.</h2>
            <div className="space-y-6 text-text-muted text-base md:text-lg leading-relaxed">
              <p>
                J'ai rejoint le Futsal Drancy avec pour mission de professionnaliser l'image du club. Du Service Civique au CDD, j'ai mis en place une stratégie globale incluant la création du premier site web officiel.
              </p>
              <div className="pt-6">
                <Magnetic>
                  <a href="https://tharsananarul.github.io/futsal-drancy/#/" target="_blank" rel="noreferrer" className="btn-premium gap-3">
                    Découvrir le site web <ExternalLink size={20} />
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="glass-card p-6 md:p-8 rounded-3xl">
              <Globe className="text-accent-light mb-4" size={28} />
              <h3 className="text-sm md:text-lg font-bold mb-2">Web Design</h3>
              <p className="text-text-muted text-[10px] md:text-xs">Premier site officiel du club.</p>
            </div>
            <div className="glass-card p-6 md:p-8 rounded-3xl">
              <Camera className="text-accent-light mb-4" size={28} />
              <h3 className="text-sm md:text-lg font-bold mb-2">Contenu</h3>
              <p className="text-text-muted text-[10px] md:text-xs">Photos & Vidéos terrain.</p>
            </div>
            <div className="glass-card p-6 md:p-8 rounded-3xl">
              <Users className="text-accent-light mb-4" size={28} />
              <h3 className="text-xs sm:text-sm md:text-lg font-bold mb-2 break-words">Événementiel</h3>
              <p className="text-text-muted text-[10px] md:text-xs">Téléthon & Fête de la ville.</p>
            </div>
            <div className="glass-card p-6 md:p-8 rounded-3xl">
              <Palette className="text-accent-light mb-4" size={28} />
              <h3 className="text-sm md:text-lg font-bold mb-2">Branding</h3>
              <p className="text-text-muted text-[10px] md:text-xs">Équipements & Logo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <MosaicGrid sections={sections} accentColor="#22c55e" />

      {/* Next Project */}
      <section className="section-container py-32 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4 block">Projet suivant</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Alda Bière</h2>
          </div>
          <Magnetic>
            <Link to="/projets/alda" className="btn-premium gap-3 text-lg px-12 py-5">
              Découvrir <ArrowRight size={20} />
            </Link>
          </Magnetic>
        </div>
      </section>
    </main>
  )
}
