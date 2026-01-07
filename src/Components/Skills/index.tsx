import React from 'react'
import { motion } from 'framer-motion'
import { 
  Frontend_data, 
  Backend_skill,
  DevOps_skill,
  Tools_skill 
} from "@/Constant/constant"
import { 
  CheckIcon,
  // ChipIcon, 
  CodeBracketIcon,
  ServerIcon,
  WrenchScrewdriverIcon 
} from "@heroicons/react/24/solid"

const Skills = () => {
  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const skillItem = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.2 }
    }
  }

  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: <CheckIcon className="w-6 h-6 text-cyan-400" />,
      skills: Frontend_data,
      color: "from-cyan-500/10 to-cyan-500/5",
      borderColor: "border-cyan-500/20",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      title: "Backend & Database",
      icon: <ServerIcon className="w-6 h-6 text-green-400" />,
      skills: Backend_skill,
      color: "from-green-500/10 to-green-500/5",
      borderColor: "border-green-500/20",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      title: "DevOps & Cloud",
      icon: <CodeBracketIcon className="w-6 h-6 text-amber-400" />,
      skills: DevOps_skill,
      color: "from-amber-500/10 to-amber-500/5",
      borderColor: "border-amber-500/20",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      title: "Tools & Workflow",
      icon: <WrenchScrewdriverIcon className="w-6 h-6 text-purple-400" />,
      skills: Tools_skill,
      color: "from-purple-500/10 to-purple-500/5",
      borderColor: "border-purple-500/20",
      gradient: "from-purple-400 to-pink-500"
    }
  ]

  const proficiencyLevels = [
    { label: "Beginner", color: "bg-gray-600" },
    { label: "Intermediate", color: "bg-blue-500" },
    { label: "Advanced", color: "bg-green-500" },
    { label: "Expert", color: "bg-gradient-to-r from-cyan-400 to-green-400" }
  ]

  return (
    <section id="skills" className="relative py-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="w-full h-full border border-dashed border-gray-700/30 rounded-full"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
            <span className="text-sm font-medium text-cyan-400 tracking-wide">
              TECHNICAL MASTERY
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A comprehensive suite of tools and technologies I've mastered over 4+ years 
            of building scalable applications and solving complex problems
          </p>
        </motion.div>

        {/* Proficiency Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {proficiencyLevels.map((level) => (
            <div
              key={level.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-700/50"
            >
              <div className={`w-3 h-3 rounded-full ${level.color}`} />
              <span className="text-sm text-gray-300">{level.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              className="rounded-2xl overflow-hidden border border-gray-700/30 bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm"
            >
              {/* Category Header */}
              <div className={`p-6 bg-gradient-to-r ${category.color} border-b ${category.borderColor}`}>
                <div className="flex items-center gap-3">
                  {category.icon}
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <div className="ml-auto px-3 py-1 rounded-full bg-gray-900/50 border border-gray-700/50">
                    <span className="text-sm text-gray-300">
                      {category.skills.length} technologies
                    </span>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="p-6">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill: any, skillIndex: number) => (
                    <motion.div
                      key={skill.skill_name}
                      variants={skillItem}
                      whileHover="hover"
                      className="relative group"
                      custom={skillIndex}
                    >
                      <div className="aspect-square relative rounded-xl bg-gray-900/30 border border-gray-700/50 group-hover:border-cyan-500/30 transition-all duration-300 overflow-hidden p-4">
                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:via-cyan-500/10 group-hover:to-cyan-500/5 transition-all duration-500" />
                        
                        {/* Skill Icon */}
                        <div className="relative z-10 flex flex-col items-center justify-center h-full">
                          <div className="w-12 h-12 flex items-center justify-center mb-2">
                            <img
                              src={skill.Image}
                              alt={skill.skill_name}
                              className="w-full h-full object-contain filter brightness-0 invert opacity-90 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 transition-all duration-300"
                            />
                          </div>
                          
                          <span className="text-lg hidden sm:block text-center text-gray-400 group-hover:text-cyan-300 transition-colors duration-300 font-medium">
                            {skill.skill_name}
                          </span>
                          
                          {/* Proficiency Indicator */}
                          <div className="absolute bottom-2 left-2 right-2 h-1 rounded-full bg-gray-800 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency || 90}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: skillIndex * 0.05 }}
                              className={`h-full bg-gradient-to-r ${category.gradient}`}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-gray-700/30 backdrop-blur-sm">
            <h4 className="text-lg font-bold text-white mb-3">Learning Philosophy</h4>
            <p className="text-gray-400 text-sm">
              Continuous learning is core to my development philosophy. I dedicate time each week to exploring new technologies and refining existing skills.
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-gray-700/30 backdrop-blur-sm">
            <h4 className="text-lg font-bold text-white mb-3">Technology Adoption</h4>
            <p className="text-gray-400 text-sm">
              I evaluate technologies based on performance, community support, and long-term viability before incorporating them into production projects.
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-gray-700/30 backdrop-blur-sm">
            <h4 className="text-lg font-bold text-white mb-3">Best Practices</h4>
            <p className="text-gray-400 text-sm">
              Every technology is implemented following industry best practices, ensuring maintainability, scalability, and optimal performance.
            </p>
          </div>
        </motion.div>

        {/* Animated Element */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 right-10 w-20 h-20 opacity-10"
        >
          <div className="w-full h-full border-2 border-dashed border-cyan-500 rounded-full" />
        </motion.div>

        
      </div>
    </section>
  )
}

export default Skills