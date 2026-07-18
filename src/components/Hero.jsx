import { Download, Users, BriefcaseBusiness, Star, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "../styles/Hero.css";

const stats = [
  { icon: BriefcaseBusiness, value: "3", suffix: "+", label: "Années d'expérience" },
  { icon: Star, value: "98", suffix: "%", label: "Taux de satisfaction" },
];

const tasks = [
  { label: "Boîte mail triée", delay: 0 },
  { label: "Agenda synchronisé", delay: 1.4 },
  { label: "Tâche du jour close", delay: 2.8 },
];

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    const n = parseInt(target, 10);
    let frame = 0;
    const total = 45;
    const id = setInterval(() => {
      frame++;
      setCount(Math.round((frame / total) * n));
      if (frame >= total) clearInterval(id);
    }, 1000 / total);
    return () => clearInterval(id);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  return (
    <section id="accueil" className="h-section">
      <div className="h-blob" />
      <div className="h-dots">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="h-dot" style={{ animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>

      {/* Contenu */}
      <div className="h-content">

        <p className="h-greeting">Bonjour, je suis</p>
        <h1 className="h-name">Alexandra</h1>
        <h2 className="h-subtitle">Bras droit stratégique & assistante virtuelle des entrepreneurs qui refusent de tout porter seuls
</h2>
        <p className="h-desc">
         Je pilote vos projets, j'anticipe les blocages, et je porte une partie de la charge mentale pour que vous puissiez enfin vous concentrer sur ce qui compte vraiment : faire grandir votre business.
        </p>

        <div className="h-btns">
          <button className="h-btn-primary">
            <a href="https://wa.me/+2610322063222">Discutons de votre besoin</a>
            <span className="h-btn-primary-arrow">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </button>

         
        </div>

        <div className="h-stats">
          {stats.map(({ icon: Icon, value, suffix, label }) => (
            <div key={label} className="h-stat-card">
              <div className="h-stat-icon">
                <Icon size={15} color="rgb(225 29 72)" strokeWidth={1.5} />
              </div>
              <div>
                <div className="h-stat-value">
                  <AnimatedCounter target={value} suffix={suffix} />
                </div>
                <div className="h-stat-label">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <div className="h-visual">
        <div
          className="h-visual-card"
          style={{ top: "10px", left: "10px", width: "220px", animationDelay: ".2s, 0s" }}
        >
          <p className="h-visual-task-title">Aujourd&apos;hui</p>
          {tasks.map((task) => (
            <div key={task.label} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <span className="h-tick">
                <Check size={9} style={{ animationDelay: `${task.delay}s` }} />
              </span>
              <span className="h-visual-task-label">{task.label}</span>
            </div>
          ))}
        </div>

        <div
          className="h-visual-card"
          style={{ top: "190px", right: "0px", width: "170px", animationDelay: ".4s, 1.2s" }}
        >
          <p className="h-visual-task-title" style={{ marginBottom: 4 }}>Cette semaine</p>
          <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 28, fontWeight: 700, color: "#8a6050", margin: 0 }}>
            12h
          </p>
          <p style={{ fontFamily: "sans-serif", fontSize: 11, color: "rgb(244 63 94)", margin: 0 }}>
            gagnées pour vous
          </p>
        </div>

        <div
          className="h-visual-card h-visual-card-accent"
          style={{ bottom: "10px", left: "60px", width: "160px", animationDelay: ".6s, 2.4s" }}
        >
          <p style={{ fontFamily: "sans-serif", fontSize: 11, color: "rgba(255,255,255,.8)", margin: "0 0 4px" }}>
            Disponibilité
          </p>
          <p style={{ fontFamily: "sans-serif", fontSize: 13, fontWeight: 600, color: "#fff", margin: 0 }}>
            Réponse sous 24h
          </p>
        </div>
      </div>
    </section>
  );
  function TiltBadge({ children }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--ry", `${px * 14}deg`);
    el.style.setProperty("--rx", `${-py * 10}deg`);
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      className="h-badge-3d"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
}