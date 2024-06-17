"use client"
import React from 'react';
import { MyContextProvider, useMyContext } from '@/context/MyContext.js';
import Link from 'next/link';
import { IoOpenOutline } from 'react-icons/io5';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectContent = () => {
  const context = useMyContext();

  return (
    <div className='m-8' id='project'>
      <motion.div className="w-full h-fit opacity-65" animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}>
        <h1 className="text-white text-center text-6xl font-bold w-full">
          PROJECT STATION
        </h1>
      </motion.div>
      <div className='grid grid-cols-3 mt-16 gap-6'>
        <div className="col-span-2 flex flex-row justify-center">
          <div>
            <h1 className="text-3xl font-semibold">Promptomania</h1>
            <p className="text-xl font-thin mt-6">
              {context.example} - Promptomania is a Mern-based Project through which users can know what type of prompts they can give to the AI like ChatGPT, Blackbox AI, etc.
            </p>
            <div className="flex flex-row gap-6 mt-9">
              <Link href= "https://promptomania-2-g9t96k35i-souvik-mondals-projects.vercel.app"
                 className="bg-transparent border-2 border-gray-500 rounded-full h-fit w-fit flex flex-row gap-2 p-1">
                  View Project <IoOpenOutline size={20} color="grey" /></Link>
              <Link href="https://github.com/Zstar246/Promptomania"
                 className="bg-transparent border-2 border-gray-500 rounded-full h-fit w-fit flex flex-row gap-2 p-1">
                  Github Repository <IoOpenOutline size={20} color="grey" /></Link>
            </div>
          </div>
        </div>
        <div>
          <div className="mockup-browser border bg-base-300 w-fit">
            <div className="mockup-browser-toolbar">
              <div className="input">https://promptomania-2-g9t96k35i-souvik-mondals-projects.vercel.app</div>
            </div>
            <div className="flex justify-center px-2 py-2 bg-base-200">
              <Image src="/assets/promptomania.png" alt="Promptomania" className="object-cover w-full h-full" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <MyContextProvider>
      <ProjectContent />
    </MyContextProvider>
  );
};

export default Project;
