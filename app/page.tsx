import dynamic from 'next/dynamic'
import React from 'react'

const Hero = dynamic(() => import('./components/Hero'))
const About = dynamic(() => import('./components/About'))
const Projects = dynamic(() => import('./components/Projects'))
const Skills = dynamic(() => import('./components/Skills'))
const Experience = dynamic(() => import('./components/Experience'))
const Certificates = dynamic(() => import('./components/Certificates'))
const Education = dynamic(() => import('./components/Education'))
const Contact = dynamic(() => import('./components/Contact'))
const Resume = dynamic(() => import('./components/Resume'))

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Certificates />
      <Education />
      <Contact />
      <div className="hidden">
        <Resume />
      </div>
    </main>
  )
} 