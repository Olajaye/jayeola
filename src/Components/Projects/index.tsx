import { useState } from 'react'
import { Project } from '@/Constant/constant'
import ProjectContent from '@/Sub-component/ProjectContent'
import ProjectTitle from '@/Sub-component/ProjectTitle'

type Props = {}

const Projects = (props: Props) => {
  const [content, setContent] = useState([Project[0]])


  const handleProject = (id: any) => {
    const newProject = Project.filter(project => {
      return project.Title === id
    })
    setContent(newProject)
  }
  return (
    
    <section className='bg-black'>
      <div className='px-10 py-10'>

        <div className='text-center'>
          <h1 className='text-2xl text-green font-extrabold'>Projects</h1>
        </div>

        <div className='mt-3'>
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
          <div className='shadow-inner mt-3 w-auto h-auto shadow-green rounded-3xl'>
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