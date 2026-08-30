import GameModel from '../models/GameModel';

test('Piedra contra Tijera debe resultar en Ganaste', () => {
    Math.random = () => 0.9; //Controlamos el azar para obligar a la computadora a sacar Tijera

    const game = new GameModel();

    game.play('Piedra'); //Hacemos que el jugador saque Piedra

    expect(game.result).toBe('Ganaste'); //Verificamos que el resultado sea Ganaste
});