"use client"
import {React,useState} from "react"
import Link from "next/link"
import { X } from "lucide-react";


export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
<>
<nav className=" bg-transparent backdrop-blur-md sticky top-0 left-0 right-0 z-50 shadow-md dark:bg-gray-800 border-b-2 border-blue-500">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center ">
                <div className="flex items-center justify-between">
                    <a href="/" className="border rounded-full p-2 bg-white font-semibold text-black ring ring-blue-500 ring-offset-2">
                        SM
                    </a>
                    <div className="flex lg:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div
                    className={`absolute rounded-b-xl top-0  inset-x-0 z-100 w-full px-6 py-4 transition-all duration-300 ease-in-out dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative bg-white md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 ${isOpen ? 'translate-y-0 opacity-100' : 'opacity-0 -translate-y-full'}`}
                >
                    <button className="absolute  sm:hidden top-2 sm:top-0 right-2 sm:right-0" onClick={()=>setIsOpen(false)}><X className="hover:text-red-700 transition-colors "/></button>
                    <div className="flex flex-col md:flex-row md:mx-6 relative top-5 md:justify-center md:items-center md:h-full md:w-full  md:bg-transparent">
                        <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 bg-transparent" href="#personalinfo">Personal Info</Link>
                        <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#project">Project Station</Link>
                        <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#connect">Connect</Link>
                    </div>
                </div>
            </div>
        </nav>
</>
  );
}
