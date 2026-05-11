import { ShieldCheck, SlidersHorizontal, MessageCircle, CheckCircle2 } from "lucide-react";
import mimibien from "../assets/mimibien.jpeg"
const traits = [
  { icon: ShieldCheck,       label: "Discrétion & Confidentialité" },
  { icon: SlidersHorizontal, label: "Organisation & Rigueur"        },
  { icon: MessageCircle,     label: "Communication claire"          },
];

const checklist = [
  "Disponible 5j/7, réactive et ponctuelle",
  "Maîtrise des outils Google Workspace & Notion",
  "Expérience avec des clients internationaux",
  "Totale confidentialité garantie",
];

export default function About() {
  return (
    <section className="relative bg-[#fdf5f0] overflow-hidden py-24 px-8 lg:px-16">

      <div
        className="absolute top-[-60px] left-[-80px] w-[300px] h-[260px] bg-rose-100/50 pointer-events-none"
        style={{ borderRadius: "60% 40% 50% 70% / 50% 60% 40% 50%" }}
      />
      <div
        className="absolute bottom-[-50px] right-[-60px] w-[260px] h-[220px] bg-amber-100/40 pointer-events-none"
        style={{ borderRadius: "40% 60% 30% 70% / 60% 40% 60% 40%" }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ── GAUCHE ── */}
        <div className="relative">

          {/* photo */}
          <div className="relative rounded-[36px] overflow-hidden shadow-[0_16px_48px_rgba(120,30,20,0.13)]">
            <img
              src={mimibien}
              alt="Alexandra"
              className="w-full h-[500px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#6b1e1e]/20 via-transparent to-transparent" />
          </div>

          {/* badge */}
          <div className="absolute bottom-[200px] -right-6 bg-white rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(120,30,20,0.13)] border border-[#ecddd8] flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center shrink-0">
              <span
                className="text-white text-[20px] font-bold leading-none"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >3+</span>
            </div>
            <div>
              <p className="font-sans text-[11px] text-[#a07060] leading-none mb-0.5">Années</p>
              <p className="font-sans text-[13px] font-bold text-[#6b1e1e] leading-none">d&apos;expérience</p>
            </div>
          </div>

        

          {/* Points décoratifs */}
          <div className="absolute -bottom-4 left-0 grid grid-cols-4 gap-[7px] opacity-40 pointer-events-none">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-[5px] h-[5px] rounded-full bg-[#c4837e]" />
            ))}
          </div>
        </div>

        {/* ── DROITE  ── */}
        <div>

        
          <p className="uppercase tracking-[5px] text-[11px] font-semibold font-sans text-[#c4837e] mb-4">
            À propos de moi
          </p>

        
          <h2
            className="text-[clamp(28px,4vw,46px)] font-bold text-[#6b1e1e] leading-[1.15] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Organisée, fiable et<br />
            <span className="text-[#b07540]">dévouée à votre réussite</span>
          </h2>

          {/* Séparateur */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-10 bg-gradient-to-r from-[#c0392b] to-[#e08070] rounded-full" />
            <div className="h-[2px] w-3 bg-[#e0c0b8] rounded-full" />
          </div>

          <p className="font-sans text-[14px] text-[#8a6050] leading-[1.85] mb-4">
            Passionnée par l&apos;organisation, la communication et le support
            administratif, j&apos;accompagne les entrepreneurs et les équipes dans
            l&apos;optimisation de leur quotidien.
          </p>
          <p className="font-sans text-[14px] text-[#8a6050] leading-[1.85] mb-8">
            Mon objectif est simple : vous faire gagner du temps et vous offrir
            une tranquillité d&apos;esprit en gérant efficacement vos tâches.
          </p>

          <ul className="space-y-2.5 mb-10">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <CheckCircle2 size={15} className="text-[#c0392b] shrink-0" strokeWidth={2} />
                <span className="font-sans text-[13.5px] text-[#6b4040]">{item}</span>
              </li>
            ))}
          </ul>

          {/* Traits / Pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            {traits.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white border border-[#ecddd8] px-4 py-2.5 rounded-2xl shadow-[0_2px_8px_rgba(160,50,30,0.06)] hover:shadow-[0_4px_16px_rgba(160,50,30,0.10)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon size={14} className="text-[#c0392b]" strokeWidth={1.8} />
                <span className="font-sans text-[12.5px] font-medium text-[#6b3030]">{label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="flex items-center gap-2 bg-[#c0392b] hover:bg-[#a93226] transition-colors text-white font-sans font-semibold text-[13.5px] px-7 py-3 rounded-xl border-0 cursor-pointer shadow-[0_6px_18px_rgba(180,50,30,0.25)]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Travaillons ensemble
          </button>
        </div>

      </div>
    </section>
  );
}