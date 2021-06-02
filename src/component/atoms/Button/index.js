import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../../utils';

const Button = ({type, title, onPress}) => {
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    
    )
}

export default Button;

const styles = StyleSheet.create({
    container: type => ( {
            backgroundColor: type === 'secondary' ? colors.button.primary: '#333',paddingVertical:16, height:57, borderRadius:5, borderWidth: type === 'secondary'? 1 : 0, borderColor: type === 'secondary' ? '#9098B1' : '#333',
        }
    ),
    text: type => (
        {fontSize:14, fontFamily:'Poppins-SemiBold', color: type === 'secondary' ?colors.button.secondary : 'white', textAlign:'center', letterSpacing:0.5}
    ),
})
