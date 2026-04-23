import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Search, Maximize2 } from 'lucide-react'

export default function MosaicGrid({ sections, animate = true }) {
  const [lbOpen, setLbOpen] = useState(false)
  const [lbImages, setLbImages] = useState([])
  const [lbIndex, setLbIndex] = useState(0)

  const openLb = (images, idx) => {
    setLbImages(images)
    setLbIndex(idx)
    setLbOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLb = () => {
    setLbOpen(false)
    document.body.style.overflow = ''
  }

  const navigate = (dir) => {
    setLbIndex((i) => (i + dir + lbImages.length) % lbImages.length)
  }

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') closeLb() }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

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
                  className="text-xs font-bold uppercase tracking-widest text-accent-light mb-2 block"
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
                  onClick={() => openLb(section.items, idx)}
                >
                  {/* Skeleton */}
                  <div className="absolute inset-0 bg-white/5 animate-pulse" />
                  
                  <img
                    src={item.src}
                    alt={item.alt || ''}
                    className="relative z-10 w-full h-full object-cover transition-opacity duration-700 group-hover:scale-105"
                    loading="lazy"
                    onLoad={(e) => {
                      e.target.style.opacity = '1';
                      // Hide skeleton (the div right before the img)
                      const skeleton = e.target.previousSibling;
                      if (skeleton) skeleton.style.display = 'none';
                    }}
                    // Ensure it shows even if cached
                    ref={(img) => {
                      if (img && img.complete) {
                        img.style.opacity = '1';
                        const skeleton = img.previousSibling;
                        if (skeleton) skeleton.style.display = 'none';
                      }
                    }}
                    style={{ opacity: 0 }}
                  />
                  <div className="absolute inset-0 z-20 bg-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
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

      {/* Lightbox */}
      <AnimatePresence>
        {lbOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/98 overflow-hidden touch-none"
            style={{ height: '100dvh' }}
            onClick={closeLb}
          >
            {/* Close button — fixed top-right, always visible */}
            <button 
              className="fixed top-4 right-4 z-[250] p-3 rounded-full bg-white/15 hover:bg-white/25 transition-colors text-white backdrop-blur-md border border-white/10"
              onClick={(e) => { e.stopPropagation(); closeLb() }}
            >
              <X size={20} />
            </button>

            {/* Counter — fixed top-left */}
            <div className="fixed top-4 left-4 z-[250] px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white/70 text-[10px] font-bold border border-white/5 uppercase tracking-widest">
              {lbIndex + 1} / {lbImages.length}
            </div>

            {/* Image — perfectly centered */}
            <div className="absolute inset-0 flex items-center justify-center p-12 md:p-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={lbIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={lbImages[lbIndex]?.src}
                    alt={lbImages[lbIndex]?.alt || ''}
                    className="max-w-[85vw] max-h-[65dvh] md:max-w-[70vw] md:max-h-[75dvh] object-contain rounded-xl shadow-2xl border border-white/5"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Nav arrows — fixed center-left and center-right */}
            <button 
              className="fixed left-2 md:left-6 top-1/2 -translate-y-1/2 z-[250] p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white border border-white/5 backdrop-blur-md"
              onClick={(e) => { e.stopPropagation(); navigate(-1) }}
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              className="fixed right-2 md:right-6 top-1/2 -translate-y-1/2 z-[250] p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white border border-white/5 backdrop-blur-md"
              onClick={(e) => { e.stopPropagation(); navigate(1) }}
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
