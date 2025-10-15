import { Facebook, Heart, Linkedin, Mail, Tiktok } from "lucide-react";
import { Title } from "./Title";

export function Contact(){
    return(
        
 <footer class="footer footer-horizontal footer-center  p-10">
  <aside>
   <Heart size={32} className="text-pink-500 w-10 h-10"/>
    <p class="font-bold text-white">
     Alexandra <span className="text-pink-500"> Frelancer</span>
    </p>
    <p className="text-white">Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div class="grid grid-flow-col gap-4">
      <a href="#">
        <Linkedin/>
      </a>
      <a href="#">
        <Facebook/>
      </a>
      <a href="#">
      </a>
    </div>
  </nav>
</footer>
    )
}