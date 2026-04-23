import { motion, AnimatePresence } from 'framer-motion'
import { Bike, Camera, Car, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useRef, Suspense, useState, useEffect, useMemo, useCallback } from 'react'
import * as THREE from 'three'
import { Float, Environment } from '@react-three/drei'

function Car3D() {
  const baseUrl = import.meta.env.BASE_URL
  const texture = useLoader(THREE.TextureLoader, `${baseUrl}images/bmw_premium_bg.png`)
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.2
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
      <mesh ref={meshRef} scale={2.5}>
        <planeGeometry args={[16, 16]} />
        <meshBasicMaterial map={texture} transparent opacity={0.3} />
      </mesh>
    </Float>
  )
}

const passions = [
  {
    id: "bmw",
    title: "BMW & Design",
    subtitle: "Ingénierie & Performance",
    desc: "Passionné par les lignes de la marque à l'hélice, je vois dans chaque modèle une fusion parfaite entre technologie de pointe et esthétique pure.",
    icon: Car,
    color: "text-blue-400",
    bg: "rgba(37, 99, 235, 0.05)",
    hasMore: false
  },
  {
    id: "velo",
    title: "Cyclisme",
    subtitle: "Liberté & Endurance",
    desc: "Le vélo est mon échappatoire. C'est le dépassement de soi, la découverte de nouveaux horizons et une source d'énergie inépuisable.",
    icon: Bike,
    color: "text-emerald-400",
    bg: "rgba(16, 185, 129, 0.05)",
    hasMore: false
  },
  {
    id: "photo",
    title: "Photographie",
    subtitle: "Instants & Lumière",
    desc: "À travers l'objectif, je cherche à capturer l'invisible. La photo nourrit mon œil de communicant et mon sens du détail.",
    icon: Camera,
    color: "text-purple-400",
    bg: "rgba(168, 85, 247, 0.05)",
    hasMore: true
  }
]

// Photo data: thumbnail for grid, full for lightbox
const PHOTO_DATA = [
  { file: 'IMG_1717', ext: 'jpg' },
  { file: 'IMG_1718', ext: 'jpg' },
  { file: 'IMG_1727', ext: 'jpg' },
  { file: 'IMG_1729', ext: 'jpg' },
  { file: 'IMG_1693', ext: 'jpg' },
  { file: 'IMG_0909', ext: 'jpg' },
  { file: 'IMG_0910', ext: 'jpg' },
  { file: 'IMG_2811', ext: 'jpg' },
  { file: 'IMG_2812', ext: 'jpg' },
  { file: 'IMG_2813', ext: 'jpg' },
  { file: '053a153c-0145-46ee-b38e-17f9cf95a3c3', ext: 'jpg' },
  { file: '898500a0-9c3b-4ccd-9abe-c54dfdf14969', ext: 'jpg' },
  { file: 'IMG_0915 (1)', ext: 'jpg' },
]

export default function PassionSection() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const scrollRef = useRef(null)
  const baseUrl = import.meta.env.BASE_URL

  // Lock scroll when gallery or lightbox is open
  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      setLightboxIndex(null)
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isGalleryOpen])

  // Reset scroll to top when gallery opens
  useEffect(() => {
    if (isGalleryOpen && scrollRef.current) {
      scrollRef.current.scrollTop = 0
    }
  }, [isGalleryOpen])

  // Keyboard nav for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') setLightboxIndex(i => (i + 1) % PHOTO_DATA.length)
      if (e.key === 'ArrowLeft') setLightboxIndex(i => (i - 1 + PHOTO_DATA.length) % PHOTO_DATA.length)
      if (e.key === 'Escape') setLightboxIndex(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex])

  const getThumb = useCallback((photo) => {
    return `${baseUrl}images/photographie/thumbs/${photo.file}.webp`
  }, [baseUrl])

  const getFull = useCallback((photo) => {
    return `${baseUrl}images/photographie/${photo.file}.${photo.ext}`
  }, [baseUrl])

  return (
    <section className="relative py-32 overflow-hidden bg-transparent border-y border-white/5">
      {/* Background 3D Elements */}
      {!isGalleryOpen && (
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <Canvas camera={{ position: [0, 0, 20], fov: 50 }} dpr={[1, 1.5]}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <Car3D />
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        </div>
      )}

      <div className="section-container relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent-light font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-accent-light/40" />
              Mode de Vie
            </p>
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter">
              Ce qui me <br />
              <span className="highlight italic">fait vibrer.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {passions.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => p.hasMore && setIsGalleryOpen(true)}
              className={`glass-card group p-8 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all duration-500 relative overflow-hidden ${p.hasMore ? 'cursor-pointer' : ''}`}
              style={{ background: `linear-gradient(135deg, ${p.bg}, transparent)` }}
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <p.icon className={p.color} size={32} />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight group-hover:text-white transition-colors">{p.title}</h3>
              <p className={`text-xs font-bold uppercase tracking-widest ${p.color} mb-6 opacity-70`}>{p.subtitle}</p>
              
              <p className="text-text-muted text-sm md:text-base leading-relaxed mb-8">
                {p.desc}
              </p>

              {p.hasMore && (
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                  Voir mes photos <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              )}

              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 blur-[50px] rounded-full group-hover:bg-white/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Photography Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#010409]/98 backdrop-blur-2xl"
          >
            {/* Gallery content - flex column so header stays on top */}
            <div className="flex flex-col h-full">
              {/* Header - in flow, not overlapping */}
              <div className="flex items-center justify-between px-6 md:px-10 py-5 shrink-0">
                <div>
                  <p className="text-white font-bold text-sm md:text-lg tracking-tight">Galerie Photographique</p>
                  <p className="text-white/40 text-[10px] md:text-xs font-medium">{PHOTO_DATA.length} photos · Cliquez pour agrandir</p>
                </div>
                <button 
                  onClick={() => setIsGalleryOpen(false)}
                  className="text-white hover:text-accent-light transition-colors p-3 bg-white/10 hover:bg-white/20 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Thumbnail Grid */}
              <div 
                ref={(el) => { if (el) el.scrollTop = 0 }}
                className="flex-1 overflow-y-auto px-4 md:px-10 pb-8"
              >
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                  {PHOTO_DATA.map((photo, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 bg-white/5 group relative cursor-pointer"
                      onClick={() => setLightboxIndex(index)}
                    >
                      <img 
                        src={getThumb(photo)} 
                        alt={`Photo ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <Camera size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Full-size Lightbox */}
            <AnimatePresence>
              {lightboxIndex !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-[120] bg-black/95 flex items-center justify-center"
                  onClick={() => setLightboxIndex(null)}
                >
                  <button 
                    className="absolute top-6 right-6 text-white hover:text-accent-light p-3 bg-white/10 rounded-full z-[130]"
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(null) }}
                  >
                    <X size={20} />
                  </button>

                  <button 
                    className="absolute left-4 md:left-8 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white z-[130]"
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(i => (i - 1 + PHOTO_DATA.length) % PHOTO_DATA.length) }}
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <motion.img
                    key={lightboxIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    src={getFull(PHOTO_DATA[lightboxIndex])}
                    alt={`Photo ${lightboxIndex + 1}`}
                    className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  />

                  <button 
                    className="absolute right-4 md:right-8 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white z-[130]"
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(i => (i + 1) % PHOTO_DATA.length) }}
                  >
                    <ChevronRight size={24} />
                  </button>

                  <div className="absolute bottom-6 px-6 py-2 rounded-full bg-white/10 text-white/60 text-xs font-bold">
                    {lightboxIndex + 1} / {PHOTO_DATA.length}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
