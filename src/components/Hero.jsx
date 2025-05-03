import { useEffect, useState } from 'react'
import profilePic from '../assets/WasiImageAi.png'
import Resume from '../assets/WasiResume.pdf'
import { HERO_CONTENT } from '../constants'
import { motion } from 'framer-motion'

const TypingText = ({ text, typingSpeed = 150, erasingSpeed = 50, delay = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isErasing, setIsErasing] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let timeout

    if (!isErasing && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index])
        setIndex((prev) => prev + 1)
      }, typingSpeed)
    } else if (isErasing && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1))
        setIndex((prev) => prev - 1)
      }, erasingSpeed)
    } else if (index === text.length) {
      timeout = setTimeout(() => setIsErasing(true), delay)
    } else if (index === 0 && isErasing) {
      timeout = setTimeout(() => setIsErasing(false), delay / 2)
    }

    return () => clearTimeout(timeout)
  }, [index, isErasing, text, typingSpeed, erasingSpeed, delay])

  return (
    <span className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-4xl tracking-tight text-transparent'>
      {displayedText}
      <span className='text-white animate-pulse'>|</span>
    </span>
  )
}

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    }
  }
}

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

const Hero = () => {
  return (
    <div className='pb-4 lg:mb-36'>
      <div className='flex flex-wrap lg:flex-row-reverse'>
        <div className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:p-8'>
            <motion.img
              src={profilePic}
              alt="Wasi Haider"
              className='rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500 hover:rotate-1 hover:shadow-[0_0_25px_5px_rgba(255,255,255,0.3)]'
              width={350}
              height={200}
              initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={containerVariants}
            className='flex flex-col items-center lg:items-start mt-10'>

            <motion.h2
              variants={childVariants}
              className='pb-2 text-4xl tracking-tighter lg:text-8xl text-white'>
              WASI HAIDER
            </motion.h2>

            <motion.div variants={childVariants}>
              <TypingText text="Full Stack Developer" />
            </motion.div>

            <motion.p
              variants={childVariants}
              className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-white'>
              {HERO_CONTENT}
            </motion.p>

            <motion.a
              variants={childVariants}
              href={Resume}
              target='_blank'
              rel='noopener noreferrer'
              download
              className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10 hover:bg-stone-300'>
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
