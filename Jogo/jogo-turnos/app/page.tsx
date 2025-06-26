'use client';

import CharacterCard from '@/components/Character';
import HeroActions from '@/components/HeroActions';
import { useGameManager } from '@/hooks/useGameManager';

export default function HomePage() {
    const {
        hero,
        villain,
        log,
        heroAttack,
        heroDefend,
        heroHeal,
        heroRun
    } = useGameManager();

    return (
        <main className="min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-4xl font-bold text-center mb-10">Herói vs Vilão</h1>

            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                <CharacterCard character={hero} />
                <CharacterCard character={villain} />
            </div>

            <HeroActions
                onAttack={heroAttack}
                onDefend={heroDefend}
                onHeal={heroHeal}
                onRun={heroRun}
            />

            <div className="bg-gray-800 mt-10 p-4 rounded-lg max-w-xl mx-auto">
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
