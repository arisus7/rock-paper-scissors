class GameModel {
    constructor() {
        this.playerChoice = null;
        this.computerChoice = null;
        this.result = null;
    }

    play(playerChoice) {
        this.playerChoice = playerChoice; //THIS es el lugar donde nuestro juego guarda la elección del jugador
    const choices = ["Piedra", "Papel", "Tijera"];
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        this.computerChoice = "Piedra";}

         else if (randomNumber === 2) {
        this.computerChoice = "Papel";}

         else {
        this.computerChoice = "Tijera";
        }

        if (this.playerChoice === this.computerChoice) {
        this.result = "Empate";
        }

        else if (
            (this.playerChoice === "Piedra" && this.computerChoice === "Tijera") ||
            (this.playerChoice === "Papel" && this.computerChoice === "Piedra") ||
            (this.playerChoice === "Tijera" && this.computerChoice === "Papel")
            ) {
            this.result = "Ganaste";
        }
        else {
            this.result = "Perdiste";
        }

    }


}


export default GameModel;