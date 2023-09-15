// Result.js
import React from 'react';

function Result({ playerName, playerChoice, computerChoice, result }) {
  return (
    <div>
      <h2>Resultado:</h2>
      <p> {playerName}, eligió: {playerChoice}</p>
      <p>La PC eligió: {computerChoice}</p>
      <p>Ganador de esta ronda: {result}</p>
      
    </div>
  );
}

export default Result;