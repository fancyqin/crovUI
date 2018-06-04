import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
	StyleSheet,
	Text,
} from 'react-native';

class Icon extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const {
            code,
            style,
            size,
            color
        } = this.props;
        return(
            <Text 
            style={[styles.icon,{
                width: size,
                height:size,
                fontSize: size,
                lineHeight: size,
                color,
            },style]} 
            >{code}</Text>
        )
    }

}
Icon.propTypes = {
    code: PropTypes.string,
    size: PropTypes.number,
    color:PropTypes.string,
    style: Text.propTypes.style
}

Icon.defaultProps = {
    code: '&#xe040;',
    size: 16,
    color: '#555'
}

const styles = StyleSheet.create({
    icon: {
        width: Icon.defaultProps.size,
        height:Icon.defaultProps.size,
        fontSize: Icon.defaultProps.size,
        lineHeight: Icon.defaultProps.size,
        color: Icon.defaultProps.color,
        fontFamily: 'focusUED',
    }
})


export default Icon;