import React, { Component } from 'react'
import { Text,View ,TouchableOpacity,StyleSheet } from 'react-native'
import Icon from '../common/Icon'



export default PickerChildren = props => {
    const {label,error,extra,onClick} = props;
    return (
        <View>
            <View style={[styles.wrap,error && styles.errorWrap]}>
                {label && (
                    <Text style={[styles.label,error && styles.errorLabel]}>
                        {label}
                    </Text>
                )}
                <TouchableOpacity
                    onPress={onClick}
                    style ={styles.textWrap}
                >   
                    <Text style={styles.text}>{extra}</Text>
                    <Icon size={20} color='#555' code="&#xe006;" />
                </TouchableOpacity>
            </View>
            {error && (
                <Text style={styles.errorMsg}>
                    {error}
                </Text>
            )}
        </View>
        
    )
}

const styles = StyleSheet.create({
    wrap:{
        paddingTop: 16,
        borderBottomWidth:0.5,
        borderColor: 'rgba(0, 0, 0, 0.38)',
    },
    errorWrap:{
        borderBottomWidth:2.5,
        borderColor: 'rgba(213, 0, 0, 1)'
    },
    label:{
        fontSize:12,
        color: 'rgba(0, 0, 0, 0.38)',
    },
    errorLabel:{
        color: 'rgba(213, 0, 0, 1)'
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
    errorMsg:{
        fontSize:12,
        color: 'rgba(213, 0, 0, 1)',
        paddingTop: 4

    }
    
})