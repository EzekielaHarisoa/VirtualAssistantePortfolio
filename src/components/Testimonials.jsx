export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="bg-white rounded-[40px] p-10 border border-pink-100 shadow-sm">
        <p className="uppercase tracking-[5px] text-sm text-rose-400 mb-4">
          Témoignages
        </p>

        <h2 className="text-5xl font-bold mb-10">
          Ce que mes clients disent
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="flex gap-5 items-start">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="client"
              className="w-20 h-20 rounded-full object-cover"
            />

            <div>
              <p className="text-gray-600 leading-8 max-w-2xl">
                Alexandra a été un vrai soutien pour mon business. Elle est
                professionnelle, réactive et toujours de bonne humeur.
              </p>

              <h3 className="font-bold text-xl mt-5">Marie L.</h3>
              <p className="text-gray-500">Entrepreneure</p>
            </div>
          </div>

          <div className="text-yellow-500 text-3xl">★★★★★</div>
        </div>
      </div>
    </section>
  );
}