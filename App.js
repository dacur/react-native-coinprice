import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  state = { price: 'Tap here for the latest Bitcoin price' }

  fetchPrice() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => response.json())
      .then(price => this.setState({ price: `$${price.bpi["USD"]["rate"]}` }));
    this.setState({ price: '...' });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={()=> this.fetchPrice()}>
          <Text>{this.state.price}</Text>
        </TouchableHighlight>
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
});
