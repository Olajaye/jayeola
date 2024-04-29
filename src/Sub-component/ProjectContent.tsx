

type Props = {
  decs: String
  img: any
  link: any
}

const ProjectContent = (props: Props) => {
  return (
    <div className="p-3 flex flex-col justify-center items-center">
      <div className="w-[100%]">
        <img src={props.img} alt="" className="sm:float-left my-3 w-[400px] h-[200px] rounded-xl object-contain"/>
        <p className="text-green text-xl text-balance">{ props.decs}</p>
      </div>
      <div className="bg-green w-64 mt-1 p-2 text-center ">
        <a href={props.link} target="_blank" rel="noopener noreferrer"> click</a>
      </div>
      
    </div>
  )
}

export default ProjectContent