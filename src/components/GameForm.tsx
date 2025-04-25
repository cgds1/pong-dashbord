"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { logGame } from "@/services/games";

export default function GameForm() {
  const router = useRouter();
  const [player, setPlayer] = useState("");
  const [score, setScore]   = useState(0);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await logGame({
        player,
        score,
        playedAt: new Date().toISOString(),
      });
      router.push("/games");
    } catch {
      alert("Error al registrar partida.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="player" className="block text-sm font-semibold text-gray-200 mb-1">
          Jugador
        </label>
        <input
          id="player"
          name="player"
          type="text"
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
          placeholder="Nombre del jugador"
          required
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      <div>
        <label htmlFor="score" className="block text-sm font-semibold text-gray-200 mb-1">
          Puntos
        </label>
        <input
          id="score"
          name="score"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={score}
          onChange={(e) => setScore(Number(e.target.value))}
          onKeyDown={(e) => {
            if (
              !/[0-9]/.test(e.key) &&
              !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
            ) {
              e.preventDefault();
            }
          }}
          placeholder="0"
          required
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition disabled:opacity-50"
      >
        {loading ? "Guardando…" : "Registrar puntuación"}
      </button>
    </form>
  );
}
