import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Colors } from '../utilities';
import DMLogo from '../assets/DMLogo.svg';
import { Image } from 'expo-image';
import React from 'react';

export const Footer = () => {
  const _handlePressButtonAsync = async (url: string) => {
    await WebBrowser.openBrowserAsync(url);
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
          <TouchableHighlight
            onPress={() =>
              _handlePressButtonAsync('https://dungeonmaster.guru')
            }
          >
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
        The material used in this app is Open Game Content, and is licensed for
        public use under the terms of the
        <Text
          style={{ color: Colors.primaryBright }}
          onPress={() =>
            _handlePressButtonAsync(
              'https://media.wizards.com/2016/downloads/SRD-OGL_V1.1.pdf'
            )
          }
        >
          {' '}
          Open Game License v1.0a Copyright 2000, Wizards of the Coast, Inc.
        </Text>
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
    fontSize: 12,
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
