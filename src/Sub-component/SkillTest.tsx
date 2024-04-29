import React from 'react'
import { SparklesIcon } from '@heroicons/react/24/solid'

type Props = {}

const SkillTest = (props: Props) => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      
      <div className="flex py-[6px] px-[7px]">
        <SparklesIcon className="text-[#FFD700] mr-[10px] h-5 w-5" />
        <h1 className="text-[17px] text-green font-extrabold">
          My Stack
        </h1>
      </div>
    
      <div className='text-[30px] text-white font-medium  text-center mb-[10px]'>
        Making apps with modern technologies
      </div>
      
      <div className='cursive text-xl text-gray-400 mb-10  text-center italic'>
        Never miss a task, deadline or idea
      </div>
    </div>
  )
}

export default SkillTest