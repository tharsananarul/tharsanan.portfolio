import { useEffect, useRef } from 'react'

export default function Background() {
  const containerRef = useRef(null)

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-black">
      {/* Subtle Grain / Paper Texture */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay z-10" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* Varied & Dynamic Color Blobs - More subtle */}
      <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-[#f43f5e] rounded-full blur-[140px] opacity-[0.06] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-10%] right-[-5%] w-[70vw] h-[70vw] bg-[#22d3ee] rounded-full blur-[120px] opacity-[0.05] animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute top-[30%] right-[-10%] w-[60vw] h-[60vw] bg-[#facc15] rounded-full blur-[100px] opacity-[0.04] animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-[20%] left-[-15%] w-[50vw] h-[50vw] bg-[#8b5cf6] rounded-full blur-[130px] opacity-[0.03] animate-pulse" style={{ animationDuration: '15s' }} />
      <div className="absolute top-[10%] left-[30%] w-[40vw] h-[40vw] bg-[#10b981] rounded-full blur-[110px] opacity-[0.02] animate-pulse" style={{ animationDuration: '18s' }} />
      <div className="absolute bottom-[40%] right-[20%] w-[35vw] h-[35vw] bg-[#f97316] rounded-full blur-[90px] opacity-[0.03] animate-pulse" style={{ animationDuration: '14s' }} />

      {/* Touch of Black - Vignette Overlay */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%] z-20" />


      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
    </div>
  )
}
