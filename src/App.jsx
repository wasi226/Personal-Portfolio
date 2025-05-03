import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Extracurricular from './components/Extracurricular'
import Workshop from './components/Workshop'

const App = () => {
  return (
    <div className='overflow-x-hidden text-sone-300 antialiased'>
      <div className='fixed inset-0 -z-10'>
      <div class="relative h-full w-full bg-slate-950">
      <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>
        </div>
      </div>
      <div className='container mx-auto px-8'>
        <Navbar/>
        <Hero/>
        <Technologies/>
        <Projects/>
        <Experience/>
        <Extracurricular/>
        <Workshop/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
