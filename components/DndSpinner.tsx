/**
 * Created by jesshendricks on 9/15/19
 */

import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Text, Animated, Easing} from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import {Colors} from '../utilities/enums';


const DndSpinner = (props: { text?: string }) => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  })

  useEffect(() => {
    Animated.loop(
      Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
          useNativeDriver: true
        }
      )
    ).start();
  }, []);

  return (
    <View style={styles.dndSpinner}>
      <Animated.View style={{transform: [{rotate: spin}]}}>
        <EvilIcons name="spinner-3" size={100} color={Colors.danger} />
      </Animated.View>
      {props.text && <Text style={styles.text}>{props.text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  dndSpinner: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: 10,
  },
  text: {
    color: Colors.danger,
    fontFamily: 'MrEaves',
    fontSize: 24,
  }
})

export default DndSpinner;
