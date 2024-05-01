import React from 'react'
import IMAGE from "@/assets/newsuite-removebg-preview.png"
import { SparklesIcon } from "@heroicons/react/24/solid"
import { motion } from 'framer-motion'


type Props = {}

const About = (props: Props) => {
  return (
    <section className='bg-black h-full mt-5 pt-10 md:pt-28 md:pb-28' id='aboutme'>
      <div className='px-10'>
        <div className='pt-10'>
          <motion.div 
            initial={{ x: "100px", opacity: 0 }}
            whileInView={{
              x: 0, opacity: 1, transition: {
              duration:2
            }}}
            className="flex py-[6px] px-[7px] text-center justify-center">
            <SparklesIcon className="text-[#FFD700] mr-[10px] h-5 w-5" />
            <h1 className="text-[17px] text-green font-extrabold">
              About Me
            </h1>
          </motion.div>
        </div>


        <div className='sm:flex sm:gap-4 pt-2 items-center'>
          <motion.div
            initial={{ x: "-100px", opacity: 0 }}
            whileInView={{
              x: 0, opacity: 1, transition: {
              duration:2
            }}}
            className='basis-[50%] text-center'>
            <h3 className='text-wrap text-white text-xl'>I'm <span className='text-green uppercase'>Jayeola Gbolahan</span>, a frontend developer with boundless enthusiasm for creating engaging user experiences. I have a never-ending need for innovation, therefore I'm constantly searching for the newest methods and tools to take projects to the next level. Every piece of code I write demonstrates my commitment to pixel-perfect design, from slick animations to fluid interactions. With an unwavering passion for excellence and an acute attention to detail, I turn concepts into captivating digital experiences that astound people. I motivated my team to aim high by my infectious excitement and limitless energy as I tackle every work, be it boosting performance or creating intuitive interfaces.</h3>
          </motion.div>

          <div className='hidden sm:block h-[350px] w-1 bg-green border-green rounded-full'></div>

          <motion.div
            initial={{ scale:0, opacity: 0 }}
            whileInView={{
              scale:1, opacity: 1, transition: {
              duration:2
            }}}
            className='basis-[45%] grid place-content-center mt-3'>
            <img src={IMAGE} alt="" className='w-[400px] h-[400px] object-cover object-right-top -hue-rotate-15 rounded-t-lg' />
          </motion.div>
        </div>
      </div>
    </section>
  ) 
}

export default About