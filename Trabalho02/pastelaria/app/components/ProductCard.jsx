import PropTypes from 'prop-types';

export default function ProductCard({ nome, preco, imagem }) {
    return (
        <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
            <h3 className="text-2xl text-gray-800 mb-2">{nome}</h3>
            <img
                src={imagem}
                alt={nome}
                className="mx-auto mb-3 w-[60px] h-[60px] object-contain"
            />
            <p className="text-gray-700 text-lg">R$: {preco.toFixed(2)}</p>
        </div>
    );
}

ProductCard.propTypes = {
    nome: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
    imagem: PropTypes.string.isRequired,
};
