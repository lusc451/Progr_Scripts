import styles from '../css/style.module.css';

export default function Tabuleiro() {
    const renderSquares = () => {
        let squares = [];
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const isBlack = (row + col) % 2 !== 0;
                const isPiece = (row < 3 && isBlack) || (row > 4 && isBlack); // Apenas peças em casas pretas
                const isWhitePiece = row < 3; // Peças azuis na parte de cima

                squares.push(
                    <div
                        key={`${row}-${col}`}
                        className={`${styles.square} ${isBlack ? styles.black : styles.white}`}
                    >
                        {isPiece && (
                            <div className={`${styles.piece} ${isWhitePiece ? styles.whitePiece : styles.blackPiece}`} />
                        )}
                    </div>
                );
            }
        }
        return squares;
    };

    return <div className={styles.board}>{renderSquares()}</div>;
}
