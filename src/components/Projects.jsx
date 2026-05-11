const projects = [
  {
    title: "Gestion administrative",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Gestion réseaux sociaux",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Suivi & Reporting",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section className="py-20">
      <p className="uppercase tracking-[5px] text-sm text-rose-400 mb-4">
        Projets récents
      </p>

      <h2 className="text-5xl font-bold mb-12">
        Quelques réalisations
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-[35px] overflow-hidden border border-pink-100 shadow-sm hover:-translate-y-2 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}