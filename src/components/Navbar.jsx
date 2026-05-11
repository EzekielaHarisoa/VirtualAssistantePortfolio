const links = [
  "Accueil",
  "À propos",
  "Services",
  "Compétences",
  "Projets",
  "Témoignages",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-[#fff5f5]/85 backdrop-blur-xl border-b border-rose-100/40 shadow-[0_2px_20px_rgba(180,80,60,0.06)]">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-[76px] flex items-center justify-between gap-8">

        {/* Logo */}
        <div className="flex flex-col shrink-0">
          <h1
            className="text-[28px] font-bold text-rose-900 leading-none tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Alexandra
          </h1>
          <p className="text-[9px] tracking-[3.5px] text-rose-300 uppercase font-medium mt-0.5 font-sans">
            Virtual Assistant
          </p>
        </div>

        {/* Nav links */}
        <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
          {links.map((link, i) => (
            <li key={link} className="relative">
              <a
                href="#"
                className={`block px-3 py-1.5 rounded-xl text-[13.5px] font-medium font-sans transition-all duration-200 no-underline
                  ${i === 0
                    ? "text-rose-600 bg-rose-50/60"
                    : "text-rose-900/60 hover:text-rose-600 hover:bg-rose-50/60"
                  }`}
              >
                {link}
                {i === 0 && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-[18px] h-[2px] bg-gradient-to-r from-rose-400 to-rose-600 rounded-full block" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="shrink-0 bg-gradient-to-br from-rose-400 to-rose-500 hover:scale-[1.03] hover:shadow-[0_10px_28px_rgba(180,50,30,0.32)] transition-all duration-200 text-white px-6 py-[11px] rounded-[14px] font-sans font-semibold text-[13.5px] shadow-[0_6px_20px_rgba(180,50,30,0.22)] cursor-pointer border-0">
          Me contacter
        </button>

      </nav>
    </header>
  );
}