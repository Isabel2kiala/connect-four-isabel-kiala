### Desafio: Construção do Jogo "Connect Four" com React e Node.js

Neste desafio, a tua missão é desenvolver uma versão digital do clássico jogo **Connect Four** (ou "Quatro em Linha") utilizando **React** no frontend e **Node.js** no backend. O objetivo é criar uma experiência interativa e visualmente apelativa, integrando funcionalidades avançadas para uma experiência do utilizador completa e uma base de código escalável. Podes usar a tecnologia que preferires em React (como **Remix**, **Next.js**, **Vite**, etc.) e integrar um backend em Node.js para funcionalidades como gestão de partidas e controlo de jogadas.

### Objetivo do Jogo

O jogo baseia-se num tabuleiro com 7 colunas e 6 linhas, onde dois jogadores jogam alternadamente fichas de cores diferentes. O objetivo é ser o primeiro a alinhar quatro fichas consecutivas (horizontalmente, verticalmente ou diagonalmente).

---

### Níveis de Requisitos

#### Nível Básico

- **Implementação do Tabuleiro**:

  - Cria o tabuleiro 7x6 em React, com cada célula a armazenar a cor da ficha.
  - Adiciona um botão para reiniciar o jogo.

- **Lógica do Jogo**:
  - Implementa a lógica de alternância de turno entre os dois jogadores.
  - Verifica e declara vitória quando um jogador alinha quatro fichas consecutivas.
  - Inclui uma verificação de empate (quando todas as células estão preenchidas sem vencedor).

#### Nível Intermédio

- **Interface e Feedback**:

  - Adiciona animações visuais (como a queda suave da ficha na coluna).
  - Exibe o turno atual e uma mensagem dinâmica de vitória ou empate.

- **Histórico e Reinício**:

  - Permite ao jogador reiniciar a partida atual sem recarregar a página.
  - Cria um log com o histórico das partidas jogadas durante a sessão.

- **Backend com Node.js**:
  - Implementa um servidor básico em Node.js para armazenar o histórico de jogos ou salvar o progresso de uma partida (pode ser em memória ou numa base de dados simples, como SQLite ou MongoDB).
  - Configura endpoints para guardar e recuperar o histórico de jogos.

#### Nível Avançado

- **Experiência Multi-utilizador**:

  - Implementa um sistema simples de autenticação JWT (JSON Web Tokens) para identificar jogadores.
  - Desenvolve salas de jogo onde dois jogadores podem competir em tempo real.

- **Inteligência Artificial (opcional)**:

  - Adiciona um modo de jogo contra a máquina com diferentes níveis de dificuldade (fácil, médio, difícil).
  - Usa um algoritmo básico, como minimax, para a IA no nível difícil, tornando o jogo mais desafiador.

- **Implementação de Chat**:

  - Adiciona uma funcionalidade de chat em cada sala de jogo, permitindo aos jogadores conversar em tempo real durante a partida.

- **Design Responsivo e Acessibilidade**:
  - Garante que o jogo funciona bem em dispositivos móveis e desktops.
  - Aplica boas práticas de acessibilidade (por exemplo, suporte a navegação por teclado e compatibilidade com leitores de ecrã).

### Entrega e Avaliação

Este projeto será avaliado com base nos seguintes critérios:

- **Funcionalidade e Lógica do Jogo**: O jogo deve funcionar corretamente, incluindo condições de vitória, empate e controlo de turnos.
- **Interface de Utilizador**: Uma interface intuitiva, animada e responsiva.
- **Implementação Backend**: Funcionamento das funcionalidades do backend, especialmente para o modo multi-utilizador e histórico de jogos.
- **Funcionalidades Avançadas**: A implementação da IA, chat e experiência multi-utilizador será valorizada na avaliação de competências avançadas.

Este desafio é uma excelente oportunidade para desenvolveres as tuas competências tanto no frontend como no backend, ao mesmo tempo que exploras integrações em tempo real e crias uma experiência apelativa para os utilizadores. Boa sorte!


# 🎮 Connect Four - Minha implementação

Um jogo Connect Four desenvolvido com React (frontend) e Node.js (backend) como parte de um teste técnico.

---

## 🚀 Tecnologias usadas

- React.js
- Node.js
- Express
- JavaScript (ES6)
- HTML & CSS

---

## 🎯 Funcionalidades

### Nível Básico
- Tabuleiro 7x6 dinâmico
- Alternância de turnos entre jogadores
- Verificação de vitória (4 em linha)
- Verificação de empate
- Botão de reinício

### Nível Intermédio
- Animações na jogada
- Feedback de turno atual
- Mensagens de vitória/empate
- Histórico de partidas na sessão

### Backend
- API em Node.js com Express
- Endpoint para histórico de jogos
- Comunicação frontend ↔ backend

---

## ⚙️ Como executar o projeto

### Backend

```bash
cd backend
npm install
node server/server.js
```

### frontend

```bash
cd frontend
npm install
npm start
```

