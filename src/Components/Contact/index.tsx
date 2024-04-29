import React from 'react'
import { ReactComponent } from '../Svgs/PhoneSvg'

type Props = {}
 
const Contact = (props: Props) => {
  return (
    <section className='px-10'>
      <div className='py-10 grid grid-cols-1 sm:grid-cols-2'>
        <div className='p-2 flex justify-around'>
          <div className='h-[300px] w-[300px] '>
           <ReactComponent className='h-[250px] w-[250px]'/>
          </div>
        </div>

        <div className='p-2 place-content-center border shadow-inner shadow-green rounded-xl'>
          <form action="" className='h-62 '>
            <div className='flex items-center py-2'>
            <label htmlFor="name" className='text-green text-xl'>Name</label>
            <input type="text" id='name' className='ms-3 w-[80%] border-b-2 h-12 border-s-2 border-green rounded-xl bg-dark outline-0 px-2 pt-2 text-white text-xl' />
            </div>

            <div className='flex items-center my-12 py-2'>
             <label htmlFor="email" className='text-green text-xl'>E-mail</label>
             <input type="email" id='email' className='ms-3 w-[80%] h-12 border-b-2 border-s-2 border-green rounded-xl bg-dark outline-0 px-2 pt-2 text-white text-xl' />
            </div>
            
            <div className='flex items-center py-2'>
              <label htmlFor="textcontent" className='text-green text-xl'>TEXT</label>
              <textarea name="textcontent" id="textcontent" cols="30" rows="2" className='ms-3 w-[90%] border-b-2 border-s-2 border-green rounded-xl bg-dark outline-0 px-2 pt-2 text-white text-xl' />
            </div>
            
            <div className='flex justify-end mt-4 p2 '>
              <button className='bg-dark rounded-lg px-6 shadow-sm shadow-green text-xl font-extrabold'>Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
    
  )
}

export default Contact