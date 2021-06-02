import React from 'react'
import { StyleSheet, Text, TextInput, View,} from 'react-native'
import { IconLove, IconNotif, IconSearch } from '../../../asset';

const SeacrhBar = () => {
    return (
        <View style={styles.page}>
            <View>
                <IconSearch style={styles.icon}/>
                <TextInput style={styles.seacrh} placeholder='Cari produk'/>
            </View>
            <View style={styles.notif}>
                <IconLove />
                <IconNotif style={styles.love}/>
            </View>
        </View>
    )
}


export default SeacrhBar;

const styles = StyleSheet.create({
    page:{
        marginTop:10,
    },
    icon:{position:'absolute', bottom:16,left:16 },
    seacrh:{
        width:260, 
        height:46, 
        fontFamily:'Poppins-Regular', 
        fontSize:12, paddingLeft:40, 
        borderWidth:0.5,
        borderRadius:5,
        borderColor:'#EBF0FF'},
    notif:{
        flexDirection:'row',
        position:'absolute',
        bottom:16,
        right:16,
        top:12,
    },
    love:{
        left:16
    
    }
})
