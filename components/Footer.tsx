import {StyleSheet, Text, View} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import DMButton from './DMButton';
import {Colors} from '../utilities/enums';

export const Footer = () => {
  const _handlePressButtonAsync = async () => {
    await WebBrowser.openBrowserAsync('https://dungeonmaster.guru');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This application uses OpenAI to generate these names. So sometimes you might see ...interesting... results.
      </Text>

      <Text style={styles.text}>
        For a full suite of tools for running your game check out:
      </Text>
      <DMButton title="Our Main Site" onClick={_handlePressButtonAsync} isTransparent size="sm" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingBottom: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: '100%',
  },
  text: {
    color: Colors.white,
    fontFamily: 'Bookinsanity',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center'
  }
})
