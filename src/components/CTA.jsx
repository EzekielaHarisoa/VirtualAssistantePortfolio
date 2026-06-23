import { useRef, useEffect, useState } from "react";

/* ── Hook IntersectionObserver ── */
function useInView(ref, threshold = 0.2) {
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


const STYLES = `
  @keyframes ctaFadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes ctaFadeRight {
    from { opacity: 0; transform: translateX(-20px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes ctaFadeLeft {
    from { opacity: 0; transform: translateX(20px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes ctaFloat {
    0%, 100% { transform: translateY(0px) scale(1); }
    50%       { transform: translateY(-12px) scale(1.04); }
  }
  @keyframes ctaFloatSlow {
    0%, 100% { transform: translateY(0px) scale(1); }
    50%       { transform: translateY(-8px) scale(1.02); }
  }
  @keyframes ctaPulse {
    0%, 100% { opacity: 0.18; transform: scale(1); }
    50%       { opacity: 0.28; transform: scale(1.06); }
  }
  @keyframes ctaBadgePop {
    0%   { opacity: 0; transform: scale(0.7) translateY(8px); }
    70%  { transform: scale(1.08) translateY(-2px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes ctaCheckPop {
    0%   { opacity: 0; transform: scale(0.5); }
    70%  { transform: scale(1.2); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  .cta-fade-up    { animation: ctaFadeUp   0.55s cubic-bezier(.4,0,.2,1) both; }
  .cta-fade-right { animation: ctaFadeRight 0.5s  cubic-bezier(.4,0,.2,1) both; }
  .cta-fade-left  { animation: ctaFadeLeft  0.5s  cubic-bezier(.4,0,.2,1) both; }
  .cta-badge-pop  { animation: ctaBadgePop 0.45s cubic-bezier(.34,1.56,.64,1) both; }
  .cta-check-pop  { animation: ctaCheckPop 0.4s  cubic-bezier(.34,1.56,.64,1) both; }

  .cta-d1 { animation-delay: 0.05s; }
  .cta-d2 { animation-delay: 0.12s; }
  .cta-d3 { animation-delay: 0.19s; }
  .cta-d4 { animation-delay: 0.26s; }
  .cta-d5 { animation-delay: 0.33s; }
  .cta-d6 { animation-delay: 0.40s; }
  .cta-d7 { animation-delay: 0.47s; }

  .cta-circle-1 { animation: ctaFloat     7s ease-in-out infinite; }
  .cta-circle-2 { animation: ctaFloatSlow 9s ease-in-out infinite 1.5s; }
  .cta-circle-3 { animation: ctaPulse     5s ease-in-out infinite 0.8s; }

  .cta-btn-primary {
    position: relative;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .cta-btn-primary::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%);
    background-size: 200% 100%;
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  .cta-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(0,0,0,0.14); }
  .cta-btn-primary:hover::after { opacity: 1; animation: shimmer 0.6s ease forwards; }
  .cta-btn-primary:active { transform: translateY(-1px); }

  .cta-btn-secondary {
    transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
  }
  .cta-btn-secondary:hover { transform: translateY(-2px); background: rgba(255,255,255,0.28) !important; border-color: rgba(255,255,255,0.6) !important; }
  .cta-btn-secondary:active { transform: translateY(0); }
`;

function injectStyles() {
  if (typeof document !== "undefined" && !document.getElementById("cta-anim-styles")) {
    const el = document.createElement("style");
    el.id = "cta-anim-styles";
    el.textContent = STYLES;
    document.head.appendChild(el);
  }
}

export default function CTA() {
  injectStyles();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);

  const badges = ["Réponse sous 24h", "Devis gratuit", "Sans engagement"];

  return (
    <section id="contact" ref={sectionRef} className="px-5 sm:px-6 lg:px-10">
      <div
        className="max-w-7xl mx-auto rounded-[36px] sm:rounded-[40px] overflow-hidden relative"
        style={{ background: "linear-gradient(135deg, #f9d0d0 0%, #f0a0a8 50%, #e8808c 100%)" }}
      >
        {/* ── Cercles décoratifs animés ── */}
        <div
          className="cta-circle-1 absolute -top-16 -right-16 w-56 sm:w-64 h-56 sm:h-64 rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,0.4)", opacity: 0.2 }}
        />
        <div
          className="cta-circle-2 absolute -bottom-10 -left-10 w-40 sm:w-48 h-40 sm:h-48 rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,0.4)", opacity: 0.15 }}
        />
        <div
          className="cta-circle-3 absolute top-8 right-40 sm:right-48 w-14 sm:w-16 h-14 sm:h-16 rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,0.5)", opacity: 0.2 }}
        />

        <div className="relative z-10 p-8 sm:p-10 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12">

          {/* Gauche  */}
          <div className="flex-1">
            <h2
              className={`text-[clamp(26px,4vw,38px)] font-bold text-white mb-3 leading-tight ${inView ? "cta-fade-right cta-d1" : "opacity-0"}`}
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Prête à collaborer ?
            </h2>

            <p className={`text-white/80 text-[14px] sm:text-[15px] leading-relaxed max-w-md mb-7 ${inView ? "cta-fade-right cta-d2" : "opacity-0"}`}>
              Confiez-moi vos tâches administratives, vos réseaux sociaux ou votre organisation — je m'occupe du reste.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              {badges.map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 ${inView ? `cta-badge-pop cta-d${i + 3}` : "opacity-0"}`}
                >
                  <span
                    className={`w-4 h-4 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 ${inView ? `cta-check-pop cta-d${i + 4}` : "opacity-0"}`}
                  >
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white/90 text-[13px] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/*  Droite */}
          <div className={`flex flex-col gap-3 w-full lg:w-auto lg:min-w-[260px] ${inView ? "cta-fade-left cta-d3" : "opacity-0"}`}>
            {/* WhatsApp */}
            <a
              href="https://wa.me/+2610322063222"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn-primary flex items-center justify-center gap-3 bg-white px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl font-semibold text-rose-500"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
            >
              <svg className="w-5 h-5 text-rose-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Me contacter sur WhatsApp
            </a>

            {/* Email */}
            <a
              href="mailto:alexandramahefasoa@gmail.com"
              className="cta-btn-secondary flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl font-semibold text-white text-[14px] sm:text-[15px]"
              style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.4)" }}
            >
              <svg className="w-5 h-5 flex-shrink-0 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              alexandramahefasoa@gmail.com
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}