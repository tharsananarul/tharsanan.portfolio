import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import SmoothScroll from './components/SmoothScroll'
import Background from './components/Background'
import PageTransition from './components/PageTransition'
import { ToastProvider } from './hooks/useToast'

import Home from './pages/Home'
import Projets from './pages/Projets'
import CV from './pages/CV'
import Competences from './pages/Competences'
import Contact from './pages/Contact'

// Project Case Studies
import ProjetFutsal from './pages/ProjetFutsal'
import ProjetAlda from './pages/ProjetAlda'
import ProjetSansBavures from './pages/ProjetSansBavures'
import ProjetBtsCom from './pages/ProjetBtsCom'
import ProjetPerso from './pages/ProjetPerso'
import ProjetsUX from './pages/ProjetsUX'
import Photographie from './pages/Photographie'

export default function App() {
  const location = useLocation()

  return (
    <ToastProvider>
      <div className="text-slate-50 min-h-screen selection:bg-accent/30 selection:text-accent overflow-hidden">
        <Background />
        
        <SmoothScroll>
          <PageLoader />
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/projets" element={<PageTransition><Projets /></PageTransition>} />
              <Route path="/cv" element={<PageTransition><CV /></PageTransition>} />
              <Route path="/competences" element={<PageTransition><Competences /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              
              {/* Detailed Project Routes */}
              <Route path="/projets/futsal" element={<PageTransition><ProjetFutsal /></PageTransition>} />
              <Route path="/projets/alda" element={<PageTransition><ProjetAlda /></PageTransition>} />
              <Route path="/projets/sans-bavures" element={<PageTransition><ProjetSansBavures /></PageTransition>} />
              <Route path="/projets/bts-com" element={<PageTransition><ProjetBtsCom /></PageTransition>} />
              <Route path="/projets/perso" element={<PageTransition><ProjetPerso /></PageTransition>} />
              <Route path="/projets/ux" element={<PageTransition><ProjetsUX /></PageTransition>} />
              <Route path="/photographie" element={<PageTransition><Photographie /></PageTransition>} />
            </Routes>
          </AnimatePresence>

          <Footer />
        </SmoothScroll>
      </div>
    </ToastProvider>
  )
}
