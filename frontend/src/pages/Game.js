import Board from "../components/Board/Board";
import "../styles/global.css";
import { useGame } from "../hooks/useGame";

function Game() {
  const {
    board,
    player,
    winner,
    isDraw,
    history,
    handleClick,
    resetGame,
    getPlayerName
  } = useGame();

  return (
    <div className="game">

      {/* PLAYER BAR */}
      <div className="scoreboard">
        <div className={`player-card ${player === "red" ? "active" : ""}`}>
          <img src="/red-player.png" alt="jogador 1"/>
          <div className="info">
            <span>Jogador 1</span>
            <div className="color red"></div>
          </div>
        </div>

        <h1 className="title">CONNECT FOUR</h1>

        <div className={`player-card ${player === "yellow" ? "active" : ""}`}>
          <img src="/yellow-player.jpeg" alt="jogador 2" />
          <div className="info">
            <span>Jogador 2</span>
            <div className="color yellow"></div>
          </div>
        </div>
      </div>

      {/* STATUS */}
      {winner ? (
        <h2>🏆 Vencedor: {getPlayerName(winner)}</h2>
      ) : isDraw ? (
        <h2>🤝 Empate!</h2>
      ) : (
        <h3>Turno: {getPlayerName(player)}</h3>
      )}

      {/* BOARD */}
      <Board board={board} onClick={handleClick} />

      {/* RESET */}
      <button onClick={resetGame}>Reiniciar Jogo</button>

      {/* HISTORY */}
      <div className="history">
        <h3>Histórico</h3>

        {history.length === 0 ? (
          <p>Nenhuma partida finalizada.</p>
        ) : (
          <ul>
            {history.map((item, i) => (
              <li key={i}>
                {item.result}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Game;