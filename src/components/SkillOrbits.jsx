import React from 'react'
import { OrbitingCircles } from './magicui/orbiting-circles'
import { TiHtml5 } from "react-icons/ti";
import { DiCss3 } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { GrMysql } from 'react-icons/gr';
import { SiDjango } from "react-icons/si";
import { useMediaQuery } from 'usehooks-ts';


const SkillOrbits = () => {
      const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <div className="relative flex h-[60vh] md:h-[100vh] w-full flex-col items-center justify-center overflow-hidden">
    <OrbitingCircles iconSize={40} radius={isMobile?150:250} reverse speed={1}>
    <div className="rounded-full w-fit h-fit bg-orange-600">
          <TiHtml5 size={isMobile?45:80} color="white" className="p-2"/>
          </div>
          <div className="rounded-full w-fit h-fit  bg-blue-600 opacity-75  ">
          <DiCss3 size={isMobile?45:80} color="white" className="p-2"/>
          </div>
          <div className="rounded-full w-fit h-fit bg-yellow-300 opacity-75  ">
          <TbBrandJavascript size={isMobile?45:80} color="white" className="p-2"/>
          </div>
          <div className="rounded-full w-fit h-fit  bg-blue-800 opacity-75 ">
          <FaReact size={isMobile?45:80} color="white" className="p-2"/>
          </div>
          <div className="rounded-full w-fit h-fit  bg-white opacity-75 ">
          <SiNextdotjs size={isMobile?45:80} color="black" className="p-2"/>
          </div>
    </OrbitingCircles>
    <OrbitingCircles iconSize={20} radius={isMobile?100:150}>
    <div className="rounded-full w-fit h-fit  bg-cyan-300 opacity-75 ">
          < SiTailwindcss  size={isMobile?45:80} color="black" className="p-2"/>
          </div>
          <div className="rounded-full w-fit h-fit bg-red-600 opacity-75 ">
          < FaJava size={isMobile?45:80} color="white" className="p-2"/>
          </div>
          <div className="rounded-full w-fit h-fit bg-green-800 opacity-85 ">
          < SiDjango size={isMobile?45:80} color="white" className="p-2"/>
          </div>
          <div className="rounded-full w-fit h-fit bg-green-300 opacity-75 ">
          < FaNode size={isMobile?45:80} color="black" className="p-2"/>
          </div>

    </OrbitingCircles>
    <OrbitingCircles iconSize={20} radius={isMobile?50:50} reverse speed={2}>
    <div className="rounded-full w-fit h-fit bg-orange-600 opacity-75 ">
          < GrMysql size={isMobile?45:60} color="white" className="p-2"/>
          </div>
          <div className="rounded-full w-fit h-fit bg-white opacity-75 ">
          < SiExpress size={isMobile?45:60} color="black" className="p-2"/>
          </div>
          
          {/* <div className="rounded-full w-fit h-fit bg-purple-600 opacity-85 ">
          < SiStrapi size={isMobile?20:80} color="white" className="p-2"/>
          </div> */}
          <div className="rounded-full w-fit h-fit bg-green-600 opacity-85 ">
          < SiMongodb size={isMobile?45:60} color="black" className="p-2"/>
          </div>
    </OrbitingCircles>
  </div>
  )
}

export default SkillOrbits