import { useEffect, useRef, useState } from "react";
import { ShieldCheck, SlidersHorizontal, MessageCircle, CheckCircle2 } from "lucide-react";
import mimibien from "../assets/mimibien.jpeg";
import "../styles/About.css";
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

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function About() {
  const [sectionRef, inView] = useInView(0.1);

  return (
    <>
      <section id="apropos" ref={sectionRef} className={`ab-section${inView ? " visible" : ""}`}>

        {/* Blobs déco */}
        <div className="ab-blob-tl" />
        <div className="ab-blob-br" />

        <div className="ab-inner">

          {/* GAUCHE  */}
          <div className="ab-left">
            <div className="ab-photo-frame">
              <img src={mimibien} alt="Alexandra" />
              <div className="ab-photo-overlay" />
            </div>

            {/* Badge */}
            <div className="ab-badge">
              <div className="ab-badge-icon">
                <span>3+</span>
              </div>
              <div>
                <span className="ab-badge-label-sub">Années</span>
                <span className="ab-badge-label-main">d&apos;expérience</span>
              </div>
            </div>

            {/* Dots */}
            <div className="ab-dots">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={i}
                  className="ab-dot"
                  style={{ animationDelay: `${i * 0.09}s` }}
                />
              ))}
            </div>
          </div>

          {/*  DROITE  */}
          <div className="ab-right">

            <div className="ab-eyebrow">
              <div className="ab-eyebrow-line" />
              <p>À propos de moi</p>
            </div>

            <h2 className="ab-title">
              Organisée, fiable et<br />
              <em>dévouée à votre réussite</em>
            </h2>

            <div className="ab-divider">
              <div className="ab-divider-bar" />
              <div className="ab-divider-dot" />
            </div>

            <p className="ab-para ab-para-1">
              Passionnée par l&apos;organisation, la communication et le support
              administratif, j&apos;accompagne les entrepreneurs et les équipes dans
              l&apos;optimisation de leur quotidien.
            </p>
            <p className="ab-para ab-para-2">
              Mon objectif est simple : vous faire gagner du temps et vous offrir
              une tranquillité d&apos;esprit en gérant efficacement vos tâches.
            </p>

            <ul className="ab-checklist">
              {checklist.map((item) => (
                <li key={item} className="ab-check-item">
                  <div className="ab-check-icon">
                    <CheckCircle2 size={13} color="#c0392b" strokeWidth={2.2} />
                  </div>
                  <span className="ab-check-text">{item}</span>
                </li>
              ))}
            </ul>

            <div className="ab-pills">
              {traits.map(({ icon: Icon, label }) => (
                <div key={label} className="ab-pill">
                  <Icon size={14} className="ab-pill-icon" strokeWidth={1.8} />
                  <span className="ab-pill-label">{label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}