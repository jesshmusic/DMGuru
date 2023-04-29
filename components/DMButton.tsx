import React from 'react';
import {Colors} from '../utilities/enums';
import {Pressable, StyleSheet, Text} from 'react-native';

const DMButton = (props: {
  title: string;
  isTransparent?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onClick?: (event: any) => void;
}) => {
  const {
    onClick,
    title,
  } = props;
  let fontSize = 18;
  if (props.size) {
    switch (props.size) {
      case 'sm':
        fontSize = 14;
        break;
      case 'lg':
        fontSize = 22;
        break;
      default:
        fontSize = 18
    }
  }

  return (
    <Pressable style={{
      backgroundColor: props.isTransparent ? 'rgba(0,0,0,0)': Colors.danger,
      padding: props.isTransparent ? 0: 10,
      marginBottom: props.isTransparent ? 20 : 0,
      ...styles.button
    }} onPress={onClick}>
      <Text style={{
        color: props.isTransparent ? Colors.primaryDark : Colors.white,
        fontWeight: props.isTransparent ? 'bold' : 'normal',
        fontSize,
        ...styles.title
      }}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'ScalySans',
  }
})

export default DMButton;
