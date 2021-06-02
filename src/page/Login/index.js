import React from 'react'
import { View, Text,StyleSheet, ScrollView,} from 'react-native'
import { ILLogoBlack } from '../../asset'
import { Input, Link } from '../../component'
import Button from '../../component/atoms/Button'
import Gap from '../../component/atoms/Gap'
import {colors} from '../../utils'

const Login = ({navigation}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.page}>
                <View style={styles.logo}>
                    <ILLogoBlack/>
                    <Text style={styles.title}>Selamat Datang</Text>
                    <Text style={styles.desc}>Masuk untuk melanjutkan</Text>
                </View>
                <View style={styles.form}>
                    <Input label='Masukkan Email'/>
                    <Gap height={8}/>
                    <Input label='Masukkan Password'/>
                </View>
                <View style={styles.button} >
                    <Button title='Masuk'/>
                    <Text style={styles.or}>Atau</Text>
                </View>
                <Gap height={16}/>
                <View>
                    <Button title='Masuk dengan Google' type='secondary'/>
                    <Gap height={8}/>
                    <Button title='Masuk dengan Facebook' type='secondary'/>
                </View>
                <Gap height={16}/>
                <Link title='Lupa Password'/>
                <Gap height={8}/>
                <Link title='Belum Punya Akun?' desc='Masuk'/>
            </View>
        </ScrollView>
    )
}

export default Login;

const styles = StyleSheet.create({
    page: {flex:1,padding:16, backgroundColor:'white',},
    logo: {justifyContent:'center', 
    alignItems:'center', 
    marginTop:50},
    form: {marginTop:28},
    button:{marginTop:16},
    or: {fontSize:14, 
        fontFamily:'Poppins-SemiBold',
        color:colors.text.secondary, 
        textAlign:'center', 
         marginTop:16},
    forget: {fontSize:12, 
        fontFamily:'Poppins-SemiBold', 
        textAlign:'center', 
        marginTop:20},
    notaccount: {
        fontSize:12,
        fontFamily:'Poppins-SemiBold',
        textAlign:'center',
        marginTop:2,
    },
    title: {fontSize:16, 
        fontFamily:'Poppins-SemiBold', 
        marginTop:15, 
        color:colors.text.primary, 
        letterSpacing:0.5},
    desc: {fontSize:12, 
        fontFamily:'Poppins-Regular', 
        color:colors.text.secondary, 
        marginTop:8, 
        letterSpacing:0.5},
    
})
