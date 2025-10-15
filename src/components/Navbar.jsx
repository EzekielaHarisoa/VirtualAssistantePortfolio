import {  Heart } from "lucide-react";

export default function Navbar(){
    return(
        <div className="flex items-center justify-center p-4 md:justify-between">
            <a href="#" className="flex items-center text-gray-800 text-3xl font-bold md:text-xl">
                 <Heart className="text-pink-500 mr-2"/>  
                Alexandra <hr /><span className="text-pink-500"> Frelancer</span>
            </a>
            <ul className="hidden text-gray-700 md:flex space-x-4 ">
               <li className="btn  btn-ghost hover:bg-pink-300 btn-sm"><a href="#home">Home</a></li>
               <li className="btn  btn-ghost hover:bg-pink-300 btn-sm"><a href="#about">About</a></li>
               <li className="btn   btn-ghost hover:bg-pink-300 btn-sm"><a href="#skills">Skills</a></li>
               <li className="btn btn-ghost hover:bg-pink-300 btn-sm"><a href="#experience">Experiences</a></li>
               

            </ul>
        </div>
    )
}