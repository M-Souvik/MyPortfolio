import React from 'react'
import { TextAnimate } from '../magicui/text-animate'
import { FaFileDownload, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io5'
import Link from 'next/link'
import Image from 'next/image'
import { WordRotate } from '../magicui/word-rotate'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const LandingSection = () => {
  const onButtonClick = () => {
        const pdfUrl = `${process.env.NEXT_PUBLIC_CLOUDINARY_LINK}/Black_and_White_Simple_Business_School_Graduate_Corporate_Resume_20250501_222825_0000_nlzhck.pdf`;;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = `${process.env.NEXT_PUBLIC_CLOUDINARY_LINK}/Black_and_White_Simple_Business_School_Graduate_Corporate_Resume_20250501_222825_0000_nlzhck.pdf`;
        document.body.appendChild(link);
        link.target = "_blank";
        link.click();
        document.body.removeChild(link);
    };
  return (
    <div className="lg:grid lg:grid-cols-2 gap-3 lg:min-h-screen">
    <motion.div
  initial={{ x: -300, y: 300, opacity: 0 }}
  animate={{ x: 0, y: 0, opacity: 1 }}
  transition={{ type: 'spring' }}
  className="relative rounded-full h-80 w-fit flex justify-center items-center mt-12 md:mt-36 mx-auto"
>
  <motion.div   initial={{ x: 0, y:0,opacity: 0, rotate: -20 }}
  animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }} 
  transition={{ type: 'spring' , delay: 1 }}
  className='absolute -top-5 sm:-top-16 rounded-full text-black right-8 sm:right-10 px-5 py-2 bg-white'>
    Hi There,<br/> Nice to Meet You!
  </motion.div>
  <Image 
    src="/assets/launch.png"
    alt="Profile" 
    className="lg:w-[29rem] lg:h-[29rem] w-[25rem] h-[25rem] object-cover"
    width={900}
    height={900}
  />
</motion.div>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    
    className="">
       <h1 className="text-xl md:text-3xl text-slate-300 text-center mt-4 md:mt-36">
       <TextAnimate animation="blurInUp" by="character" once>
      Myself
    </TextAnimate>

       </h1>
       <p className="text-center text-5xl md:text-8xl font-abel font-extrabold text-white">
        <TextAnimate animation="blurInUp" by="character" once delay={1}>
      Souvik Mondal
    </TextAnimate>
    </p>
       {/* <p className=""> */}
       <p className="text-center w-full">I'm interested in</p>
       <WordRotate
      className="text-blue-500 text-4xl font-abel text-center"
      words={["Web Development", "Machine Learning", "Deep Learning", "App Development"]}
    />

        {/* <TextAnimate animation="slideUp" by="word" once delay={1.5}>
      Full Stack Web Developer
    </TextAnimate> */}
    {/* </p> */}
    <div className="flex flex-row gap-5 justify-center sm:mt-8 mt-4">
      <Link href="https://l1nk.dev/inUXt" className="rounded-full w-fit h-fit  bg-slate-300 opacity-75">
       <FaInstagramSquare size={60} color="black" className="p-2"/>
      </Link>
      <Link href="https://github.com/Zstar246" className="rounded-full w-fit h-fit bg-slate-300 opacity-75">
      <IoLogoGithub size={60} color="black" className="p-2"/>
      </Link>
      <Link href="https://www.instagram.com/souvik_mondal1?igsh=MXdvbjQxbjNnZmp4Mg==" className="rounded-full w-fit h-fit bg-slate-300 opacity-75">
      <FaLinkedin size={60} color="black" className="p-2"/>
      </Link>
    </div>
    <div className="m-4 flex flex-col md:flex-row gap-5 justify-center">
      <Link className="border-2 border-cyan-500 flex items-center justify-center bg-transparent p-4 text-center hover:bg-cyan-500 transition-transform duration-300 ease-in-out hover:text-black  rounded text-cyan-500" href="#connect"> <span> Let's Connect </span><ChevronRight/> </Link>
      <button onClick={()=>onButtonClick()} className="flex justify-center gap-2 border-2 border-cyan-500 bg-cyan-500 text-black p-4 hover:bg-transparent hover:text-cyan-500 transition duration-900 ease-in-out rounded" href={`${process.env.NEXT_PUBLIC_CLOUDINARY_LINK}/Black_and_White_Simple_Business_School_Graduate_Corporate_Resume_20250501_222825_0000_nlzhck.pdf`} >Know More About Me<FaFileDownload size={20}/></button>
    </div>
    </motion.div>
    </div>
  )
}

export default LandingSection