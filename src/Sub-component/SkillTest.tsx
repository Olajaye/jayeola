import React from 'react'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import {slideInFromRight, slideInFromLeft} from "@/utils/motion"


const ParentVariant = {
  hidden: { opacity: 0 },
  visible:{opacity:1, transition:{ duration: 1,staggerChildren: 1,} }
} 

type Props = {}

const SkillTest = (props: Props) => {
  return (
    <motion.div
      variants={ParentVariant}
      initial="hidden"
      whileInView="visible"
      className='w-full h-auto flex flex-col items-center justify-center'>
      
      <motion.div
        variants={slideInFromRight(0.1)}
        className="flex py-[6px] px-[7px]">
        <SparklesIcon className="text-[#FFD700] mr-[10px] h-5 w-5" />
        <h1 className="text-[17px] text-green font-extrabold">
          My Stack
        </h1>
      </motion.div>
    
      <motion.div
        variants={slideInFromLeft(0.1)}
        className='text-[20px] text-white font-medium  text-center mb-[10px]'>
        Making apps with modern technologies
      </motion.div>
      
      <motion.div
        variants={slideInFromRight(0.1)}
        className='cursive text-xl text-gray-400 mb-10  text-center italic'>
        Never miss a task, deadline or idea
      </motion.div>
    </motion.div>
  )
}

export default SkillTest