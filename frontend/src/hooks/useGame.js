import { useState, useEffect } from "react";
import checkWinner from "../utils/checkWinner";
import { getHistory, saveGame } from "../services/api";

export function useGame() {

  const createBoard = () =>
    Array(6)
      .fill()
      .map(() => Array(7).fill(null));

  const [board, setBoard] = useState(createBoard());
  const [player, setPlayer] = useState("red");
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  async function fetchHistory() {
    try {
      const data = await getHistory();

      setHistory(data);
    } catch (error) {
      console.log("Erro ao buscar histórico:", error);
    }
  }

  function getPlayerName(color) {
    return color === "red"
      ? "Jogador 1"
      : "Jogador 2";
  }

  async function handleClick(col) {

    if (winner || isDraw) return;

    const newBoard = board.map(row => [...row]);

    let played = false;

    for (let row = 5; row >= 0; row--) {

      if (!newBoard[row][col]) {

        newBoard[row][col] = player;

        played = true;

        break;
      }
    }

    if (!played) return;

    setBoard(newBoard);

    const win = checkWinner(newBoard);

    if (win) {

      setWinner(win);

      await saveGame(
        `Vencedor: ${getPlayerName(win)}`
      );

      fetchHistory();

      return;
    }

    const draw = newBoard.every(row =>
      row.every(cell => cell !== null)
    );

    if (draw) {

      setIsDraw(true);

      await saveGame("Empate");

      fetchHistory();

      return;
    }

    setPlayer(
      player === "red"
        ? "yellow"
        : "red"
    );
  }

  function resetGame() {

    setBoard(createBoard());

    setPlayer("red");

    setWinner(null);

    setIsDraw(false);
  }

  return {
    board,
    player,
    winner,
    isDraw,
    history,
    handleClick,
    resetGame,
    getPlayerName
  };
}