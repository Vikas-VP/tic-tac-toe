import { useState } from "react";
export const useTicTacToe = () => {
  const initialBoard = new Array(9).fill(null);

  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const WINNING_PATTERS = [[0, 1, 2]];

  const calculateWinner = () => {
    for (let index = 0; index < WINNING_PATTERS.length; index++) {
      const [a, b, c] = WINNING_PATTERS[index];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const winner = calculateWinner();
    console.log(winner);
    if (winner) return;
    const newBoard = [...board];
    if (board[index] !== null) return;
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner();
    if (winner) return `Winner is ${winner}`;
    if (!board.includes(null)) return "Draw Match";
    return `Next player is ${isXNext ? "X" : "O"}`;
  };

  const reset = () => {
    setBoard(initialBoard);
    setIsXNext(true);
  };

  return { board, handleClick, reset, getStatusMessage };
};
