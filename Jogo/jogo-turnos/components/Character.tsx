'use client';

import React from 'react';
import { Character } from '@/types';

interface Props {
    character: Character;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
    const healthPercentage = (character.health / character.maxHealth) * 100;

    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center w-full max-w-xs">
            <h2 className="text-2xl font-bold mb-3">{character.name}</h2>
            <div className="w-full bg-gray-700 h-5 rounded overflow-hidden">
                <div
                    className="bg-green-500 h-5 transition-all duration-300"
                    style={{ width: `${healthPercentage}%` }}
                />
            </div>
            <p className="mt-2 text-sm">HP: {character.health} / {character.maxHealth}</p>
        </div>
    );
};

export default CharacterCard;
