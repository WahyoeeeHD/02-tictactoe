export function GameOver({ winner, onClick }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner ? (
        <p>{winner} has won the game!</p>
      ) : (
        <p>You guys fucking sucks</p>
      )}
      <p>
        <button onClick={onClick}>Rematch</button>
      </p>
    </div>
  );
}
