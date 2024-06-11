"use client"
import React from 'react'
import { useState } from 'react';
import { IoRocket } from "react-icons/io5";
import {motion} from 'framer-motion'
import Image from 'next/image'
const About = () => {
  const [Qualifications, setQualifications]=useState(true);
  const [Experience, setExperience]=useState(false);

  const handleQualifications=()=>{
    setQualifications(true);
    setExperience(false);
  }
  const handleExperience=()=>{
    setQualifications(false);
    setExperience(true)
  }
  return (
    <div className="mt-12 min-h-screen" id="personalinfo">
      <motion.div className="w-full h-fit opacity-65 " animate={{ y: [0, -20, 0] }}
      transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}>
      <h1 className="text-white text-center text-6xl font-bold font-abel w-full ">
        ABOUT ME 
      </h1>
      </motion.div>
      <div className="grid grid-cols-2">
        <div className="">
          <h1 className="text-xl text-center mb-10 mt-12">Hi,I am Souvik Mondal. I am currently pursuing my degree on BE in IT from Universal College of engineering, Kaman, Bhiwandi Road. I am a self-motivated person,who is passionate about web development. I am a team player. </h1> 
          <div className="flex flex-row gap-5 m-7 justify-between ">
            <button className="bg-transparent w-full text-center focus:border-b-4 focus:border-blue-600 transition duration-900 ease-in-out" onClick={handleQualifications}>Educational Qualifications</button>
            <div class="divider lg:divider-horizontal"></div> 
            <button className="bg-transparent w-full text-center focus:border-b-4 focus:border-blue-600 transition duration-900 ease-in-out" onClick={handleExperience}>Experience</button>
          </div>
          <div className="mt-12">
          {Qualifications &&(
          <>
          <div className="m-8">
            <ul className="list-disc">
              <li className=''>
                <p className="text-xl font-semibold">Completed my Xth from Ryan International School in the year 2019</p>
                <p className="text-sm font-thin">Percentage: 84.20%</p>
              </li>
              <li className=''>
              <p className="text-xl font-semibold">Completed my XIIth from U.S. Ostwal English Academy & Jr. College in the year 2022</p>
              <p className="text-sm font-thin">Percentage: 83.40%</p>
              </li>
              <li className=''>
              <p className="text-xl font-semibold">Currently pursuing my degree on B.E on Information Technology from Universal College of Engineering</p>
              </li>
            </ul>
          </div>
          </>
        )}
        {Experience &&(
          <>
          <div className="m-8">
           <ul className='list-disc'>
            <li><p className='text-2xl font-semibold'>Web Developer Intern</p>
            <p className='text-xl font-thin'>Company: Prodigy Infotech</p>
            <p className='text-lg font-thin'>Duration: 1st June 2024 - 30th June 2024</p>
            </li>
           </ul>
          </div>
          </>
        )}
          </div>
        </div>
        
        
        <motion.div className="w-fit h-fit"animate={{ x: [0, -50, 0] }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}>
          <Image src="/assets/ufo.png" width={1000} height={1000} className="w-full h-full object-cover"/>
        </motion.div>
      </div>
      </div>
  )
}

export default About
