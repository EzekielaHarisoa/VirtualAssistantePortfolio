import {
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import "../styles/Footer.css";
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-rose-400 to-rose-600 text-white">

      {/* Décors animés */}
      <div className="absolute top-[-120px] right-[-80px] w-[260px] h-[260px] rounded-full bg-white/5 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-100px] left-[-60px] w-[220px] h-[220px] rounded-full bg-white/5 blur-3xl pointer-events-none animate-[float_6s_ease-in-out_infinite]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-8">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 pb-10 border-b border-white/10">

          {/* BRAND */}
          <div className="max-w-[320px] animate-[fadeUp_0.8s_ease]">

            <h2
              className="text-[42px] leading-none font-bold mb-2 hover:tracking-wide transition-all duration-300"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              Alexandra
            </h2>

            <p className="font-sans uppercase tracking-[3px] text-[10px] text-rose-200 font-medium mb-5 animate-[fadeUp_1s_ease]">
              Virtual Assistant
            </p>

            <p className="text-[14px] leading-[1.9] text-white/70 animate-[fadeUp_1.2s_ease]">
             Bras droit stratégique des entrepreneurs qui refusent de tout porter seuls, pilotage de projets, organisation, et un business piloté, pas subi.
            </p>
          </div>

          {/* CONTACT */}
          <div className="animate-[fadeUp_1.1s_ease]">

            <p className="text-[13px] font-sans uppercase tracking-[3px] text-rose-200 font-semibold mb-5">
              Restons connectés
            </p>

            <div className="flex items-center gap-3 mb-5">

              <a
                href="https://www.instagram.com/alexendrahh?igsh=MWlqNDc3YXNudjdleg=="
                className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-white hover:text-rose-600 border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/alexandraav?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-white hover:text-rose-600 border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/+2610322063222"
                className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-white hover:text-green-500 border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            <p className="text-[13px] text-white/60 leading-[1.8] ">
              Réponse rapide <br />
              Collaboration à distance
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-center animate-[fadeUp_1.3s_ease]">

          <p className="text-[13px] text-white/60 text-center">
            © 2026 Alexandra — Tous droits réservés.
          </p>

        </div>
      </div>

      
    </footer>
  );
}