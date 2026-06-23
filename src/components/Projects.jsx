import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    name: "Marie L.",
    role: "Entrepreneure",
    company: "Studio ML",
    avatar: null,
    text: "Alexandra a été un vrai soutien pour mon business. Elle est professionnelle, réactive et toujours de bonne humeur.",
    stars: 5,
  },
  {
    name: "Sophie R.",
    role: "Coach",
    company: "Sophie R. Coaching",
    avatar: null,
    text: "Grâce à Alexandra, j'ai pu me concentrer sur mon cœur de métier. Une créativité et une rigueur exemplaires.",
    stars: 5,
  },
  {
    name: "Camille D.",
    role: "Consultante RH",
    company: "CD Consulting",
    avatar: null,
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
            Témoignages
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2
            className="text-[clamp(26px,4vw,48px)] font-bold text-[#3a1010] leading-[1.1]"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
             Retours <span className="italic text-rose-400">clients</span>
          </h2>
          <div
            className={`bg-white border border-pink-100 rounded-2xl px-5 py-3 text-center self-start sm:self-auto ${inView ? "anim-fade-up delay-2" : "opacity-0"}`}
            style={{ boxShadow: "0 2px 16px rgba(200,100,100,0.06)" }}
          >
            <p className="text-2xl font-bold text-rose-400 leading-none" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>3+</p>
            <p className="text-[11px] text-gray-400 mt-0.5">Retours clients</p>
          </div>
        </div>
      </div>

      {/* ── Layout principal ── */}
     {/* ── Témoignages ── */}
<div
  className={`max-w-4xl mx-auto px-5 sm:px-8 ${
    inView ? "anim-fade-up delay-2" : "opacity-0"
  }`}
>
  <div
    className="bg-white rounded-[32px] border border-pink-100 p-8 sm:p-12"
    style={{
      boxShadow: "0 20px 60px rgba(210,120,120,.08)",
    }}
  >
    {/* Avatar */}
    <div
      key={`avatar-${animKey}`}
      className="flex items-center gap-4 mb-8 anim-fade-up"
    >
      <div className="relative">
  <div
    className="w-16 h-16 rounded-full border-2 border-pink-100 flex items-center justify-center text-white font-semibold text-lg"
    style={{
      background: "linear-gradient(135deg,#fb7185,#f43f5e)"
    }}
  >
    {t.name.charAt(0)}
  </div>

  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-white" />
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#3a1010]">
          {t.name}
        </h3>

        <p className="text-sm text-gray-400">
          {t.role}
        </p>

        <p className="text-sm font-medium text-rose-400">
          {t.company}
        </p>
      </div>
    </div>

    {/* Étoiles */}
    <StarRating count={t.stars} />

    {/* Citation */}
    <div key={`quote-${animKey}`} className="mt-6 anim-fade-up delay-1">
      <span
        className="block text-[70px] leading-none text-rose-100 -mb-5"
        style={{ fontFamily: "Georgia, serif" }}
      >
        "
      </span>

      <p
        className="text-[#6b4040] italic leading-[2]"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "20px",
        }}
      >
        {t.text}
      </p>
    </div>

    {/* Navigation */}
    <div className="flex justify-center gap-4 mt-10">
      {testimonials.map((item, i) => (
        <button
          key={i}
          onClick={() => handleSetActive(i)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            active === i
              ? "bg-rose-400 scale-125"
              : "bg-rose-200 hover:bg-rose-300"
          }`}
        />
      ))}
    </div>

    {/* Avatars */}
    <div className="flex justify-center items-center gap-3 mt-8">
  {testimonials.map((item, i) => (
    <button
      key={i}
      onClick={() => handleSetActive(i)}
      className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold transition-all duration-300 ${
        active === i
          ? "ring-2 ring-rose-400 ring-offset-2 scale-110"
          : "opacity-70 hover:opacity-100"
      }`}
      style={{
        background: "linear-gradient(135deg,#fb7185,#f43f5e)"
      }}
    >
      {item.name.charAt(0)}
    </button>
  ))}
</div>

    {/* Satisfaction */}
    <div className="mt-8 pt-8 border-t border-pink-100 text-center">
      <p className="text-sm text-gray-400">
        <span className="font-semibold text-rose-400">
          100%
        </span>{" "}
        de satisfaction client
      </p>
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