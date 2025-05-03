import { DiJavascript } from "react-icons/di"
import { FaNodeJs,FaJava } from "react-icons/fa"
import { RiReactjsLine,RiTailwindCssFill } from "react-icons/ri"
import { SiMongodb,SiExpress } from "react-icons/si"
import { motion } from "framer-motion"
import { IoLogoJavascript } from "react-icons/io5";

const iconVariants = (duration)=>({
   initial:{y:-10},
   animate:{
      y:[10,-10],
      transition:{
         duration:duration,
         ease:"linear",
         repeat:Infinity,
         repeatType:"reverse",
      }
   }
})

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-7xl text-white">Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap justify-center gap-10">
      <motion.div
      initial="initial"
      animate="animate"
      variants={iconVariants(2.5)}>
        <RiReactjsLine className="text-7xl text-cyan-400"/>
      </motion.div>
      <motion.div
      initial="initial"
      animate="animate"
      variants={iconVariants(3)}
       className="p-4">
         <SiExpress className="text-7xl text-white "/>
      </motion.div>
      <motion.div 
      initial="initial"
      animate="animate"
      variants={iconVariants(5)}
      className="p-4">
         <SiMongodb className="text-7xl text-green-400"/>
      </motion.div>
      <motion.div 
      initial="initial"
      animate="animate"
      variants={iconVariants(2)}
      className="p-4">
         <FaJava className="text-7xl text-red-700"/>
      </motion.div>
      <motion.div 
      initial="initial"
      animate="animate"
      variants={iconVariants(6)}
      className="p-4">
         <FaNodeJs className="text-7xl text-green-700"/>
      </motion.div>
      <motion.div 
      initial="initial"
      animate="animate"
      variants={iconVariants(4)}
      className="p-4">
         <RiTailwindCssFill className="text-7xl text-sky-600"/>
      </motion.div>
      <motion.div 
      initial="initial"
      animate="animate"
      variants={iconVariants(6)}
      className="p-4">
         <DiJavascript className="text-7xl text-orange-400"/>
      </motion.div>
      <motion.div 
      initial="initial"
      animate="animate"
      variants={iconVariants(4)}
      className="p-4">
         <IoLogoJavascript className="text-7xl text-yellow-400"/>
      </motion.div>
      </motion.div>
      
    </div>
  )
}

export default Technologies
