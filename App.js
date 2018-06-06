
import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TextInput,
	ScrollView,
	Alert,
	TouchableOpacity,
	Switch
} from 'react-native';

// import {List,ListItem} from 'react-native-elements';
import {Button,Icon,ListItem,PickerChildren} from './src/CrovUI';

import {Picker,DatePicker} from 'antd-mobile'
import { TextField } from 'react-native-material-textfield';


export default class App extends Component {
	constructor(props){
		super(props)
		this.state={
			switchValue: true,
			sValue:['2014','Summer'],
			country: null
		}
	}
	render() {

		const seasonData = [
			[
			  {
				label: '2013',
				value: '2013',
			  },
			  {
				label: '2014',
				value: '2014',
			  },
			],
			[
			  {
				label: 'Spring',
				value: 'Spring',
			  },
			  {
				label: 'Summer',
				value: 'Summer',
			  },
			],
		  ]

		const countryData = [
			{
				label: 'China',
				value: 'China',
			},
			{
				label: 'USA',
				value: 'America',
			}
		]

		return (
			<ScrollView style={styles.container}>


				<Text style={styles.title}>Form</Text>

				<View style={styles.box}>

					<TextField
						ref={this.lastnameRef}
						autoCorrect={false}
						enablesReturnKeyAutomatically={true}
						onFocus={this.onFocus}
						onChangeText={this.onChangeText}
						onSubmitEditing={this.onSubmitLastName}
						returnKeyType='next'
						label='Company Name'
					/>
						
					<TextField
						ref={this.firstnameRef}
						autoCorrect={false}
						enablesReturnKeyAutomatically={true}
						onFocus={this.onFocus}
						onChangeText={this.onChangeText}
						onSubmitEditing={this.onSubmitFirstName}
						keyboardType='numeric'
						returnKeyType='next'
						label='Product Price'
						prefix='USD'
						suffix='Dollar'
					/>
					

					<Picker extra="Select the Country"
						okText="Confrim"
						dismissText="Cancel"
						value={this.state.country}
						data={countryData}
						onChange={v => this.setState({ country: v })}
          				onOk={v => this.setState({ country: v })}
						onOk={e => console.log('ok', e)}
						onDismiss={e => console.log('dismiss', e)}
					>

						<PickerChildren label="Country" />
					</Picker>


					<Picker extra="Select the Season"
						okText="Confrim"
						dismissText="Cancel"
						value={this.state.sValue}
						data={seasonData}
						cascade={false}
						onChange={v => this.setState({ sValue: v })}
          				onOk={v => this.setState({ sValue: v })}
						title="Seasons"
						onOk={e => console.log('ok', e)}
						onDismiss={e => console.log('dismiss', e)}
					>
						<PickerChildren label="Season" />
					</Picker>

					<TextField
						ref={this.aboutRef}
						value={'Default Value'}
						onFocus={this.onFocus}
						onChangeText={this.onChangeText}
						onSubmitEditing={this.onSubmitAbout}
						returnKeyType='next'
						multiline={true}
						blurOnSubmit={true}
						label='About (optional)'
						characterRestriction={140}
					/>

					


				</View>



			

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
