import styles from "../page.module.css";

export default function Botoes(props) {
    return (
        <div>
            <button onClick={props.onClick} className={props.valor == 0 ? styles.botao0 : styles.botao}>
                {props.valor}
            </button>
        </div>
    )
}