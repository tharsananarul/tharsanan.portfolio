import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowLeft, ArrowRight, ExternalLink, Beer, Palette, BarChart3 } from 'lucide-react'
import MosaicGrid from '../components/MosaicGrid'

export default function ProjetAlda() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const baseUrl = import.meta.env.BASE_URL
  
  const sections = [{
    items: [
      { src: `${baseUrl}images/alda/affichemockup.jpg`, alt: 'Affiche mockup', tall: true },
      { src: `${baseUrl}images/alda/bouteille1.jpg`, alt: 'Bouteille Alda' },
      { src: `${baseUrl}images/alda/bouteille2.jpg`, alt: 'Bouteille 2' },
      { src: `${baseUrl}images/alda/bouteille3.jpg`, alt: 'Bouteille 3' },
      { src: `${baseUrl}images/alda/bouteille4.jpg`, alt: 'Bouteille 4' },
      { src: `${baseUrl}images/alda/bouteille5.jpg`, alt: 'Bouteille 5' },
      { src: `${baseUrl}images/alda/bouteille6.jpg`, alt: 'Bouteille 6' },
      { src: `${baseUrl}images/alda/site-mockup.png`, alt: 'Site mockup', wide: true },
      { src: `${baseUrl}images/alda/aldaaccueil.png`, alt: 'Page accueil' },
      { src: `${baseUrl}images/alda/aldalandingpage.jpg`, alt: 'Landing page' },
      { src: `${baseUrl}images/alda/pageproduit.jpg`, alt: 'Page produit' },
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
          src={`${baseUrl}images/couvertures/alda.png`} 
          alt="Alda Bière" 
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
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter font-heading">
              Alda <span className="text-accent-light italic">Bière.</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Project Meta */}
      <section className="section-container grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-white/5">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Rôle</span>
          <p className="font-bold text-sm md:text-base">Branding & Packaging</p>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Période</span>
          <p className="font-bold text-sm md:text-base">Jan. 2023 – Juin 2023</p>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Outils</span>
          <p className="font-bold text-sm md:text-base">Illustrator, Photoshop</p>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Type</span>
          <p className="font-bold text-sm md:text-base">Projet universitaire</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-container py-24">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight">Concept de marque <span className="highlight">artisanale</span>.</h2>
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                Projet collaboratif visant à créer une identité de marque complète pour une nouvelle bière artisanale. Nous avons conceptualisé les valeurs, le positionnement et le public cible de la marque.
              </p>
              <p>
                Mon rôle s'est concentré sur la création du logo, des étiquettes et du packaging, en veillant à ce que chaque élément visuel reflète l'histoire et l'authenticité de la bière Alda.
              </p>
            </div>
          </div>
          <div className="grid gap-8">
            <div className="p-8 rounded-3xl bg-secondary border border-white/5 group hover:border-accent-light/30 transition-all">
              <Beer className="text-accent-light mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Branding & Design</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Développement d'un nom évocateur et d'un univers visuel cohérent sur tous les supports promotionnels (affiches, réseaux sociaux).
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-secondary border border-white/5 group hover:border-accent-light/30 transition-all">
              <BarChart3 className="text-accent-light mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Marketing & Lancement</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Élaboration d'un plan de lancement complet incluant une stratégie de communication et l'organisation d'une dégustation fictive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <MosaicGrid sections={sections} accentColor="#facc15" />

      {/* Next Project */}
      <section className="section-container py-32 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4 block">Projet suivant</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Sans Bavures</h2>
          </div>
          <Link to="/projets/sans-bavures" className="btn-premium gap-3 text-lg px-12 py-5">
            Découvrir <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  )
}
