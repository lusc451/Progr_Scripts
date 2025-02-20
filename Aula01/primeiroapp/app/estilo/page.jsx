import styles from "./css/style.module.css"
import Estilo from "./components/Estilo"

export default function EstiloPage(){
    return(
        <div>
            <h1 className={styles.h1}>Aula Estilo</h1>
            <button className={styles.button}>Clique Aqui</button>
            <Estilo texto="Direita" direita={true}/>
            <Estilo texto="Esquerda" direita={false}/>
        </div>
    )
}