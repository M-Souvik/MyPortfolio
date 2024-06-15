"use client"
import React from 'react'
import { useState } from 'react';
import { IoRocket } from "react-icons/io5";
import {motion} from 'framer-motion'
import Image from 'next/image'
const About = () => {
  const [Qualifications, setQualifications]=useState(false);
  const [Experience, setExperience]=useState(true);

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
      <div className="grid grid-cols-2 ml-8 gap-4">
        <div className="">
          <h1 className="text-xl text-center mb-10 mt-12">Hi,I am Souvik Mondal. I am currently pursuing my degree on BE in IT from Universal College of engineering, Kaman, Bhiwandi Road. I am currently in 2nd year. I am a self-motivated person,who is passionate about web development. I am a team player. I have hands-on-experience on HTML,CSS,JavaScript and frameworks like nextjs, nodejs and expressjs. </h1> 
          <div className="flex flex-row gap-5 m-7 justify-between ">
            <button className="bg-transparent w-full text-center focus:border-b-4 focus:border-blue-600 transition duration-900 ease-in-out" onClick={handleExperience}>Experience</button>
            <div class="divider lg:divider-horizontal"></div> 
            <button className="bg-transparent w-full text-center focus:border-b-4 focus:border-blue-600 transition duration-900 ease-in-out" onClick={handleQualifications}>Educational Qualifications</button>
          </div>
          <div className="mt-12">
          {Qualifications &&(
          <>
          <div className="m-8">
            <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-start md:text-end mb-10">
      <time class="font-mono italic">2024</time>
      <div class="text-lg font-black">Universal College of Engineering</div>
      B.E in Information Technology
    </div>
    <hr/>
  </li>
  <li>
    <hr />
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-end mb-10">
      <time class="font-mono italic">2022</time>
      <div class="text-lg font-black">US Ostwal English Academy and Jr. College</div>
     Passed XIIth
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-start md:text-end mb-10">
      <time class="font-mono italic">2020</time>
      <div class="text-lg font-black">Ryan International School</div>
      Passed Xth
    </div>
    <hr />
  </li>
</ul>
          </div>

          </>
        )}
        {Experience &&(
          <>
          
          <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical" id='experience'>
  <li>
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
    <div class="timeline-start md:text-end mb-10">
      <time class="font-mono italic">1st June 2024 - 30th June 2024 </time>
      <div class="text-lg font-black">Web Developer Intern</div>
      Prodigy Infotech
    </div>
    <hr/>
  </li>
  </ul>
          </>
        )}
          </div>
        </div>
        
        
        <div className="w-fit h-fit">
          <Image src="/assets/profile.png" width={500} height={500} className="w-full h-full object-cover rounded-xl"/>
        </div>
      </div>
      </div>
  )
}

export default About
