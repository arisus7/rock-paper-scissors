import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChoiceButton from '../components/ChoiceButton';
import GameController from '../controllers/GameController';

export default function GameScreen() {

  const controller = useRef(new GameController()).current;
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const handleChoice = (choice) => {
    const gameResult = controller.play(choice);

    setPlayerChoice(gameResult.playerChoice);
    setComputerChoice(gameResult.computerChoice);
    setResult(gameResult.result);

    setPlayerScore(gameResult.playerScore);
    setComputerScore(gameResult.computerScore);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Piedra, Papel o Tijera
      </Text>

      <Text style={styles.score}>
        Tú  {playerScore} - {computerScore} CPU
      </Text>

      <Text style={styles.subtitle}>
        Elige tu opción
      </Text>

      <View style={styles.buttons}>

        <ChoiceButton
          title="Piedra"
          image={require('../assets/rock.png')}
          onPress={() => handleChoice('Piedra')}
        />

        <ChoiceButton
          title="Papel"
          image={require('../assets/paper.png')}
          onPress={() => handleChoice('Papel')}
        />

        <ChoiceButton
          title="Tijera"
          image={require('../assets/scissors.png')}
          onPress={() => handleChoice('Tijera')}
        />

      </View>

      <Text style={styles.result}>
        Tu elección: {playerChoice}
      </Text>

      <Text style={styles.result}>
        CPU: {computerChoice}
      </Text>

      <Text style={styles.result}>
        Resultado: {result}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5e2eb1',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: '#000000',
  },

  score: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  buttons: {
    gap: 2,
    marginTop: 5,
  },

  result: {
    fontSize: 20,
    marginTop: 5,
  },
});