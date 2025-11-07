"use client"

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Load ParticleBackground only on client and after initial mount to avoid blocking FCP
const ParticleBackground = dynamic(() => import('./ParticleBackground'), {
  ssr: false,
  loading: () => null
})

export default function DeferredParticles() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    // Respect reduced motion and small screens to avoid perf hits
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const small = typeof window !== 'undefined' && window.innerWidth < 768
    if (reduce || small) {
      setShow(false)
      return
    }
    const t = setTimeout(() => setShow(true), 300)
    return () => clearTimeout(t)
  }, [])
  if (!show) return null
  return <ParticleBackground />
}
