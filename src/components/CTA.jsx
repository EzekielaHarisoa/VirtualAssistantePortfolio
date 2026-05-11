export default function CTA() {
  return (
    <section className="px-6 lg:px-10 pb-10">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-pink-200 to-rose-300 rounded-[40px] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div>
          <h2 className="text-5xl font-bold text-rose-900 mb-4">
            Prête à collaborer ?
          </h2>

          <p className="text-rose-900/80 text-lg">
            Je suis disponible pour vous accompagner dans vos projets.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-auto">
          <button className="bg-white px-8 py-4 rounded-2xl font-semibold text-rose-700 hover:scale-105 transition">
            Me contacter sur WhatsApp
          </button>

          <button className="border border-white text-rose-900 px-8 py-4 rounded-2xl font-semibold">
            contact@alexandra-assistante.com
          </button>
        </div>
      </div>
    </section>
  );
}