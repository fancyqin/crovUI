
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
			<Button title="Button" buttonStyle={{marginBottom:10}} onPress={()=>{
				Alert.alert('I am a Button!')
			}} />
			<Button title="Loading" loading={true} buttonStyle={{marginBottom:10}} />
			<Button title="Disabled" disabled={true} buttonStyle={{marginBottom:10}} />
			
			<Button title='Search' icon='&#xe040;' buttonStyle={{marginBottom:10}} />

			<Button title='Send Mail' icon='&#xe03d;' iconRight={true} buttonStyle={{marginBottom:10}} />
			
			<Button title="FULL WIDTH..." buttonStyle={{width:'100%',marginBottom:10,}}/>
			
			<Icon size={32} code="&#xe036;" color="#f00" />
		</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
	alignItems: 'center',
	padding: 10,
  }
});
