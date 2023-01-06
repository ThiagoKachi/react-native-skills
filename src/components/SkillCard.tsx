import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, Text, StyleSheet} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({skill, ...rest}: SkillCardProps) {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
      activeOpacity={0.9}
      {...rest}
    >
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 18,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 24,
  },
  textSkill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
