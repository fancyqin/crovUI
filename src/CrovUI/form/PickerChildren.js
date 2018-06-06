import React, { Component } from 'react'
import { Text,View ,TouchableOpacity,StyleSheet } from 'react-native'
import Icon from '../common/Icon'



export default PickerChildren = props => {
    return (
        <View style={styles.wrap}>
            {props.label && (
                <Text style={styles.label}>
                    {props.label}
                </Text>
            )}
            <TouchableOpacity
                onPress={props.onClick}
                style ={styles.textWrap}
            >   
                <Text style={styles.text}>{props.extra}</Text>
                <Icon size={20} color='#555' code="&#xe006;" />
            </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    wrap:{
        paddingTop: 16,
        borderBottomWidth:0.5,
        borderColor: 'rgba(0, 0, 0, 0.38)',
    },
    label:{
        fontSize:12,
        color: 'rgba(0, 0, 0, 0.38)',
    },
    textWrap:{
        backgroundColor: '#fff',
        width: '100%',
        paddingTop:4,
        paddingBottom: 8,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    text:{
        color: 'rgba(0, 0, 0, .87)',
        fontSize:16
    },
    
})