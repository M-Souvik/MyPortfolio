import React from 'react'
import {motion} from 'framer-motion'
import SkillOrbits from '@/components/SkillOrbits'
import { TextAnimate } from '../magicui/text-animate'

const SkillSection = () => {
  return (
    <div className='flex flex-col md:flex-row gap-0 md:gap-2 items-center'>
        
    <motion.div className="w-full h-fit opacity-65 " animate={{ y: [0, -20, 0] }}
    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}>
    <TextAnimate animation="blurInUp" by="character" once className="text-white text-center text-4xl sm:text-6xl font-bold font-abel w-full mt-12 sm:mb-10">
      MY SKILLS
    </TextAnimate>
    </motion.div>
    <SkillOrbits/>
    </div>
  )
}

export default SkillSection