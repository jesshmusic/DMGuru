import {View, Text, StyleSheet} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import {Colors} from '../utilities/enums';
import {useState} from 'react';

export const ResultView = (props: {name: string}) => {
  const [containerStyle, setContainerStyle] = useState(styles.container);
  const [isCopied, setIsCopied] = useState(false);
  const onPress = async () => {
    setContainerStyle(styles.containerCopied)
    await Clipboard.setStringAsync(props.name);
    setIsCopied(true);
  }

  return (
    <View style={styles.wrapper}>
      <View style={containerStyle}>
        <Text style={styles.text} onPress={onPress}>{props.name}</Text>
      </View>
      {isCopied ? <Text style={styles.isCopiedText}>Copied to clipboard</Text> : <Text style={{...styles.isCopiedText, color: Colors.primaryDark}}>Click to copy to clipboard</Text> }
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 10
  },
  container: {
    backgroundColor: Colors.primaryLight,
    borderColor: Colors.primary,
    borderRadius: 5,
    borderWidth: 2,
    marginVertical: 5,
    padding: 15,
  },
  containerCopied: {
    backgroundColor: Colors.primaryLight,
    borderColor: Colors.success,
    borderRadius: 5,
    borderWidth: 2,
    marginVertical: 5,
    padding: 15,
  },
  text: {
    fontFamily: 'Bookinsanity',
    fontSize: 18
  },
  isCopiedText: {
    color: Colors.successDark,
    fontFamily: 'ScalySans',
    fontSize: 12,
    lineHeight: 12,
  }
})
