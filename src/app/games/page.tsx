"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchGames } from "@/services/games";
import GameTable from "@/components/GameTable";
import type { Game } from "@/app/api/games/route";

export default function GamesPage() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGames()
      .then((data) => setGames(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Pantalla de carga
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br flex items-center justify-center">
        <p className="text-white text-lg">Cargando…</p>
      </div>
    );
  }

  // Pantalla de error
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br flex items-center justify-center">
        <p className="text-red-400 text-lg">{error}</p>
      </div>
    );
  }

  // Vista principal
  return (
    <div className="min-h-screen bg-gradient-to-br flex flex-col">
      {/* Header con Home link */}
      <header className="flex justify-end p-4">
        <Link
          href="/"
          className="text-white hover:text-gray-200"
        >
          Home
        </Link>
      </header>

      {/* Contenedor central */}
      <main className="flex-1 flex flex-col items-center px-4 py-8 space-y-6">
        <h1 className="text-4xl text-white">Mejores Puntuaciones</h1>
        <div className="bg-gray-900 bg-opacity-80 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full max-w-3xl overflow-x-auto">
          <GameTable games={games} />
        </div>
      </main>
    </div>
  );
}
