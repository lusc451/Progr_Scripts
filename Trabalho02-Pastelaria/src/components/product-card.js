import './product-card.css';

export default function ProductCard({ nome, preco, imagem }) {
    return (
        <div className="product-card">
            <h3 className="product-name">{nome}</h3>
            <img src={imagem} alt={nome} className="product-image" />
            <p className="product-price">R$: {preco.toFixed(2)}</p>
        </div>
    );
}
