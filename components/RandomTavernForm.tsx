import {useState} from 'react';
import axios from 'axios';
import {FrameView} from './FrameView';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../utilities/enums';
import DMButton from './DMButton';
import {API_URL} from '../App';


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
      {name && <Text>{name}</Text>}
      <View style={styles.optionsRow}>
        <DMButton color={Colors.primary} title={'Get Tavern'} onClick={handleGenerateName} />
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
