import {useState} from 'react';
import axios from 'axios';
import {FrameView} from '../containers/FrameView';
import {StyleSheet, View} from 'react-native';
import DMButton from './DMButton';
import {API_URL} from '../utilities';
import {ResultView} from './ResultView';


export const RandomTavernForm = () => {
  const [name, setName] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateName = async () => {
    const apiURL = `${API_URL}/v1/random_tavern_name.json`;
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
    <FrameView title='Tavern Name' subtitle="Generate a random tavern name" iconName="Tavern Name">
      <ResultView name={name} isLoading={isLoading} loadingText={'Generating Tavern...'} />
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
