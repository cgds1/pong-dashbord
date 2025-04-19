'use client';
import { useRouter } from 'next/navigation';

export default function PongPreview() {
  const router = useRouter();

  function handlePlay() {
    // TODO: redirigir a la ruta del juego (p.ej. /game)
    router.push('/game');
  }

  return (
    <div className="w-full max-w-sm bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center">
      {/* Aquí podrías incrustar un canvas o un GIF del juego */}
      <div className="w-64 h-40 bg-black rounded mb-4 flex items-center justify-center text-white">
        Pong Preview
      </div>
      <button
        onClick={handlePlay}
        className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded"
      >
        Play now
      </button>
    </div>
  );
}
