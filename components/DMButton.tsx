import React from 'react';
import { Colors } from '../utilities/enums';
import {Pressable, StyleSheet, Text} from 'react-native';

const DMButton = (props: {
  title: string;
  onClick?: (event: any) => void;
}) => {
  const {
    onClick,
    title,
  } = props;

  return (
    <Pressable style={styles.button} onPress={onClick}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.danger,
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    padding: 10
  },
  title: {
    color: Colors.white,
    fontFamily: 'ScalySans',
    fontSize: 18
  }
})

export default DMButton;
