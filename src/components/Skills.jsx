import { useEffect, useRef, useState } from "react";
import photo from "../assets/desktop.jpg";
import "../styles/Skills.css";
const skills = [
  { name: "Communication",              value: 95 },
  { name: "Organisation",               value: 95 },
  { name: "Canva",                       value: 90 },
  { name: "Microsoft Office",           value: 90 },
  { name: "Gestion des réseaux sociaux", value: 85 },
  { name: "Relation client",            value: 90 },
];


function useInView(threshold = 0.25) {
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

export default function Skills() {
  const [sectionRef, inView] = useInView(0.15);

  return (
    <>

      <section id="competences"
        ref={sectionRef}
        className={`sk-section${inView ? " visible" : ""}`}
      >
      
        <div className="sk-blob" />
        <div className="sk-blob-2" />

        <div className="sk-inner">

         
          <div className="sk-img-wrap">
            <img src={photo} alt="Espace de travail Alexandra" />
            <div className="sk-img-overlay" />

            <div className="sk-img-badge">
              <div className="sk-img-badge-icon">✦</div>
              <div className="sk-img-badge-text">
                <strong>Expert VA</strong>
                <span>Disponible dès maintenant</span>
              </div>
            </div>
          </div>

          {/* ── Contenu ── */}
          <div className="sk-content">

            <div className="sk-eyebrow">
              <div className="sk-eyebrow-line" />
              <p>Mes compétences</p>
            </div>

            <h2 className="sk-title">
              Des compétences au service<br />
              <em>de votre productivité</em>
            </h2>

            <div className="sk-bars">
              {skills.map((skill, i) => (
                <div key={skill.name} className="sk-bar-row">
                  <div className="sk-bar-header">
                    <span className="sk-bar-name">{skill.name}</span>
                    <span className="sk-bar-pct">{skill.value}%</span>
                  </div>
                  <div className="sk-bar-track">
                    <div
                      className={`sk-bar-fill${inView ? " active" : ""}`}
                      style={{
                        width: `${skill.value}%`,
                        transitionDelay: inView ? `${0.4 + i * 0.12}s` : "0s",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}