import { WINNER_COMBOS } from "../lib/constans";

export const checkWinner = (boardToCheck: Array<string | null>) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a];
        }
    }
    return null;
}

export const checkGameState = (boardToCheck: Array<string | null>) => {
    const newWinner = checkWinner(boardToCheck);

    if (newWinner !== null) {
        return { hasEnded: true, winner: newWinner };
    } else if (checkEndGame(boardToCheck)) {
        return { hasEnded: true, winner: false };
    }

    return { hasEnded: false, winner: null };
};

export const checkEndGame = (newBoard: Array<string | null>) => {
    return newBoard.every((square) => square !== null);
}