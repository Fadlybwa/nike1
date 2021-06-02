import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Dummy1 } from '../../../asset';
import { colors } from '../../../utils';

const CardFlash = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.shoes} source={Dummy1}/>
                <Text style={styles.title}>FS - Nike Max 270 React Navigation</Text>
                <Text style={styles.price}>Rp.500.000</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CardFlash;
const styles = StyleSheet.create({
    container:{
        width:140, 
        height:215, 
        borderRadius:5, 
        borderWidth:0.5, 
        borderColor:'#EBF0FF',
        marginRight:16},
    shoes:{
        width:115, 
        height:115, 
        marginHorizontal:10,
        marginVertical:10},
    title:{
        fontFamily:'Poppins-SemiBold', 
        fontSize:12,
        maxWidth:115,
        marginHorizontal:10, 
        textAlign:'left',
        marginTop:6,
        letterSpacing:0.2,
        color:colors.text.primary},
    price:{
        fontFamily:'Poppins-SemiBold', 
        fontSize:11, 
        color:colors.text.secondary,
        marginHorizontal:10,
        marginTop:8,
        letterSpacing:0.5}
})
