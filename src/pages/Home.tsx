/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState<string>('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState<string>('');
  const [someSkillName, setSomeSkillName] = useState<boolean>(false);

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    const someSkill = mySkills.some((skill) => skill.name === newSkill)
    if (someSkill) {
      setSomeSkillName(true)
    } else {
      setSomeSkillName(false)
      setMySkills(prevState => [...prevState, data]);
    }
  }

  function handleRemoveSkill(id: string) {
    setMySkills((prevState) => prevState.filter((skill) => skill.id !== id))
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good morning 🏙️');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon 🌇');
    } else {
      setGreeting('Good night 🌃');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Thiago!</Text>

      <Text style={styles.greetings}>{greeting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      {someSkillName ? (
        <Text style={styles.skillRepeated}>
          Skill already added
        </Text> 
      ) : null}

      <Button handleAddNewSkill={handleAddNewSkill} disabled={!newSkill.length} />

      <Text style={[styles.title, {marginVertical: 32}]}>My skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: 16,
    marginTop: 24,
    borderRadius: 6,
  },
  greetings: {
    color: '#fff',
    fontSize: 16,
    marginTop: 8,
    fontWeight: '500',
  },
  skillRepeated: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
    marginTop: 8,
  }
});
