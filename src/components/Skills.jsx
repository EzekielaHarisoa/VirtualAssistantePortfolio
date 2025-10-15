import Title from "./Title.jsx";
import ImgSearch from "../assets/skills/ImgSearch.png";
import ImgMS from "../assets/skills/ImgMS.png";
import ImgSMM from "../assets/skills/ImgSMM.png";
import ImgMail from "../assets/skills/ImgMail.png";
import ImgEdit from "../assets/skills/ImgEdit.png";
import ImgCanva from "../assets/skills/ImgCanva.png";
import ImgService from "../assets/skills/ImgService.png";
import ImgSchedul from "../assets/skills/ImgSchedul.png";
import ImgCommunication from "../assets/skills/ImgCommunication.png";

const skillsTechnical = [
  { id: 1, name: "Internet Research", description: "", image: ImgSearch },
  { id: 2, name: "Microsoft Office", description: "Word, Excel, PowerPoint", image: ImgMS },
  { id: 3, name: "Social Media Mgmt", description: "Content creation, scheduling posts", image: ImgSMM },
  { id: 4, name: "Email Management", description: "Gmail, Outlook - organizing & responding", image: ImgMail },
  { id: 5, name: "Writing & Editing", description: "Professional emails, reports, blog posts", image: ImgEdit },
  { id: 6, name: "Design Basics", description: "Using Canva for visuals & branding", image: ImgCanva },
  { id: 7, name: "Customer Service", description: "Chat or email support", image: ImgService },
  { id: 8, name: "Scheduling & Planning", description: "Google Calendar, Trello, Notion", image: ImgSchedul },
  { id: 9, name: "Communication Tools", description: "Zoom, WhatsApp, Slack, Google Meet", image: ImgCommunication },
];

const skillsCore = [
  { id: 1, content: "Excellent written and verbal communication" },
  { id: 2, content: "Strong organization in multitasking" },
  { id: 3, content: "Confidentiality and professionalism" },
  { id: 4, content: "Time management & meeting deadlines" },
  { id: 5, content: "Self-motivated & independent" },
  { id: 6, content: "Quick learner & adaptable" },
];

export default function Skills() {
  return (
    <section className="py-16  text-gray-800 ">
      <div className="container mx-auto px-6 md:px-20">
        <Title titre="Skills" />

        {/* --- Technical Skills --- */}
        <h2 className="text-2xl font-semibold text-pink-500 mb-6 border-l-4 border-pink-500 pl-4">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsTechnical.map((skill) => (
            <div
              key={skill.id}
              className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-pink-200 transition-shadow duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="text-md font-semibold text-pink-600">{skill.name}</h3>
                <p className="text-sm text-gray-700">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- Core Skills --- */}
        <h2 className="text-2xl font-semibold text-pink-500 mt-12 mb-4 border-l-4 border-pink-500 pl-4">
          Core Skills
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
          {skillsCore.map((skill) => (
            <li key={skill.id}>{skill.content}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
