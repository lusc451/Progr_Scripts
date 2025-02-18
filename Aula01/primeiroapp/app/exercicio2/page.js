import soma from '@/app/exercicio2/components/soma';

export default function Page(){
    return(
        <div>
            <h1>Soma</h1>
            <soma valor1={10}>10</soma>
            <soma valor2={20}>20</soma>
            <soma resultado={soma.valor1 + soma.valor2}></soma>
        </div>
    )
}
