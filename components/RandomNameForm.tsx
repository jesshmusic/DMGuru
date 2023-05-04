import {useState} from 'react';
import axios from 'axios';
import {FrameView} from '../containers/FrameView';
import {StyleSheet, View} from 'react-native';
import Dropdown from './Dropdown/index';
import {Colors} from '../utilities';
import DMButton from './DMButton';
import {API_URL} from '../utilities';
import {ResultView} from './ResultView';

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
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateName = async () => {
    const apiURL = `${API_URL}/v1/random_fantasy_name.json?random_monster_gender=${gender}&random_monster_race=${
      race ? race : 'human'
    }`;
    try {
      setIsLoading(true);
      const response = await axios.get<{ name: string }>(apiURL);
      setIsLoading(false);
      setName(response.data.name);
    } catch (error) {
      setName(error.message);
      setIsLoading(false);
    }
  };

  return (
    <FrameView title='Fantasy Character Name' subtitle="Generate a random fantasy name based on gender and race" iconName="PC Name">
      <ResultView name={name} isLoading={isLoading} loadingText={'Generating Name...'}/>
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
          selectedItemStyle={styles.selectedItem}
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
          selectedItemStyle={styles.selectedItem}
        />
      </View>
      <DMButton title={'Get Name'} onClick={handleGenerateName} />
    </FrameView>
  )
}

const styles = StyleSheet.create({
  optionsRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dropdown: {
    alignItems: 'center',
    backgroundColor: Colors.danger,
    borderRadius: 25,
    borderWidth: 0,
    display: 'flex',
    justifyContent: 'center',
    minHeight: 32,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  selectedItem: {
    color: Colors.white,
  }
})
