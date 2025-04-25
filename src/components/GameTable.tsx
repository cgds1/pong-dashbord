import type { Game } from "@/app/api/games/route";

interface Props { games: Game[]; }

export default function GameTable({ games }: Props) {
  const sorted = [...games].sort((a, b) => b.score - a.score);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-800 text-white rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Fecha</th>
            <th className="px-4 py-2 text-left">Jugador</th>
            <th className="px-4 py-2 text-left">Puntos</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((g) => (
            <tr key={g.id} className="border-t border-gray-700">
              <td className="px-4 py-2">
                {new Date(g.playedAt).toLocaleString()}
              </td>
              <td className="px-4 py-2">{g.player}</td>
              <td className="px-4 py-2">{g.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
