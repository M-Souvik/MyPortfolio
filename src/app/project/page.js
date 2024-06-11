import Link from 'next/link'
import React from 'react'
import { IoOpenOutline } from 'react-icons/io5'
import Image from 'next/image'
const Project = () => {
  return (
    <div className='m-8'>
    <h1 className="text-4xl font-bold text-center w-full h-fit bg-slate-400 text-black">Project Station</h1>
    <div className='grid grid-cols-3 mt-16 gap-6'>
      <div className="col-span-2 flex flex-row justify-center">
        <div className=''>
          <h1 className="text-3xl font-semibold">Promptomania</h1>
          <p className="text-xl font-thin mt-6">Promptomania is a Mern-based Project through which user can know what type of prompts they can give to the AI like ChatGPT, Blackbox AI, etc.</p>
          <div className="flex flex-row gap-6 mt-9">
          <Link href="/" className='bg-transparent border-2 border-gray-500 rounded-full h-fit w-fit'><span className='flex flex-row gap-2 p-1'>View Project <IoOpenOutline size={20} color='grey'/></span></Link>
          <Link href="/" className='bg-transparent border-2 border-gray-500 rounded-full h-fit w-fit'><span className='flex flex-row gap-2 p-1'>Github Repository<IoOpenOutline size={20} color='grey'/></span></Link>
          </div>
        </div>
        </div>
        <div>
        <div className="mockup-browser border bg-base-300 w-fit">
         <div className="mockup-browser-toolbar">
          <div className="input">https://promptomania.com</div>
         </div>
         <div className="flex justify-center px-2 py-2 bg-base-200">
          <Image src="/assets/promptomania.png" alt="Promptomania" className="object-cover w-full h-full" width={500} height={500} />
         </div>
         </div>
         </div>
      
    </div>
    </div>
  )
}

export default Project
