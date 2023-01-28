function getComputerChoice() {
    let elecciones =["piedra", "papel", "tijera"];
    return elecciones[Math.floor(Math.random()*3)]
}

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

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return `Es un empate, ambos eligieron ${computerSelection}.`;
    } else if (playerSelection == "piedra") {
        if (computerSelection == "papel") {
            return "¡Perdiste! Piedra pierde contra papel."        
        } else {
            return "¡Ganaste! Piedra le gana a tijera."
        }
    } else if (playerSelection == "papel") {
        if (computerSelection == "tijera") {
            return "¡Perdiste! Papel pierde contra tijera."        
        } else {
            return "¡Ganaste! Papel le gana a piedra."
        }
    } else {
        if (computerSelection == "piedra") {
            return "¡Perdiste! Tijera pierde contra piedra."        
        } else {
            return "¡Ganaste! Tijera le gana a papel."
        }
    }
}

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

playMatch()