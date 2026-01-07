import SkillTest from "@/Sub-component/SkillTest"
import SkillData from "@/Sub-component/SkillData"
import { Frontend_data, Backend_skill } from "@/Constant/constant"
import { motion } from "framer-motion"
import {hiParentVariant, ParentVariant} from "@/utils/motion"



const Skills = () => {
  return (
    <section id="myskills" className="pt-20 pb-10 md:pt-28 md:pb-40">
      <div className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden">
        <SkillTest />

        <motion.div
          variants={hiParentVariant}
          initial="hidden"
          whileInView="visible" >
          <motion.div
            variants={ParentVariant}
            className="flex flex-row justify-around flex-wrap mt-2 gap-8 items-center px-10">
            {Frontend_data.map((image) => (
              <SkillData
                key={image.skill_name}
                src={image.Image}
              />
            ))}
          </motion.div>

          <motion.div
            variants={ParentVariant}
            className="flex flex-row justify-around flex-wrap mt-4 gap-8 items-center px-10">
            {Backend_skill.map((image) => (
              <SkillData
                key={image.skill_name}
                src={image.Image}
              />
            ))}
          </motion.div>

          {/* <motion.div
            variants={ParentVariant}
            className="flex flex-row justify-around flex-wrap mt-4 gap-8 items-center px-10">
            {Other_skill.map((image) => (
              <SkillData
                key={image.skill_name}
                src={image.Image}
              />
            ))}
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills