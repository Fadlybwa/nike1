import React from 'react'
import { StyleSheet, Text, TouchableOpacity,} from 'react-native'
import { IconAkun,IconAkunActive,IconDiskon, IconDiskonActive, IconExplore, IconExploreActive, IconHome, IconHomeActive, IconKeranjang, IconKeranjangActive } from '../../../asset'

const TabItem = ({title,active,onPress,onLongPress}) => {
    const Icon = () => {
        if(title === 'Home') {
            return active ? <IconHomeActive/> : <IconHome/>
        }
        if(title === 'Explore'){
            return active ? <IconExploreActive/> : <IconExplore/>
        }
        if(title === 'Keranjang') {
            return active ? <IconKeranjangActive/> : <IconKeranjang/>
        }
        if(title === 'Diskon'){
            return active ? <IconDiskonActive/> : <IconDiskon/>
        }
        if(title === 'Akun') {
            return active ? <IconAkunActive/> : <IconAkun/>
        }
        return <IconHome/>
    };


    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon/>
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}


export default TabItem;

const styles = StyleSheet.create({
    container:{alignItems:'center',},
    text: (active) => (
        {fontFamily:active ? 'Poppins-SemiBold' : 'Poppins-Regular', 
        fontSize:10, color:active ? '#333' : '#9098B1'}
    )
})
