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
import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
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
      <Link href="#" className="rounded-full w-fit h-fit bg-slate-300 opacity-75">
      <IoLogoGithub size={60} color="black" className="p-2"/>
      </Link>
      <Link href="#" className="rounded-full w-fit h-fit bg-slate-300 opacity-75">
      <FaLinkedin size={60} color="black" className="p-2"/>
      </Link>
    </div>
    <div className="m-4 flex flex-row gap-5 justify-center">
      <button className="border-2 border-cyan-500 bg-transparent p-4 rounded-lg hover:bg-cyan-500 transition duration-900 ease-in-out hover:text-black">Connect with me {'>'}</button>
      <a className="border-2 border-cyan-500 bg-transparent p-4 rounded-lg hover:bg-cyan-500 transition duration-900 ease-in-out hover:text-black" href="/" download>Download CV {'>'}</a>
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
      <div className="flex flex-row gap-5 justify-center m-9">
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
      <div className="flex flex-row gap-5 justify-center">
          <div className="rounded-full w-fit h-fit bg-red-600 opacity-75">
          < FaJava size={80} color="white" className="p-2"/>
          </div>
          <div className="rounded-full w-fit h-fit bg-red-600 opacity-75">
          < FaJava size={80} color="white" className="p-2"/>
          </div>
      </div>
      <About/>

    </div>
    </>
  );
}
