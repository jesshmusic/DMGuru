import { StatusBar } from 'expo-status-bar';
import {ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font';
import React, {useEffect, useState} from 'react';
// @ts-ignore
import BackgroundImage from './assets/BackgroundImage.png';
import {RandomNameForm} from './components/RandomNameForm';
import {RandomTavernForm} from './components/RandomTavernForm';
import {RandomAdventureHookForm} from './components/RandomAdventureHookForm';
import {Colors} from './utilities/enums';

const customFonts = {
  'Nodesto': require('./assets/fonts/NodestoCapsCondensed.otf'),
  'Bookinsanity': require('./assets/fonts/Bookinsanity.otf'),
  'MrEaves': require('./assets/fonts/MrEavesSmallCaps.otf'),
  'ScalySans': require('./assets/fonts/ScalySans.otf')
}

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
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.image}>
        <Text style={styles.title}>Dungeon Master Guru</Text>
        <Text style={{fontFamily: 'MrEaves', marginBottom: 25}}>Quick Tools for Game Masters</Text>
        <ScrollView style={styles.scrollView}>
          <StatusBar style='auto' />
          <RandomNameForm />
          <RandomTavernForm />
          <RandomAdventureHookForm />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingHorizontal: 10,
    paddingVertical: 0,
    width: '100%'
  },
  title: {
    fontFamily: 'Nodesto',
    fontSize: 36,
    color: Colors.danger
  }
});
