import { useEffect, useRef, useState } from "react";
import {
  Mail,
  CalendarDays,
  Headphones,
  ClipboardList,
  Database,
  Receipt,
  Users,
  PenTool,
  CheckSquare,
  Share2,
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
    icon: Share2,
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
  {
    icon: Receipt,
    title: "Facturation Clients & Fournisseurs",
    desc: "Création et gestion de vos factures, suivi des paiements et reporting.",
    color: "rgba(255,228,230,.55)",
    accent: "#c0392b",
    tag: "Finances",
  },
  {
    icon: CalendarDays,
    title: "Organisation réunions et déplacements",
    desc: "Planification de vos réunions, coordination des déplacements et gestion logistique.",
    color: "rgba(255,228,230,.55)",
    accent: "#c0392b",
    tag: "Organisation",
  },
  {
    icon: Users,
    title: "Sourcing (utilisation des CRM)",
    desc: "Identification de prospects, gestion de votre CRM et suivi des opportunités commerciales.",
    color: "rgba(255,228,230,.55)",
    accent: "#c0392b",
    tag: "Sourcing",
  },
  {
    icon: PenTool,
    title: "Rédaction",
    desc: "Rédaction de contenus variés : articles, newsletters, fiches produits, etc.",
    color: "rgba(255,228,230,.55)",
    accent: "#c0392b",
    tag: "Rédaction",
  },
  {
    icon: CheckSquare,
    title: "Gestion de projet",
    desc: "Planification, coordination et suivi de vos projets pour assurer leur succès.",
    color: "rgba(255,228,230,.55)",
    accent: "#c0392b",
    tag: "Gestion de projet",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

export default function Services() {
  const [sectionRef, inView] = useInView(0.08);

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`sv-section ${inView ? "visible" : ""}`}
    >
      <div className="sv-eyebrow">
              <div className="sv-eyebrow-line" />
              <p>Mes services</p>
            </div>

            <h2 className="sv-title">
                Des services adaptés à vos besoins
            </h2>
            <div className="sv-divider">
              <div className="sv-divider-bar" />
              <div className="sv-divider-dot" />
            </div>
      <div className="sv-grid">
        {services.map((service, i) => {
          const Icon = service.icon;

          return (
            <div key={`${service.title}-${i}`} className="sv-card">
              <div
                className="sv-card-bg"
                style={{ background: service.color }}
              />

              <span
                className="sv-card-num"
                style={{ color: service.accent }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div
                className="sv-icon-wrap"
                style={{
                  background: service.color,
                  borderColor: `${service.accent}22`,
                }}
              >
                <Icon
                  size={20}
                  style={{ color: service.accent }}
                  strokeWidth={1.6}
                />
              </div>

              <span
                className="sv-tag"
                style={{
                  background: `${service.accent}14`,
                  color: service.accent,
                }}
              >
                {service.tag}
              </span>

              <h3 className="sv-card-title">{service.title}</h3>

              <p className="sv-card-desc">{service.desc}</p>

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
  );
}