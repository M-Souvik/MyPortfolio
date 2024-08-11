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
        <h1 className="text-white text-center text-4xl md:text-6xl font-bold w-full">
          PROJECT STATION
        </h1>
      </motion.div>
      <div className='grid md:grid-cols-2 grid-cols-1 mt-16 h-fit w-fit justify-items-center'>
        <div className="flex flex-row justify-center">
          <div>
            <h1 className="text-3xl font-semibold">Promptomania</h1>
            <p className="text-xl font-thin mt-6">
              {context.example}
            </p>
            <div className="flex flex-row gap-6 mt-9 last:">
              <Link href= "https://promptomania-2-g9t96k35i-souvik-mondals-projects.vercel.app"
                 className="bg-transparent border-2 border-gray-500 rounded-full h-fit w-fit flex flex-row gap-2 p-1">
                  View Project <IoOpenOutline size={20} color="grey" /></Link>
              <Link href="https://github.com/Zstar246/Promptomania"
                 className="bg-transparent border-2 border-gray-500 rounded-full h-fit w-fit flex flex-row gap-2 p-1">
                  Github Repository <IoOpenOutline size={20} color="grey" /></Link>
            </div>
          </div>
        </div>
        <div className='flex justify-center p-4 sm:p-0'>
          <div className="mockup-browser border bg-base-300 w-[70%] md:w-fit">
            <div className="mockup-browser-toolbar p-2 md:p-0">
              <div className="input">https://promptomania-2-g9t96k35i-souvik-mondals-projects.vercel.app</div>
            </div>
            <div className="flex justify-center p-2 md:px-2 md:py-2 bg-base-200">
              <Image src="/assets/promptomania.png" alt="Promptomania" className="object-cover w-full h-full shrink rounded-xl" width={500} height={500} />
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
