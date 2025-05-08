import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, color = 'purple'}) => {
  return (
    <TouchableOpacity style={styles.button(color)}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    padding: 5,
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 10,
  }),
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
