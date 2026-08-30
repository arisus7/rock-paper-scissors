import GameModel from '../models/GameModel';

class GameController {
    constructor() {
        this.gameModel = new GameModel();
    }

    play(playerChoice) {
        this.gameModel.play(playerChoice);

        return {
        playerChoice: this.gameModel.playerChoice,
        computerChoice: this.gameModel.computerChoice,
        result: this.gameModel.result
        };
    }
}
export default GameController;
