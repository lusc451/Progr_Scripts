import Titulo from "@/app/aula03/components/Titulo";

export default function Aula03(){
    return(
        <div>
            <h1>Criando componentes!</h1>
            <Titulo
                principal={"Palmeiras precisa de atacante!"}
                secundario={"Flaco não da mais... #!@#"}
            />
            <Titulo
                principal={"A"}
                secundario={"B"}
            />
        </div>
    )
}