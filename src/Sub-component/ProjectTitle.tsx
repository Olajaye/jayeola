
type Props = {
  title: String
  icon: any
  func: any
}

const ProjectTitle = ({title, func, icon}: Props) => {
  return (
    <div onClick={()=>func(title)}
      className="flex items-center h-12 my-5 w-[25%] sm:w-250px ms-6 rounded-2xl shadow-inner shadow-green p-3">
      <img src={icon} alt="" className="w-8 h-8 rounded-full" />
      <h4 className="text-white ms-2 sm:text-xl overflow-x-hidden">{title}</h4>
    </div>
  )
}

export default ProjectTitle