import { Facebook, Heart, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

export default function Contact() {
  return (
    <footer className="footer footer-center p-10 bg-gradient-to-b from-pink-300/70 to-pink-300/70">
      <aside className="flex flex-col items-center gap-2">
        <Heart size={32} className="text-pink-500 w-10 h-10 animate-pulse" />
        <p className="font-bold text-gray-700 text-lg">
          Alexandra <span className="text-pink-500">Freelancer</span>
        </p>
        <p className="text-gray-700 text-sm">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </aside>

      <nav className="mt-4">
        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/Alexandra.mimi.ezekiela"
            className="transform transition-transform duration-300 hover:scale-125 hover:text-pink-100"
          >
            <Facebook className="w-10 h-10 text-pink-500" />
          </a>

          <a
            href="https://wa.me/261322063222"
            className="transform transition-transform duration-300 hover:scale-125 hover:text-pink-100"
          >
            <FaWhatsapp className="w-10 h-10 text-pink-500" />
          </a>

          <a
            href="https://www.upwork.com/freelancers/~01998773ede5fae83a?mp_source=share"
            className="transform transition-transform duration-300 hover:scale-125 hover:text-pink-100"
          >
            <SiUpwork className="w-10 h-10 text-pink-500" />
          </a>

          <a
            href="http://linkedin.com/in/alexandraav"
            className="transform transition-transform duration-300 hover:scale-125 hover:text-pink-100"
          >
            <Linkedin className="text-pink-500 w-10 h-10" />
          </a>
        </div>
      </nav>
    </footer>
  );
}
