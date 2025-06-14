import { useState, useEffect } from "react";

export default function useGameManager() {
    const initialHero = { life: 100, name: "Jaspion" };
    const initialVillain = { life: 100, name: "Satan Goss" };

    const [hero, setHero] = useState(() => {
        const saved = localStorage.getItem("hero");
        return saved ? JSON.parse(saved) : initialHero;
    });
    const [villain, setVillain] = useState(() => {
        const saved = localStorage.getItem("villain");
        return saved ? JSON.parse(saved) : initialVillain;
    });
    const [isHeroTurn, setIsHeroTurn] = useState(true);
    const [log, setLog] = useState([]);

    useEffect(() => {
        localStorage.setItem("hero", JSON.stringify(hero));
        localStorage.setItem("villain", JSON.stringify(villain));
    }, [hero, villain]);

    const modifyLife = (target, amount) => {
        const setter = target === "hero" ? setHero : setVillain;
        setter((prev) => {
            const newLife = Math.max(0, prev.life + amount);
            if (newLife <= 0) alert(target === "hero" ? "Você perdeu!" : "Você venceu!");
            return { ...prev, life: newLife };
        });
    };

    const addToLog = (text) => {
        setLog((prev) => [text, ...prev.slice(0, 9)]);
    };

    const actions = {
        attack: () => {
            modifyLife("villain", -10);
            addToLog("Você atacou o inimigo!");
        },
        defense: () => {
            modifyLife("hero", 5);
            addToLog("Você se defendeu e ganhou 5 de vida.");
        },
        usePotion: () => {
            modifyLife("hero", 20);
            addToLog("Você usou uma poção e recuperou 20 de vida.");
        },
        flee: () => {
            addToLog("Você fugiu da batalha.");
            alert("Você fugiu!");
        },
    };

    const handleHeroAction = (action) => {
        if (!isHeroTurn) return;
        actions[action]?.();
        setIsHeroTurn(false);

        setTimeout(() => {
            modifyLife("hero", -15);
            addToLog("O vilão atacou você!");
            setIsHeroTurn(true);
        }, 1500);
    };

    const resetGame = () => {
        setHero(initialHero);
        setVillain(initialVillain);
        setIsHeroTurn(true);
        setLog(["Jogo reiniciado!"]);
        localStorage.removeItem("hero");
        localStorage.removeItem("villain");
    };

    return {
        hero,
        villain,
        handleHeroAction,
        isHeroTurn,
        log,
        resetGame
    };
}
