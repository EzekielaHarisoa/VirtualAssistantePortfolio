import { useEffect, useState, useRef } from "react";
import { Laptop, Rocket, Mail, Star } from "lucide-react";
import Title from "./Title.jsx";

const experiences = [
  {
    year: "2022",
    title: "Administrative Assistant",
    description:
      "Planning organization, document management, and project follow-up to ensure activities run smoothly.",
    icon: <Laptop className="w-6 h-6 text-white" />,
  },
  {
    year: "2023",
    title: "AI Data Annotation",
    description:
      "Annotating and organizing data for training and improving AI models with precision and quality.",
    icon: <Star className="w-6 h-6 text-white" />,
  },
  {
    year: "2024",
    title: "Social Media Management",
    description:
      "Managing content creation, community engagement, and social media animation.",
    icon: <Rocket className="w-6 h-6 text-white" />,
  },
  {
    year: "2025",
    title: "Virtual Assistant",
    description:
      "Remote support with emails, scheduling, coordination, and operational tasks.",
    icon: <Mail className="w-6 h-6 text-white" />,
  },
];

export default function Experience() {
  const [visibleIdx, setVisibleIdx] = useState(-1);
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".experience-card");
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.idx);
            let i = 0;
            const interval = setInterval(() => {
              setVisibleIdx(i);
              i++;
              if (i > idx) clearInterval(interval);
            }, 300);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <section className="py-16 px-4 md:px-20 overflow-hidden flex  flex-col gap-16 ">
      <Title titre="Experiences" />
      <ul
        ref={containerRef}
        className="steps steps-vertical md:steps-horizontal gap-10 mt-10 min-w-[800px]"
      >
        {experiences.map((exp, idx) => (
          <li
            key={idx}
            data-idx={idx}
            className={`experience-card step step-pink-500 relative flex flex-col items-center md:items-start bg-gradient-to-br from-pink-50 to-pink-300 rounded-xl shadow-xl p-4 transform transition-all duration-700
              ${idx <= visibleIdx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center gap-4">
              <div className="bg-pink-500 p-3 rounded-full shadow-lg animate-bounce">
                {exp.icon}
              </div>
              <div>
                <span className="font-bold text-white text-lg">{exp.year}</span>
                <h3 className="text-pink-500 font-bold text-xl">{exp.title}</h3>
              </div>
            </div>
            <p className="text-gray-500 mt-3 text-sm text-center md:text-left">
              {exp.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
