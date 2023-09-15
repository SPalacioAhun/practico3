# Juego de Piedra, Papel o Tijera en React

Este proyecto es una implementación del clásico juego de Piedra, Papel o Tijera utilizando React. El juego permite a los jugadores competir contra la computadora y seguir las reglas tradicionales del juego.

## Contenido

1. [Demostración](#demostración)
2. [Funcionalidades](#funcionalidades)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Instrucciones de Uso](#instrucciones-de-uso)
5. [Dependencias](#dependencias)
6. [Personalización](#personalización)
7. [Contribución](#contribución)
8. [Créditos](#créditos)


## Demostración

[Enlace a la demo del juego](#"http://spalacioahun.github.io/practico3")

## Funcionalidades

- Permite a los jugadores competir contra la computadora en partidas de Piedra, Papel o Tijera.
- Muestra el resultado de cada ronda, incluyendo quién ganó.
- Realiza un seguimiento de la puntuación de los jugadores y determina el ganador al llegar a un número predeterminado de rondas.
- Muestra un mensaje de bienvenida antes de que el jugador comience a jugar.

## Estructura del Proyecto

El proyecto se organiza en varios componentes de React:

- **App.js**: El componente principal que gestiona el flujo del juego.
- **UserInterface.js**: Interfaz del usuario que permite a los jugadores seleccionar su elección.
- **Scoreboard.js**: Muestra el marcador de puntuación de los jugadores.
- **Result.js**: Muestra el resultado de cada ronda.
- **WelcomePopup.js**: Muestra un mensaje de bienvenida antes de que el jugador comience a jugar.
- **Popup.js**: Muestra un mensaje emergente al final del juego para anunciar al ganador.

## Instrucciones de Uso

Para ejecutar el juego en su entorno local, siga estos pasos:

1. Asegúrese de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados en su sistema.
2. Clone este repositorio o descargue el código fuente.
3. Abra una terminal en el directorio raíz del proyecto.
4. Ejecute `npm install` para instalar las dependencias del proyecto.
5. Ejecute `npm start` para iniciar el servidor de desarrollo.
6. Abra su navegador web y vaya a `http://localhost:3000` para jugar al juego.

## Dependencias

El proyecto utiliza las siguientes dependencias:

- [React](https://reactjs.org/): Biblioteca de JavaScript para crear interfaces de usuario.
- [SweetAlert2](https://sweetalert2.github.io/): Librería para mostrar alertas visuales mejoradas.

Asegúrese de que estas dependencias estén instaladas antes de ejecutar el proyecto.

## Personalización

Puede personalizar el juego ajustando los estilos CSS, cambiando el número de rondas requeridas para ganar o modificando las reglas del juego en el archivo `App.js`.

## Contribución

Si desea contribuir a este proyecto, no dude en enviar una solicitud de extracción (pull request) o abrir un problema (issue) en el repositorio.

## Créditos

Este proyecto fue creado por Santiago Palacio y se basa en una implementación de Piedra, Papel o Tijera en React.

