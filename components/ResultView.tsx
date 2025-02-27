import { View, Text, StyleSheet } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Colors } from '../utilities';
import { useState } from 'react';
import DndSpinner from './DndSpinner';

export const ResultView = (props: {
  name?: string;
  isLoading: boolean;
  loadingText: string;
}) => {
  const [containerStyle, setContainerStyle] = useState(styles.container);
  const [isCopied, setIsCopied] = useState(false);

  const { name, isLoading, loadingText } = props;
  const onPress = async () => {
    setContainerStyle(styles.containerCopied);
    await Clipboard.setStringAsync(name);
    setIsCopied(true);
  };

  const renderResult = () => {
    if (isLoading) {
      return <DndSpinner text={loadingText} />
    } else if (name) {
      return (
        <>
          <View style={containerStyle}>
            <Text style={styles.text} onPress={onPress}>
              {name}
            </Text>
          </View>
          {isCopied ? (
            <Text style={styles.isCopiedText}>Copied to clipboard</Text>
          ) : (
            <Text style={{ ...styles.isCopiedText, color: Colors.primaryDark }}>
              Click to copy to clipboard
            </Text>
          )}
        </>
      )
    } else {
      return (
        <></>
      )
    }
  }

  return (
    <View style={styles.wrapper}>
      {renderResult()}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 10,
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
    fontSize: 18,
    lineHeight: 25,
  },
  isCopiedText: {
    color: Colors.successDark,
    fontFamily: 'ScalySans',
    fontSize: 12,
    lineHeight: 12,
  },
});
