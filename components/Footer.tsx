import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Colors } from '../utilities';
import DMLogo from '../assets/DMLogo.svg';
import { Image } from 'expo-image';
import React from 'react';

export const Footer = () => {
  const _handlePressButtonAsync = async () => {
    await WebBrowser.openBrowserAsync('https://dungeonmaster.guru');
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.left}>
          <Text style={styles.text}>
            This application uses OpenAI to generate these names. So sometimes
            you might see ...interesting... results.
          </Text>
        </View>
        <View style={styles.right}>
          <TouchableHighlight onPress={_handlePressButtonAsync}>
            <Image
              source={DMLogo}
              contentFit="cover"
              style={styles.logo}
              transition={1000}
            />
          </TouchableHighlight>
        </View>
      </View>
      <Text style={[styles.text, styles.bottom]}>
        &copy; 2023 Existential Music & Open Game License v 1.0a Copyright 2000,
        Wizards of the Coast, LLC.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '100%',
  },
  text: {
    color: Colors.white,
    fontFamily: 'ScalySans',
    fontSize: 14,
    margin: 5,
    textAlign: 'left',
  },
  logo: {
    width: 50,
    height: 50,
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
  },
  bottom: {
    fontSize: 10,
  },
  left: {
    flex: 2,
  },
  right: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
