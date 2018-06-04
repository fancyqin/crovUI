
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// import {Button} from 'react-native-elements';
import Button from './src/crovui/button/Button';
import Icon from './src/common/Icon'


export default class App extends Component {
  render() {
    return (
		<View style={styles.container}>
			<Button />
      <Icon size={32} />
		</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
