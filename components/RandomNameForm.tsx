import {useState} from 'react';
import axios from 'axios';
import {FrameView} from './FrameView';
import {StyleSheet, Text, View} from 'react-native';
import Dropdown from 'react-native-input-select';
import {Colors} from '../utilities/enums';
import DMButton from './DMButton';
import {API_URL} from '../App';

const genderOptions: {value: string, label: string}[] = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'other', label: 'Other' },
];

export const raceOptions: {value: string, label: string}[] = [
  { value: '', label: 'Any' },
  { value: 'aasimar', label: 'Aasimar' },
  { value: 'bugbear', label: 'Bugbear' },
  { value: 'dragon', label: 'Dragon' },
  { value: 'dragonborn', label: 'Dragonborn' },
  { value: 'drow_elf', label: 'Drow Elf' },
  { value: 'dwarf', label: 'Dwarf' },
  { value: 'elf', label: 'Elf' },
  { value: 'gnome', label: 'Gnome' },
  { value: 'goblin', label: 'Goblin' },
  { value: 'half_elf', label: 'Half-elf' },
  { value: 'half_orc', label: 'Half-orc' },
  { value: 'halfling', label: 'Halfling' },
  { value: 'human', label: 'Human' },
  { value: 'ogre', label: 'Ogre' },
  { value: 'orc', label: 'Orc' },
  { value: 'tiefling', label: 'Tiefling' },
];

export const RandomNameForm = () => {
  const [name, setName] = useState<string | undefined>();
  const [gender, setGender] = useState('other');
  const [race, setRace] = useState('human');

  const handleGenerateName = async () => {
    const apiURL = `${API_URL}/v1/random_fantasy_name.json?random_monster_gender=${gender}&random_monster_race=${
      race ? race : 'human'
    }`;
    try {
      const response = await axios.get<{ name: string }>(apiURL);
      setName(response.data.name);
    } catch (error) {
      setName(error.message);
    }
  };

  return (
    <FrameView title='Fantasy Character Name' subtitle="Generate a random fantasy name based on gender and race">
      {name && <Text>{name}</Text>}
      <View style={styles.optionsRow}>
        <Dropdown
          label="Gender"
          placeholder="Select a gender..."
          options={genderOptions}
          selectedValue={gender}
          optionLabel={'label'}
          optionValue={'value'}
          onValueChange={(value) => setGender(value)}
          primaryColor={Colors.danger}
          dropdownStyle={styles.dropdown}
        />
        <Dropdown
          label="Race"
          placeholder="Select a race..."
          options={raceOptions}
          selectedValue={race}
          optionLabel={'label'}
          optionValue={'value'}
          onValueChange={(value) => setRace(value)}
          primaryColor={Colors.danger}
          dropdownStyle={styles.dropdown}
        />
        <DMButton color={Colors.primary} title={'Get Name'} onClick={handleGenerateName} />
      </View>
    </FrameView>
  )
}

const styles = StyleSheet.create({
  optionsRow: {
  },
  dropdown: {
  }
})
