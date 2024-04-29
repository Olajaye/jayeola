
type Props = {
  src: React.ImgHTMLAttributes<HTMLImageElement> | any
}

const SkillData = ({src}: Props) => {
  return (
   <div className="shadow-green shadow-md  rounded-xl " >
    <img src={src} alt='skill image' className="w-12 h-12 sm:w-16 sm:h-16 "/>
  </div>
  )
}

export default SkillData