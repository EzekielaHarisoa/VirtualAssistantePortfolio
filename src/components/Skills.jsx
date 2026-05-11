const skills = [
  { name: "Communication", value: "95%" },
  { name: "Organisation", value: "95%" },
  { name: "Canva", value: "90%" },
  { name: "Microsoft Office", value: "90%" },
  { name: "Gestion réseaux sociaux", value: "85%" },
  { name: "Relation client", value: "90%" },
];

export default function Skills() {
  return (
    <section className="py-20">
      <div className="bg-white rounded-[40px] p-10 border border-pink-100 shadow-sm">
        <p className="uppercase tracking-[5px] text-sm text-rose-400 mb-4">
          Mes compétences
        </p>

        <h2 className="text-5xl font-bold mb-12">
          Des compétences au service de votre productivité
        </h2>

        <div className="space-y-8">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-3 font-medium">
                <span>{skill.name}</span>
                <span>{skill.value}</span>
              </div>

              <div className="w-full h-3 bg-pink-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-rose-400 to-rose-700 rounded-full"
                  style={{ width: skill.value }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}