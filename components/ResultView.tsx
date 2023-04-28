import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../utilities/enums';

export const ResultView = (props: {name: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryLight,
    borderColor: Colors.primary,
    borderRadius: 5,
    borderWidth: 2,
    marginVertical: 10,
    padding: 15,
  },
  text: {
    fontFamily: 'Bookinsanity',
    fontSize: 18
  }
})
