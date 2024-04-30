import { FaLink } from "react-icons/fa6"

type Props = {
  decs: String
  img: any
  link: any
}

const ProjectContent = (props: Props) => {
  return (
    <div className="p-1 sm:p-3 flex flex-col justify-center items-center">
      <div className="w-[100%] p-4 ">
        <img src={props.img} alt="" className="sm:float-left my-3 sm:mb-0 sm:me-3 w-[100%] sm:w-[400px] h-full rounded-xl object-contain"/>
        <p className="text-green text-xl mt-4 text-balance">{ props.decs}</p>
      </div>
      <a href={props.link} target="_blank" rel="noopener noreferrer" className="mb-4">
        <div className="bg-black flex items-center px-3 py-1 rounded-lg shadow-sm shadow-green ">
          <FaLink className="text-4xl text-green"/>
          <p className="text-2xl ms-2 text-green font-extrabold">Explore</p>
        </div>
      </a>
      
    </div>
  )
}

export default ProjectContent