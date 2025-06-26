'use client';

import { useState } from 'react';
import { Character } from '@/types';

export const useGameManager = () => {
    const [hero, setHero] = useState<Character>({
        name: 'Herói',
        health: 100,
        maxHealth: 100,
        type: 'hero',
    });

    const [villain, setVillain] = useState<Character>({
        name: 'Vilão',
        health: 100,
        maxHealth: 100,
        type: 'villain',
    });

    const [log, setLog] = useState<string[]>([]);

    const heroAttack = () => {
        const newHealth = Math.max(0, villain.health - 10);
        setVillain(prev => ({ ...prev, health: newHealth }));
        setLog(prev => [`Herói atacou! Vilão perdeu 10 de HP.`, ...prev]);

        // Vilão revida
        setTimeout(() => {
            const retaliation = Math.max(0, hero.health - 8);
            setHero(prev => ({ ...prev, health: retaliation }));
            setLog(prev => [`Vilão atacou de volta! Herói perdeu 8 de HP.`, ...prev]);
        }, 500);
    };

    const heroDefend = () => {
        setLog(prev => ["Herói se defendeu!", ...prev]);
    };

    const heroHeal = () => {
        setHero(prev => {
            const healed = Math.min(prev.maxHealth, prev.health + 20);
            return { ...prev, health: healed };
        });
        setLog(prev => ["Herói usou uma poção e se curou!", ...prev]);
    };

    const heroRun = () => {
        setLog(prev => ["Herói fugiu da batalha!", ...prev]);
    };


    return {
        hero,
        villain,
        log,
        heroAttack,
        heroDefend,
        heroHeal,
        heroRun,
    };
};
