'use client';

import React from 'react';
import { Character } from '@/types';

interface Props {
    character: Character;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
    const healthPercentage = (character.health / character.maxHealth) * 100;

    return (
        <div className="p-4 bg-gray-800 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold mb-2">{character.name}</h2>
            <div className="w-full bg-red-900 h-4 rounded">
                <div
                    className="bg-green-500 h-4 rounded"
                    style={{ width: `${healthPercentage}%` }}
                ></div>
            </div>
            <p className="mt-2">HP: {character.health} / {character.maxHealth}</p>
        </div>
    );
};

export default CharacterCard;
