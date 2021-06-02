import React from 'react'
import { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { ILLogo } from '../../asset'

const Splash = ({navigation}) => {
    useEffect ( () => {
        setTimeout( () => {
            navigation.replace('Login');
        }, 3000)
    }, []);
    return (
        <View  style={styles.page}>
            <ILLogo/>
        </View>
    )
}



export default Splash;
const styles = StyleSheet.create({
    page: {
        flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#333333'
    }
})
