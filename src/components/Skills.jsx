import { useEffect, useState } from "react";
import photo from "../assets/desktop.jpg";

const skills = [
  { name: "Communication", value: 95 },
  { name: "Organisation", value: 95 },
  { name: "Canva", value: 90 },
  { name: "Microsoft Office", value: 90 },
  { name: "Gestion des réseaux sociaux", value: 85 },
  { name: "Relation client", value: 90 },
];

export default function Skills() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-[#faf8f6] py-16 px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-10">

        {/*  gauche  */}
        <div className="w-[100%] md:w-[40%] rounded-2xl overflow-hidden">
          <img
            src={photo}
            alt="Espace de travail"
            className="w-full h-full object-cover"
          />
        </div>

        {/*  droite */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="uppercase tracking-[5px] text-[11px] font-semibold font-sans text-[#c4837e] mb-4">
            Mes compétences
          </p>
           <h2
            className="text-[clamp(28px,4vw,46px)] font-bold text-[#6b1e1e] leading-[1.15] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
             Des compétences au service<br /> 
            <span className="text-[#b07540]">de votre productivité</span>
          </h2>

          <div className="flex flex-col gap-4">
            {skills.map((skill, i) => (
              <div key={skill.name} className="flex items-center gap-4">
                <span className="text-sm font-sans  text-[#8a6050] w-44 flex-shrink-0">
                  {skill.name}
                </span>

                <div className="flex-1 h-2 bg-pink-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-rose-400 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: animated ? `${skill.value}%` : "0%",
                      transitionDelay: `${i * 120}ms`,
                    }}
                  />
                </div>

                <span className="text-sm font-sans  text-[#8a6050] w-10 text-right  flex-shrink-0">
                  {skill.value}%
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}