'use client';

import React from 'react';

interface Props {
    onAttack: () => void;
    onDefend: () => void;
    onHeal: () => void;
    onRun: () => void;
}

const HeroActions: React.FC<Props> = ({ onAttack, onDefend, onHeal, onRun }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-bold" onClick={onAttack}>
                Atacar
            </button>
            <button className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded font-bold" onClick={onDefend}>
                Defender
            </button>
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-bold" onClick={onHeal}>
                Curar
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded font-bold" onClick={onRun}>
                Fugir
            </button>
        </div>
    );
};

export default HeroActions;
