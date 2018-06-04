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
import { Icon } from 'react-native-elements';


class Button extends Component{
    constructor(props){
        super(props);
	}
	
	render(){
		const {
			TouchableComponent,
			containerStyle,
			onPress,
			buttonStyle,
			loading,
			loadingStyle,
			loadingProps,
			title,
			titleProps,
			titleStyle,
			icon,
			iconRight,
			disabled,
			disabledStyle,
			disabledTitleStyle,
		} = this.props;

		
		return (
			<View style={containerStyle}>
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
						<Icon />
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

				</TouchableComponent>
			</View>
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
	containerStyle: ViewPropTypes.style,
	icon: PropTypes.string,
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
	TouchableComponent: Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback,
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        backgroundColor: colors.main,
    },
    disabled: {
      	backgroundColor: '#D1D5D8',
    },
    title: {
      backgroundColor: 'transparent',
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
      padding: 8
    },
    disabledTitle: {
      	color: '#F3F4F5',
    },
    iconContainer: {
      	marginHorizontal: 5,
    }
})

export default Button;

