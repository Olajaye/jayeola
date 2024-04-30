import SkillTest from "@/Sub-component/SkillTest"
import SkillData from "@/Sub-component/SkillData"
import { Frontend_data, Backend_skill, Other_skill } from "@/Constant/constant"


type Props = {}

const Skills = (props: Props) => {
  return (
    <section id="myskills" className="pt-20 pb-10">
      <div className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden">
      <SkillTest />

      <div className="flex flex-row justify-around flex-wrap mt-2 gap-8 items-center px-10">
        {Frontend_data.map((image) => (
          <SkillData
            key={image.skill_name}
            src={image.Image}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-8 items-center px-10">
        {Backend_skill.map((image) => (
          <SkillData
            key={image.skill_name}
            src={image.Image}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-8 items-center px-10">
        {Other_skill.map((image) => (
          <SkillData
            key={image.skill_name}
            src={image.Image}
          />
        ))}
      </div>
      
      

      </div>
    </section>
  )
}

export default Skills