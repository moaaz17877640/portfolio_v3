import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import dynamic from 'next/dynamic'
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false, loading: () => null })
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false, loading: () => null })
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import FloatingActionButton from '@/components/FloatingActionButton'
import AudioToggle from '@/components/AudioToggle'
import DeferredParticles from '@/components/DeferredParticles'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <DeferredParticles />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <AudioToggle />
      <FloatingActionButton />
    </div>
  )
}
