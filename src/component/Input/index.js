import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors } from '../../utils'

const Input = ({label}) => {
    return (
        <View>
            <TextInput style={styles.input} placeholder={label}/>
        </View>
    )
}


export default Input;

const styles = StyleSheet.create({
    input: {
        backgroundColor:'white',
        borderWidth:1,
        borderColor:colors.text.secondary,
        borderRadius:5,
        paddingVertical:13,
        paddingHorizontal:16,
        letterSpacing:0.5, 
        fontFamily:'Poppins-Regular', color:colors.text.secondary,
    }
})
