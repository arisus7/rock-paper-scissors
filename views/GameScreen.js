import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChoiceButton from '../components/ChoiceButton';

export default function GameScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Piedra, Papel o Tijera
      </Text>

      <Text style={styles.score}>
        Tú  0 - 0  CPU
        </Text>

      <Text style={styles.subtitle}>
        Elige tu opción
      </Text>
      <View style={styles.buttons}>

        <ChoiceButton
          title="Piedra"
          image={require('../assets/rock.png')}
          onPress={() => {}}
        />

        <ChoiceButton
          title="Papel"
          image={require('../assets/paper.png')}
          onPress={() => {}}
        />

        <ChoiceButton
          title="Tijera"
          image={require('../assets/scissors.png')}
          onPress={() => {}}
        />
      </View>
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 18,
    color: '#000000',
  },

  score: {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 30, },  

  buttons: {
  gap: 10,
  marginTop: 20,},
});