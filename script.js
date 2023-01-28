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

console.log(playRound(getPlayerChoice(), getComputerChoice()))

