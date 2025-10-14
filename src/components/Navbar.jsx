import { Container, Heart } from "lucide-react";

export function Navbar(){
    return(
        <div className="flex items-center justify-center p-4 md:justify-between">
            <a href="#" className="flex items-center text-white text-3xl font-bold md:text-xl">
                <Heart className="text-pink-500 mr-2"/> 
                Alexandra <hr /><span className="text-pink-500"> Frelancer</span>
            </a>
            <ul className="hidden text-gray-600 md:flex space-x-4 ">
               <li className="btn  btn-ghost btn-sm">Acceuil</li>
               <li className="btn  btn-ghost btn-sm">Apropos</li>
               <li className="btn   btn-ghost btn-sm">Skills</li>
               <li className="btn btn-ghost btn-sm">Experiences</li>
               <li className="btn btn-ghost btn-sm">Projects</li>

            </ul>
        </div>
    )
}