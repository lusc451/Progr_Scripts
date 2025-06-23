'use client';
import './page.css';
import ProductCard from '../components/product-card.js';

const produtos = [
  { id: 1, nome: 'Carne', preco: 10.0, imagem: '/pastel.png' },
  { id: 2, nome: 'Pizza', preco: 10.0, imagem: '/pastel1.png' },
  { id: 3, nome: 'Carne', preco: 10.0, imagem: '/pastel.png' },
  { id: 4, nome: 'Pizza', preco: 10.0, imagem: '/pastel1.png' },
  { id: 5, nome: 'Carne', preco: 10.0, imagem: '/pastel.png' },
  { id: 6, nome: 'Pizza', preco: 10.0, imagem: '/pastel1.png' },
  { id: 7, nome: 'Carne', preco: 10.0, imagem: '/pastel.png' },
  { id: 8, nome: 'Pizza', preco: 10.0, imagem: '/pastel1.png' },
];

export default function Page() {
  return (
      <main className="main-container">
        <div className="content-wrapper">
          <header className="header">
            <h1 className="title">
              Pastelaria do seu Zé <span className="cake-icon">🍴</span>
            </h1>
          </header>

          <section className="products-container">
            <div className="products-grid">
              {produtos.map((produto) => (
                  <ProductCard key={produto.id} {...produto} />
              ))}
            </div>
          </section>
        </div>
      </main>
  );
}
