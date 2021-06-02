import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import { Dummy2, IconStar } from '../../../asset';
import { colors } from '../../../utils';

const CardList = () => {
    return (
        <>
        <TouchableOpacity>
                <View style={styles.container}>
                    <Image source={Dummy2} style={styles.nike}/>
                    <Text style={styles.title}>Nike Air max 270 React ENG</Text>
                    <View style={styles.star}>
                        <IconStar/>
                        <IconStar/>
                        <IconStar/>
                        <IconStar/>
                    </View>
                    <Text style={styles.price}>
                        Rp.40.000.000
                    </Text>
                </View>
        </TouchableOpacity>
            
        </>
    )
}


export default CardList;
const styles = StyleSheet.create({
    container:{
        borderRadius:5,
        borderWidth:1,
        borderColor:'#EBF0FF',
        marginRight:8},
    nike:{
        width:140,
        height:140,
        marginVertical:12,
        marginHorizontal:10,
    },
    title:{
        marginHorizontal:16,
        fontFamily:'Poppins-SemiBold', 
        letterSpacing:0.2,
        marginVertical:8,
        maxWidth:130
    },
    star:{
        flexDirection:'row',
        marginHorizontal:16,
    },
    price:{
        fontFamily:'Poppins-SemiBold', 
        fontSize:12,
        color:colors.text.secondary,
        marginHorizontal:16, 
        marginVertical:16,
    }
})
