"use client"

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

export default function ParticleBackground() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={init}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        fpsLimit: 24,
        interactivity: {
          events: {
            onHover: { enable: false, mode: 'none' },
            resize: true,
          },
          modes: {
            repulse: { distance: 60, duration: 0.2 }
          }
        },
        particles: {
          number: { value: 8, density: { enable: true, value_area: 900 } },
          color: { value: ['#00e5ff', '#8a2be2', '#ff2da1'] },
          links: { enable: false },
          move: { enable: true, speed: 0.35, outModes: { default: 'out' } },
          opacity: { value: 0.22 },
          size: { value: { min: 1, max: 1.8 } }
        },
        detectRetina: true
      }}
    />
  )
}
