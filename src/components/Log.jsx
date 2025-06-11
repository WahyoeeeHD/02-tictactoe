export function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} has selected square number {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
