import { useState } from "react";
import "../styles/Navbar.css";
const links = [
  { label: "Accueil", id: "accueil" },
  { label: "À propos", id: "apropos" },
  { label: "Services", id: "services" },
  { label: "Outils", id: "competences" },
  { label: "Témoignages", id: "projet" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-rose-100/60 bg-[#fff7f7]/80 backdrop-blur-xl">
      
      <nav className="max-w-7xl mx-auto h-[74px] px-5 lg:px-10 flex items-center justify-between">

        {/* Logo */}
        <div className="flex flex-col shrink-0 cursor-pointer">
          <h1
            className="text-[30px] leading-none font-bold text-rose-500"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Alexandra
          </h1>

          <span className="uppercase tracking-[3px] text-[9px] text-rose-300 font-medium mt-1">
            Virtual Assistant
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link, i) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-300
                ${
                  i === 0
                    ? "bg-rose-50 text-rose-600"
                    : "text-rose-900/70 hover:text-rose-600 hover:bg-rose-50"
                }`}
              >
                {link.label}
                
                {i === 0 && (
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-5 h-[2px] rounded-full bg-gradient-to-r from-rose-400 to-rose-500" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Desktop CTA */}
          <a
            href="https://wa.me/+2610322063222"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center gap-2 h-[46px] px-5 rounded-2xl bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white text-[13px] font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-[0_10px_30px_rgba(244,114,182,0.28)]"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>

            WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-11 h-11 rounded-2xl border border-rose-100 bg-white flex items-center justify-center shadow-sm"
          >
            <div className="flex flex-col gap-[4px]">
              <span
                className={`block w-5 h-[2px] bg-rose-500 rounded-full transition-all duration-300 ${
                  open ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-rose-500 rounded-full transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-rose-500 rounded-full transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-5 pb-6 pt-3 border-t border-rose-100 bg-[#fff7f7]">

          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-2xl text-[14px] text-rose-700 hover:bg-rose-50 transition-all duration-200"
                >
                  {link.label}

                  <span className="text-rose-300 text-lg">+</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <a
            href="https://wa.me/+2610322063222"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-3 h-[52px] rounded-2xl bg-gradient-to-r from-rose-400 to-rose-500 text-white font-medium text-[14px] shadow-[0_10px_25px_rgba(244,114,182,0.25)]"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>

            Me contacter
          </a>
        </div>
      </div>
    </header>
  );
}