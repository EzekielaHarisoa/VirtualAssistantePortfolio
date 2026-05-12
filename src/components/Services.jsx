import { useEffect, useRef, useState } from "react";
import {
  Mail, CalendarDays, Headphones,
  LayoutGrid, ClipboardList, Database,
} from "lucide-react";
import "../styles/Services.css";
const services = [
  {
    icon: Mail,
    title: "Gestion des emails",
    desc: "Tri, réponses et organisation professionnelle de votre boîte mail au quotidien.",
    color: "rgba(255,228,230,.55)",
    accent: "#c0392b",
    tag: "Productivité",
  },
  {
    icon: CalendarDays,
    title: "Gestion d'agenda",
    desc: "Planification de rendez-vous, gestion des priorités et coordination.",
    color: "rgba(254,243,199,.55)",
    accent: "#b07540",
    tag: "Organisation",
  },
  {
    icon: Headphones,
    title: "Support client",
    desc: "Service client réactif, empathique et professionnel pour vos clients.",
    color: "rgba(255,228,230,.55)",
    accent: "#c0392b",
    tag: "Relation client",
  },
  {
    icon: LayoutGrid,
    title: "Réseaux sociaux",
    desc: "Création de contenu engageant, planification et gestion de vos pages.",
    color: "rgba(253,216,243,.45)",
    accent: "#9b2c8a",
    tag: "Social",
  },
  {
    icon: ClipboardList,
    title: "Support administratif",
    desc: "Suivi des tâches administratives, rédaction et gestion documentaire.",
    color: "rgba(254,243,199,.55)",
    accent: "#b07540",
    tag: "Admin",
  },
  {
    icon: Database,
    title: "Saisie de données",
    desc: "Saisie précise, mise en forme et gestion structurée de vos données.",
    color: "rgba(255,228,230,.55)",
    accent: "#c0392b",
    tag: "Données",
  },
];

function useInView(threshold = 0.1) {
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

export default function Services() {
  const [sectionRef, inView] = useInView(0.08);
  const [hovered, setHovered] = useState(null);

  return (
    <>

      <section id="services" ref={sectionRef} className={`sv-section${inView ? " visible" : ""}`}>

        {/* Blobs déco */}
        <div className="sv-blob-tr" />
        <div className="sv-blob-bl" />

        {/* ── Header ── */}
        <div className="sv-header">
          <div className="sv-eyebrow">
            <div className="sv-eyebrow-line" />
            <p>Mes services</p>
          </div>

          <div className="sv-heading-row">
            <h2 className="sv-title">
              Comment je peux <em>vous aider</em>
            </h2>
            <p className="sv-subtitle">
              Des solutions sur-mesure pour vous libérer des tâches chronophages
              et vous recentrer sur l&apos;essentiel.
            </p>
          </div>

          <div className="sv-divider">
            <div className="sv-divider-a" />
            <div className="sv-divider-b" />
            <div className="sv-divider-c" />
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="sv-grid">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="sv-card"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Fond coloré */}
                <div
                  className="sv-card-bg"
                  style={{ background: service.color }}
                />

                {/* Numéro */}
                <span
                  className="sv-card-num"
                  style={{ color: service.accent }}
                >
                  0{i + 1}
                </span>

                {/* Icône */}
                <div
                  className="sv-icon-wrap"
                  style={{
                    background: service.color,
                    borderColor: `${service.accent}22`,
                  }}
                >
                  <Icon size={20} style={{ color: service.accent }} strokeWidth={1.6} />
                </div>

                {/* Tag */}
                <span
                  className="sv-tag"
                  style={{
                    background: `${service.accent}14`,
                    color: service.accent,
                  }}
                >
                  {service.tag}
                </span>

                {/* Titre */}
                <h3 className="sv-card-title">{service.title}</h3>

                {/* Description */}
                <p className="sv-card-desc">{service.desc}</p>

                {/* Lien hover */}
                <div className="sv-card-link">
                  <span style={{ color: service.accent }}>En savoir plus</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke={service.accent} strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Barre déco bas */}
                <div className="sv-card-bar">
                  <div
                    className="sv-card-bar-inner"
                    style={{
                      background: `linear-gradient(90deg,${service.accent},transparent)`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}