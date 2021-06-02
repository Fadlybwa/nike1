import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { Splash, Login, Register, Home, Explore, Keranjang, Diskon, Akun } from '../page';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { BottomNavigator, Detail } from '../component/molecules';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props}/>}>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Explore' component={Explore}/>
            <Tab.Screen name='Keranjang' component={Keranjang}/>
            <Tab.Screen name='Diskon' component={Diskon}/>
            <Tab.Screen name='Akun' component={Akun}/>
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='MainApp'>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}} />
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
            <Stack.Screen name='Register' component={Register} options={{headerShown: false}} />
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
            <Stack.Screen name='Detail' component={Detail} options={{headerShown: false}} />
            <Stack.Screen name='MainApp' component={MainApp} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}


export default Router;
