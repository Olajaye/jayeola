import { useState } from 'react'
import { Project } from '@/Constant/constant'
import ProjectContent from '@/Sub-component/ProjectContent'
import ProjectTitle from '@/Sub-component/ProjectTitle'
import { SparklesIcon } from "@heroicons/react/24/solid"
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'



const Projects = () => {
  const [content, setContent] = useState([Project[0]])


  const handleProject = (id: string) => {
    const newProject = Project.filter(project => {
      return project.Title === id
    })
    setContent(newProject)
  }

  
  return (
    
    <section className='bg-black mt-5 pt-10 md:pt-20 md:pb-28' id='myproject'>
      <div className='px-10 py-10 '>
        <motion.div
          variants={slideInFromRight(0.1)}
          initial="hidden"
          whileInView="visible"
          className="flex py-[6px] px-[7px] text-center justify-center">
          <SparklesIcon className="text-[#FFD700] mr-[10px] h-5 w-5" />
          <h1 className="text-[17px] text-green font-extrabold">
            My Projects
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.2)}
          initial="hidden"
          whileInView="visible"
          className='cursive text-xl text-gray-400 mb-2 text-center italic'>
         Scroll left throught my list of projects
        </motion.div>

        <div className='mt-6'>
          {/* Titles of projects */}
         
          <div className='overflow-x-scroll'>
            <div className='flex min-w-max overflow-x-hidden '>
              {Project.map((project, index) => (
                <ProjectTitle
                  key={index}
                  func={handleProject} 
                  title={project.Title}
                  icon={project.icon}
                />
              ))}
            </div>
          </div>
      
          
          {/* Project image, discription, link */}
          <div className='shadow-inner mt-10 w-auto h-auto shadow-green rounded-3xl'>
            {content.map((project, index) => (
              <ProjectContent
                key={index}
                decs={project.Description}
                img={project.img}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
     
    </section>
  )
}

export default Projects