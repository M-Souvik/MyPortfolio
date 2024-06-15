"use client"
import Image from "next/image";
import { TiHtml5 } from "react-icons/ti";
import { DiCss3 } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import About from "./about/page";
import Project from "./project/page";
import Connect from "./connect/page";
import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { FaFileDownload } from "react-icons/fa";
import ProfilePhoto from '@/components/ProfilePhoto.js'
import {motion} from 'framer-motion'
export default function Home() {
  // const [text] = useTypewriter({
  //   words: ['Web Developer', 'Student'],
  //   loop: true,
  //   delaySpeed: 3000,
  // });
  return (
    <>
    {/* Desktop Navigation */}
    <div className="lg:grid hidden grid-cols-2 gap-3 min-h-screen">
    <div>
        <ProfilePhoto/>
    </div>
    <div className=" opacity-75 rounded-xl mr-4">
       <h1 className="text-3xl text-white text-center mt-36 font-abel">Myself,</h1>
       <p className="text-center text-8xl font-abel font-extrabold">Souvik Mondal<br/></p>
       <p className="text-blue-500 text-3xl font-abel text-center">Full Stack Web Developer</p>
    <div className="flex flex-row gap-5 justify-center mt-8">
      <Link href="#" className="rounded-full w-fit h-fit  bg-slate-300 opacity-75">
       <FaInstagramSquare size={60} color="black" className="p-2"/>
      </Link>
      <Link href="https://github.com/Zstar246" className="rounded-full w-fit h-fit bg-slate-300 opacity-75">
      <IoLogoGithub size={60} color="black" className="p-2"/>
      </Link>
      <Link href="#" className="rounded-full w-fit h-fit bg-slate-300 opacity-75">
      <FaLinkedin size={60} color="black" className="p-2"/>
      </Link>
    </div>
    <div className="m-4 flex flex-row gap-5 justify-center">
      <Link className="border-2 border-cyan-500 bg-transparent p-4 rounded-lg hover:bg-cyan-500 transition duration-900 ease-in-out hover:text-black" href="#connect">Connect with me {'>'}</Link>
      <div className="flex"><a className="flex gap-2 border-2 border-cyan-500 bg-cyan-500 text-black p-4 rounded-lg hover:bg-transparent transition duration-900 ease-in-out hover:text-slate-800" href="https://drive.google.com/uc?export=download&id=10ULHFGHcMGxk3NE3nXEvFzJOvlrG6ozI" download>Download CV <FaFileDownload /></a></div>
    </div>
    </div>
    </div>
    <div>
      <motion.div className="w-full h-fit opacity-65 " animate={{ y: [0, -20, 0] }}
      transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}>
      <h1 className="text-white text-center text-6xl font-bold font-abel w-full ">
        MY SKILLS
      </h1>
      </motion.div>

      <div className="flex flex-row gap-5 justify-center m-9 ">
          <div className="rounded-full w-fit h-fit bg-orange-600">
          <TiHtml5 size={80} color="white" className="p-2"/>
          </div>
          <div className="rounded-full w-fit h-fit  bg-blue-600 opacity-75">
          <DiCss3 size={80} color="white" className="p-2"/>
          </div>
          <div className="rounded-full w-fit h-fit bg-yellow-300 opacity-75">
          <TbBrandJavascript size={80} color="white" className="p-2"/>
          </div>
          <div className="rounded-full w-fit h-fit  bg-blue-800 opacity-75">
          <FaReact size={80} color="white" className="p-2"/>
          </div>
          <div className="rounded-full w-fit h-fit  bg-white opacity-75">
          <SiNextdotjs size={80} color="black" className="p-2"/>
          </div>
          <div className="rounded-full w-fit h-fit  bg-cyan-300 opacity-75">
          < SiTailwindcss  size={80} color="black" className="p-2"/>
          </div>
      </div>
      <div className="flex flex-row gap-5 justify-center mb-10 border-b-2 border-gray-500 ">
          <div className="rounded-full w-fit h-fit bg-red-600 opacity-75">
          < FaJava size={80} color="white" className="p-2"/>
          </div>
          <div className="rounded-full w-fit h-fit bg-orange-600 opacity-75">
          < GrMysql size={80} color="white" className="p-2"/>
          </div>
      </div>
      <div className="mt-8 border-b-2 border-gray-500">
      <About/>
      </div>
      <div className="mt-8 border-b-2 border-gray-500 min-h-screen">
        <Project/>
      </div>
      <div className="mt-8 border-b-2 border-gray-500 min-h-screen">
        <Connect/>
      </div>
    
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
    <Link className="link link-hover" href='#personalinfo'>About</Link>
    <Link className="link link-hover" href='#connect'>Connect</Link>
    <Link className="link link-hover" href='#experience'>Experience</Link>
   
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </nav> 
  <aside>
    <p>Made by Souvik Mondal</p>
  </aside>
</footer>
      

    </div>
    </>
  );
}
