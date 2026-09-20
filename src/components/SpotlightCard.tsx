"use client"

import React, { useRef, useState, useCallback, PropsWithChildren } from 'react'

interface SpotlightCardProps extends PropsWithChildren {
  className?: string
  spotlightColor?: string
}

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(0, 242, 254, 0.15)'
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }, [])

  const handleMouseEnter = useCallback(() => {
    setOpacity(1)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setOpacity(0)
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-900/70 dark:bg-dark-900/70 light:bg-white/80 backdrop-blur-xl transition-all duration-300 ${className}`}
    >
      {/* Dynamic spotlight radial glow following the cursor */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}
