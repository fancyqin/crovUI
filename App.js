
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert  
} from 'react-native';

// import {Button} from 'react-native-elements';
import Button from './src/crovui/button/Button';
import Icon from './src/common/Icon'


export default class App extends Component {
  render() {
    return (
		<View style={styles.container}>
			<Button title="Button" onPress={()=>{
				Alert.alert('I am a Button!')
			}} />
			<Button title="Loading" loading={true} />
			<Button title="Disabled" disabled={true} />
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
