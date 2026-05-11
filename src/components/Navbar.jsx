import {  Heart } from "lucide-react";
const links = [
    "Accueil",
    "À propos",
    "Services",
    "Compétences",
    "Projets",
    "Témoignages",
    "Contact",
  ];
export default function Navbar(){
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-rose-700">Alexandra</h1>
          <p className="text-xs tracking-[3px] text-gray-500 uppercase">
            Virtual Assistant
          </p>
        </div>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <li
              key={link}
              className="hover:text-rose-600 cursor-pointer transition"
            >
              {link}
            </li>
          ))}
        </ul>

        <button className="bg-rose-600 hover:bg-rose-700 transition text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-lg shadow-rose-200">
          Me contacter
        </button>
      </nav>
    </header>
  

    return(
      <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-rose-700">Alexandra</h1>
          <p className="text-xs tracking-[3px] text-gray-500 uppercase">
            Virtual Assistant
          </p>
        </div>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <li
              key={link}
              className="hover:text-rose-600 cursor-pointer transition"
            >
              {link}
            </li>
          ))}
        </ul>

        <button className="bg-rose-600 hover:bg-rose-700 transition text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-lg shadow-rose-200">
          Me contacter
        </button>
      </nav>
    </header>
  );
}