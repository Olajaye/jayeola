import { useState } from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
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
    <motion.nav
       className='fixed top-0 w-full flex justify-between items-center shadow shadow-green px-10 py-5 bg-dark z-40'>
      <div className="w-[130px]">
        <JAYEOLA className="" />
      </div>
  
      <div className="hidden basis-[75%] sm:flex justify-between items-center">
        <ul className='text-white flex justify-between border-2 border-green rounded-full px-3 basis-[60%]'>
          <AnchorLink offset='200' href="#home" className="hover:text-green cursor-pointer">Home</AnchorLink>
          <AnchorLink href="#aboutme" className="hover:text-green cursor-pointer">About Me</AnchorLink>
          <AnchorLink href="#myskills" className="hover:text-green cursor-pointer">My Skils</AnchorLink>
          <AnchorLink href="#myproject" className="hover:text-green cursor-pointer">My projects</AnchorLink>
        </ul>

      
        
    
        <AnchorLink href="#contact">
           <motion.button
            animate={{scale: [1, 1.2, 1, 1.2,1] }}
            transition={{ repeat: Infinity, duration: 2}}
            className='bg-green text-dark text-xl font-bold rounded-lg p-1'>Hire Me
         </motion.button>
        </AnchorLink>
      </div>

    {!isMenuOpen && <motion.div
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
      </motion.div>}
  
      {isMenuOpen &&
        <div className="fixed sm:hidden top-0 right-0 h-[100vh] w-[60vw] rounded-s-xl bg-greenmenu z-50 ">
          <div className="flex flex-col justify-center p-3">
            <div onClick={()=>setIsMenuOpen(false)} className="flex p-3 justify-end mb-40">
             <IoCloseCircleOutline className="w-10 h-10 " />
            </div>

            <div className="flex justify-center items-center flex-col">

              <ul className="flex flex-col items-center text-xl font-bold">
                <AnchorLink href="#home" className="cursor-pointer mt-4" onClick={()=>setIsMenuOpen(false)}>Home</AnchorLink>
                <AnchorLink href="#aboutme" className="cursor-pointer mt-4" onClick={()=>setIsMenuOpen(false)}>About Me</AnchorLink>
                <AnchorLink href="#myskills" className="cursor-pointer mt-4" onClick={()=>setIsMenuOpen(false)}>My Skils</AnchorLink>
                <AnchorLink href="#myproject" className="cursor-pointer mt-4" onClick={()=>setIsMenuOpen(false)}>My projects</AnchorLink>
              </ul>

              <AnchorLink href="#contact" onClick={()=>setIsMenuOpen(false)} className='bg-dark text-green w-[50%] text-center text-xl font-bold rounded-lg p-1 mb-2 mt-6'>Hire Me
              </AnchorLink>

            </div>
            

          </div>
        
       

      
      </div>}
    </motion.nav>
  )
}

export default Navbar