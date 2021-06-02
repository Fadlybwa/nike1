import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils';

const Link = ({title, desc}) => {
    return (
        <View style={styles.page}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{desc}</Text>
        </View>
    )
}


export default Link;
const styles = StyleSheet.create({
    page:{justifyContent:'center', flexDirection:'row' },
    text: {fontFamily:'Poppins-Regular', fontSize:12, color:colors.secondary, textAlign:'center'}
})
