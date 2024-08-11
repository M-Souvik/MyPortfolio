// components/ProfilePhoto.js
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'

const ProfilePhoto = () => {
  return (
    <div className="flex mt-12 md:mt-36 justify-center">
      <div className="relative w-80 h-80">
        <motion.div
          className="absolute inset-0 border-4 border-blue-500 rounded-full"
          animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        >
        <div className="absolute inset-0 w-76 h-76 rounded-full overflow-hidden m-2">
          <Image 
            src= "/assets/profile.png"
            alt="Profile" 
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePhoto;
