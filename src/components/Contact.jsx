import { Facebook, Linkedin, Mail } from "lucide-react";

export function Contact(){
    return(
        <div>
            <ul className="flex flex-row items-center justify-center">
                <li className="">
                    <a href="#" className="btn btn-secondary">
                        <Linkedin size={32} className="text-white"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Facebook size={32} className="text-white"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                         <Mail size={32} className="text-white"/>

                    </a>
                </li>
            </ul>
        </div>
    )
}