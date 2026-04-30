import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import LazyImage from './ui/LazyImage'
import Skeleton from './ui/Skeleton'

export default function MosaicGrid({ sections, animate = true, accentColor }) {
  const [lbOpen, setLbOpen] = useState(false)
  const [lbImages, setLbImages] = useState([])
  const [lbIndex, setLbIndex] = useState(0)

  const openLb = (images, idx) => {
    setLbImages(images)
    setLbIndex(idx)
    setLbOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLb = useCallback(() => {
    setLbOpen(false)
    document.body.style.overflow = ''
  }, [])

  const prev = useCallback(() => setLbIndex((i) => (i - 1 + lbImages.length) % lbImages.length), [lbImages.length])
  const next = useCallback(() => setLbIndex((i) => (i + 1) % lbImages.length), [lbImages.length])

  useEffect(() => {
    if (!lbOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLb()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lbOpen, lbImages.length, closeLb, prev, next])

  // Lightbox rendered via Portal
  const lightbox = lbOpen ? createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-primary/95 backdrop-blur-xl flex items-center justify-center touch-none p-4"
      onClick={closeLb}
    >
      <div
        className="relative flex flex-col items-center max-w-full max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeLb}
          className="absolute -top-12 right-0 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors backdrop-blur-md"
          aria-label="Close lightbox"
        >
          <X size={20} />
        </button>

        <motion.div
          key={lbIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative group"
        >
          <img
            src={lbImages[lbIndex]?.src}
            alt={lbImages[lbIndex]?.alt || ''}
            className="max-w-[90vw] max-h-[75vh] md:max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/5"
          />
        </motion.div>

        <div className="mt-6 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
          {lbIndex + 1} / {lbImages.length}
        </div>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); prev() }}
        className="fixed left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors backdrop-blur-md z-[10000]"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); next() }}
        className="fixed right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors backdrop-blur-md z-[10000]"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>
    </motion.div>,
    document.body
  ) : null

  return (
    <>
      {sections.map((section, si) => (
        <div className="py-12" key={si}>
          {(section.tag || section.title) && (
            <div className="section-container pb-8">
              {section.tag && (
                <motion.span 
                   initial={{ opacity: 0, x: -10 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="text-xs font-bold uppercase tracking-widest mb-2 block"
                   style={{ color: accentColor || 'var(--color-accent-light)' }}
                >
                  {section.tag}
                </motion.span>
              )}
              {section.title && (
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-bold tracking-tight"
                >
                  {section.title}
                </motion.h3>
              )}
            </div>
          )}
          
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {section.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: idx * 0.03,
                    ease: "easeOut"
                  }}
                  className={`relative group cursor-pointer rounded-2xl md:rounded-3xl overflow-hidden glass-card aspect-square bg-white/5 ${
                    item.tall ? 'md:row-span-2 md:aspect-auto' : ''
                  } ${item.wide ? 'md:col-span-2 md:aspect-auto' : ''}`}
                  style={{ '--card-accent': accentColor || 'var(--color-accent)' }}
                  onClick={() => openLb(section.items, idx)}
                >
                  <LazyImage
                    src={item.src}
                    alt={item.alt || ''}
                    className="w-full h-full"
                    skeletonClassName="opacity-50"
                  />
                  
                  <div 
                    className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]"
                    style={{ backgroundColor: `${accentColor || 'var(--color-accent)'}33` }}
                  >
                    <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                      <Maximize2 className="text-white" size={24} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <AnimatePresence>
        {lbOpen && lightbox}
      </AnimatePresence>
    </>
  )
}

