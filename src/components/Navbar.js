"use client"
import {React,useState} from "react"
import Link from "next/link"


export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
//     <div className="navbar bg-transparent ">
//   <div className="flex-1 ">
//     <Link href="/" className="btn btn-ghost text-xl pt-3" >SM</Link>
//   </div>
//   <div className="flex-none">
//     <ul className="menu menu-horizontal px-1">
//       <li><Link href="#personalinfo" className="text-lg pt-3" >Developer&apos;s Info</Link></li>
//       <li>
//         {/* <details>
//           <summary>
//             Parent
//           </summary>
//           <ul className="p-2 bg-base-100 rounded-t-none">
//             <li><a>Link 1</a></li>
//             <li><a>Link 2</a></li>
//           </ul>
//         </details> */}
//         <Link href="#project" className="text-lg pt-3" >Project Station</Link>
//       </li>
//       <li><Link href="#connect" className="text-lg border-2 border-gray-400 rounded-lg p-3" >Connect</Link></li>
//     </ul>
//   </div>
// </div>
<>
<nav className=" bg-transparent sticky">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <a href="/" className="border rounded-full p-2 bg-white font-semibold text-black ring ring-blue-500 ring-offset-2">
                        SM
                    </a>

                    {/* Mobile menu button */}
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
                    className={`absolute inset-x-0 z-100 w-full px-6 py-4 transition-all duration-300 ease-in-out dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative bg-white md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}
                >
                    <div className="flex flex-col md:flex-row md:mx-6 md:bg-transparent">
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
