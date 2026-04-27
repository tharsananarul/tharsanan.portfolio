import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Linkedin, Send, MessageSquare, Phone, Sparkles, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import Magnetic from '../components/Magnetic'
import PageHero from '../components/PageHero'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle, sending, success, error
  const linkedinUrl = "https://www.linkedin.com/in/tharsanan-arulananthaselvam/"

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/412d984908829a738c7bafb37a72fb4c", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        const errorData = await response.json()
        console.error('FormSubmit Error:', errorData)
        setStatus('error')
      }
    } catch (error) {
      console.error('Fetch Error:', error)
      setStatus('error')
    }
  }

  return (
    <main className="relative pb-20 bg-transparent min-h-screen overflow-hidden">
      <PageHero
        tag="Contact"
        title={<>Parlons de votre <br /><span className="text-accent-light italic">prochain projet.</span></>}
        subtitle="Que vous ayez une idée précise ou que vous souhaitiez explorer des possibilités, je suis là pour vous accompagner."
        compact
      />

      <section className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left Column: Info */}
          <div>
            <div className="space-y-8">
              {[
                { icon: <Mail />, label: "Email", val: "tharsananarul@gmail.com", href: "mailto:tharsananarul@gmail.com" },
                { icon: <Linkedin />, label: "LinkedIn", val: "Tharsanan Arul", href: linkedinUrl },
                { icon: <Phone />, label: "Téléphone", val: "07 49 87 87 75", href: "tel:+33749878775" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.8 }}
                >
                  <Magnetic>
                    <a href={item.href} target={item.href.startsWith('http') ? "_blank" : "_self"} rel="noreferrer" className="flex items-center gap-6 group">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-accent-light/40 transition-all shadow-xl group-hover:scale-110 duration-500">
                        <div className="text-accent-light">{item.icon}</div>
                      </div>
                      <div>
                        <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mb-1">{item.label}</p>
                        <p className="text-lg font-bold group-hover:text-accent-light transition-colors">{item.val}</p>
                      </div>
                    </a>
                  </Magnetic>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 md:p-12 rounded-[3.5rem] bg-card/50 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-3xl"
          >
            <div className="absolute top-0 right-0 p-8 text-white/5 -rotate-12 translate-x-4 -translate-y-4">
              <MessageSquare size={120} />
            </div>
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative z-10 flex flex-col items-center justify-center py-20 text-center space-y-6"
                >
                  <div className="p-6 rounded-full bg-accent-light/10 text-accent-light">
                    <CheckCircle2 size={60} />
                  </div>
                  <h3 className="text-3xl font-bold">Message envoyé !</h3>
                  <p className="text-text-muted max-w-xs mx-auto">Merci pour votre message. Je reviens vers vous très rapidement.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-accent-light font-bold hover:underline mt-4"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative z-10 space-y-8"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">Nom complet</label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent-light transition-all text-white placeholder:text-slate-600 focus:bg-white/10"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">Email</label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent-light transition-all text-white placeholder:text-slate-600 focus:bg-white/10"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">Sujet</label>
                    <input 
                      name="subject"
                      type="text" 
                      placeholder="Collaboration, Opportunité, Question..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent-light transition-all text-white placeholder:text-slate-600 focus:bg-white/10"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">Message</label>
                    <textarea 
                      required
                      name="message"
                      rows="5"
                      placeholder="Comment puis-je vous aider ?"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-accent-light transition-all text-white placeholder:text-slate-600 resize-none focus:bg-white/10"
                    ></textarea>
                  </div>

                  <Magnetic>
                    <button 
                      type="submit" 
                      disabled={status === 'sending'}
                      className="btn-premium w-full gap-3 text-lg py-6 shadow-xl shadow-accent-light/10 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer le message 
                          <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </Magnetic>
                  {status === 'error' && (
                    <p className="text-red-400 text-xs text-center">Une erreur est survenue. Veuillez réessayer.</p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
