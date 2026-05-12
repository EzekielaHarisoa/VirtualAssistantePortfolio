import { Download, Users, BriefcaseBusiness, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import mimiPhoto from "../assets/mimibien.jpeg";
import "../styles/Hero.css";
const stats = [
  { icon: Users,             value: "10",  suffix: "+", label: "Clients satisfaits"  },
  { icon: BriefcaseBusiness, value: "3",   suffix: "+", label: "Années d'expérience" },
  { icon: Star,              value: "98",  suffix: "%", label: "Taux de satisfaction" },
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
    <>
      <section id="accueil" className="h-section">

        <div className="h-blob" />
        <div className="h-dots">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="h-dot" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>

        {/* Photo */}
        <div className="h-photo-wrap">
          <img src={mimiPhoto} alt="Alexandra, Virtual Assistant"  />
          <div className="h-photo-overlay" />
        </div> 

        {/* Contenu */}
        <div className="h-content">

          <div className="h-badge bg-rose-100/55">
            <span className="h-badge-dot bg-rose-400" />
            <span className="h-badge-text ">Disponible pour de nouvelles missions</span>
          </div>

          <p className="h-greeting">Bonjour, je suis</p>
          <h1 className="h-name">Alexandra</h1>
          <h2 className="h-subtitle">Virtual Assistant &amp; Digital Partner</h2>
          <p className="h-desc">
            J&apos;aide les entrepreneurs et les entreprises à gagner du temps,
            à rester organisés et à se concentrer sur ce qui compte vraiment.
          </p>

          <div className="h-btns">
            <button className="h-btn-primary">
              <svg style={{ width: 17, height: 17, flexShrink: 0 }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Me contacter
            </button>
            <button className="h-btn-secondary">
              <Download size={14} />
              Télécharger mon CV
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
      </section>
    </>
  );
}