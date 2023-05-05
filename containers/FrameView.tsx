import { StyleSheet, Text, View } from 'react-native';
// @ts-ignore
import BackgroundImage from '../assets/dndFrameOrange.png';
import React from 'react';
import { Colors, getIconForPage } from '../utilities';

export const FrameView = (props: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  iconName: string;
  maxWidth?: number;
}) => {
  const { title, subtitle, children, iconName, maxWidth } = props;
  const frameStyles = maxWidth ? { ...styles.frame, maxWidth } : styles.frame;
  return (
    <View style={frameStyles}>
      <View style={styles.border}></View>
      <View style={styles.body}>
        <View style={styles.titleContainer}>
          {getIconForPage(iconName, 24)}
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.subtitle}>{subtitle}</Text>
        {children}
      </View>
      <View style={styles.border}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    backgroundColor: Colors.warning,
    borderColor: '#000',
    borderWidth: 1,
    height: 5,
    width: '100%',
  },
  frame: {
    backgroundClip: 'border-box',
    backgroundColor: 'rgba(253,241,220,0.45)',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'ScalySans',
    marginBottom: 10,
    minWidth: 0,
    position: 'relative',
    width: '98%',
  },
  body: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    width: '100%',
  },
  image: {
    alignItems: 'center',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    alignItems: 'flex-start',
    color: '#571a10',
    display: 'flex',
    fontFamily: 'MrEaves',
    fontSize: 20,
    justifyContent: 'space-between',
    marginBottom: 0,
    marginLeft: 5,
    width: '100%',
  },
  subtitle: {
    fontFamily: 'ScalySans',
    fontSize: 14,
    marginBottom: 4,
  },
});
