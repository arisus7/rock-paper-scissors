import ChoiceVO from "../valueobjects/ChoiceVO";

class GameModel {
    constructor() {
        this.playerChoice = null;
        this.computerChoice = null;
        this.result = null;
        this.playerScore = 0;
        this.computerScore = 0;
    }

    play(playerChoice) {
        this.playerChoice = new ChoiceVO(playerChoice).value;

        const randomNumber = Math.floor(Math.random() * 3) + 1;

        if (randomNumber === 1) {
            this.computerChoice = "Piedra";
        } else if (randomNumber === 2) {
            this.computerChoice = "Papel";
        } else {
            this.computerChoice = "Tijera";
        }

        if (this.playerChoice === this.computerChoice) {
            this.result = "Empate";
        } else if (
            (this.playerChoice === "Piedra" && this.computerChoice === "Tijera") ||
            (this.playerChoice === "Papel" && this.computerChoice === "Piedra") ||
            (this.playerChoice === "Tijera" && this.computerChoice === "Papel")
        ) {
            this.result = "Ganaste";
            this.playerScore++;
        } else {
            this.result = "Perdiste";
            this.computerScore++;
        }
    }
}

export default GameModel;