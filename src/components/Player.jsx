import { useState as PakeState } from "react";

export function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = PakeState(initialName);
  const [isEditing, setIsEditing] = PakeState(false);

  function onEditHandler() {
    setIsEditing((newValue) => !newValue);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function onChangeHandler(e) {
    setPlayerName(e.target.value);
  }

  console.log(isEditing);

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            placeholder="Name"
            required
            value={playerName}
            onChange={onChangeHandler}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onEditHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
