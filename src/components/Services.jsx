import { useState } from "react";
import {
  Mail,
  CalendarDays,
  Headphones,
  LayoutGrid,
  ClipboardList,
  Database,
} from "lucide-react";

const services = [
  {
    icon: Mail,
    title: "Gestion des emails",
    desc: "Tri, réponses et organisation professionnelle de votre boîte mail au quotidien.",
    color: "from-rose-100 to-pink-50",
    accent: "#c0392b",
    tag: "Productivité",
  },
  {
    icon: CalendarDays,
    title: "Gestion d'agenda",
    desc: "Planification de rendez-vous, gestion des priorités et coordination.",
    color: "from-amber-100 to-orange-50",
    accent: "#b07540",
    tag: "Organisation",
  },
  {
    icon: Headphones,
    title: "Support client",
    desc: "Service client réactif, empathique et professionnel pour vos clients.",
    color: "from-rose-100 to-red-50",
    accent: "#c0392b",
    tag: "Relation client",
  },
  {
    icon: LayoutGrid,
    title: "Réseaux sociaux",
    desc: "Création de contenu engageant, planification et gestion de vos pages.",
    color: "from-pink-100 to-fuchsia-50",
    accent: "#9b2c8a",
    tag: "Social",
  },
  {
    icon: ClipboardList,
    title: "Support administratif",
    desc: "Suivi des tâches administratives, rédaction et gestion documentaire.",
    color: "from-orange-100 to-amber-50",
    accent: "#b07540",
    tag: "Admin",
  },
  {
    icon: Database,
    title: "Saisie de données",
    desc: "Saisie précise, mise en forme et gestion structurée de vos données.",
    color: "from-rose-100 to-pink-50",
    accent: "#c0392b",
    tag: "Données",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative bg-[#fdf5f0] py-24 px-8 lg:px-16 overflow-hidden">

      <div
        className="absolute top-[-60px] right-[-80px] w-[320px] h-[280px] bg-rose-100/60 pointer-events-none"
        style={{ borderRadius: "60% 40% 50% 70% / 50% 60% 40% 50%" }}
      />
      <div
        className="absolute bottom-[-40px] left-[-60px] w-[260px] h-[220px] bg-amber-100/40 pointer-events-none"
        style={{ borderRadius: "40% 60% 70% 30% / 60% 40% 50% 50%" }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto mb-14">
        <p
          className="uppercase tracking-[5px] text-[11px] font-semibold font-sans text-[#c4837e] mb-3"
        >
          Mes services
        </p>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2
            className="text-[clamp(40px,5vw,40px)] font-bold text-[#6b1e1e] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Comment je peux  <span className="text-[#b07540]">vous aider</span>

          </h2>
          <p className="font-sans text-[14px] text-[#8a6050] max-w-[340px] leading-relaxed">
            Des solutions sur-mesure pour vous libérer des tâches chronophages et vous recentrer sur l&apos;essentiel.
          </p>
        </div>

        {/* Séparateur décoratif */}
        <div className="flex items-center gap-3 mt-8">
          <div className="h-[2px] w-12 bg-gradient-to-r from-[#c0392b] to-[#e08070] rounded-full" />
          <div className="h-[2px] w-4 bg-[#e0c0b8] rounded-full" />
          <div className="h-[2px] w-2 bg-[#e0c0b8]/50 rounded-full" />
        </div>
      </div>

      {/* Grille des services */}
      <div className="relative z-10 max-w-[1100px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => {
          const Icon = service.icon;
          const isHovered = hovered === i;

          return (
            <div
              key={service.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative bg-white rounded-[24px] p-6 border border-[#ecddd8]/80 cursor-default overflow-hidden transition-all duration-300"
              style={{
                boxShadow: isHovered
                  ? "0 16px 48px rgba(160,50,30,0.13)"
                  : "0 2px 12px rgba(160,50,30,0.05)",
                transform: isHovered ? "translateY(-6px)" : "translateY(0)",
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-[24px] transition-opacity duration-300`}
                style={{ opacity: isHovered ? 0.35 : 0 }}
              />

              <span
                className="absolute top-5 right-6 font-sans text-[11px] font-bold tracking-widest transition-opacity duration-200"
                style={{
                  color: service.accent,
                  opacity: isHovered ? 0.35 : 0.15,
                  fontFamily: "monospace",
                }}
              >
                0{i + 1}
              </span>

              <div className="relative z-10">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} border flex items-center justify-center mb-5 transition-transform duration-300`}
                  style={{
                    borderColor: `${service.accent}22`,
                    transform: isHovered ? "scale(1.08) rotate(-3deg)" : "scale(1) rotate(0deg)",
                  }}
                >
                  <Icon size={20} style={{ color: service.accent }} strokeWidth={1.6} />
                </div>

                {/* Tag */}
                <span
                  className="inline-block font-sans text-[10px] font-semibold uppercase tracking-[2px] px-2.5 py-1 rounded-full mb-3 transition-colors duration-200"
                  style={{
                    background: `${service.accent}12`,
                    color: service.accent,
                  }}
                >
                  {service.tag}
                </span>

                {/* Titre */}
                <h3
                  className="font-bold text-[18px] text-[#5a1a1a] mb-2 leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-[13px] text-[#8a6050] leading-[1.7]">
                  {service.desc}
                </p>

                {/* Lien  */}
                <div
                  className="flex items-center gap-1.5 mt-5 transition-all duration-200"
                  style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? "translateX(0)" : "translateX(-6px)" }}
                >
                  <span className="font-sans text-[12px] font-semibold" style={{ color: service.accent }}>
                    En savoir plus
                  </span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={service.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Ligne décorative bas de carte au hover */}
              <div
                className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full transition-all duration-300"
                style={{
                  background: `linear-gradient(90deg, ${service.accent}, transparent)`,
                  opacity: isHovered ? 0.5 : 0,
                }}
              />
            </div>
          );
        })}
      </div>

     

    </section>
  );
}