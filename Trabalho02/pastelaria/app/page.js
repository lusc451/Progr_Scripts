'use client';
import Header from './components/Header';
import MenuList from './components/MenuList';

export default function HomePage() {
    return (
        <main className="min-h-screen bg-[#fefdf3] flex flex-col items-center p-4">
            <Header />
            <MenuList />
        </main>
    );
}
