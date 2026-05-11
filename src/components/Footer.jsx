export default function Footer() {
  return (
    <footer className="bg-rose-800 text-white py-10 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold">Alexandra</h2>
          <p className="text-sm opacity-80">Virtual Assistant</p>
        </div>

        <p className="text-sm opacity-80 text-center">
          © 2025 Alexandra. Tous droits réservés.
        </p>

        <div className="flex gap-4 text-2xl">
          <span>in</span>
          <span>ig</span>
          <span>wa</span>
        </div>
      </div>
    </footer>
  );
}