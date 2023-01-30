// Acá tenemos las funciones para el juego de priedra papel o tijera

/* Esta función era para la consola, ya no la usamos.

function getPlayerChoice(){
    let elecciones =["piedra", "papel", "tijera"];
    let eleccion = prompt("¿Piedra, papel o tijera?")
    eleccion = (eleccion.trim()).toLowerCase()
    if (elecciones.includes(eleccion)){
        return eleccion
    } else {
        return getPlayerChoice()
    }
}
*/

/* esta también quedó fuera, no la vamos a usar

function playMatch(){
    let playerScore = 0;
    let computerScore = 0;
    let topScore = 0;

    while(topScore < 3){

        let resultado = playRound(getPlayerChoice(), getComputerChoice());

        if (resultado.includes("Ganaste")){
            playerScore++
        } else if (resultado.includes("Perdiste")){
            computerScore++
        }
        if (playerScore > computerScore){
            topScore = playerScore
        } else {
            topScore = computerScore
        }

        console.log(`${resultado}
        Tu: ${playerScore}. El computador: ${computerScore}`) 
    } 

    if(playerScore > computerScore){
        console.log("Felicidades!! Ganaste la partida!!")
    } else {console.log("Mala suerte, perdiste la partida.")}
}
*/

function getComputerChoice() {
    let elecciones =["piedra", "papel", "tijera"];
    return elecciones[Math.floor(Math.random()*3)];
}

let playerScore = 0;
let computerScore = 0;
let topScore = 0;
const ptjeJugador = document.querySelector('#ptjeJugador');
const ptjePC = document.querySelector('#ptjePC');
const frase = document.querySelector('#frase');

function playRound(playerSelection, computerSelection){

    if (playerSelection == computerSelection){
        frase.textContent = '¡Empataron!';
    } else if (playerSelection == "piedra") {
        if (computerSelection == "papel") {
            frase.textContent = '¡Perdiste!'
            computerScore++;
            ptjePC.textContent = computerScore;                    
        } else {
            frase.textContent = '¡¡Ganaste!!';
            playerScore++;
            ptjeJugador.textContent = playerScore; 
        }
    } else if (playerSelection == "papel") {
        if (computerSelection == "tijera") {
            frase.textContent = '¡Perdiste!';
            computerScore++;
            ptjePC.textContent = computerScore;     
        } else {
            frase.textContent = '¡¡Ganaste!!';
            playerScore++;
            ptjeJugador.textContent = playerScore; 
        }
    } else {
        if (computerSelection == "piedra") {
            frase.textContent = '¡Perdiste!';
            computerScore++;
            ptjePC.textContent = computerScore;         
        } else {
            frase.textContent = '¡¡Ganaste!!';
            playerScore++;
            ptjeJugador.textContent = playerScore; 
        }
    }

    if (playerScore == 5 || computerScore == 5){
        partidaTerminada()
    }
}

function partidaTerminada() {
    if (playerScore > computerScore){
    frase.textContent = `Ganaste ${playerScore} a ${computerScore}. Haz click en cualquier opción para volver a jugar.`;
    } else {frase.textContent = `Ganaste ${computerScore} a ${playerScore}. Haz click en cualquier opción para volver a jugar.`;
    }
    ptjeJugador.textContent = 0;
    ptjePC.textContent = 0; 
    playerScore = 0;
    computerScore = 0;
    topScore = 0; 
    const suEleccion =document.querySelector('#suEleccion');
    suEleccion.src=("images/gris.jpeg");
    const tuEleccion =document.querySelector('#tuEleccion');
    tuEleccion.src=("images/gris.jpeg");
}

// Aca vamos a empezar con la manipulación del DOM

// Para cambiar la imagen del PC
    
function ponerEleccionComputador(){
    const suEleccion =document.querySelector('#suEleccion');
    let computerChoice = getComputerChoice();
    suEleccion.src=("images/"+computerChoice+".png");
    return computerChoice;
}

// Para cambiar la del jugador e iniciar el juego

function ponerPiedraJugador(){
    const tuEleccion =document.querySelector('#tuEleccion');
    tuEleccion.src="images/piedra.png";
    playRound("piedra", ponerEleccionComputador());
}

function ponerPapelJugador(){
    const tuEleccion =document.querySelector('#tuEleccion');
    tuEleccion.src="images/papel.png";
    playRound("papel", ponerEleccionComputador())
}

function ponerTijeraJugador(){
    const tuEleccion =document.querySelector('#tuEleccion');
    tuEleccion.src="images/tijera.png";
    playRound("tijera", ponerEleccionComputador())
}

const piedra = document.querySelector('#piedra');
piedra.addEventListener('click', ponerPiedraJugador);

const papel = document.querySelector('#papel');
papel.addEventListener('click', ponerPapelJugador);

const tijera = document.querySelector('#tijera');
tijera.addEventListener('click', ponerTijeraJugador);

