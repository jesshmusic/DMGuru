import {useState} from 'react';
import axios from 'axios';
import {FrameView} from './FrameView';
import {StyleSheet, View} from 'react-native';
import DMButton from './DMButton';
import {API_URL} from '../utilities/enums';
import {ResultView} from './ResultView';


export const RandomTavernForm = () => {
  const [name, setName] = useState<string | undefined>();

  const handleGenerateName = async () => {
    const apiURL = `${API_URL}/v1/random_tavern_name.json`;
    try {
      const response = await axios.get<{ name: string }>(apiURL);
      setName(response.data.name);
    } catch (error) {
      setName(error.message);
    }
  };

  return (
    <FrameView title='Tavern Name' subtitle="Generate a random tavern name">
      {name && <ResultView name={name} />}
      <View style={styles.optionsRow}>
        <DMButton title={'Get Tavern'} onClick={handleGenerateName} />
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
