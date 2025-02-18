import Soma from './components/soma.js';
import Subtracao from './components/Subtracao.js';
import Multiplicacao from './components/Multiplicacao.js';
import Divisao from './components/Divisao.js';

export default function Exercicio2() {
    return (
        <div>
            ---- Soma ----
            <Soma valor1={5} valor2={7} />
            <br />

            ---- Subtração ----
            <Subtracao valor1={10} valor2={5} />
            <br />

            ---- Multiplicação ----
            <Multiplicacao valor1={8} valor2={6} />
            <br />

            ---- Divisão ----
            <Divisao valor1={20} valor2={2} />
        </div>
    )
}