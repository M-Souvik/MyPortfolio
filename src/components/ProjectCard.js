import React, { useEffect, useRef } from 'react'
import { Card, CardContent, CardFooter } from './ui/card'
import Image from 'next/image'
import { MagicCard } from './magicui/magic-card'
import { useRouter } from 'next/navigation'
import { InteractiveHoverButton } from './magicui/interactive-hover-button'
import Link from 'next/link'
// import { divider } from '@nextui-org/react'
import {motion} from 'framer-motion'
import { useInView } from "motion/react"

const ProjectCard = ({project}) => {
  const router=useRouter();
  const ref = useRef(null)
const isInView = useInView(ref, { once: true })


  // const motionCard=motion(Card)

  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])

  return (
<motion.div
initial={{opacity:0, scale:0}}
animate={{opacity:100, scale:1}}
transition={{delay:project.id*0.2}}
ref={ref}

>
    <Card     onClick={()=>router.push(`${project.link}`)} className="p-0 w-full h-full shadow-none  bg-black border-gray-500 rounded-xl">
    <MagicCard
    gradientColor={"#D9D9D955"} className={'h-full'}>

      <CardContent className="flex flex-col items-center justify-center p-4">
        <Image src={project.image} alt={project.name} width={1000} height={1000} className="rounded-xl h-40"/>
        <Link className="text-xl font-bold mt-4 hover:underline cursor-pointer" href={`${project.link}`}>{project.name}</Link>
        <p className="text-gray-300 mt-2 text-center">{project.description}</p>
        </CardContent>
        {/* <CardFooter className=" bottom-0 flex items-center justify-center gap-2">
        <InteractiveHoverButton onClick={()=>{router.push(`${project.weblink}`)}} className="text-nowrap">See Website</InteractiveHoverButton>
        </CardFooter> */}

    </MagicCard>
    </Card>
    </motion.div>
  )
}

export default ProjectCard