import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerScreen from '../jobsearching/DrawerScreen';

const Drawer = createDrawerNavigator();

const Main = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='Drawer' component={DrawerScreen} options={{title: "WorkScape"}}/>
    </Drawer.Navigator>
  )
}

export default Main