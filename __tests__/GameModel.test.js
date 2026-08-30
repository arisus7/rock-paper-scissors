import GameModel from '../models/GameModel';

test('Piedra contra Tijera debe resultar en Ganaste', () => {
    Math.random = () => 0.9;

    const game = new GameModel();

    game.play('Piedra');

    expect(game.result).toBe('Ganaste');
});

test('Piedra contra Papel debe resultar en Perdiste', () => {
    Math.random = () => 0.5;

    const game = new GameModel();

    game.play('Piedra');

    expect(game.result).toBe('Perdiste');
});

test('Piedra contra Piedra debe resultar en Empate', () => {
    Math.random = () => 0.1;

    const game = new GameModel();

    game.play('Piedra');

    expect(game.result).toBe('Empate');
});

test('Papel contra Piedra debe resultar en Ganaste', () => {
    Math.random = () => 0.1;

    const game = new GameModel();

    game.play('Papel');

    expect(game.result).toBe('Ganaste');
});

test('Papel contra Tijera debe resultar en Perdiste', () => {
    Math.random = () => 0.9;

    const game = new GameModel();

    game.play('Papel');

    expect(game.result).toBe('Perdiste');
});

test('Papel contra Papel debe resultar en Empate', () => {
    Math.random = () => 0.5;

    const game = new GameModel();

    game.play('Papel');

    expect(game.result).toBe('Empate');
});

test('Tijera contra Papel debe resultar en Ganaste', () => {
    Math.random = () => 0.5;

    const game = new GameModel();

    game.play('Tijera');

    expect(game.result).toBe('Ganaste');
});

test('Tijera contra Piedra debe resultar en Perdiste', () => {
    Math.random = () => 0.1;

    const game = new GameModel();

    game.play('Tijera');

    expect(game.result).toBe('Perdiste');
});

test('Tijera contra Tijera debe resultar en Empate', () => {
    Math.random = () => 0.9;

    const game = new GameModel();

    game.play('Tijera');

    expect(game.result).toBe('Empate');
});