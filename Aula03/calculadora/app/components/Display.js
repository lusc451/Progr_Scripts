import styles from "../page.module.css";

export default function Display({ valorDisplay, valorDisplayPrev }) {
    return (
        <div className={styles.display}>
            <div className={styles.valor}>
                <h1 className={styles.valorPrev}>
                    {valorDisplayPrev == 0 ? " " : valorDisplayPrev}
                </h1>
                <h1 className={styles.valorAtual}>{valorDisplay}</h1>
            </div>
        </div>
    );
}