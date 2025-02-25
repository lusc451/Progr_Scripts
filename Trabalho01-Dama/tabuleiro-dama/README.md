# 🏁 Projeto Tabuleiro em Next.js

Este projeto foi desenvolvido utilizando **Next.js** e estilização modular via **CSS Modules**. O objetivo é criar um tabuleiro interativo, estilizado com efeitos visuais para melhorar a experiência do usuário.

## 🚀 Como rodar o projeto

### 🔧 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)

### 📦 Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

### ▶️ Rodando o projeto

Para iniciar o servidor de desenvolvimento, use:

```bash
npm run dev
# ou
yarn dev
```

O projeto estará disponível em **http://localhost:3000**.

---

## 🎨 Estilização

A estilização do projeto foi feita utilizando **CSS Modules**, garantindo isolamento dos estilos para evitar conflitos globais.

### 📌 Principais classes CSS:

#### 📌 Tabuleiro (`board`)

```css
.board {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    width: 400px;
    height: 400px;
    margin: auto;
    border: 5px solid #333;
}
```

- **`display: grid`** → Define um layout de grade para organizar os elementos do tabuleiro.
- **`grid-template-columns: repeat(8, 1fr)`** → Cria 8 colunas de tamanho igual.
- **`border: 5px solid #333`** → Adiciona uma borda ao redor do tabuleiro.

#### 📌 Casas do tabuleiro (`square`)

```css
.square {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

- **`display: flex`** → Centraliza os elementos dentro das casas do tabuleiro.
- **`width: 50px; height: 50px;`** → Define o tamanho fixo de cada quadrado do tabuleiro.

#### 🎨 Cores do tabuleiro

```css
.black {
    background-color: black;
}

.white {
    background-color: white;
}
```

- Alterna entre **preto** e **branco** para formar um padrão de tabuleiro.

#### 🔵 Peças do jogo (`piece`)

```css
.piece {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
```

- **`border-radius: 50%`** → Transforma os elementos em círculos para representar peças.

##### 🎨 Cores das peças

```css
.whitePiece {
    background-color: #0ab6ea;
}

.blackPiece {
    background-color: #11ce33;
}
```

- As cores foram ajustadas para **azul** e **verde** para melhorar a visualização.

#### 🖱️ Efeitos ao passar o mouse

```css
.square:hover {
    opacity: 0.8;
}

.piece:hover {
    transform: scale(1.1);
    transition: 0.2s;
}
```

- **`opacity: 0.8`** → Ao passar o mouse sobre as casas, sua opacidade reduz levemente.
- **`transform: scale(1.1)`** → Ao passar o mouse sobre as peças, elas aumentam 10% de tamanho.

---

## 🛠 Tecnologias utilizadas

- **Next.js** – Framework React para renderização SSR e SSG.
- **CSS Modules** – Para estilização modular e evitar conflitos globais.
- **Flexbox & Grid** – Para alinhamento e organização dos elementos.

---

## 📜 Licença

Este projeto é open-source e está sob a licença MIT.

📌 **Autor:** _Lucas Cleiton dos Santos Antunes_  
📌 **Contato:** _cleiton.lucas416@gmail.com_
