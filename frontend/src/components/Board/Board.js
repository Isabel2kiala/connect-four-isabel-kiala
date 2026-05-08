import Cell from "../Cell/Cell";
import "./Board.css";

function Board({ board, onClick }) {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <Cell
              key={colIndex}
              value={cell}
              onClick={() => onClick(colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;