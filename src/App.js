import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from './components/QRcode';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{padding:10}}>The value is "enter string here"</Text>
        <QRCode size={100} value="enter string here" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 120,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
