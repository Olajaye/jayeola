
import ContactMe from "@/Components/Svgs/ContactMe"
import ContactUs from "@/Components/Svgs/ContactUs"

type Props = {}
 
const Contact = (props: Props) => {
  return (
    <section className='px-10'>
      <div className='py-10 grid grid-cols-1 sm:grid-cols-2'>
        <div className='p-2 flex justify-around place-content-center'>
          <ContactUs />
        </div>

        <div className='p-2 place-content-center'>
          <form action="" className='h-62 '>

            <input type="text" id='name' placeholder='Name' className='w-[100%]  bg-[rgb(0,0,0,0.5)]  border-green border-b-2 outline-0 px-2 pt-2 text-white text-xl ' />
        
            <input type="email" id='email' placeholder='E-mail'  className='w-[100%]  bg-[rgb(0,0,0,0.5)]  border-green border-b-2 outline-0 px-2 pt-2 text-white text-xl my-7' />
          
            <textarea name="textcontent" id="textcontent" placeholder='Text'   className='w-[100%]  bg-[rgb(0,0,0,0.5)]  border-green border-b-2 outline-0 px-2 pt-2 text-white text-xl' />
            
            
            <div className='flex justify-end mt-4 p2 '>
              <button className='bg-[rgb(0,0,0,0.5)] px-6 p-1 shadow-sm shadow-green text-green text-xl font-extrabold'>Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
    
  )
}

export default Contact