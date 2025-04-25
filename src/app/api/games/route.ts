import { NextResponse } from "next/server";

export interface Game {
  id: string;
  player: string;
  score: number;
  playedAt: string; // ISO date string
}

// Mock inicial con partidas de ejemplo
const games: Game[] = [
  {
    id: "1",
    player: "Alice",
    score: 120,
    playedAt: "2025-04-24T15:30:00Z",
  },
  {
    id: "2",
    player: "Bob",
    score: 85,
    playedAt: "2025-04-23T18:00:00Z",
  },
  {
    id: "3",
    player: "Carol",
    score: 200,
    playedAt: "2025-04-22T20:15:00Z",
  },
];

export async function GET() {
  return NextResponse.json(games);
}

export async function POST(request: Request) {
  // Recibimos player, score y playedAt en el body
  const body = (await request.json()) as Omit<Game, "id">;

  // Creamos la nueva partida y la agregamos al array
  const created: Game = {
    id: Date.now().toString(),
    player: body.player,
    score: body.score,
    playedAt: body.playedAt,
  };
  games.push(created);

  return NextResponse.json({ success: true, game: created });
}
