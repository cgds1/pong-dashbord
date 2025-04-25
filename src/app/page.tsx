export default function HomePage() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Partidas", href: "/games" },
    { label: "Registrar Partida", href: "/log-game" },
  ];


  return (
    <main className="min-h-screen flex flex-col text-white">
      {/* Navegación sin logo */}
      <nav className="w-full max-w-6xl mx-auto flex justify-end py-6 px-4">
        <ul className="flex space-x-8 uppercase text-sm">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="hover:underline">{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero centrado */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 text-center space-y-6">
        <h1 className="text-6xl md:text-8xl">PONG GAMING</h1>
        <p className="max-w-md">
          Bienvenido a tu dashboard retro de pong. Descubre estadísticas, récords y mucho más.
        </p>
        <button className="px-6 py-3 border-2 border-white uppercase text-sm hover:bg-white hover:text-black transition">
          Comenzar
        </button>
      </section>
    </main>
  );
}
