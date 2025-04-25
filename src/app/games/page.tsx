"use client";

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
      .then(setGames)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-20">Cargando…</p>;
  if (error)   return <p className="text-center mt-20 text-red-400">Error: {error}</p>;

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      <h1 className="text-4xl mb-6 text-center">Mejores puntuaciones</h1>
      <div className="w-full max-w-3xl">
        <GameTable games={games} />
      </div>
    </main>
  );
}
