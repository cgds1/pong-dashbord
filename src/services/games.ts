import type { Game } from "@/app/api/games/route";

export async function fetchGames(): Promise<Game[]> {
  const res = await fetch("/api/games");
  if (!res.ok) throw new Error("Error cargando partidas");
  return res.json();
}

export async function logGame(game: Omit<Game, "id">): Promise<Game> {
  const res = await fetch("/api/games", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(game),
  });
  if (!res.ok) throw new Error("Error registrando partida");
  const { game: created } = await res.json();
  return created;
}
