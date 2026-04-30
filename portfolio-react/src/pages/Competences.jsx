import { motion } from 'framer-motion'
import { Wrench, Shield, Zap, Globe, Layout, Palette, Code2, Globe2, Sparkles } from 'lucide-react'
import Magnetic from '../components/Magnetic'
import PageHero from '../components/PageHero'

const skills = [
  { title: "Design Graphique", icon: <Palette size={24} />, desc: "Maîtrise de la suite Adobe (Ps, Ai, Id) pour créer des visuels percutants." },
  { title: "Développement Web", icon: <Code2 size={24} />, desc: "Conception de sites modernes avec React, HTML5 et CSS3/Tailwind." },
  { title: "Communication", icon: <Globe size={24} />, desc: "Élaboration de stratégies de com et gestion des réseaux sociaux." },
  { title: "UI/UX Design", icon: <Layout size={24} />, desc: "Création d'interfaces intuitives centrées sur l'utilisateur." },
  { title: "Motion Design", icon: <Zap size={24} />, desc: "Animations fluides avec After Effects pour dynamiser vos contenus." },
  { title: "Maîtrise des outils", icon: <Wrench size={24} />, desc: "À l'aise avec les logiciels de création, de communication et de gestion." },
]

export default function Competences() {
  const baseUrl = import.meta.env.BASE_URL
  
  const languages = [
    { name: "Français", level: 100, info: "Bilingue — C2", flag: "https://flagcdn.com/w320/fr.png" },
    { name: "Anglais", level: 85, info: "Intermédiaire — B2", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Tamoul", level: 100, info: "Langue maternelle — C2", flag: `${baseUrl}images/te-flag/tamil-eelam.png` },
    { name: "Allemand", level: 25, info: "Débutant — A1", flag: "https://flagcdn.com/w320/de.png" },
  ]

  const software = [
    { name: "Photoshop", level: 75, abbr: "Ps", color: "#31A8FF", desc: "Retouche photo, montage, création visuelle" },
    { name: "After Effects", level: 50, abbr: "Ae", color: "#CF96FD", desc: "Motion design, animations" },
    { name: "Premiere Pro", level: 60, abbr: "Pr", color: "#EA77FF", desc: "Montage vidéo, édition professionnelle" },
    { name: "Illustrator", level: 70, abbr: "Ai", color: "#FF9A00", desc: "Création vectorielle, logos, affiches" },
    { name: "InDesign", level: 60, abbr: "Id", color: "#FF3366", desc: "Mise en page, supports print" },
    { name: "Canva", level: 100, abbr: "Cv", color: "#00C4CC", desc: "Création rapide et efficace" },
    { name: "WordPress", level: 75, abbr: "Wp", color: "#21759B", desc: "Rédaction et gestion de contenu" },
    { name: "HTML & CSS", level: 70, abbr: "</>", color: "#E34F26", desc: "Structure et style web moderne" },
  ]

  return (
    <main className="relative pb-20 overflow-hidden bg-transparent">
      <PageHero
        tag="Expertise"
        title={<>Mes <span className="text-[var(--color-creative-pink)] uppercase font-black" style={{ WebkitTextStroke: '1px white' }}>Compétences.</span></>}
        subtitle="Un mix polyvalent entre design créatif, communication stratégique et développement technique."
        themeColor="cyan"
      />


      {/* Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>


      <section className="section-container relative z-10">
        {/* Core Skills Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-32 relative">
          {/* Stickers */}
          <div className="sticker-shape sticker-pink absolute -top-12 -left-4 rotate-[-10deg] z-20">Creative</div>
          <div className="sticker-shape sticker-yellow absolute -bottom-12 -right-4 rotate-[15deg] z-20">Technical</div>

          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`p-4 md:p-8 rounded-none border-4 border-black shadow-[8px_8px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#000] transition-all duration-500 group ${
                i % 4 === 0 ? 'bg-white' : 
                i % 4 === 1 ? 'bg-[#f0f9ff]' : 
                i % 4 === 2 ? 'bg-[#fffbeb]' : 
                'bg-[#fef2f2]'
              }`}
            >
              <div className={`w-10 h-10 md:w-14 md:h-14 rounded-none border-2 border-black flex items-center justify-center mb-4 md:mb-8 transition-all duration-500 transform group-hover:rotate-6 shadow-[4px_4px_0_0_#000] ${
                i % 3 === 0 ? 'bg-[var(--color-creative-pink)] text-white' : 
                i % 3 === 1 ? 'bg-[var(--color-creative-yellow)] text-black' : 
                'bg-[var(--color-creative-cyan)] text-black'
              }`}>
                {skill.icon}
              </div>
              <h3 className="text-[11px] sm:text-[14px] md:text-2xl font-black mb-2 md:mb-4 uppercase tracking-tighter text-black break-words hyphens-auto leading-tight">{skill.title}</h3>
              <p className="text-gray-700 leading-tight md:leading-relaxed text-[10px] md:text-sm font-bold">{skill.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Software Section */}
        <div className="mb-32">
          <h2 className="text-2xl md:text-6xl font-black mb-16 tracking-tighter uppercase">
            Logiciels <br />
            <span className="text-[var(--color-creative-cyan)]" style={{ WebkitTextStroke: '2px white' }}>maîtrisés</span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 relative">
             <div className="sticker-shape sticker-cyan absolute -top-8 -right-4 rotate-[-5deg] z-20">Tools</div>

            {software.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.8 }}
                className={`p-4 md:p-8 rounded-none border-4 border-black shadow-[8px_8px_0_0_#000] flex flex-col h-full group hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#000] transition-all duration-300 ${
                  i % 2 === 0 ? 'bg-white' : 'bg-[#f8f8f2]'
                }`}
              >
                <div className="flex items-center justify-between mb-4 md:mb-8">
                  <div 
                    className="w-10 h-10 md:w-14 md:h-14 rounded-none border-2 border-black flex items-center justify-center text-lg md:text-2xl font-black shadow-[4px_4px_0_0_#000] transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundColor: item.color, color: 'white' }}
                  >
                    {item.abbr}
                  </div>
                </div>
                <h3 className="text-[10px] sm:text-[14px] md:text-xl font-black mb-1 md:mb-3 uppercase tracking-tighter text-black break-words hyphens-auto leading-tight">{item.name}</h3>
                <p className="text-gray-600 text-[9px] md:text-sm mb-3 md:mb-6 leading-tight md:leading-relaxed font-bold">
                  {item.desc}
                </p>
                <div className="mt-auto">
                  <div className="h-3 w-full bg-black/10 rounded-none overflow-hidden border border-black">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                      className="h-full rounded-none"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div>
          <h2 className="text-2xl md:text-6xl font-black mb-16 tracking-tighter uppercase">
            Langues <br />
            <span className="bg-[var(--color-creative-yellow)] text-black px-3 inline-block -rotate-1 border-2 border-black shadow-[4px_4px_0_0_var(--color-creative-pink)]">parlées</span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {languages.map((lang, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex flex-col md:flex-row md:items-center gap-3 md:gap-6 group hover:border-accent-light/40 transition-all duration-500"
              >
                <div className="w-8 h-6 md:w-16 md:h-12 rounded-md md:rounded-xl overflow-hidden shadow-lg border border-white/10 group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                  <img src={lang.flag} alt={lang.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-[10px] sm:text-[12px] md:text-lg font-bold mb-0.5 md:mb-1">{lang.name}</h3>
                  <p className="text-accent-light text-[7px] sm:text-[8px] md:text-[10px] font-bold uppercase tracking-widest leading-tight">{lang.info}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
