import { motion } from 'framer-motion'
import { Download, GraduationCap, Briefcase, MapPin, Sparkles } from 'lucide-react'
import Magnetic from '../components/Magnetic'
import PageHero from '../components/PageHero'
import LazyImage from '../components/ui/LazyImage'

const education = [
  {
    period: "2025 — 2026",
    title: "BTS Communication",
    location: "Lycée Jacques Brel · La Courneuve",
    desc: "Mise en œuvre d'actions de communication, relations avec les prestataires, veille technologique et design graphique."
  },
  {
    period: "2022 — 2024",
    title: "BUT Métiers du Multimédia et de l'Internet",
    location: "IUT de Sénart-Fontainebleau",
    desc: "Développement web, UI/UX Design, audiovisuel et communication multimédia."
  },
  {
    period: "2019 — 2022",
    title: "Bac STI2D",
    location: "Lycée Paul Le Rolland · Drancy",
    desc: "Spécialité Systèmes d'Information et Numérique."
  }
]

const experiences = [
  {
    period: "Sept. 2024 — Présent",
    title: "Communication & Design Graphique",
    company: "Futsal Drancy",
    location: "Drancy",
    type: "Stage | Service Civique | Bénévolat",
    missions: [
      "Bénévole (Depuis Janv. 2026) : Soutien événementiel et animation de communauté.",
      "Service Civique (Sept. 2024 — Mai 2025) : Gestion des réseaux sociaux et création de contenu digital.",
      "Stagiaire Communication (Mai — Juin 2025 & Nov — Déc 2025) : Stratégie de visibilité et supports print."
    ]
  },
  {
    period: "Août 2024 — Janvier 2026",
    title: "Chargé de Clientèle",
    company: "La Banque Postale",
    location: "Le Blanc-Mesnil",
    type: "CDI",
    missions: [
      "Accueil et orientation des clients avec professionnalisme",
      "Vente de produits et services postaux (solutions adaptées)",
      "Gestion du tri et de la distribution sécurisée des colis et lettres"
    ]
  },
  {
    period: "Mars 2023 — Présent",
    title: "Community Manager — Photographe",
    company: "Objectif Sciences International",
    location: "Paris & Genève",
    type: "Stage | Bénévolat",
    missions: [
      "Stagiaire (Mars — Avril 2023) puis Bénévole (Depuis Mai 2023).",
      "Couverture photographique et vidéo du Forum de Genève au Palais des Nations (ONU).",
      "Gestion des réseaux sociaux et valorisation des actions de diplomatie scientifique.",
      "Réalisation d'interviews de délégués internationaux et chercheurs pour Terra Scientifica.",
      "Création de contenus digitaux pour promouvoir l'éducation aux sciences participatives.",
      "Soutien à la communication événementielle lors de salons et conférences internationales."
    ]
  },
  {
    period: "Sept. 2023 — Présent",
    title: "Tuteur Indépendant",
    company: "Parkours",
    location: "Paris",
    type: "Indépendant",
    missions: [
      "Accompagnement et soutien pédagogique des élèves",
      "Aide à l'organisation et optimisation des méthodes d'apprentissage"
    ]
  }
]

export default function CV() {
  return (
    <main className="relative pb-20 bg-gradient-to-b from-primary via-[#0f172a]/80 to-primary min-h-screen overflow-hidden">
      <PageHero
        tag="Expérience & Formation"
        title={<>Mon <span className="text-[var(--color-creative-blue)] uppercase font-black" style={{ WebkitTextStroke: '1px white' }}>Parcours.</span></>}
        subtitle="Une trajectoire mêlant expertise technique, communication stratégique et passion pour le design."
        compact={true}
        themeColor="blue"
      />


      {/* Background patterns & Creative Blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="grid-overlay opacity-20" />
        
        {/* Large creative blobs - Hidden on mobile to save GPU performance */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="hidden md:block absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[var(--color-creative-blue)]/10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0], 
            y: [0, 100, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="hidden md:block absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] bg-[var(--color-creative-cyan)]/10 blur-[100px] rounded-full"
        />
        <motion.div 
          animate={{ 
            rotate: 360
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="hidden md:block absolute top-[40%] left-[20%] w-[30%] h-[30%] bg-[var(--color-creative-yellow)]/5 blur-[150px] rounded-full"
        />

        {/* Decorative floating icons removed as requested */}
      </div>

      {/* Main Content Section */}
      <section className="section-container relative z-10 -mt-4 md:-mt-8">
        {/* Download button */}
        <div className="mt-12 mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Magnetic>
              <a href={`${import.meta.env.BASE_URL}documents/cv-tharsanan-final.pdf`} download className="btn-premium gap-3 text-lg px-10 py-5 group">
                <Download size={22} className="group-hover:translate-y-1 transition-transform" /> 
                Télécharger mon CV
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32">
          {/* EDUCATION */}
          <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="p-4 rounded-2xl bg-accent-light/10 border border-accent-light/20 shadow-[0_0_20px_rgba(188,217,245,0.1)]">
                <GraduationCap className="text-accent-light" size={28} />
              </div>
              <h2 className="text-2xl md:text-5xl font-black tracking-tighter uppercase">
                Ma <br />
                <span className="text-[var(--color-creative-yellow)]" style={{ WebkitTextStroke: '2px white' }}>Formation</span>
              </h2>
            </motion.div>

            <div className="space-y-6 md:space-y-12 relative">
              <div className="sticker-shape sticker-yellow absolute -top-10 md:-top-24 -right-2 md:-right-20 rotate-[15deg] z-20">Diploma</div>
              {education.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white p-4 sm:p-6 md:p-8 rounded-none border-2 sm:border-4 border-black shadow-[4px_4px_0_0_var(--color-creative-cyan)] md:shadow-[8px_8px_0_0_var(--color-creative-cyan)] group hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_var(--color-creative-cyan)] md:hover:shadow-[4px_4px_0_0_var(--color-creative-cyan)] transition-all duration-500"
                >
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] text-[var(--color-creative-blue)] mb-1 sm:mb-2 block">{item.period}</span>
                  <h3 className="text-base sm:text-xl md:text-2xl font-black mb-1 sm:mb-2 uppercase tracking-tighter text-black leading-tight">{item.title}</h3>
                  <div className="flex items-center gap-1 sm:gap-2 text-gray-500 text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-4 font-bold">
                    <MapPin size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4" /> {item.location}
                  </div>
                  <p className="text-gray-700 text-[10px] sm:text-xs md:text-sm leading-snug sm:leading-relaxed max-w-md font-bold">{item.desc}</p>
                </motion.div>
              ))}

              {/* Realistic 3D Flyer Preview at the bottom of Education */}
              <div className="mt-24 relative flex justify-center md:justify-start perspective-[1500px]">
                <motion.div
                  initial={{ opacity: 0, rotateX: 45, rotateZ: -10, y: 100, scale: 0.8 }}
                  whileInView={{ opacity: 1, rotateX: 25, rotateZ: -12, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 40,
                    damping: 15,
                    delay: 0.2
                  }}
                  className="relative group cursor-pointer"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Intense Outer Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-[var(--color-creative-yellow)] blur-[100px] opacity-20 group-hover:opacity-50 transition-all duration-700 -z-20 rounded-[2rem]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[var(--color-creative-orange)] blur-[80px] opacity-10 group-hover:opacity-40 transition-all duration-700 -z-20 rounded-[2rem]" />

                  {/* Elegant Glass Backing - perfectly sized to the flyer */}
                  <div className="absolute -inset-8 -z-10 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] transform-gpu">
                    {/* Decorative corner marks */}
                    <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/20" />
                    <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/20" />
                    <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/20" />
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/20" />
                    
                    {/* Subtle internal glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-creative-yellow)]/20 to-[var(--color-creative-orange)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                  </div>

                  {/* Main CV Flyer Link */}
                  <a href={`${import.meta.env.BASE_URL}documents/cv-tharsanan-final.pdf`} target="_blank" rel="noreferrer" className="block relative">
                    {/* Shadow under the flyer */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[110%] h-12 bg-black/50 blur-3xl rounded-[100%] scale-x-110 opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
                    
                    {/* The Flyer itself */}
                    <div className="relative w-64 md:w-80 rounded-sm overflow-hidden border-[6px] border-white shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:-translate-y-4">
                      <LazyImage 
                        src={`${import.meta.env.BASE_URL}images/cv/cv-tharsanan-final.png`} 
                        alt="CV Tharsanan Preview" 
                        className="w-full h-auto"
                      />
                    </div>

                    <div className="sticker-shape sticker-yellow absolute -top-10 -right-10 rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110 shadow-xl z-30">
                      Voir le CV
                    </div>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="relative">
            <div className="max-w-full mx-auto relative z-10">
              {/* EXPERIENCE HEADER */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12"
              >
                <div className="p-4 rounded-none bg-white border-4 border-black shadow-[6px_6px_0_0_#000]">
                  <Briefcase className="text-black" size={28} />
                </div>
                <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase text-white">
                  Mon <br />
                  <span className="bg-[var(--color-creative-blue)] px-3 inline-block rotate-1 border-2 border-white shadow-[4px_4px_0_0_#fff]">Expérience</span>
                </h2>
              </motion.div>

              <div className="space-y-6 md:space-y-16 relative">
                <div className="sticker-shape sticker-cyan absolute -top-10 md:-top-24 -right-2 md:-right-16 rotate-[15deg] z-20">Pro</div>
                {experiences.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white p-4 sm:p-6 md:p-12 rounded-none border-2 sm:border-4 border-black shadow-[6px_6px_0_0_var(--color-creative-yellow)] md:shadow-[12px_12px_0_0_var(--color-creative-yellow)] group hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_0_var(--color-creative-yellow)] md:hover:shadow-[6px_6px_0_0_var(--color-creative-yellow)] transition-all duration-500"
                  >
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] text-[var(--color-creative-blue)] mb-2 md:mb-3 block">{item.period}</span>
                    
                    <div className="mb-4 md:mb-8">
                      <h3 className="text-base sm:text-xl md:text-2xl font-black mb-1 sm:mb-2 uppercase tracking-tighter text-black leading-tight">{item.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 md:gap-4">
                        <span className="text-base sm:text-xl font-black text-black">{item.company}</span>
                        <span className="px-2 py-1 sm:px-4 sm:py-1.5 rounded-none border sm:border-2 border-black bg-[var(--color-creative-cyan)] text-[8px] sm:text-[10px] font-black uppercase text-black tracking-wider">
                          {item.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 text-gray-500 text-[10px] sm:text-xs md:text-sm mt-2 sm:mt-4 font-bold">
                        <MapPin size={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4" /> {item.location}
                      </div>
                    </div>

                    <ul className="space-y-2 sm:space-y-4">
                      {item.missions.map((mission, idx) => (
                        <li key={idx} className="text-gray-700 text-[11px] sm:text-sm md:text-base flex items-start gap-2 sm:gap-4 font-bold leading-snug sm:leading-relaxed">
                          <span className="mt-1.5 sm:mt-2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-none bg-black shrink-0" />
                          {mission}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 md:mt-32 p-8 md:p-24 rounded-[2.5rem] md:rounded-[3.5rem] bg-secondary/50 border border-white/5 text-center relative overflow-hidden group shadow-2xl backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-accent-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-[14px] sm:text-xl md:text-5xl font-bold mb-6 md:mb-10 italic tracking-tight leading-snug md:leading-tight">
              "L'innovation est le fruit d'une <span className="highlight">curiosité constante</span> et d'une rigueur créative."
            </h2>

            <p className="text-text-muted text-[11px] sm:text-sm md:text-xl mb-8 md:mb-12 leading-relaxed font-medium">
              Chaque étape de mon parcours a été guidée par l'envie d'apprendre et de relever des défis. 
              Je suis prêt à mettre cette expérience au service de vos projets.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {[
                { name: "Autonomie", color: "text-blue-300", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "shadow-[0_0_15px_rgba(59,130,246,0.15)]" },
                { name: "Travail d'équipe", color: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "shadow-[0_0_15px_rgba(16,185,129,0.15)]" },
                { name: "Adaptabilité", color: "text-violet-300", bg: "bg-violet-500/10", border: "border-violet-500/20", glow: "shadow-[0_0_15px_rgba(139,92,246,0.15)]" },
                { name: "Rigueur", color: "text-amber-300", bg: "bg-amber-500/10", border: "border-amber-500/20", glow: "shadow-[0_0_15px_rgba(245,158,11,0.15)]" },
                { name: "Créativité", color: "text-orange-300", bg: "bg-orange-500/10", border: "border-orange-500/20", glow: "shadow-[0_0_15px_rgba(249,115,22,0.15)]" }
              ].map(skill => (
                <Magnetic key={skill.name}>
                  <div className={`px-5 py-2.5 md:px-8 md:py-4 rounded-full ${skill.bg} ${skill.border} border ${skill.glow} text-xs md:text-sm font-bold ${skill.color} hover:scale-105 transition-all cursor-default`}>
                    {skill.name}
                  </div>
                </Magnetic>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
