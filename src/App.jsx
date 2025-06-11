import { useState as State } from "react";

import { Player as Pemain } from "./components/Player";
import { GameBoard as Mainannya } from "./components/GameBoard";
import { Log as Giliran } from "./components/Log";
import { WINNING_COMBINATIONS as Combinations } from "./utils/Combinations";
import { GameOver as Selesai } from "./components/GameOver";

const playersName = {
  X: "Player 1",
  O: "Player 2",
};

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(gameTurns) {
  let activePlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    activePlayer = "O";
  }

  return activePlayer;
}

function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of Combinations) {
    // ngecek apakah sudah ada kombinasi 3 simbol atau belom
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function deriveGameBoard(playerTurn) {
  let gameBoard = [...initialGameBoard.map((innerArray) => [...innerArray])];

  for (const turn of playerTurn) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function App() {
  const [players, setPlayers] = State(playersName);
  const [playerTurn, setPlayerTurn] = State([]);

  const activePlayer = derivedActivePlayer(playerTurn);
  const gameBoard = deriveGameBoard(playerTurn);
  const winner = deriveWinner(gameBoard, players);
  const draw = playerTurn.length === 9 && !winner;

  function playerNameHandler(symbol, newName) {
    setPlayers((prevName) => {
      return {
        ...prevName,
        [symbol]: newName,
      };
    });
  }

  function handleRestart() {
    setPlayerTurn([]);
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setPlayerTurn((prevTurn) => {
      let currentPlayer = derivedActivePlayer(prevTurn);
      if (prevTurn.length > 0 && prevTurn[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        {/* Players */}
        <ol id="players" className="highlight-player">
          <Pemain
            initialName={playersName.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={playerNameHandler}
          />
          <Pemain
            initialName={playersName.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={playerNameHandler}
          />
        </ol>
        {/* Game Board */}
        {(winner || draw) && (
          <Selesai winner={winner} onClick={handleRestart} />
        )}
        <Mainannya onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      {/* Log */}
      <Giliran turns={playerTurn} />
    </main>
  );
}

export default App;
