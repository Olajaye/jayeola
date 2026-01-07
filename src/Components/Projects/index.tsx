import { useState, useRef } from 'react'
import { Project } from '@/Constant/constant'
import { 
  SparklesIcon, 
  ArrowRightIcon,
  CodeBracketIcon,
  EyeIcon,
  ArrowLeftIcon,
  ArrowRightCircleIcon 
} from "@heroicons/react/24/solid"
import { motion, AnimatePresence } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0)
  const [direction, setDirection] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const nextProject = () => {
    setDirection(1)
    setActiveProject((prev) => (prev + 1) % Project.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setActiveProject((prev) => (prev - 1 + Project.length) % Project.length)
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' })
    }
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    })
  }

  return (
    <section id="projects" className="relative bg-black py-10 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm mb-6">
            <SparklesIcon className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-cyan-400 tracking-wide">
              PORTFOLIO SHOWCASE
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured
            <span className="ms-2">
              <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A curated selection of projects that demonstrate my expertise in full-stack development, 
            innovative problem-solving, and technical leadership
          </p>
        </motion.div>

        {/* Project Navigation Tabs */}
        <motion.div
          // variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Select Project</h3>
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                className="p-2 rounded-lg bg-gray-900/50 border border-gray-700/50 hover:bg-gray-800 transition-colors"
                aria-label="Scroll left"
              >
                <ArrowLeftIcon className="w-5 h-5 text-gray-400" />
              </button>
              <button
                onClick={scrollRight}
                className="p-2 rounded-lg bg-gray-900/50 border border-gray-700/50 hover:bg-gray-800 transition-colors"
                aria-label="Scroll right"
              >
                <ArrowRightIcon className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {Project.map((project, index) => (
                <motion.button
                  key={project.Title}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setDirection(index > activeProject ? 1 : -1)
                    setActiveProject(index)
                  }}
                  className={`flex-shrink-0 px-6 py-4 rounded-xl border backdrop-blur-sm transition-all duration-300 ${
                    activeProject === index
                      ? 'bg-gradient-to-r from-cyan-500/20 to-green-500/20 border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                      : 'bg-gray-900/30 border-gray-700/50 hover:border-cyan-500/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {project.icon && (
                      <div className={`p-2 rounded-lg ${
                        activeProject === index 
                          ? 'bg-cyan-500/20' 
                          : 'bg-gray-800/50'
                      }`}>
                        <img 
                          src={project.icon} 
                          alt="" 
                          className="w-6 h-6"
                        />
                      </div>
                    )}
                    <div className="text-left">
                      <h4 className={`font-semibold ${
                        activeProject === index ? 'text-white' : 'text-gray-300'
                      }`}>
                        {project.Title}
                      </h4>
                      <span className="text-xs text-gray-400">
                        {project.category || 'Full-Stack'}
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project Display */}
        <div className="relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeProject}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid lg:grid-cols-2 gap-12"
            >
              {/* Project Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl shadow-cyan-500/10">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={Project[activeProject].img}
                      alt={Project[activeProject].Title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                    
                    {/* Tech Stack Badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {Project[activeProject].techStack?.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 text-xs rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Project Navigation Arrows */}
                <div className="flex justify-center gap-4 mt-8">
                  <button
                    onClick={prevProject}
                    className="p-3 rounded-full bg-gray-900/50 border border-gray-700/50 hover:bg-gray-800 transition-all hover:scale-110"
                    aria-label="Previous project"
                  >
                    <ArrowLeftIcon className="w-6 h-6 text-gray-400" />
                  </button>
                  <span className="px-6 py-3 rounded-full bg-gray-900/50 border border-gray-700/50 text-gray-300">
                    {activeProject + 1} / {Project.length}
                  </span>
                  <button
                    onClick={nextProject}
                    className="p-3 rounded-full bg-gray-900/50 border border-gray-700/50 hover:bg-gray-800 transition-all hover:scale-110"
                    aria-label="Next project"
                  >
                    <ArrowRightIcon className="w-6 h-6 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {Project[activeProject].Title}
                  </h3>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/30 text-cyan-300 text-sm">
                      {Project[activeProject].type || 'Web Application'}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {Project[activeProject].year || '2024'}
                    </span>
                  </div>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {Project[activeProject].Description}
                  </p>
                </div>

                
              </div>
            </motion.div>
            {/* Key Features */}
                {Project[activeProject].features && (
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                    <ul className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                      {Project[activeProject].features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 mt-2 rounded-full bg-cyan-500" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Project Links */}
                <div className="flex flex-wrap gap-4 py-6">
                  {Project[activeProject].link && (
                    <a
                      href={Project[activeProject].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-green-600 text-white font-semibold hover:from-cyan-700 hover:to-green-700 transition-all hover:scale-105"
                    >
                      <EyeIcon className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                  
                  {Project[activeProject].github && (
                    <a
                      href={Project[activeProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-700/50 bg-gray-900/30 text-gray-300 font-semibold hover:bg-gray-800/50 transition-all hover:scale-105"
                    >
                      <CodeBracketIcon className="w-5 h-5" />
                      View Code
                    </a>
                  )}
                  
                 
                </div>

                {/* Challenges & Solutions */}
                {Project[activeProject].challenges && (
                  <div className="pt-6 border-t border-gray-700/30">
                    <h4 className="text-xl font-semibold text-white mb-4">Technical Challenges</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-gray-900/30 border border-gray-700/30">
                        <h5 className="text-sm font-semibold text-cyan-300 mb-2">Challenge</h5>
                        <p className="text-sm text-gray-400">{Project[activeProject].challenges}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-gray-900/30 border border-gray-700/30">
                        <h5 className="text-sm font-semibold text-green-300 mb-2">Solution</h5>
                        <p className="text-sm text-gray-400">{Project[activeProject].solution}</p>
                      </div>
                    </div>
                  </div>
                )}
          </AnimatePresence>
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-gray-900/30 to-gray-800/20 border border-gray-700/30 backdrop-blur-sm">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-2">
              {Project.length}+
            </div>
            <div className="text-sm text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-gray-900/30 to-gray-800/20 border border-gray-700/30 backdrop-blur-sm">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-sm text-gray-400">Technologies Used</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-gray-900/30 to-gray-800/20 border border-gray-700/30 backdrop-blur-sm">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-sm text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-gray-900/30 to-gray-800/20 border border-gray-700/30 backdrop-blur-sm">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-sm text-gray-400">Code Quality</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects