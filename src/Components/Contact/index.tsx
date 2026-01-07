import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion"
import { ParentVariant, slideInFromLeft, slideInFromRight } from "@/utils/motion"
import { SparklesIcon } from '@heroicons/react/24/solid';
import ContactUs from "@/Components/Svgs/ContactUs"

interface FormData {
  user_name: string;
  user_email: string;
  subject: string;
  message: string;
}

type Props = {
  alertHandler: (open:boolean,message:string,color:boolean)=>void
}

const Contact = ({ alertHandler }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_f9mn16i',
        'template_ruh52zl',
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          subject: formData.subject,
          message: formData.message
        },
        { publicKey: 't_pIAxg9QfhpiYJc5' }
      );
      
      alertHandler(true, `Thanks ${formData.user_name}`, true);
      
      // Reset form
      setFormData({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Email sending failed:', error);
      alertHandler(true, 'Failed to send message', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='px-10 mt-5 py-8' id="contact">
      <motion.div
        variants={slideInFromLeft(0.1)}
        initial="hidden"
        whileInView="visible"
        className="flex justify-center py-[6px] px-[7px]"
      >
        <SparklesIcon className="text-[#FFD700] mr-[10px] h-5 w-5" />
        <h1 className="text-[17px] text-green font-extrabold">
          Contact Me
        </h1>
      </motion.div>
      
      <div className='py-10 grid grid-cols-1 sm:grid-cols-2 gap-6'>
        <motion.div
          initial={{ y: 50 }}
          animate={{
            y: -10,
            transition: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
          className='p-2 flex justify-around place-content-center'
        >
          <ContactUs />
        </motion.div>
        
        <div className='p-2 mt-6 pt-20 sm:pt-0 sm:mt-0 place-content-center'>
          <motion.form
            onSubmit={sendEmail}
            variants={ParentVariant}
            initial="hidden"
            whileInView="visible"
            className='h-62 flex flex-col items-center space-y-6'
          >
            <motion.input
              variants={slideInFromRight(0.2)}
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
              placeholder='Name'
              required
              disabled={isSubmitting}
              className='w-full sm:w-[70%] bg-black/40 border-green border-b-2 rounded-t-md outline-0 px-4 py-3 text-white text-xl focus:ring-2 focus:ring-green/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
            />
            
            <motion.input
              variants={slideInFromLeft(0.4)}
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
              placeholder='Email'
              required
              disabled={isSubmitting}
              className='w-full sm:w-[70%] bg-black/40 border-green border-b-2 rounded-t-md outline-0 px-4 py-3 text-white text-xl focus:ring-2 focus:ring-green/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
            />
            
            <motion.input
              variants={slideInFromRight(0.6)}
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder='Subject'
              required
              disabled={isSubmitting}
              className='w-full sm:w-[70%] bg-black/40 border-green border-b-2 rounded-t-md outline-0 px-4 py-3 text-white text-xl focus:ring-2 focus:ring-green/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
            />
            
            <motion.textarea
              variants={slideInFromRight(0.6)}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder='Message'
              required
              disabled={isSubmitting}
              className='w-full sm:w-[70%] bg-black/40 border-green border-b-2 rounded-t-md outline-0 px-4 py-3 text-white text-xl focus:ring-2 focus:ring-green/50 transition-all min-h-[120px] resize-y disabled:opacity-50 disabled:cursor-not-allowed'
              rows={4}
            />
            
            <motion.div
              variants={slideInFromRight(0.2)}
              className='flex justify-end w-full sm:w-[70%] mt-2'
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className='bg-black/50 px-8 py-3 shadow-lg shadow-green/30 text-green text-xl font-extrabold hover:bg-green hover:text-black transition-colors duration-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2'
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send'
                )}
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact
