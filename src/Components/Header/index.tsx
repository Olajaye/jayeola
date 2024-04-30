import IMAGE2 from "@/assets/graphjpeg.jpeg"
import { motion } from "framer-motion"
import LINKEDIN from "@/assets/Linkedin.png"
import GITHUB from "@/assets/gitHub.png"
import WHATAPP from "@/assets/whatsapp.png"
import TWITTER from "@/assets/twitter.webp"
import { SparklesIcon } from "@heroicons/react/24/solid"
import {slideInFromRight} from "@/utils/motion"


type Props = {}

const Header = (props: Props) => {
  return (
    <header id="home"
      className="sm:grid sm:grid-cols-2 items-center gap-16 px-10 pt-28 pb-10 ">
      <motion.div
        initial={{ scale: 0, rotateZ:-180 }}
        animate={{scale:1, rotateZ:0 , transition:{duration:2}}}
        className="flex justify-around">
        <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] overflow-hidden bg-darg shadow-inner shadow-green rounded-full p-2 mb-10">
          <img className="w-[600px] rounded-full object-right-bottom" src={IMAGE2} alt="profile pix"/>
        </div>
      </motion.div>




      <motion.div
        initial={{ x: "100vw" }}
        animate={{x:0 ,transition:{duration:2}}}
        className="flex flex-col gap-5 text-start ps-3">
          
        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          animate="visible"
          className="flex py-[6px] px-[7px] border border-green opacity-[0.9] rounded-2xl w-[250px]">
          <SparklesIcon className="text-[#FFD700] mr-[10px] h-5 w-5" />
          <h1 className="text-[13px] text-green tracking-widest">
            Frontend Developer Portfolio 
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromRight(1)}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 mt-4 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-green">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromRight(1.5)}
          initial="hidden"
          animate="visible"
          className="text-lg text-gray-400 my-5 max-w-[600px] italic"
        >
          I&apos;m Jayeola Gbolahan a Frontend Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromRight(2)}
          initial="hidden"
          animate="visible"
          className="py-2 text-center bg-cyan-900 text-white font-extrabold cursor-pointer rounded-lg max-w-[200px]"
        >
          RESUME
        </motion.a>
      </motion.div>

      <div className="pt-8 sm:pt-0">
        <h1 className="text-green font-extrabold text-xl">FIND ME AT</h1>

        <div className="pt-4 grid grid-cols-4 sm:flex ">
          <div className="w-10 h-10 rounded-lg bg-black grid place-content-center shadow-inner shadow-green">
            <a href="https://www.linkedin.com/in/gbolahan-jayeola-5b1981280/" target="_blank">
              <img src={LINKEDIN} className="w-6 h-6" alt="" />
            </a>
          </div>

          <div className="w-10 h-10 sm:ms-8 rounded-lg bg-black grid place-content-center shadow-inner shadow-green">
            <a href="https://github.com/Olajaye?tab=repositories" target="_blank">
              <img src={GITHUB} className="w-6 h-6" alt="" />
            </a>
          </div>

          <div className="w-10 h-10 sm:ms-8 rounded-lg bg-black grid place-content-center shadow-inner shadow-green">
            <a href="https://wa.link/rkh34e">
              <img src={WHATAPP} className="w-6 h-6" alt="" />
            </a>
          </div>

          <div className="w-10 h-10 sm:ms-8 rounded-lg bg-black grid place-content-center shadow-inner shadow-green">
            <a href="https://x.com/jayeolajeremiah" target="_blank">
              <img src={TWITTER} className="h-8 w-8" alt="" />
            </a>
          </div>
        </div>
      </div>
    </header>  
  )
}

export default Header