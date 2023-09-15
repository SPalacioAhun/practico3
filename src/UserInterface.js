// UserInterface.js
import React from 'react';
import papelImage from './assets/imagenes/papel.png';
import piedraImage from './assets/imagenes/piedra.png';
import tijeraImage from './assets/imagenes/tijera.png';

function UserInterface({ onPlayerChoice }) {
  return (
    <div>
      <h2>Elija su jugada:</h2>
      <button onClick={() => onPlayerChoice('piedra')} className='botonPiedra'><img src= {piedraImage} alt = "Piedra" ></img></button>
      <button onClick={() => onPlayerChoice('papel')} className='botonPapel'><img src= {papelImage} alt = "Papel" ></img></button>
      <button onClick={() => onPlayerChoice('tijera')} className='botonTijera'><img src= {tijeraImage} alt = "Tijera" ></img></button>
    </div>
  );
}

export default UserInterface;
