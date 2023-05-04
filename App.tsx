import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import {ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font';
import React, {useEffect, useState} from 'react';
import BackgroundImage from './assets/BackgroundImage.png';
import DMLogo from './assets/DMLogo.svg';
import {RandomNameForm} from './components/RandomNameForm';
import {RandomTavernForm} from './components/RandomTavernForm';
import {RandomAdventureHookForm} from './components/RandomAdventureHookForm';
import {Colors} from './utilities/enums';
import {Footer} from './components/Footer';

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
        <View style={styles.header}>
          <Image source={DMLogo}
                 contentFit="cover"
                 style={styles.logo}
                 transition={1000} />
          <View>
            <Text style={styles.title}>Game Master Guru</Text>
            <Text style={{fontFamily: 'MrEaves', marginBottom: 25}}>Quick Tools for Game Masters</Text>
          </View>
        </View>
        <ScrollView style={styles.scrollView}>
          <StatusBar style='auto' />
          <RandomNameForm />
          <RandomTavernForm />
          <RandomAdventureHookForm />
          <Footer />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    alignItems: 'center',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    paddingTop: 60,
    width: '100%'
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 5
  },
  scrollView: {
    marginHorizontal: 0,
    paddingHorizontal: 10,
    paddingVertical: 0,
    width: '100%'
  },
  title: {
    letterSpacing: -0.5,
    fontFamily: 'Nodesto',
    fontSize: 36,
    color: Colors.danger,
    lineHeight: 36,
  }
});
