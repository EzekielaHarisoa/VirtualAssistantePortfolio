import { useEffect, useState } from "react";
import photo from "../assets/mimibien.jpeg";

const skills = [
  { name: "Communication", value: 95, icon: "💬" },
  { name: "Organisation", value: 95, icon: "✅" },
  { name: "Canva", value: 90, icon: "🎨" },
  { name: "Microsoft Office", value: 90, icon: "📄" },
  { name: "Gestion réseaux sociaux", value: 85, icon: "📲" },
  { name: "Relation client", value: 90, icon: "🤝" },
];

const tags = [
  "Communication", "Organisation", "Design",
  "Office", "Réseaux sociaux", "Relation client"
];

export default function Skills() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20">
      <div className="bg-white rounded-[36px] p-12 border border-pink-100">

        {/* Top : titre + tag cloud */}
        <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
          <div>
            <p className="uppercase tracking-[5px] text-xs text-rose-400 mb-3">
              Mes compétences
            </p>
            <h2 className="text-3xl font-extrabold text-[#1a0a14] leading-tight max-w-xs">
              Ce que je maîtrise pour vous
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 max-w-[280px] pt-2">
            {tags.map(tag => (
              <span
                key={tag}
                className="bg-pink-50 border border-pink-100 rounded-full px-4 py-1.5 text-xs font-semibold text-rose-700 hover:bg-pink-100 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <hr className="border-pink-100 mb-9" />

        {/* Grille de cartes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-9">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="bg-pink-50/60 border border-pink-100 rounded-[20px] p-5 flex flex-col gap-3 hover:border-rose-300 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex justify-between items-center">
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-xs font-bold text-white bg-rose-400 rounded-full px-2.5 py-0.5">
                  {skill.value}%
                </span>
              </div>
              <p className="text-sm font-bold text-[#2d1b2e]">{skill.name}</p>
              <div className="w-full h-1.5 bg-pink-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-rose-400 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: animated ? `${skill.value}%` : "0%",
                    transitionDelay: `${i * 120}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bande profil en bas */}
        <div className="flex items-center gap-4 bg-pink-50 rounded-[20px] px-6 py-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pink-200 flex-shrink-0">
            <img src={photo} alt="Portrait" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-[#2d1b2e]">Assistante virtuelle polyvalente</p>
            <p className="text-xs text-rose-400 mt-0.5">3 ans d'expérience · Télétravail · Francophone</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-green-700">Disponible</span>
          </div>
        </div>

      </div>
    </section>
  );
}