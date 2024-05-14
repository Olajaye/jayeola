import { motion, AnimatePresence } from "framer-motion"
import { FaLink } from "react-icons/fa6"


type Props = {
  decs: string,
  img: string,
  link: string
}

const ProjectContent = ({decs , img, link}: Props) => {
  return (
    <AnimatePresence >
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{
          opacity: 1, scale: [1.1, 1], transition: {
            duration: 2,
            
        }}}
        exit={{ opacity: 0, scale:0 }}
        
        className="p-1 sm:p-3 flex flex-col justify-center items-center">
        

         <AnimatePresence >
          <motion.div
            animate={{
              transition: {
                duration:3
            }}}
            exit={{opacity:0, scale:1}}
            className="w-[100%] p-4 ">
            <img src={img} alt="" className="sm:float-left my-3 sm:mb-0 sm:me-3 w-[100%] sm:w-[400px] h-full rounded-xl object-contain"/>
            <p className="text-green text-xl mt-4 text-justify sm:text-center">{decs}</p>
          </motion.div>
        </AnimatePresence>

        <a href={link} target="_blank" rel="noopener noreferrer" className="mb-4">
          <div className="bg-black flex items-center px-3 py-1 rounded-lg shadow-sm shadow-green ">
            <FaLink className="text-4xl text-green"/>
            <p className="text-2xl ms-2 text-green font-extrabold">Explore</p>
          </div>
        </a>
        
      </motion.div>
      </AnimatePresence>
  )
}

export default ProjectContent