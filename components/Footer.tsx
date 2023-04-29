import {StyleSheet, Text, View} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import DMButton from './DMButton';

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
        For a full suite on tools for running your game check out:
      </Text>
      <DMButton title="DungeonMaster.guru" onClick={_handlePressButtonAsync} isTransparent size="sm" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  text: {
    fontFamily: 'Bookinsanity',
    fontSize: 14,
    marginBottom: 10,
  },
  link: {

  }
})
