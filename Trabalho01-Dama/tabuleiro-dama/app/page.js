import Tabuleiro from './components/Tabuleiro';

export default function Home() {
    return (
        // Centralizando o tabuleiro e exibindo o título
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', height: '100vh' }}>
            <h1 style={{ color: 'white' }}>Tabuleiro de Dama</h1>
            <Tabuleiro />
        </div>
    );
}
