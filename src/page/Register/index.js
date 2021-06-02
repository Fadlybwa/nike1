import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogoBlack } from '../../asset'
import { Gap, Input, Link } from '../../component'
import Button from '../../component/atoms/Button'
import {colors} from '../../utils'


const Register = ({navigation}) => {
    return (
        <View style={styles.page}>
           <View style={styles.content}>
                <ILLogoBlack/>
                <Text style={styles.title}> Selamat Datang</Text>
                <Text style={styles.desc}>Buat akun baru</Text>
           </View>
           <Gap height={28} />
           <View>
                <Input label='Nama Lengkap'/>
                <Gap height={16} />
                <Input label='Email Kamu'/>
                <Gap height={16} />
                <Input label='Password'/>
                <Gap height={16} />
                <Input label='Ulangi Password'/>
           </View>
           <Gap height={26}/>
           <Button title='Daftar'onPress={()=> navigation.navigate('Home')}/>
           <Gap height={24}/>
           <Link title='Belum Punya Akun?' desc='Masuk' />
        </View>
        
    )
}



export default Register;

const styles = StyleSheet.create({
    page:{padding:16,backgroundColor:'white', flex:1, },
    content:{alignItems:'center',marginTop:80},
    title: {fontSize:16, fontFamily:'Poppins-SemiBold', letterSpacing:0.5, marginTop:16, color:colors.text.primary},
    desc:{fontSize:12, fontFamily:'Poppins-Regular', color:colors.text.secondary, letterSpacing:0.5, marginTop:5}
})
