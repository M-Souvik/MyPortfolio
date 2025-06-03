"use client"
import React from 'react';
import { MyContextProvider, useMyContext } from '@/context/MyContext.js';
import Link from 'next/link';
import { IoOpenOutline } from 'react-icons/io5';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '@/data';
import ProjectCard from '@/components/ProjectCard';

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
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-16 h-fit w-full justify-items-center gap-4'>


      {projects.map((project, index) => (
        <>
        <ProjectCard key={index} project={project} />
        
        </>
      ))}
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
