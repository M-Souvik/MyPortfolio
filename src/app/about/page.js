"use client"
import React, { useState } from 'react';
import { IoRocket } from "react-icons/io5";
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const [activeTab, setActiveTab] = useState('Experience');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-12 min-h-screen" id="personalinfo">
      <motion.div
        className="w-full h-fit opacity-65"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
      >
        <h1 className="text-white text-center text-6xl font-bold font-abel w-full">
          ABOUT ME
        </h1>
      </motion.div>
      <div className="grid grid-cols-2 ml-8 gap-4">
        <div>
          <h1 className="text-xl text-center mb-10 mt-12">
            Hi, I am Souvik Mondal. I am currently pursuing my degree in BE in IT from Universal College of Engineering, Kaman, Bhiwandi Road. I am currently in 2nd year. I am a self-motivated person, passionate about web development. I am a team player with hands-on experience in HTML, CSS, JavaScript, and frameworks like Next.js, Node.js, and Express.js.
          </h1>
          <div className="flex flex-row gap-5 m-7 justify-between">
            <button
              className={`bg-transparent w-full text-center ${activeTab === 'Experience' ? 'border-b-4 border-blue-600' : ''} transition duration-900 ease-in-out`}
              onClick={() => handleTabClick('Experience')}
            >
              Experience
            </button>
            <div className="divider lg:divider-horizontal"></div>
            <button
              className={`bg-transparent w-full text-center ${activeTab === 'Qualifications' ? 'border-b-4 border-blue-600' : ''} transition duration-900 ease-in-out`}
              onClick={() => handleTabClick('Qualifications')}
            >
              Educational Qualifications
            </button>
          </div>
          <div className="mt-12">
            {activeTab === 'Qualifications' && (
              <div className="m-8">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                  <li>
                    <div className="timeline-middle">
                      <IoRocket className="h-5 w-5" />
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                      <time className="font-mono italic">2024</time>
                      <div className="text-lg font-black">Universal College of Engineering</div>
                      B.E in Information Technology
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-middle">
                      <IoRocket className="h-5 w-5" />
                    </div>
                    <div className="timeline-end mb-10">
                      <time className="font-mono italic">2022</time>
                      <div className="text-lg font-black">US Ostwal English Academy and Jr. College</div>
                      Passed XIIth
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-middle">
                      <IoRocket className="h-5 w-5" />
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                      <time className="font-mono italic">2020</time>
                      <div className="text-lg font-black">Ryan International School</div>
                      Passed Xth
                    </div>
                    <hr />
                  </li>
                </ul>
              </div>
            )}
            {activeTab === 'Experience' && (
              <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical" id="experience">
                <li>
                  <div className="timeline-middle">
                    <IoRocket className="h-5 w-5" />
                  </div>
                  <div className="timeline-start md:text-end mb-10">
                    <time className="font-mono italic">1st June 2024 - 30th June 2024</time>
                    <div className="text-lg font-black">Web Developer Intern</div>
                    Prodigy Infotech
                  </div>
                  <hr />
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="w-fit h-fit">
          <Image src="/assets/profile.png" width={500} height={500} className="w-full h-full object-cover rounded-xl" alt="Profile Picture" />
        </div>
      </div>
    </div>
  );
};

export default About;
