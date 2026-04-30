import { useEffect, useState, useMemo } from 'react'
import { motion, useSpring, useMotionValue, AnimatePresence, useTransform } from 'framer-motion'

export default function CustomCursor() {
  const [hoverType, setHoverType] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Lens (Heavy inertia follow)
  const lensSpringConfig = { damping: 40, stiffness: 120, mass: 2 }
  const lensX = useSpring(mouseX, lensSpringConfig)
  const lensY = useSpring(mouseY, lensSpringConfig)
  
  // Data points (Light follow)
  const dataSpringConfig = { damping: 25, stiffness: 200 }
  const dataX = useSpring(mouseX, dataSpringConfig)
  const dataY = useSpring(mouseY, dataSpringConfig)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    setIsVisible(true)

    const moveCursor = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setCoords({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .group, .cursor-pointer, .glass-card')
      if (target) {
        if (target.tagName === 'A' && target.href.includes('projets')) {
          setHoverType('PROJECT_SCAN')
        } else if (target.tagName === 'A' && target.href.includes('contact')) {
          setHoverType('INIT_CONNECTION')
        } else if (target.classList.contains('glass-card')) {
          setHoverType('DATA_ANALYSIS')
        } else {
          setHoverType('ACTION_REQ')
        }
      }
    }

    const handleMouseOut = () => setHoverType('')

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [mouseX, mouseY])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[10000] mix-blend-difference font-mono">
      {/* Scanning Lens */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center"
        style={{
          x: lensX,
          y: lensY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {/* Outer Rotating Ring */}
        <motion.div
          className="absolute w-16 h-16 border border-dashed border-white/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Hover Circle */}
        <motion.div
          className="absolute w-12 h-12 border border-white/20 rounded-full"
          animate={{
            scale: hoverType ? 1.5 : 0.8,
            borderStyle: hoverType ? 'solid' : 'dashed',
            opacity: hoverType ? 1 : 0.4
          }}
        />

        {/* Technical Cross */}
        <motion.div className="absolute w-4 h-[1px] bg-white/40" />
        <motion.div className="absolute h-4 w-[1px] bg-white/40" />
      </motion.div>

      {/* Real-time Data Display */}
      <motion.div
        className="fixed top-0 left-0 flex flex-col gap-1 ml-6 mt-6"
        style={{
          x: dataX,
          y: dataY,
        }}
        animate={{
          opacity: hoverType ? 1 : 0.6,
          scale: hoverType ? 1.1 : 1
        }}
      >
        <div className="flex items-center gap-2">
          <span className="text-[8px] text-white/50">X:</span>
          <span className="text-[9px] text-white">{Math.round(coords.x)}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[8px] text-white/50">Y:</span>
          <span className="text-[9px] text-white">{Math.round(coords.y)}</span>
        </div>
        
        <AnimatePresence>
          {hoverType && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="mt-2"
            >
              <div className="bg-white text-black px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-tighter">
                {hoverType}
              </div>
              <motion.div 
                className="h-0.5 bg-white mt-0.5"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Main Cursor Point */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.5 : 1,
          rotate: isClicking ? 45 : 0
        }}
      />
    </div>
  )
}

