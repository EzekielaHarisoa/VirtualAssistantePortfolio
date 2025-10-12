import { Container, Heart } from "lucide-react";

export function Navbar(){
    return(
        <div className="flex items-center justify-center p-4 md:justify-between">
            <a href="#" className="flex items-center text-3xl font-bold md:text-xl">
                <Heart className="text-secondary mr-2"/> 
                Alexandra <hr /><span className="text-secondary"> Frelancer</span>
            </a>
            <ul className="hidden md:flex space-x-4 ">
               <li className="btn  btn-ghost btn-sm">Acceuil</li>
               <li className="btn  btn-ghost btn-sm">Apropos</li>
               <li className="btn   btn-ghost btn-sm">Mes servide</li>
               <li className="btn btn-ghost btn-sm">Experiences</li>

            </ul>
        </div>
    )
}