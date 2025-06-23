import ProductCard from './ProductCard';

const produtos = [
    { id: 2, nome: 'Pizza', preco: 10.0, imagem: '/pastel.png' },
    { id: 1, nome: 'Carne', preco: 10.0, imagem: '/pastel.png' },
    { id: 3, nome: 'Carne', preco: 10.0, imagem: '/pastel.png' },
    { id: 4, nome: 'Pizza', preco: 10.0, imagem: '/pastel.png' },
    { id: 5, nome: 'Carne', preco: 10.0, imagem: '/pastel.png' },
    { id: 6, nome: 'Pizza', preco: 10.0, imagem: '/pastel.png' },
    { id: 7, nome: 'Carne', preco: 10.0, imagem: '/pastel.png' },
    { id: 8, nome: 'Pizza', preco: 10.0, imagem: '/pastel.png' },
];

export default function MenuList() {
    return (
        <section className="bg-[#fcf5dc] p-6 rounded-xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-5xl shadow">
            {produtos.map((produto) => (
                <ProductCard key={produto.id} {...produto} />
            ))}
        </section>
    );
}
