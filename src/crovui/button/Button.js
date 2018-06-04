import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import {
	Platform,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TouchableNativeFeedback,
	ActivityIndicator,
	ViewPropTypes

} from 'react-native';

import colors from '../../common/colors'
import Icon from '../../common/Icon'

class Button extends PureComponent{
    constructor(props){
        super(props);
	}
	
	render(){
		const {
			type,
			TouchableComponent,
			onPress,
			buttonStyle,
			loading,
			loadingStyle,
			loadingProps,
			title,
			titleProps,
			titleStyle,
			icon,
			iconProps,
			iconStyle,
			iconRight,
			disabled,
			disabledStyle,
			disabledTitleStyle,
		} = this.props;
		
		let defaultButtonStyle,defaultTitleStyle;

		if(type ==='main'){
			defaultButtonStyle={
				borderWidth: 0,
				backgroundColor: colors.main,
			}
			defaultTitleStyle={
				color:'white'
			}

		}


		
	
		return (
			<TouchableComponent 
				style={[
					styles.button,
					defaultButtonStyle,
					buttonStyle,
					disabled && styles.disabled,
					disabled && disabledStyle,
					]}
					onPress={onPress}
					disabled={disabled}
			>
				{loading && (
					<ActivityIndicator
						animating={true}
						style={[styles.loading,loadingStyle]}
						color={loadingProps.color}
						size={loadingProps.size}
						{...loadingProps}
					/>
				)}
				{!loading &&
				icon &&
				!iconRight && (
					<Icon code={icon} {...iconProps} style={[{marginRight:5},iconStyle]} />
				)}
				{!!title && (
				<Text style={[
						styles.title,
						defaultTitleStyle,
						titleStyle,
						disabled && styles.disabledTitle,
						disabled && disabledTitleStyle,
					]}
				{...titleProps}
				>
				{title}
				</Text>)
				}
				{icon && iconRight && (
					<Icon code={icon} {...iconProps} style={[{marginLeft:5},iconStyle]} />
				)}

			</TouchableComponent>		
		)
	}
    
}


Button.propTypes = {
	type: PropTypes.string,
	title: PropTypes.string,
	titleStyle: Text.propTypes.style,
	titleProps: PropTypes.object,
	buttonStyle: ViewPropTypes.style,
	loading: PropTypes.bool,
	loadingStyle: ViewPropTypes.style,
	loadingProps: PropTypes.object,
	onPress: PropTypes.any,
	icon: PropTypes.any,
	iconProps: PropTypes.object,
	iconStyle: Text.propTypes.style,
	iconRight: PropTypes.bool,
	TouchableComponent: PropTypes.any,
	ViewComponent: PropTypes.any,
	disabled: PropTypes.bool,
	disabledStyle: ViewPropTypes.style,
	disabledTitleStyle: Text.propTypes.style,
	raised: PropTypes.bool,
}

Button.defaultProps = {
	type: 'normal',
	title: 'Button',
	icon: false,
	iconRight: false,
	loadingProps:{
		color: '#222',
		size:'small'
	},
	iconProps:{
		color: '#222',
		size:16,
	},
	disabled: false,
	TouchableComponent: Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback,
}



const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
		paddingHorizontal: 12,
		paddingVertical: 8,
		backgroundColor: '#f7f5fa',
		borderWidth: 1,
		borderColor: '#ced3d9',
	},
    disabled: {
      	backgroundColor: '#D1D5D8',
	},
	loading:{
		marginRight:5
	},
    title: {
		backgroundColor: 'transparent',
		textAlign: 'center',
		color: '#222',
		fontSize:16
    },
    disabledTitle: {
      	color: '#F3F4F5',
	}
})


export default Button;