// Scoreboard.js
import React from 'react';

function Scoreboard({ playerScore, computerScore }) {
  return (
    <div>
      <h2>Marcador:</h2>
      <p>Veces que ganaste: {playerScore}</p>
      <p>Veces que caíste: {computerScore}</p>
    </div>
  );
}

export default Scoreboard;
