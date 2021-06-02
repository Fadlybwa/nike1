import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { TabItem } from '../../atoms';

const BottomNavigator = ({ state, descriptors, navigation,onPress,onLongPress }) => {
    return (
        <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
            <TabItem 
            key={index}
            title={label} 
            active={isFocused} 
            onPress={onPress} 
            onLongPress={onLongPress}/>
            
        );
      })}
    </View>
    )
}


export default BottomNavigator;
const styles = StyleSheet.create({
    container:{flexDirection:'row', 
    paddingHorizontal:16, 
    paddingVertical:16, 
    backgroundColor:'white', 
    justifyContent:'space-between',
    borderTopWidth:0.5, 
    borderTopColor:'#9098B1',
    }
})
