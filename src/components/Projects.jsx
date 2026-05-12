import { useRef, useEffect, useState } from "react";

const baseProjects = [
  {
    title: "Gestion administrative",
    description: "Organisation, suivi de dossiers, rédaction de documents professionnels.",
    tag: "Admin",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    dot: "#e8a0a0",
  },
  {
    title: "Gestion réseaux sociaux",
    description: "Création de contenu, planning éditorial, animation de communauté.",
    tag: "Social Media",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
    dot: "#e8b880",
  },
  {
    title: "Suivi & Reporting",
    description: "Tableaux de bord, rapports hebdomadaires, analyse de performance.",
    tag: "Reporting",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    dot: "#88b898",
  },
];

const projects = [...baseProjects, ...baseProjects, ...baseProjects];

const testimonials = [
  {
    name: "Marie L.",
    role: "Entrepreneure",
    company: "Studio ML",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Alexandra a été un vrai soutien pour mon business. Elle est professionnelle, réactive et toujours de bonne humeur.",
    stars: 5,
  },
  {
    name: "Sophie R.",
    role: "Coach",
    company: "Sophie R. Coaching",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Grâce à Alexandra, j'ai pu me concentrer sur mon cœur de métier. Une créativité et une rigueur exemplaires.",
    stars: 5,
  },
  {
    name: "Camille D.",
    role: "Consultante RH",
    company: "CD Consulting",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "Un travail de qualité, livré dans les délais. Elle comprend rapidement les besoins et propose des solutions adaptées.",
    stars: 5,
  },
];

/* ── Animations CSS injectées une seule fois ── */
const STYLES = `
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeSlideLeft {
    from { opacity: 0; transform: translateX(-18px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .anim-fade-up   { animation: fadeSlideUp  0.5s cubic-bezier(.4,0,.2,1) both; }
  .anim-fade-left { animation: fadeSlideLeft 0.45s cubic-bezier(.4,0,.2,1) both; }
  .anim-fade-in   { animation: fadeIn 0.4s ease both; }
  .delay-1 { animation-delay: 0.06s; }
  .delay-2 { animation-delay: 0.12s; }
  .delay-3 { animation-delay: 0.18s; }
  .delay-4 { animation-delay: 0.24s; }
  .delay-5 { animation-delay: 0.30s; }
`;

function injectStyles() {
  if (typeof document !== "undefined" && !document.getElementById("projects-anim-styles")) {
    const el = document.createElement("style");
    el.id = "projects-anim-styles";
    el.textContent = STYLES;
    document.head.appendChild(el);
  }
}

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 transition-colors duration-200 ${i < count ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ── Hook : détecte si un élément est visible ── */
function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

export default function Projects() {
  injectStyles();

  const trackRef  = useRef(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);

  const [active, setActive]       = useState(0);
  const [animKey, setAnimKey]     = useState(0); // force re-animation on tab change
  const t = testimonials[active];

  /* ── Carrousel auto-scroll ── */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animId, paused = false, pos = 0;
    const speed = 0.4;
    const step = () => {
      if (!paused) {
        pos += speed;
        const third = track.scrollWidth / 3;
        if (pos >= third) pos = 0;
        track.style.transform = `translateX(-${pos}px)`;
      }
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    const pause  = () => { paused = true; };
    const resume = () => { paused = false; };
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);
    return () => {
      cancelAnimationFrame(animId);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  /* ── Changement de témoignage ── */
  const handleSetActive = (i) => {
    if (i === active) return;
    setActive(i);
    setAnimKey((k) => k + 1);
  };

  return (
    <section id="projet" ref={sectionRef} className="py-16 sm:py-24 bg-[#faf8f6]">

      {/* ── En-tête global ── */}
      <div className={`px-5 sm:px-8 md:px-16 mb-10 sm:mb-12 ${inView ? "anim-fade-up" : "opacity-0"}`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-px bg-rose-300" />
          <p className="uppercase tracking-[4px] text-[11px] font-semibold text-rose-400">
            Projets & Témoignages
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2
            className="text-[clamp(26px,4vw,48px)] font-bold text-[#3a1010] leading-[1.1]"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Réalisations & retours <span className="italic text-rose-400">clients</span>
          </h2>
          <div
            className={`bg-white border border-pink-100 rounded-2xl px-5 py-3 text-center self-start sm:self-auto ${inView ? "anim-fade-up delay-2" : "opacity-0"}`}
            style={{ boxShadow: "0 2px 16px rgba(200,100,100,0.06)" }}
          >
            <p className="text-2xl font-bold text-rose-400 leading-none" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>3+</p>
            <p className="text-[11px] text-gray-400 mt-0.5">Projets réalisés</p>
          </div>
        </div>
      </div>

      {/* ── Layout principal ── */}
      <div className="flex flex-col lg:flex-row gap-0 min-h-[480px]">

        {/* ── GAUCHE : Témoignages ── */}
        <div
          className={`lg:w-[30%] px-5 sm:px-8 md:px-16 lg:px-10 flex flex-col justify-between gap-6 pb-10 lg:pb-0 ${inView ? "anim-fade-left delay-1" : "opacity-0"}`}
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-5 h-px bg-rose-300" />
              <p className="uppercase tracking-[3px] text-[10px] font-semibold text-rose-400">Témoignages</p>
            </div>

            {/* Avatar + infos — re-animés à chaque changement */}
            <div
              key={`avatar-${animKey}`}
              className="flex items-center gap-3 mb-5 anim-fade-up"
            >
              <div className="relative flex-shrink-0">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-pink-100 transition-transform duration-300 hover:scale-105"
                />
                <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-rose-400 rounded-full flex items-center justify-center border-2 border-white">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-[#3a1010]">{t.name}</p>
                <p className="text-[11px] text-gray-400">{t.role}</p>
                <p className="text-[11px] text-rose-400 font-medium">{t.company}</p>
              </div>
            </div>

            <StarRating count={t.stars} />

            {/* Citation — re-animée à chaque changement */}
            <div key={`quote-${animKey}`} className="mt-3 anim-fade-up delay-1">
              <span
                className="text-[56px] leading-none text-rose-100 select-none block -mb-3"
                style={{ fontFamily: "Georgia, serif" }}
              >
                "
              </span>
              <p
                className="text-[14px] text-[#6b4040] leading-[1.85] italic"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "15px" }}
              >
                {t.text}
              </p>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex flex-col gap-3">
            {testimonials.map((item, i) => (
              <button
                key={i}
                onClick={() => handleSetActive(i)}
                className="flex items-center gap-3 text-left group cursor-pointer"
              >
                <span
                  className={`flex-shrink-0 w-1 rounded-full transition-all duration-500 ease-in-out ${
                    i === active ? "h-8 bg-rose-400" : "h-4 bg-rose-200 group-hover:bg-rose-300"
                  }`}
                />
                <div className={`transition-all duration-300 ${i === active ? "opacity-100 translate-x-0" : "opacity-40 group-hover:opacity-60"}`}>
                  <p className="text-[12px] font-semibold text-[#3a1010]">{item.name}</p>
                  <p className="text-[10px] text-gray-400">{item.role}</p>
                </div>
              </button>
            ))}

            {/* Stat rapide */}
            <div className="mt-2 pt-4 border-t border-pink-100">
              <div className="flex items-center gap-2 flex-wrap">
                {testimonials.map((item, i) => (
                  <img
                    key={i}
                    src={item.avatar}
                    alt={item.name}
                    onClick={() => handleSetActive(i)}
                    className={`w-7 h-7 rounded-full border-2 border-white object-cover -ml-2 first:ml-0 cursor-pointer transition-transform duration-200 hover:scale-110 hover:z-10 ${
                      i === active ? "ring-2 ring-rose-400 ring-offset-1" : ""
                    }`}
                    style={{ position: "relative" }}
                  />
                ))}
                <p className="text-[11px] text-gray-400 ml-2">100% satisfaits</p>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur vertical */}
        <div className="hidden lg:block w-px bg-pink-100 mx-2 self-stretch" />

        {/* ── DROITE : Carrousel projets ── */}
        <div
          className={`lg:w-[70%] overflow-hidden flex flex-col justify-center ${inView ? "anim-fade-up delay-3" : "opacity-0"}`}
        >
          <div className="relative w-full overflow-hidden">
            {/* Fondu bords */}
            <div
              className="absolute left-0 top-0 bottom-0 w-14 sm:w-20 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, #faf8f6 10%, transparent)" }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-14 sm:w-20 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, #faf8f6 10%, transparent)" }}
            />

            <div
              ref={trackRef}
              className="flex gap-4 sm:gap-5 w-max py-6 pl-4"
              style={{ willChange: "transform" }}
            >
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="group relative bg-white rounded-[22px] overflow-hidden border border-pink-100/80 flex-shrink-0 flex flex-col"
                  style={{
                    width: "clamp(200px, 40vw, 260px)",
                    boxShadow: "0 2px 20px rgba(200,100,100,0.06)",
                    transition: "transform 0.35s ease, box-shadow 0.35s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(200,100,100,0.13)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 20px rgba(200,100,100,0.06)";
                  }}
                >
                  <div className="relative overflow-hidden h-40 sm:h-44">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 h-14"
                      style={{ background: "linear-gradient(to top, rgba(255,255,255,0.5), transparent)" }}
                    />
                    <span
                      className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full transition-all duration-200 group-hover:bg-white"
                      style={{
                        background: "rgba(255,255,255,0.88)",
                        backdropFilter: "blur(6px)",
                        color: "#c0392b",
                        border: "0.5px solid rgba(200,100,100,0.2)",
                      }}
                    >
                      {project.tag}
                    </span>
                    <span
                      className="absolute top-3 right-3 w-6 h-6 text-[10px] font-bold rounded-full flex items-center justify-center"
                      style={{
                        background: "rgba(255,255,255,0.88)",
                        backdropFilter: "blur(6px)",
                        color: "#c0392b",
                        border: "0.5px solid rgba(200,100,100,0.2)",
                      }}
                    >
                      {String((i % 3) + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <span className="w-2 h-2 rounded-full mb-2 block transition-transform duration-300 group-hover:scale-125" style={{ background: project.dot }} />
                    <h3
                      className="font-bold text-[15px] text-[#3a1010] mb-1.5 leading-tight"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-[11.5px] text-[#9a7070] leading-[1.7] flex-1">{project.description}</p>
                    <div
                      className="flex items-center justify-between mt-3 pt-3"
                      style={{ borderTop: "0.5px solid #f5e0e0" }}
                    >
                      <div className="flex gap-1 items-center">
                        <span className="w-4 h-1 rounded-full bg-rose-300 transition-all duration-300 group-hover:w-5" />
                        <span className="w-2.5 h-1 rounded-full bg-rose-200" />
                        <span className="w-1.5 h-1 rounded-full bg-rose-100" />
                      </div>
                      <button className="flex items-center gap-1 text-[10px] font-semibold text-rose-400 hover:text-rose-600 transition-colors group/btn">
                        Voir plus
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center transition-transform duration-200 group-hover/btn:translate-x-0.5"
                          style={{ background: "#fce8e8" }}
                        >
                          <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Séparateur */}
      <div
        className={`px-5 sm:px-8 md:px-16 mt-12 sm:mt-14 flex items-center gap-4 ${inView ? "anim-fade-up delay-5" : "opacity-0"}`}
      >
        <div className="flex-1 h-px bg-rose-100" />
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-300" />
          <span className="text-[11px] text-rose-300 font-medium uppercase tracking-[3px]">Et bien plus à venir</span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-300" />
        </div>
        <div className="flex-1 h-px bg-rose-100" />
      </div>
    </section>
  );
}