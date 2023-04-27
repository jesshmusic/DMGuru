import {StyleSheet, Text, View} from 'react-native';
// @ts-ignore
import BackgroundImage from '../assets/dndFrameOrange.png';
import React from 'react';

export const FrameView = (props: {title: string, subtitle: string, children: React.ReactNode}) => {
  const { title, subtitle, children } = props;
  return (
    <View style={styles.frame}>
      <View style={styles.border}></View>
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        {children}
      </View>
      <View style={styles.border}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  border: {
    backgroundColor: '#ea8000',
    borderColor: '#000',
    borderWidth: 1,
    height: 5,
    width: '100%'
  },
  frame: {
    backgroundClip: 'border-box',
    backgroundColor: '#fdf1dc',
    shadowColor: '#555',
    shadowRadius: 5,
    shadowOpacity: 0.5,
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'ScalySans',
    marginBottom: 10,
    minWidth: 0,
    position: 'relative',
    width: '98%'
  },
  body: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    width: '100%'
  },
  image: {
    alignItems: 'center',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
  },
  title: {
    alignItems: 'flex-start',
    color: '#571a10',
    display: 'flex',
    fontFamily: 'MrEaves',
    fontSize: 20,
    justifyContent: 'space-between',
    marginBottom: 0,
    width: '100%'
  },
  subtitle: {
    fontFamily: 'ScalySans',
    fontSize: 14,
    marginBottom: 4,
  }
})
