import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'

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

export default function Photographie() {
  const baseUrl = import.meta.env.BASE_URL
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const getThumb = (photo) => `${baseUrl}images/photographie/thumbs/${photo.file}.webp`
  const getFull = (photo) => `${baseUrl}images/photographie/${photo.file}.${photo.ext}`

  const prev = () => setLightboxIndex((i) => (i - 1 + PHOTO_DATA.length) % PHOTO_DATA.length)
  const next = () => setLightboxIndex((i) => (i + 1) % PHOTO_DATA.length)

  // Keyboard nav
  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'Escape') setLightboxIndex(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex])

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  // Portal lightbox — renders on document.body, escapes any transform parent
  const lightbox = lightboxIndex !== null ? createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0,0,0,0.95)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        touchAction: 'none',
      }}
      onClick={() => setLightboxIndex(null)}
    >
      {/* Center block: close button + image + counter */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '90vw',
          maxHeight: '90vh',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button — right above the image */}
        <button
          onClick={() => setLightboxIndex(null)}
          style={{
            alignSelf: 'flex-end',
            marginBottom: '8px',
            padding: '10px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(8px)',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'}
        >
          <X size={20} />
        </button>

        {/* Image */}
        <img
          src={getFull(PHOTO_DATA[lightboxIndex])}
          alt={`Photo ${lightboxIndex + 1}`}
          style={{
            maxWidth: '85vw',
            maxHeight: '70vh',
            objectFit: 'contain',
            borderRadius: '12px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        />

        {/* Counter below image */}
        <div
          style={{
            marginTop: '12px',
            padding: '6px 16px',
            borderRadius: '999px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.05)',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            backdropFilter: 'blur(8px)',
          }}
        >
          {lightboxIndex + 1} / {PHOTO_DATA.length}
        </div>
      </div>

      {/* Nav arrow left */}
      <button
        onClick={(e) => { e.stopPropagation(); prev() }}
        style={{
          position: 'fixed',
          left: '8px',
          top: '50%',
          transform: 'translateY(-50%)',
          padding: '12px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'white',
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          transition: 'background-color 0.2s',
          zIndex: 10000,
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
      >
        <ChevronLeft size={18} />
      </button>

      {/* Nav arrow right */}
      <button
        onClick={(e) => { e.stopPropagation(); next() }}
        style={{
          position: 'fixed',
          right: '8px',
          top: '50%',
          transform: 'translateY(-50%)',
          padding: '12px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'white',
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          transition: 'background-color 0.2s',
          zIndex: 10000,
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
      >
        <ChevronRight size={18} />
      </button>
    </div>,
    document.body
  ) : null

  return (
    <main className="relative bg-gradient-to-b from-primary via-[#ea580c]/20 to-primary min-h-screen">
      <PageHero
        tag="Galerie"
        title={<>Photo<span className="text-accent-light italic">graphie.</span></>}
        subtitle={`À travers l'objectif, je cherche à capturer l'invisible — ${PHOTO_DATA.length} instants sélectionnés.`}
        compact
      />

      {/* Photo Grid */}
      <div className="section-container pb-32">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {PHOTO_DATA.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04, duration: 0.5, ease: 'easeOut' }}
              className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 bg-white/5 group relative cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={getThumb(photo)}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <Camera size={22} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {lightbox}
    </main>
  )
}
