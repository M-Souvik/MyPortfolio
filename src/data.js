import { FaJava } from "react-icons/fa"
import { GrMysql } from "react-icons/gr"
import { SiMongodb } from "react-icons/si"

export const languages=[
    {
        id:1,
        name:"Java",
        icon:<FaJava size={50} color="white" className="p-2"/>,
        description:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA), meaning that code that runs on one platform does not need to be recompiled to run on another."
    },
    {
        id:2,
        name:"MySQL",
        icon:<GrMysql size={50} color="white" className="p-2"/>,
        description:"MySQL is an open-source relational database management system (RDBMS). It is based on Structured Query Language (SQL), the most popular language for adding, accessing, and managing content in a database."
    },
    {
        id:3,
        name:"MongoDB",
        icon:<SiMongodb size={50} color="white" className="p-2"/>,
        description:"MongoDB is a source-available cross-platform document-oriented database program. It uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL)."
    },
]

export const projects=[
{
    id:1,
    name:"Project Aurora",
    description:"A responsive and modern website built for Aurora, the annual tech and cultural fest of UCOE. It features event highlights, schedules, and updates with a clean, user-friendly interface optimized for all devices.",
    image:"/assets/aurora2.png",
    link:"https://auroraucoe.vercel.app/"
},
{
    id:2,
    name:"MovieStation",
    description:"A smart movie recommendation web app powered by a custom-built API integrated with machine learning. It analyzes user preferences to suggest trending, top-rated, and personalized movie options, offering a smooth, responsive experience with rich movie details.",
    image:"/assets/moviestation.png",
    link:"https://project-movie-station-frontend.vercel.app/"
},
{
    id:3,
    name:"Rezide",
    description:"A modern real estate platform designed to simplify property discovery and rental management. Featuring a sleek, responsive UI, it connects users with verified listings, offering smart search, filters, and detailed property insights for an intuitive user experience.",
    image:"/assets/rezide.png",
    link:"https://rezide.in/"
},
{
    id:4,
    name:"LearnLink",
    description:"An e-learning platform that connects students with curated courses across various domains. It features course listings with filters, detailed overviews, and a smooth enrollment flow—designed for a seamless learning experience with secure payments and user-friendly UI.",
    image:"/assets/learnlink.png",
    link:"https://learn-link-frontend.vercel.app/"
}


]