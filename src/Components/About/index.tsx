import React from 'react'
import { motion } from 'framer-motion'
import IMAGE from "@/assets/newsuite-removebg-preview.png"
import { SparklesIcon, CodeBracketIcon, CpuChipIcon, CommandLineIcon, StarIcon } from "@heroicons/react/24/solid"

const About = () => {
  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  }

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const techStack = [
    { name: "React/Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "AWS/Cloud", level: 80 }
  ]

  return (
    <section 
      className="relative bg-black  min-h-screen py-10 overflow-hidden" 
      id="about"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm mb-4">
            <SparklesIcon className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-cyan-400 tracking-wide">
              4+ Years of Excellence
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Crafting Digital
            <span className="ms-2">
              <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Masterpieces
              </span>
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Where Innovation Meets Execution
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.div
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <CodeBracketIcon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                 Full-Stack Engineer
                </h3>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm <span className="text-cyan-300 font-semibold">Jayeola Gbolahan</span>, a seasoned Full-Stack Developer with over 4 years of experience architecting and delivering high-performance web applications. My expertise spans from crafting pixel-perfect UIs to building scalable backend systems that handle millions of requests.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I thrive on solving complex technical challenges and transforming ambitious ideas into elegant, production-ready solutions. My approach combines deep technical expertise with a keen eye for design and user experience.
              </p>
            </motion.div>

            {/* Tech Stack Visualization */}
            {/* <motion.div
              variants={fadeInUp}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <CpuChipIcon className="w-5 h-5 text-green-400" />
                <h4 className="text-lg font-semibold text-white">Technical Expertise</h4>
              </div>
              
              <div className="space-y-4">
                {techStack.map((tech, index) => (
                  <div key={tech.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-300">{tech.name}</span>
                      <span className="text-sm text-green-400">{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-green-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div> */}

            {/* Philosophy */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <CommandLineIcon className="w-5 h-5 text-amber-400" />
                <h4 className="text-lg font-semibold text-white">Development Philosophy</h4>
              </div>
              <p className="text-gray-300 italic">
                "Code isn't just written—it's crafted. Every line should serve a purpose, 
                every component should tell a story, and every system should anticipate 
                the future while excelling in the present."
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Image & Floating Elements */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Container */}
            <motion.div
              variants={scaleIn}
              className="relative z-10"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-3xl blur-xl" />
                
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
                  <motion.img
                    src={IMAGE} // Replace with your image
                    alt="Jayeola Gbolahan -  Full-Stack Developer"
                    className="w-full h-auto object-cover"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              variants={floatingAnimation}
              className="absolute top-10 -left-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 backdrop-blur-sm flex items-center justify-center"
            >
              <span className="text-cyan-300 text-sm font-bold">4+ Years</span>
            </motion.div>

            <motion.div
              variants={floatingAnimation}
              animate={{
                y: [10, -10, 10],
                transition: { duration: 3, delay: 0.5, repeat: Infinity }
              }}
              className="absolute bottom-20 -right-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 backdrop-blur-sm flex items-center justify-center"
            >
              <span className="text-green-300 text-sm font-bold text-[#FFD700]"><StarIcon className='w-16 h-16'/></span>
            </motion.div>

            {/* Animated Orb */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40">
              <motion.div
                animate={{
                  rotate: 360,
                  transition: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                className="w-full h-full relative"
              >
                <div className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full" />
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-500 rounded-full" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-green-500 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { value: "99%", label: "Client Satisfaction" },
            { value: "50+", label: "Projects Delivered" },
            { value: "7+", label: "Years Experience" },
            { value: "24/7", label: "Support Mindset" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-gray-900/30 to-gray-800/20 border border-gray-700/30 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  )
}

export default About