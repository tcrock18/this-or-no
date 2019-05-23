import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default class App extends Component {
  state = {
    phone: '',
    name: '',
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
         placeholder="Phone Number"
         style={styles.input}
         />

        <TextInput
         placeholder="Name"
         style={styles.input}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '90%',
    marginBottom: 10,
    borderRadius: 5,
  },
});
