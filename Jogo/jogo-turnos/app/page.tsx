'use client';

import CharacterCard from '@/components/Character';
import { useGameManager } from '@/hooks/useGameManager';

export default function HomePage() {
  const { hero, villain, log, heroAttack } = useGameManager();

  return (
      <main className="min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Herói vs Vilão</h1>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <CharacterCard character={hero} />
          <CharacterCard character={villain} />
        </div>

        <div className="flex justify-center mb-6">
          <button
              onClick={heroAttack}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Atacar
          </button>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Histórico de Ações</h2>
          <ul className="list-disc pl-5 space-y-1">
            {log.map((entry, idx) => (
                <li key={idx}>{entry}</li>
            ))}
          </ul>
        </div>
      </main>
  );
}
