'use client';
import Character from "@/app/components/Character";
import useGameManager from "@/app/hooks/useGameManager";
import "@/app/styles/game.css";

export default function Home() {
    const { hero, villain, handleHeroAction, isHeroTurn, log, resetGame } = useGameManager();

    return (
        <div className="game">
            <h1>Game: Heróis vs Vilões</h1>
            <div className="characters">
                <Character data={hero} isHero onAction={handleHeroAction} isHeroTurn={isHeroTurn} />
                <Character data={villain} isHero={false} />
            </div>
            <div className="log">
                <h2>Histórico</h2>
                <ul>
                    {log.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="reset-button">
                <button onClick={resetGame}>Reiniciar Jogo</button>
            </div>
        </div>
    );
}
