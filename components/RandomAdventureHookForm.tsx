import {useState} from 'react';
import axios from 'axios';
import {FrameView} from './FrameView';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../utilities/enums';
import DMButton from './DMButton';
import {API_URL} from '../App';
import Slider from '@react-native-community/slider';

export const RandomAdventureHookForm = () => {
  const [name, setName] = useState<string | undefined>();
  const [playerCount, setPlayerCount] = useState(5);
  const [averageLevel, setAverageLevel] = useState(3);

  const handleGenerateName = async () => {
    const apiURL = `${API_URL}/v1/adventure_hook.json?player_count=${playerCount}&average_level=${averageLevel}`;
    try {
      const response = await axios.get<{ adventure_hook: string }>(apiURL);
      console.log(response.data);
      setName(response.data.adventure_hook);
    } catch (error) {
      setName(error.message);
    }
  };

  return (
    <FrameView title='Adventure Hook' subtitle="Generate a random adventure hook">
      {name && <Text>{name}</Text>}
      <View style={styles.optionsRow}>
        <Text style={styles.text}>Number of Players: {playerCount}</Text>
        <Slider
          minimumValue={1}
          maximumValue={10}
          step={1}
          style={styles.slider}
          value={playerCount}
          onValueChange={setPlayerCount}
        />
        <Text style={styles.text}>Average Player Level: {averageLevel}</Text>
        <Slider
          minimumValue={1}
          maximumValue={20}
          step={1}
          style={styles.slider}
          value={averageLevel}
          onValueChange={setAverageLevel}
        />
        <DMButton color={Colors.primary} title={'Get Adventure Hook'} onClick={handleGenerateName} />
      </View>
    </FrameView>
  )
}

const styles = StyleSheet.create({
  optionsRow: {
  },
  dropdown: {
  },
  slider: {
    width: '100%',
    opacity: 1,
    height: 50,
    marginTop: 0,
  },
  text: {
    fontFamily: 'ScalySans',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
})
