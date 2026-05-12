import { useRef, useEffect } from "react";

const projects = [
  {
    title: "Gestion administrative",
    description: "Organisation, suivi de dossiers, rédaction de documents professionnels.",
    tag: "Admin",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Gestion réseaux sociaux",
    description: "Création de contenu, planning éditorial, animation de communauté.",
    tag: "Social Media",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Suivi & Reporting",
    description: "Tableaux de bord, rapports hebdomadaires, analyse de performance.",
    tag: "Reporting",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Gestion administrative",
    description: "Organisation, suivi de dossiers, rédaction de documents professionnels.",
    tag: "Admin",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Gestion réseaux sociaux",
    description: "Création de contenu, planning éditorial, animation de communauté.",
    tag: "Social Media",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Suivi & Reporting",
    description: "Tableaux de bord, rapports hebdomadaires, analyse de performance.",
    tag: "Reporting",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Projects() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animId;
    let paused = false;
    let pos = 0;
    const speed = 0.5;

    const step = () => {
      if (!paused) {
        pos += speed;
        const half = track.scrollWidth / 2;
        if (pos >= half) pos = 0;
        track.style.transform = `translateX(-${pos}px)`;
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    const pause = () => { paused = true; };
    const resume = () => { paused = false; };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animId);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section className="py-24 overflow-hidden">

      {/* En-tête */}
      <div className="px-6 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <p className="uppercase tracking-[5px] text-[11px] font-semibold font-sans text-[#c4837e] mb-4">
            Projets récents
          </p>
         <h2
            className="text-[clamp(28px,4vw,46px)] font-bold text-[#6b1e1e] leading-[1.15] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >            Quelques<br />
           <span className="text-[#b07540]">réalisations</span>
          </h2>
        </div>
        <div className="flex items-center gap-3 bg-pink-50 border border-pink-100 rounded-2xl px-5 py-3 self-start md:self-auto">
          <span className="text-3xl font-bold text-rose-400">3</span>
          <span className="text-sm text-gray-400 leading-tight">
            projets<br />réalisés
          </span>
        </div>
      </div>

      {/* Carrousel */}
      <div className="relative w-full overflow-hidden">
        {/* Fondu bords gauche et droit */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #faf8f6, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #faf8f6, transparent)" }} />

        <div
          ref={trackRef}
          className="flex gap-6 w-max py-4"
          style={{ willChange: "transform" }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-[28px] overflow-hidden border border-pink-100 flex-shrink-0 w-[320px] flex flex-col shadow-sm hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-rose-900/0 group-hover:bg-rose-900/20 transition-all duration-500" />
                <span
                   className=" font-sans absolute top-4 left-4 bg-rose-100/90 backdrop-blur-sm text-[#c0392b] text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border border-rose-100">
                  {project.tag}
                </span>
                <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-rose-400/60 text-rose-100/90 text-xs font-bold flex items-center justify-center">
                  {String((i % 3) + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Contenu */}
              <div className="p-5 flex flex-col flex-1">
                <h3
                  className="font-bold text-[18px] text-[#5a1a1a] mb-2 leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {project.title}
                </h3>
                <p className="font-sans text-[13px] text-[#8a6050] leading-[1.7]">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-pink-50">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-rose-300" />
                    <span className="w-2 h-2 rounded-full bg-rose-200" />
                    <span className="w-2 h-2 rounded-full bg-rose-100" />
                  </div>
                  <button className="text-xs font-semibold text-rose-400/60 hover:text-rose-600 flex items-center gap-1 transition-colors">
                    Voir plus
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Séparateur */}
      <div className="px-6 mt-14 flex items-center gap-4">
        <div className="flex-1 h-px bg-pink-100" />
        <span className="text-xs text-rose-300 font-medium uppercase tracking-widest">
          Et bien plus à venir
        </span>
        <div className="flex-1 h-px bg-pink-100" />
      </div>
    </section>
  );
}