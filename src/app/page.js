"use client"
import Project from "./project/page";
import Connect from "./connect/page";
import SkillSection from "@/components/sections/SkillSection";
import LandingSection from "@/components/sections/LandingSection";
import Experience from "@/components/sections/Experience";
export default function Home() {
  return (
    <>
    {/* Desktop Navigation */}
    <LandingSection/>
    <div>
      <SkillSection/>
      
      <div className="mt-8 border-gray-500 min-h-screen w-full sm:px-10">
        <Project/>
      </div>
      
      <div className="mt-8 border-b-2 border-gray-500  overflow-hidden shadow-lg shadow-slate-500 w-full">
        <Connect/>
      </div>
    
      
      

    </div>
    </>
  );
}
