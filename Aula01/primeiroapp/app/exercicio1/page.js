export default function ExercicioPage(){
    const numeros = [];
    for (let i = 1; i <=10; i++){
        numeros.push(<p key={i}>{i}</p>)
    }
    
    return(
        <div>
            <h1>Desafio - Lista de Números</h1>
            <p>
                {numeros}
            </p>
        </div>
    )
}