import React, { Component } from 'react'
import { Text,View ,TouchableOpacity,StyleSheet } from 'react-native'
import Icon from '../common/Icon'
import colors from '../common/Colors'


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
        borderColor: colors.border,
    },
    errorWrap:{
        borderBottomWidth:2,
        borderColor: colors.red
    },
    label:{
        fontSize:12,
        color: colors.border,
    },
    errorLabel:{
        color: colors.red
    },
    textWrap:{
        backgroundColor: 'transparent',
        width: '100%',
        paddingTop:4,
        paddingBottom: 8,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    text:{
        color: '#222',
        fontSize:16
    },
    errorMsg:{
        fontSize:12,
        color: colors.red,
        paddingTop: 4

    }
    
})