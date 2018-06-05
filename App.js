
import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TextInput,
	Picker,
	ScrollView,
	Alert  
} from 'react-native';

// import {Button} from 'react-native-elements';
import {Button,Icon} from './src/CrovUI'


export default class App extends Component {
	constructor(props){
		super(props)
		this.state ={
			language:'fff'
		}
	}
	render() {
		return (
			<ScrollView style={styles.container}>

				<Text style={styles.title}>Button</Text>
			
				<Button type="main" title="Button" buttonStyle={{marginBottom:10}} onPress={()=>{
					Alert.alert('I am a Button!')
				}} />
				<Button title="Loading" loading={true} buttonStyle={{marginBottom:10}} />
				<Button title="Disabled" disabled={true} buttonStyle={{marginBottom:10}} />
				
				<Button type="main" title='Search' icon='&#xe040;' iconProps={{color:'white'}} buttonStyle={{marginBottom:10}} />

				<Button title='Send Mail' icon='&#xe03d;' iconRight={true} buttonStyle={{marginBottom:10}} />
				
				<Button title="FULL WIDTH..." buttonStyle={{width:'100%',marginBottom:10,}}/>
				
				<View style={{flexDirection:'row',marginBottom:20}}>
					<Button icon="&#xe020;" iconProps={{color:'white'}} type="main" title="Add to Cart" buttonStyle={{marginRight: 5,width:'50%',flexShrink: 1,}}/>
					<Button icon="&#xe07f;" title="Buy Sample" buttonStyle={{marginLeft: 5,width:'50%',flexShrink: 1,}} />
				</View>

				<Text style={styles.title}>Icon</Text>
				<Icon size={32} code="&#xe036;" color="#f00" />


				<Text style={styles.title}>Form</Text>

				<TextInput placeholder="Please Enter Your Name" />


				<Picker
					selectedValue={this.state.language}
					onValueChange={(lang) => this.setState({language: lang})}>
					<Picker.Item label="Java" value="java" />
					<Picker.Item label="JavaScript" value="js" />
				</Picker>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		marginTop: 40,
	},
	title:{
		fontSize: 20,
		paddingVertical: 10,
	}
});
