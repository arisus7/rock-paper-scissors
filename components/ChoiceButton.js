import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export default function ChoiceButton({ title, image, onPress }) {
  return (
    <TouchableOpacity //para hacer un botón personalizado
      style={styles.button}
      onPress={onPress}
    >
      <Image
        source={image}
        style={styles.image}
      />

      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginBottom: 15,
  },

  image: {
    width: 300,
    height: 130,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 24,
    marginTop: 5,
  },
});