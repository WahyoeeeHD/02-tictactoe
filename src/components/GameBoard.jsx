export function GameBoard({ onSelectSquare, board }) {
  // function selectSquareHandler(rowIndex, colIndex) {
  //   // Kalau kalian ingin bekerja dengan array atau object, cara baik atau best practicenya itu membuat array atau object baru yang berisikan array atau object yang lama, dan mengotak atik object atau array yang baru dibuat, bukan array/object lama!

  //   // Cara yang salah karena mengubah object/array secara langsung
  //   // setGameBoard((prevGameBoard) => {
  //   //   prevGameBoard[rowIndex][colIndex];
  //   //   return prevGameBoard;
  //   // });

  //   // Cara yang benar
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedGameBoard;
  //   });

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
