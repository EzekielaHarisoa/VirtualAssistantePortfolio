const services = [
  {
    title: "Gestion des emails",
    desc: "Tri, réponses et organisation professionnelle",
  },
  {
    title: "Gestion d'agenda",
    desc: "Planification de rendez-vous et organisation",
  },
  {
    title: "Support client",
    desc: "Service client réactif et professionnel",
  },
  {
    title: "Gestion réseaux sociaux",
    desc: "Création de contenu et gestion sociale",
  },
  {
    title: "Support administratif",
    desc: "Tâches administratives et suivi",
  },
  {
    title: "Saisie de données",
    desc: "Saisie, mise en forme et gestion",
  },
];

export default function Services() {
  return (
    <section className="py-24">
      <p className="uppercase tracking-[5px] text-sm text-rose-400 mb-3">
        Mes services
      </p>

      <h2 className="text-5xl font-bold text-gray-900 mb-16">
        Comment je peux vous aider
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-3xl p-6 border border-pink-100 hover:-translate-y-2 transition duration-300 shadow-sm hover:shadow-xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-2xl mb-6">
              ✨
            </div>

            <h3 className="font-bold text-lg mb-3">{service.title}</h3>

            <p className="text-gray-500 text-sm leading-7">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}