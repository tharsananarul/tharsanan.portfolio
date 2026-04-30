import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowLeft, ArrowRight, ExternalLink, Code2, Cpu, Globe, Layout } from 'lucide-react'
import MosaicGrid from '../components/MosaicGrid'
import LazyImage from '../components/ui/LazyImage'

export default function ProjetsUX() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const baseUrl = import.meta.env.BASE_URL
  
  const futsalScreens = [
    { src: `${baseUrl}images/site/futsal-drancy/1.png`, alt: 'Futsal Website 1' },
    { src: `${baseUrl}images/site/futsal-drancy/2.png`, alt: 'Futsal Website 2' },
    { src: `${baseUrl}images/site/futsal-drancy/3.png`, alt: 'Futsal Website 3' },
    { src: `${baseUrl}images/site/futsal-drancy/4.png`, alt: 'Futsal Website 4' },
    { src: `${baseUrl}images/site/futsal-drancy/5.png`, alt: 'Futsal Website 5' },
    { src: `${baseUrl}images/site/futsal-drancy/6.png`, alt: 'Futsal Website 6' },
  ]
  const btsRevision = [
    { src: `${baseUrl}images/site/bts-fdr/1.png`, alt: 'BTS REVISIONS 1' },
    { src: `${baseUrl}images/site/bts-fdr/2.png`, alt: 'BTS REVISIONS 2' },
    { src: `${baseUrl}images/site/bts-fdr/3.png`, alt: 'BTS REVISIONS 3' },
    { src: `${baseUrl}images/site/bts-fdr/4.png`, alt: 'BTS REVISIONS 4' },
  ]
  const hopePower = [
    { src: `${baseUrl}images/site/hope-power/1.png`, alt: 'HopePower 1' },
    { src: `${baseUrl}images/site/hope-power/2.png`, alt: 'HopePower 2' },
    { src: `${baseUrl}images/site/hope-power/3.png`, alt: 'HopePower 3' },
    { src: `${baseUrl}images/site/hope-power/4.png`, alt: 'HopePower 4' },
  ]

  return (
    <main className="relative bg-transparent min-h-screen overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="grid-overlay" />
      </div>

      {/* Hero Header */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden" ref={containerRef}>
        <motion.div style={{ y, height: '100%' }}>
          <LazyImage 
            src={`${baseUrl}images/couvertures/ui-ux-designs.png`} 
            alt="UI/UX Design" 
            className="w-full h-full"
            skeletonClassName="opacity-30"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent z-10" />
        <div className="absolute inset-0 flex flex-col justify-end section-container pb-12 md:pb-20 z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-9xl font-black text-white tracking-tighter uppercase relative inline-block">
              UI/UX <br />
              <span className="text-[var(--color-creative-cyan)] editorial-title-outline mt-2 inline-block">Works.</span>
              <div className="absolute -top-10 -right-20 sticker-shape sticker-yellow rotate-[12deg] hidden md:block">Design</div>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Project Meta */}
      <section className="section-container grid grid-cols-2 md:grid-cols-4 gap-8 py-12 md:py-16 border-b border-white/5">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Expertise</span>
          <p className="font-bold text-sm md:text-base">HTML, CSS, React</p>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Période</span>
          <p className="font-bold text-sm md:text-base">Temps Libre</p>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Outils</span>
          <p className="font-bold text-sm md:text-base">VS Code, Figma</p>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-light/50">Type</span>
          <p className="font-bold text-sm md:text-base">Projets Personnels</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-container py-16 md:py-24">
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-5xl font-bold mb-8 tracking-tight">Expérimentations et <span className="highlight">développement web</span>.</h2>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-12">
            Réalisés durant mon temps libre, ces projets m'ont permis de perfectionner mes compétences techniques en développement front-end et en design d'interfaces interactives.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-secondary border border-white/5 group hover:border-accent-light/30 transition-all">
              <Code2 className="text-accent-light mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">HTML & CSS</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Maîtrise des structures sémantiques et des mises en page complexes (Flexbox, Grid) pour des interfaces fluides et responsives.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-secondary border border-white/5 group hover:border-accent-light/30 transition-all">
              <Cpu className="text-accent-light mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">React & JS</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Développement d'applications web modernes utilisant React pour une gestion dynamique de l'état et des interactions fluides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study: Futsal Website */}
      <section className="section-container py-20 md:py-32 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-light mb-4 block">Développement & Design</span>
            <h2 className="text-2xl md:text-6xl font-bold mb-8 tracking-tighter">Site Web Futsal Drancy</h2>
            <p className="text-base md:text-xl text-text-muted leading-relaxed mb-10">
              Conception intégrale du premier site officiel du club. Utilisation de technologies modernes pour offrir une expérience fluide, de la présentation des équipes aux inscriptions en ligne.
            </p>
            <a href="https://tharsananarul.github.io/futsal-drancy/#/" target="_blank" rel="noreferrer" className="btn-premium gap-3">
              Voir le site live <ExternalLink size={20} />
            </a>
          </div>
        </div>
        <MosaicGrid sections={[{ items: futsalScreens }]} accentColor="#22d3ee" />
      </section>

      {/* Case Studies */}
      <section className="section-container py-20 md:py-32 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-light mb-4 block">Plateforme Web</span>
            <h2 className="text-2xl md:text-6xl font-bold mb-8 tracking-tighter">BTS Révision</h2>
            <p className="text-base md:text-xl text-text-muted leading-relaxed mb-10">
              Conception d'une plateforme de révision complète pour les étudiants. Focus sur l'organisation des ressources et la facilité de navigation sur mobile.
            </p>
            <a href="https://tharsananarul.github.io/fdr-bts-com/" target="_blank" rel="noreferrer" className="btn-premium gap-3">
              Voir le site live <ExternalLink size={20} />
            </a>
          </div>
        </div>
        <MosaicGrid sections={[{ items: btsRevision }]} accentColor="#22d3ee" />
      </section>

      <section className="section-container py-20 md:py-32 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-light mb-4 block">Mockup UI/UX</span>
            <h2 className="text-2xl md:text-6xl font-bold mb-8 tracking-tighter">HopePower</h2>
            <p className="text-base md:text-xl text-text-muted leading-relaxed mb-10">
              Prototype haute-fidélité réalisé dans le cadre de mon BTS Communication pour un projet d'études. Conception d'une interface mobile pour un site solidaire fictif, avec un focus sur le parcours utilisateur (UX flow) et la cohérence visuelle.
            </p>
            <a href="https://tharsananarul.github.io/hopepower/" target="_blank" rel="noreferrer" className="btn-premium gap-3">
              Voir le mockup live <ExternalLink size={20} />
            </a>
          </div>
        </div>
        <MosaicGrid sections={[{ items: hopePower }]} accentColor="#22d3ee" />
      </section>

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
