import PropTypes from 'prop-types';
import React,{PureComponent} from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ViewPropTypes
} from 'react-native';

import colors from '../common/Colors';
import {renderNode} from '../common/renderFunc'
import Icon from '../common/Icon'

console.disableYellowBox = true

class ListItem extends PureComponent{
    
    constructor(props){
        super(props)
    }

    render(){
        const {
            containerStyle,
            title,
            titleStyle,
            titleProps,
            subtitle,
            subtitleStyle,
            subtitleProps,
            leftIcon,
            leftElement,
            rightIcon,
            rightElement,
            rightTitle,
            rightTitleStyle,
            rightTitleProps,
            disabled,
            disabledStyle,
			onPress,
			contentContainerStyle,
            ...attributes
        } = this.props;
        
        let WrapComponent = onPress? TouchableOpacity: View;
        let onPressObj = onPress? {onPress,disabled}:{disabled};
        return (
            <WrapComponent {...attributes} {...onPressObj} >
                <View
                    style={[
						styles.container,
						containerStyle,
						disabled && disabledStyle,
					  ]}
                >
					{leftIcon && (
                        <Icon size={20} code={leftIcon} color="#555" style={{marginRight:10}}  />
                    )}
					{renderNode(leftElement)}
					<View style={[styles.lineContentContainer]}>
						{(title || subtitle) && (
						<View style={[styles.contentContainer, contentContainerStyle]}>
							{renderNode(title, titleProps, [styles.title, titleStyle])}
							{renderNode(subtitle, subtitleProps, [
							styles.subtitle,
							subtitleStyle,
							])}
						</View>
						)}

						{rightTitle && (
						<View style={styles.rightContentContainer}>
							{renderNode(rightTitle, rightTitleProps, [
							styles.title,
							styles.rightTitle,
							rightTitleStyle,
							])}
						</View>
						)}
						
						{renderNode(rightElement)}
						{rightIcon && (
							<Icon code="&#xe07c;" color="#555" size={16} style={{marginLeft:10 ,}} />
						)}

					</View>
                </View>
            </WrapComponent>
        )
    }

}

ListItem.propTypes = {
    containerStyle: ViewPropTypes.style,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    titleStyle: Text.propTypes.style,
    titleProps: PropTypes.object,
    subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    subtitleStyle: Text.propTypes.style,
    subtitleProps: PropTypes.object,
    leftIcon: PropTypes.string,
    leftElement: PropTypes.element,
    rightIcon: PropTypes.bool,
    rightElement: PropTypes.element,
    rightTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    rightTitleStyle: Text.propTypes.style,
    rightTitleProps: PropTypes.object,
    disabled: PropTypes.bool,
    disabledStyle: ViewPropTypes.style,
	onPress: PropTypes.func,
	contentContainerStyle: ViewPropTypes.style,
};

ListItem.defaultProps= {
	rightIcon: true
}
  

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		paddingLeft: 10,
	},
	title: {
		backgroundColor: 'transparent',
		color:'#222',
		fontSize: 16,
	},
	subtitle: {
		fontSize: 12,
		color:'#888',
		backgroundColor: 'transparent'
	},
	contentContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	lineContentContainer:{
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 0.5,
		borderColor: '#ced3d9',
		paddingVertical: 10,
		paddingRight:10,
	}
});

export default ListItem;
