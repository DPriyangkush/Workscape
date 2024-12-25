import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerScreen from '../jobsearching/DrawerScreen';
import CustomDrawer from '../jobsearching/CustomDrawer';

const Drawer = createDrawerNavigator();

const Main = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/>}>
        <Drawer.Screen name='Drawer' component={DrawerScreen} options={{title: "WorkScape"}}/>
    </Drawer.Navigator>
  )
}

export default Main