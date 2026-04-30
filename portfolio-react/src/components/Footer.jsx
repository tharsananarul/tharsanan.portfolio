import { Link } from 'react-router-dom'
import { Github, Linkedin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const linkedinUrl = "https://www.linkedin.com/in/tharsanan-arulananthaselvam/"
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black pt-12 pb-8 relative z-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-xs">
            <Link to="/" className="logo mb-8 p-3 inline-flex items-center justify-center bg-white border-4 border-black shadow-[6px_6px_0_0_#000] rotate-[-2deg] hover:rotate-0 transition-all font-black text-4xl md:text-6xl uppercase tracking-tighter text-black">
              T<span className="text-[var(--color-creative-pink)]">.</span>
            </Link>
            <p className="text-white text-sm md:text-base font-bold uppercase tracking-tight leading-relaxed mb-8">
              Étudiant en BTS Communication au Lycée Jacques Brel. 
              Communication digitale & design graphique.
            </p>
            <div className="flex items-center gap-5">
              <a href="https://www.linkedin.com/in/tharsanan-arulananthaselvam/" target="_blank" rel="noreferrer" className="p-3 rounded-none bg-white/5 border-2 border-black shadow-[4px_4px_0_0_#000] hover:bg-[var(--color-creative-cyan)] transition-all hover:text-white" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/tharsananarul" target="_blank" rel="noreferrer" className="p-3 rounded-none bg-white/5 border-2 border-black shadow-[4px_4px_0_0_#000] hover:bg-[var(--color-creative-pink)] transition-all hover:text-white" title="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div>
              <h4 className="inline-block px-3 py-1 bg-[var(--color-creative-pink)] text-black font-black text-lg md:text-xl uppercase mb-8 rotate-[-1deg] border-2 border-black shadow-[4px_4px_0_0_#000]">Navigation</h4>
              <ul className="space-y-4 text-white text-sm md:text-base font-bold uppercase tracking-widest opacity-80">
                <li><Link to="/" className="hover:text-[var(--color-creative-pink)] transition-colors">Accueil</Link></li>
                <li><Link to="/projets" className="hover:text-[var(--color-creative-yellow)] transition-colors">Projets</Link></li>
                <li><Link to="/cv" className="hover:text-[var(--color-creative-cyan)] transition-colors">CV</Link></li>
                <li><Link to="/competences" className="hover:text-[var(--color-creative-pink)] transition-colors">Compétences</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="inline-block px-3 py-1 bg-[var(--color-creative-cyan)] text-black font-black text-lg md:text-xl uppercase mb-8 rotate-[2deg] border-2 border-black shadow-[4px_4px_0_0_#000]">Contact</h4>
              <ul className="space-y-4 text-white text-sm md:text-base font-bold tracking-tight opacity-80">
                <li><a href="mailto:tharsananarul@gmail.com" className="hover:text-[var(--color-creative-pink)] transition-colors block break-all">tharsananarul@gmail.com</a></li>
                <li><a href="tel:0749878775" className="hover:text-[var(--color-creative-cyan)] transition-colors">07 49 87 87 75</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5">
          <p className="text-sm md:text-base text-white font-black uppercase tracking-tight">
            © 2026 Tharsanan Arulananthaselvam — BTS Communication.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-bold text-text-muted hover:text-white transition-colors group"
          >
            Retour en haut 
            <div className="p-2 rounded-full border border-white/10 group-hover:bg-accent-light/20 transition-all">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}
