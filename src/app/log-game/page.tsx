import Link from "next/link";
import GameForm from "@/components/GameForm";

export default function LogGamePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br flex flex-col">
      <header className="flex justify-end p-4">
        <Link
          href="/"
          className="text-white hover:text-gray-200"
        >
          Home
        </Link>
      </header>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="bg-gray-900 bg-opacity-80 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h1 className="text-center text-4xl font-medium text-white mb-6">
            Registrar Puntuación
          </h1>
          <GameForm />
        </div>
      </div>
    </div>
  );
}
