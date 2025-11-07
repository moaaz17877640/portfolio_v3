"use client"

import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [on, setOn] = useState(false)
  const [available, setAvailable] = useState<boolean | null>(null)

  useEffect(() => {
    if (!audioRef.current) return
    if (on) {
      audioRef.current.play().catch(() => {})
    } else {
      audioRef.current.pause()
    }
  }, [on])

  // Detect if the ambient file exists to avoid 404 noise and only show the toggle when usable
  useEffect(() => {
    let cancelled = false
    fetch('/audio/ambient.mp3', { method: 'HEAD' })
      .then((r) => { if (!cancelled) setAvailable(r.ok) })
      .catch(() => { if (!cancelled) setAvailable(false) })
    return () => { cancelled = true }
  }, [])

  if (available === false) return null

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <audio ref={audioRef} loop src="/audio/ambient.mp3" onError={() => setAvailable(false)} />
      <button onClick={() => setOn((v) => !v)} className="btn-outline">
        {on ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />} {on ? 'Mute' : 'Ambient' }
      </button>
    </div>
  )
}
