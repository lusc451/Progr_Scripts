export default function Estilo(props){
    return(
        <div>
            <h3 style={{
                textAlign: props.direita ? "right" : "left",
            }}>{props.texto}</h3>
        </div>
    )
}