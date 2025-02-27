import { checkGameState } from "./utils/board";
import { Board } from "./components/Board";
import { Modal } from "./components/Modal";
import { TURNS } from "./lib/constans";
import { useState } from "react";
import "./App.css";

export const App = () => {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [winner, setWinner] = useState<string | false | null>(null);
  const [currentTurn, setCurrentTurn] = useState(TURNS.X);

  const updateBoard = (index: number) => {
    if (board[index] || winner !== null) return;

    const newBoard = [...board];
    newBoard[index] = currentTurn;
    setBoard(newBoard);

    const newTurn = currentTurn === TURNS.X ? TURNS.O : TURNS.X;
    setCurrentTurn(newTurn);

    const gameState = checkGameState(newBoard);
    if (gameState.hasEnded) {
      setWinner(gameState.winner as string | false | null);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentTurn(TURNS.X);
    setWinner(null);
  };

  return (
    <main className="game-container">
      <Board
        board={board}
        updateBoard={updateBoard}
      />

      <div className="game-info">
        <span className="turn">Turno de: {currentTurn}</span>
      </div>

      {winner !== null && (
        <Modal
          winner={winner}
          resetGame={resetGame}
        />
      )}
    </main>
  );
};