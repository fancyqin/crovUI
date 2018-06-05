
import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TextInput,
	Picker,
	ScrollView,
	Alert,
	Switch
} from 'react-native';

// import {List,ListItem} from 'react-native-elements';
import {Button,Icon,ListItem} from './src/CrovUI'



export default class App extends Component {
	constructor(props){
		super(props)
		this.state={
			switchValue: true
		}
	}
	render() {
		return (
			<ScrollView style={styles.container}>
			

				<Text style={styles.title}>Button</Text>

				<View style={styles.box}>
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
				</View>
				

				<Text style={styles.title}>Icon</Text>

				<View style={[styles.box,{flexDirection:'row',alignItems:'center'}]}>
					<Icon size={32} code="&#xe036;" color="#f00" style={{marginRight:20}} />
					<Icon size={16} code="&#xe030;" color="#000" />
				</View>

				<Text style={styles.title}>ListItem</Text>

				<View style={{paddingTop:20,paddingBottom:20,backgroundColor:'#f3f5f7'}}>
					<ListItem title="最简应用" />
					<ListItem title="复仇者联盟" />
					<ListItem title="银河护卫队" />				
				</View>

				<View style={{paddingTop:20,paddingBottom:20,backgroundColor:'#f3f5f7'}}>
					{/* <View style={{
						borderTopWidth:1,
						borderBottomWidth:1,
						borderColor:'#ddd'
					}}> */}
						<ListItem leftIcon="&#xe020;" title="Shopping Cart" subtitle='Happy Shopping' onPress={()=>{
							Alert.alert('Go Shopping!')
						}} />
						<ListItem leftIcon="&#xe040;" title="Search" subtitle='Happy Shopping' />
						<ListItem leftIcon="&#xe061;" title="Camera" subtitle='Switch the Camera' rightIcon={false} rightElement={(
							<Switch
								value={this.state.switchValue}
								onValueChange={() => this.setState((preState, props) => {
									return {
										switchValue: !preState.switchValue,
									}
								})}
							/>
						)} />
					{/* </View> */}
					
				</View>

				<Text style={styles.title}>Form</Text>


				
				
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
	},
	box:{
		padding: 10,
	},
	title:{
		fontSize: 20,
		padding: 10,
	}
});
