import { NextResponse } from "next/server";

// 1. Nueva interfaz Game
export interface Game {
  id: string;
  player: string;
  score: number;
  playedAt: string; // ISO date
}

// 2. MOCK DATA con un solo jugador
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

// 3. GET → lista de partidas
export async function GET() {
  return NextResponse.json(games);
}

// 4. POST → recibe { player, score, playedAt }
export async function POST(request: Request) {
  const body = (await request.json()) as Omit<Game, "id">;
  const created: Game = {
    id: Date.now().toString(),
    ...body,
  };
  return NextResponse.json({ success: true, game: created });
}
