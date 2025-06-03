// components/ContactForm.js
"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, Toaster } from "sonner"
import ConnectForm from '@/components/sections/connect/ConnectForm';
import { TextAnimate } from '@/components/magicui/text-animate';
import Image from 'next/image';
// import { Globe } from '@/components/magicui/globe';

const Connect = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId=toast.loading("Launching Message...")
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        toast.success("Mission Accomplished! Your Message Sent Successfully.", { id: toastId })
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Mission Failed! Failed to send message.", { id: toastId })
    }
  };

  return (
    <div id='connect' className='overflow-hidden relative flex flex-col items-center justify-center lg:h-[70vh] sm:px-10 px-2 w-full'>


      <div className="grid  sm:grid-cols-2 items-center w-full  bg-transparent">
        <div className='relative left-0 flex flex-col h-full items-center justify-center'>
          <Image src={'/assets/earth.png'} width={1000} height={1000} className='h-[30rem] w-[30rem] relative z-30 object-contain'/>
        <div className='absolute z-50'>
          <TextAnimate animation="blurInUp" by="character" once className="text-white font-outline-4  text-center  uppercase text-4xl sm:text-6xl font-bold font-abel w-full mt-12 sm:mb-10">
            Let's Connect
          </TextAnimate>
        </div>

      {/* <Globe/> */}
      </div>
        <div className="w-full flex items-center justify-center pb-3">
          <ConnectForm handleChange={handleChange} formData={formData} handleSubmit={handleSubmit}/>
        </div>
      </div>
      {/* <Toaster/> */}
    </div>
  );
};

export default Connect;
