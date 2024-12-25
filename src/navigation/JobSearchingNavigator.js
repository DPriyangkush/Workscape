import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Main from '../screens/jobsearching/Main'

const Stack = createStackNavigator()

const JobSearchingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Main' component={Main} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default JobSearchingNavigator