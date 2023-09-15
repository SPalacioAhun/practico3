// WelcomePopup.js
import React from 'react';

function WelcomePopup({ showPopup, onStartGame, onClose }) {
  const handleStartClick = () => {
    onStartGame();
    onClose();
  };

  if (!showPopup) {
    return null; // No mostrar el popup si showPopup es falso
  }

  return (
    <div className="welcomePopup">
      <div className="welcomePopup-content">
        <h2>¡Bienvenido al juego!</h2>
        <p>
          Este es el clásico juego de Piedra, Papel y Tijeras.
        </p>
        <p>
          En este juego, juegas con PIEDRA, PAPEL o TIJERAS.
        </p>
        <p>
          - La Tijera corta el Papel.
        </p>
        <p>
          - El Papel envuelve la Piedra.
        </p>
        <p>
          - La Piedra aplasta la Tijera.
        </p>
        <p>El mejor de 5 rondas es el ganador. </p>
        <p>¿Estamos Listos? </p>
        <button onClick={handleStartClick}>¡Listo para el Juego!</button>
      </div>
    </div>
  );
}

export default WelcomePopup;
