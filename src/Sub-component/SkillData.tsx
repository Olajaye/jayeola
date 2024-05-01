import { motion } from "framer-motion"
import {imageVariant} from "@/utils/motion"

type Props = {
  src: React.ImgHTMLAttributes<HTMLImageElement> | any
}

const SkillData = ({src}: Props) => {
  return (
    <motion.div
      variants={imageVariant}
      className="shadow-green shadow-md  rounded-xl " >
      <img src={src} alt='skill image' className="w-12 h-12 sm:w-16 sm:h-16 " />
   </motion.div>
  )
}

export default SkillData