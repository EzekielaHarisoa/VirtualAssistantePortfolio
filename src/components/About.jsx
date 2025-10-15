import { Laptop, LetterText, Rocket } from "lucide-react";
import Title from "./Title.jsx";
import myImg from "../assets/mimi2.png";

const aboutSection = [
  {
    id: 1,
    title: "Virtual Assistant",
    description: "I’m a dedicated virtual assistant helping you stay organized and efficient.",
    icon: <Laptop className="w-8 h-8 text-pink-500" />,
  },
  {
    id: 2,
    title: "Translator",
    description: "I translate fluently between French and English with precision and clarity.",
    icon: <LetterText className="w-8 h-8 text-pink-500" />,
  },
  {
    id: 3,
    title: "Writer",
    description: "I create captivating and well-written content in both French and English.",
    icon: <Rocket className="w-8 h-8 text-pink-500" />,
  },
];

export default function About() {
  return (
    <section className="py-16 bg-gradient-to-r text-gray-800 ">
      <div className="container mx-auto px-6 md:px-20 gap-6">
        <Title titre="About Me" />

        <div className="flex flex-col-reverse items-center  mb-10 gap-10 md:flex-row md:justify-between">
          {/* Image */}
          <div className="md:w-1/2 hidden md:flex justify-center">
            <img
              src={myImg}
              alt="About Alexandra"
              className="rounded-[2rem] w-80 h-auto object-cover border-8 border-pink-400 shadow-lg shadow-pink-200"
            />
          </div>

          {/* Description cards */}
          <div className="flex flex-col gap-6 md:w-1/2">
            {aboutSection.map((sec) => (
              <div
                key={sec.id}
                className="flex items-center gap-4 bg-white/80 backdrop-blur-md rounded-2xl p-5 shadow-md hover:shadow-pink-200 transition-shadow duration-300"
              >
                <div className="flex-shrink-0">{sec.icon}</div>
                <div>
                  <h2 className="text-lg font-semibold text-pink-600">{sec.title}</h2>
                  <p className="text-sm text-gray-700">{sec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
