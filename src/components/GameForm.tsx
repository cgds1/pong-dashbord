"use client";

import { useState, FormEvent } from "react";
import { logGame } from "@/services/games";

export default function GameForm() {
  const [player, setPlayer] = useState("");
  const [score, setScore]   = useState(0);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const created = await logGame({
        player,
        score,
        playedAt: new Date().toISOString(),
      });
      alert("Partida registrada");
      setPlayer("");
      setScore(0);
      console.log("Respuesta POST:", created);
    } catch {
      alert("Error al registrar");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg space-y-4 text-white"
    >
      <div>
        <label>Jugador</label>
        <input
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
          className="w-full p-2 bg-gray-700 rounded mt-1"
          required
        />
      </div>
      <div>
        <label>Puntos</label>
        <input
          type="number"
          value={score}
          onChange={(e) => setScore(+e.target.value)}
          className="w-full p-2 bg-gray-700 rounded mt-1"
          min={0}
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 border-2 border-white uppercase hover:bg-white hover:text-black transition"
      >
        {loading ? "Guardando…" : "Registrar puntuación"}
      </button>
    </form>
  );
}
