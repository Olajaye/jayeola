import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

const alertVariance = {
  hidden:{ x: 100, opacity: 0 },
  visible: {
    x: 0, opacity: 1, transition: {
      duration: 1,
      when:"beforeChildren"
    }
  },
  exit:{opacity:0, x: 100}
}

const alertVariancebar = {
  hidden:{ x:0, opacity: 1 },
  visible:{x:180, opacity:0.5, transition:{duration:2}}
}

type Props = {
  alertText: String
  alertColor:Boolean
}

const Alert = ({alertText, alertColor}: Props) => {
  return (
    <>
      <AnimatePresence>
      <motion.div
        variants={alertVariance}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed top-20 right-0 w-40">
        <div className="text-green px-2 py-1 bg-gray-950">{alertText}</div>
        <motion.div
          variants={alertVariancebar}
          className={`${alertColor ?"border-blue-800":"border-red-600"} border-b-4 w-40`}></motion.div>
        </motion.div>
      </AnimatePresence>
      
    </>
  )
}

export default Alert