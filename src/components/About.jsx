export default function About() {
  return (
    <section className="grid lg:grid-cols-2 gap-16 py-20 items-center">
      <div className="space-y-8">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
            alt="about"
            className="rounded-[40px] h-[350px] w-full object-cover"
          />

          <div className="absolute bottom-6 left-6 bg-rose-600 text-white p-6 rounded-3xl shadow-xl">
            <h3 className="text-4xl font-bold">3+</h3>
            <p>Années d'expérience</p>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop"
          alt="desk"
          className="rounded-[40px] h-[300px] w-full object-cover"
        />
      </div>

      <div>
        <p className="uppercase tracking-[5px] text-sm text-rose-400 mb-4">
          À propos de moi
        </p>

        <h2 className="text-5xl font-bold leading-tight mb-8">
          Organisée, fiable et dévouée à votre réussite
        </h2>

        <p className="text-gray-600 leading-8 mb-6">
          Passionnée par l'organisation, la communication et le support
          administratif, j'accompagne les entrepreneurs et les équipes dans
          l'optimisation de leur quotidien.
        </p>

        <p className="text-gray-600 leading-8 mb-10">
          Mon objectif est simple : vous faire gagner du temps et vous offrir
          une tranquillité d'esprit en gérant efficacement vos tâches.
        </p>

        <div className="flex flex-wrap gap-4">
          <div className="bg-white border border-pink-100 px-5 py-3 rounded-2xl">
            Discrétion & Confidentialité
          </div>

          <div className="bg-white border border-pink-100 px-5 py-3 rounded-2xl">
            Organisation & Rigueur
          </div>

          <div className="bg-white border border-pink-100 px-5 py-3 rounded-2xl">
            Communication claire
          </div>
        </div>
      </div>
    </section>
  );
}