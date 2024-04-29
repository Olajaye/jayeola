

type Props = {
  decs: String
  img: any
  link: any
}

const ProjectContent = (props: Props) => {
  return (
    <div className="p-3 flex flex-col justify-center items-center">
      <div>
        <img src={props.img} alt="" className="float-left m-3 w-[200px] h-[200px] rounded-full"/>
        <p className="text-green text-xl ">{ props.decs}</p>
      </div>
      <div className="bg-green w-64 mt-5 p-2 text-center ">
        <a href={props.link} target="_blank" rel="noopener noreferrer"> click</a>
      </div>
      
    </div>
  )
}

export default ProjectContent