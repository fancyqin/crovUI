import PropTypes from 'prop-types';
import React, { Component } from 'react';

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

class Button extends Component{
    constructor(props){
        super(props);
	}
	
	render(){
		const {
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

		const iconContent = (
			<Icon code={icon} {...iconProps} style={[styles.icon,iconStyle]} />
		)
		
		return (
			<TouchableComponent 
				style={[
					styles.button,
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
				{!loading &&
				!!title && (
				<Text style={[
						styles.title,
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
	title: 'Button',
	icon: false,
	iconRight: false,
	loadingProps:{
		color: 'white',
		size:'small'
	},
	iconProps:{
		color: 'white',
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
		backgroundColor: colors.main,
		minWidth: 80,
		padding: 8
	},
    disabled: {
      	backgroundColor: '#D1D5D8',
    },
    title: {
      backgroundColor: 'transparent',
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
    disabledTitle: {
      	color: '#F3F4F5',
    },
    iconContainer: {
      	marginHorizontal: 5,
    }
})

export default Button;

