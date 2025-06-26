export type CharacterType = 'hero' | 'villain';

export interface Character {
    name: string;
    health: number;
    maxHealth: number;
    type: CharacterType;
}

export type ActionType = 'attack' | 'defend' | 'heal' | 'run';
