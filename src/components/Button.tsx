import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, Text, StyleSheet} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  handleAddNewSkill: () => void;
}

export function Button({handleAddNewSkill, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={handleAddNewSkill}
      {...rest}
      >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 16,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 18,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
