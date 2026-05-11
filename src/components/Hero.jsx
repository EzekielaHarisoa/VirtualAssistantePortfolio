export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-14 items-center">
      <div>
        <div className="inline-flex items-center gap-2 bg-white border border-pink-100 px-4 py-2 rounded-full shadow-sm mb-8">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-sm text-gray-600">
            Disponible pour de nouvelles missions
          </span>
        </div>

        <p className="text-rose-400 text-3xl italic mb-2">
          Bonjour, je suis
        </p>

        <h1 className="text-6xl lg:text-7xl font-bold text-rose-800 leading-tight">
          Alexandra
        </h1>

        <h2 className="text-3xl mt-4 text-yellow-700 font-medium">
          Virtual Assistant & Digital Partner
        </h2>

        <p className="mt-8 text-gray-600 leading-8 max-w-xl text-lg">
          J'aide les entrepreneurs et les entreprises à gagner du temps,
          à rester organisés et à se concentrer sur ce qui compte vraiment.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <button className="bg-rose-600 hover:bg-rose-700 transition text-white px-8 py-4 rounded-2xl font-semibold shadow-xl shadow-rose-200">
            Me contacter
          </button>

          <button className="border border-rose-200 bg-white hover:bg-rose-50 transition px-8 py-4 rounded-2xl font-semibold text-rose-700">
            Télécharger mon CV
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-14">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-pink-100">
            <h3 className="text-4xl font-bold text-rose-700">50+</h3>
            <p className="text-gray-500 mt-2">Clients satisfaits</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-pink-100">
            <h3 className="text-4xl font-bold text-rose-700">3+</h3>
            <p className="text-gray-500 mt-2">Années d'expérience</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-pink-100">
            <h3 className="text-4xl font-bold text-rose-700">98%</h3>
            <p className="text-gray-500 mt-2">Taux de satisfaction</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -top-6 -left-6 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-60"></div>

        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
          alt="assistant"
          className="relative z-10 rounded-[50px] w-full h-[750px] object-cover shadow-2xl"
        />
      </div>
    </section>
  );
}