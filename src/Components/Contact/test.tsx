//import ContactMe from "@/Components/Svgs/ContactMe"
import ContactUs from "@/Components/Svgs/ContactUs"
import { motion } from "framer-motion"
import { ParentVariant, slideInFromLeft, slideInFromRight } from "@/utils/motion"
import { SparklesIcon } from '@heroicons/react/24/solid'
import emailjs from '@emailjs/browser';
import { useRef } from "react"

type Props = {
  alertHandler: (open:boolean,message:string,color:boolean)=>void
}
 
const Contact = ({alertHandler}:Props) => {
  const form = useRef();
  console.log(form)
  const sendEmail = (e:any) => {
    e.preventDefault();
    emailjs.sendForm('service_f9mn16i', 'template_ruh52zl', form.current, {publicKey: 't_pIAxg9QfhpiYJc5'})
      .then(
        () => {
          alertHandler(true, `Thanks Gbolahan`,true )
          // console.log('SUCCESS!');
        },
        (error) => {
          alertHandler(true, `Failed`,false )
          // console.log('FAILED...', error.text);
        },
    );
    
    e.target.reset()
  };
  return (
    <>
    <section className='px-10 mt-5 pt-20 sm:pt-16 md:pt-28 md:pb-28' id="contact">
      <motion.div
        variants={slideInFromLeft(0.1)}
        initial="hidden"
        whileInView="visible"
        className="flex justify-center py-[6px] px-[7px]">
        <SparklesIcon className="text-[#FFD700] mr-[10px] h-5 w-5" />
        <h1 className="text-[17px] text-green font-extrabold">
          Contact Me
        </h1>
      </motion.div>
      <div className='py-10 grid grid-cols-1 sm:grid-cols-2'>
        <motion.div
          initial={{ y: 50 }}
          animate={{
            y: -10, transition: {
              duration: 3,
              repeat: Infinity,
              repeatType:"reverse"
          }}}
          className='p-2 flex justify-around place-content-center'>
          <ContactUs />
        </motion.div>
        <div className='p-2 mt-6 pt-20 sm:pt-0 sm:mt-0 place-content-center'>
          <motion.form
            ref={form} onSubmit={sendEmail}
            variants={ParentVariant}
            initial="hidden"
            whileInView="visible"
            action="" className='h-62 flex flex-col items-center '>

            <motion.input
              variants={slideInFromRight(0.2)}
              type="text"
              name="user_name"
              placeholder='Name'
              required
              className='w-[100%] sm:w-[70%]  bg-[rgb(0,0,0,0.4)]  border-green border-b-2 rounded-t-md  outline-0 px-2 pt-2 text-white text-xl '
            />
        
            <motion.input
              variants={slideInFromLeft(0.4)}
              type="email"
              name="user_email"
              placeholder='E-mail'
              required
              className='w-[100%] sm:w-[70%]  bg-[rgb(0,0,0,0.4)]  border-green border-b-2 rounded-t-md outline-0 px-2 pt-2 text-white text-xl my-7'
            />
          
            <motion.input
              variants={slideInFromRight(0.6)}
              name="sebject"
              required
              placeholder='Subject'
              className='w-[100%] sm:w-[70%]  bg-[rgb(0,0,0,0.4)]  border-green border-b-2 rounded-t-md  outline-0 px-2 pt-2 text-white text-xl'
            />
            

            <motion.textarea
              variants={slideInFromRight(0.6)}
              name="message"
              required
              placeholder='Message'
              className='w-[100%] sm:w-[70%]  bg-[rgb(0,0,0,0.4)]  border-green border-b-2 rounded-t-md  outline-0 px-2 pt-2 mt-7 text-white text-xl'
              cols={30}
              rows={4}
            />
            
            
            <motion.div
              variants={slideInFromRight(0.2)}
              className='flex justify-end mt-4 p2 '>
              <button className='bg-[rgb(0,0,0,0.5)] px-6 p-1 shadow-sm shadow-green text-green text-xl font-extrabold'>Send</button>
            </motion.div>
          </motion.form>
        </div>
      </div>
      </section>
    </>
  )
}

export default Contact