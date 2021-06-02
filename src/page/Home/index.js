import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Banner1, Banner2 } from '../../asset/dummy'
import { CardFlash, SeacrhBar } from '../../component/molecules'
import Gap from '../../component/atoms/Gap'
import CardList from '../../component/molecules/CardList'

const Home = ({navigation}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.page}>
                <SeacrhBar/>
                <Gap height={32}/>
                <Image style={styles.banner} source={Banner1}/>
                <View style={styles.flashsale}>
                    <Text style={styles.title}>Flash Sale</Text>
                    <Text>Lihat Semua</Text>
                </View>
                <Gap height={12}/>
                <ScrollView horizontal style={styles.card}>
                    <Gap width={2}/>
                    <CardFlash onPress={() => navigation.replace('Detail')}/>
                    <CardFlash/>
                    <CardFlash/>
                    <Gap width={12}/>
                </ScrollView>
                <View style={styles.flashsale}>
                    <Text style={styles.title}>Mega Sale</Text>
                    <Text>Lihat Semua</Text>
                </View>
                <Gap height={12}/>
                <ScrollView horizontal style={styles.card}>
                    <Gap width={2}/>
                    <CardFlash/>
                    <CardFlash/>
                    <CardFlash/>
                    <Gap width={12}/>
                </ScrollView>
                <Gap height={32}/>
                <Image style={styles.banner} source={Banner2}/>
                <Gap height={26}/>
                <View style={styles.cardlist}>
                    <CardList/>
                    <CardList/>
                </View>
                <Gap height={32}/>
                <View style={styles.cardlist}>
                    <CardList/>
                    <CardList/>
                </View>
            </View>
        </ScrollView>
    )
}

export default Home;

const styles = StyleSheet.create({
    page:{flex:1, backgroundColor:'white',
    padding:16},
    banner:{width:330, height:200, borderRadius:5},
    flashsale:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
    },
    title:{
        fontFamily:'Poppins-SemiBold', fontSize:14,letterSpacing:0.5
    },
    card:{flexDirection:'row',},
    cardlist:{ flexDirection:'row', }
})
