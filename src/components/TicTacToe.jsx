import "../App.css";
import { useTicTacToe } from "./useTicTacToe";

export const TicTacToe = () => {
  const { board, handleClick, reset, getStatusMessage } = useTicTacToe();
  return (
    <>
      <div className="header">
        <h3>{getStatusMessage()}</h3>
        <div>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
      <div className="board">
        {board?.map((cell, index) => {
          return (
            <button className="cell" onClick={() => handleClick(index)}>
              {cell}
            </button>
          );
        })}
      </div>
    </>
  );
};
