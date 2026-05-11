import { ArrowRight, Download, Users, BriefcaseBusiness, Star } from "lucide-react";
import mimiPhoto from "../assets/mimibien.jpeg"
const stats = [
  { icon: Users,            value: "10+",  label: "Clients satisfaits"   },
  { icon: BriefcaseBusiness, value: "3+",   label: "Années d'expérience"  },
  { icon: Star,             value: "98%",  label: "Taux de satisfaction"  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fdf5f0] min-h-[580px]">

      <div
        className="absolute top-[-60px] left-[-80px] w-[340px] h-[320px] bg-[#f5c6bc]/50 pointer-events-none z-0"
        style={{ borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%" }}
      />

      <div
        className="absolute top-[38%] left-[44%] w-[28px] h-[44px] bg-[#f0b8b0]/70 pointer-events-none z-[1]"
        style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
      />

      <div className="absolute top-[42%] left-[46%] grid grid-cols-4 gap-[7px] pointer-events-none z-[1] opacity-50">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-[5px] h-[5px] rounded-full bg-[#d4998a]" />
        ))}
      </div>

  
      <div
        className="absolute top-0 right-0 h-full z-[2] overflow-hidden"
        style={{
          width: "48%",
          borderRadius: "0 0 0 120px",
        }}
      >
        <div className="absolute inset-0 " />
        <img
          src={mimiPhoto}
          alt="Alexandra"
          className="relative w-[94%] h-full object-cover object-top z-[1]  rounded-[150px_20px_20px_150px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdf5f0]/30 via-transparent to-transparent z-[2]" />
      </div>

      <div className="relative z-10 w-[52%] px-10 lg:px-16 pt-12 pb-14">

        <div className="inline-flex items-center gap-2 bg-white border border-[#e8d0c8] px-4 py-2 rounded-full shadow-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-[#4caf50] animate-pulse" />
          <span className="font-sans text-[12px] text-[#7a5a50] font-medium">
            Disponible pour de nouvelles missions
          </span>
        </div>

        <p
          className="text-[24px] text-[#c4837e] font-normal mb-1 leading-none"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Bonjour, je suis
        </p>

        <h1
          className="text-[72px] font-bold text-[#872d2d] leading-[1] tracking-[-1px] mb-3"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Alexandra
        </h1>

        <h2
          className="text-[22px] font-semibold text-[#b07540] leading-snug mb-5"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Virtual Assistant &amp; Digital Partner
        </h2>

        <p className="font-sans text-[14px] text-[#8a6050] leading-[1.75] mb-8 max-w-[400px]">
          J&apos;aide les entrepreneurs et les entreprises à gagner du temps,<br />
          à rester organisés et à se concentrer sur ce qui compte vraiment.
        </p>

        {/* Boutons */}
        <div className="flex items-center gap-4 mb-10">
          <button className="flex items-center gap-2 bg-rose-400 hover:bg-rose-500 transition-colors text-white font-sans font-semibold text-[13.5px] px-6 py-3 rounded-xl border-0 cursor-pointer shadow-[0_6px_18px_rgba(180,50,30,0.28)]">
            <span className="text-[15px]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </span>
            Me contacter
          </button>

          <button className="flex items-center gap-2 bg-transparent hover:bg-[#f9eeea]   transition-colors text-rose-700 font-sans font-semibold text-[13.5px] px-6 py-3 rounded-xl border border-rose-60 cursor-pointer">
            <Download size={14} />
            Télécharger mon CV
          </button>
        </div>

        {/* Stats*/}
        <div className="flex gap-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="bg-white border border-[#ecddd8] rounded-2xl px-5 py-4 flex flex-row items-start gap-1 shadow-[0_2px_10px_rgba(160,60,40,0.06)] min-w-[120px]"
            >            
              <div className="w-9 h-9 rounded-xl bg-[#fdf0ec] border border-[#f0d4cc] flex  items-center justify-center mb-1">
                <Icon size={16} className="text-rose-600" strokeWidth={1.5} />
              </div>
            
              <span
                className="text-[28px] font-bold text-[#8a6050] leading-none"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {value}
              </span>
              <span className="font-sans text-[11px] text-[#a07060] leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}