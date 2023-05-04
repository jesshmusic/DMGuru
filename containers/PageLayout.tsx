import React, {ReactNode} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import BackgroundImage from '../assets/BackgroundImage.png';
import {Image} from 'expo-image';
import DMLogo from '../assets/DMLogo.svg';
import {StatusBar} from 'expo-status-bar';
import {Footer} from '../components/Footer';
import {Colors} from '../utilities';

const PageLayout = (props: {children: ReactNode}) => {
  return (
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
        <View style={styles.content}>
          {props.children}
          <Footer />
        </View>
        <StatusBar style='dark' />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
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
    justifyContent: 'space-between',
    paddingTop: 60,
    width: '100%'
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 5
  },
  title: {
    letterSpacing: -0.5,
    fontFamily: 'Nodesto',
    fontSize: 36,
    color: Colors.danger,
    lineHeight: 36,
  }
});

export default PageLayout;
