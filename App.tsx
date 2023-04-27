import { StatusBar } from 'expo-status-bar';
import {ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import * as Font from 'expo-font';
import {useEffect, useState} from 'react';
// @ts-ignore
import BackgroundImage from './assets/BackgroundImage.png';
import {RandomNameForm} from './components/RandomNameForm';
import {RandomTavernForm} from './components/RandomTavernForm';
import {RandomAdventureHookForm} from './components/RandomAdventureHookForm';

const customFonts = {
  'Nodesto': require('./assets/fonts/NodestoCapsCondensed.otf'),
  'Bookinsanity': require('./assets/fonts/Bookinsanity.otf'),
  'MrEaves': require('./assets/fonts/MrEavesSmallCaps.otf'),
  'ScalySans': require('./assets/fonts/ScalySans.otf')
}

export const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://dungeonmaster.guru';
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const componentDidMount = async () => {
      await Font.loadAsync(customFonts);
      setFontsLoaded(true);
    }

    componentDidMount();
  }, [])

  return (fontsLoaded &&
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.image}>
        <Text style={styles.title}>Dungeon Master Guru</Text>
        <Text style={{fontFamily: 'MrEaves', marginBottom: 25}}>Quick Tools for Game Masters</Text>
        <ScrollView style={styles.scrollView}>
          <StatusBar style="auto" />
          <RandomNameForm />
          <RandomTavernForm />
          <RandomAdventureHookForm />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    fontFamily: 'Bookinsanity',
    justifyContent: 'flex-start',
    width: '100%'
  },
  image: {
    alignItems: 'center',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    paddingTop: 50,
    width: '100%'
  },
  scrollView: {
    marginHorizontal: 0,
    paddingVertical: 20,
    width: '100%'
  },
  title: {
    fontFamily: 'Nodesto',
    fontSize: 30,
    color: '#800'
  }
});
