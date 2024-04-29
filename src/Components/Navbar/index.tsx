import { useState } from "react"
import { motion } from "framer-motion"
import { IoCloseCircleOutline } from "react-icons/io5";
import { JAYEOLA } from "@/Components/Svgs/JayeolaSVG"


const menuVar = {
   initial:{ opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      when:"beforeChildren",
      staggerChildren: 1,
    }
  }
}
const menuVariant = (size: any) => {
  return (
    {
      initial:{ width: 0, opacity:0 },
      animate:{width: size, opacity:1, transition:{duration:1, repeat:Infinity, repeatDelay: 2,}}
    }
  )

}
type Props = {}


const Navbar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <nav className='flex justify-between items-center shadow shadow-green  px-10 py-5'>
      <div className="w-[130px]">
        <JAYEOLA className="" />
      </div>
  
      <div className="hidden basis-[75%] sm:flex justify-between items-center">
        <ul className='text-white flex justify-between border-2 border-green rounded-full px-3 basis-[60%]'>
          <li className="hover:text-green cursor-pointer">About</li>
          <li className="hover:text-green cursor-pointer">Skills</li>
          <li className="hover:text-green cursor-pointer">Project</li>
          <li className="hover:text-green cursor-pointer">Contacts Me</li>
        </ul>

      
        
        <motion.button
            animate={{scale: [1, 1.2, 1, 1.2,1] }}
            transition={{ repeat: Infinity, duration: 2}}
          className='bg-green text-dark text-xl font-bold rounded-lg p-1'>Hire Me
        </motion.button>
      </div>

      <motion.div
        variants={menuVar}
        initial="initial"
        animate="animate"
        onClick={() => setIsMenuOpen(true)}
        className="sm:hidden flex flex-col justify-end rotate-180">
        <motion.div
          variants={menuVariant("2.5rem")}
          
          className="border-2 border-green w-10 h-1 mt-1"></motion.div>
        <motion.div
          variants={menuVariant("2rem")}
          className="border-2 border-green w-8 h-1 mt-1"></motion.div>
        <motion.div
          variants={menuVariant("1.5rem")}
          className="border-2 border-green w-6 h-1 mt-1"></motion.div>
      </motion.div>
      
      {isMenuOpen &&
        <div className="absolute sm:hidden top-3 right-2 h-[240px] w-[160px] rounded-xl bg-green p-2 pb-4 flex flex-col">
        
        <div onClick={()=>setIsMenuOpen(false)} className="flex justify-end">
          <IoCloseCircleOutline className="w-10 h-10 " />
        </div>
        
        <ul className="flex flex-col items-center text-xl font-bold">
          <li className="cursor-pointer mt-2">About</li>
          <li className="cursor-pointer mt-2">Skills</li>
          <li className="cursor-pointer mt-2">Project</li>
          <li className="cursor-pointer mt-2">Contacts Me</li>
        </ul>

        <button className='bg-dark text-green text-xl font-bold rounded-lg p-1 mb-2 mt-2'>Hire Me
        </button>

      
      </div>}
    </nav>
  )
}

export default Navbar