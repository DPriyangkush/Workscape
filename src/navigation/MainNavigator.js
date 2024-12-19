import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Splash from '../screens/onboarding/Splash'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import JobPostingNavigator from './JobPostingNavigator'
import JobSearchingNavigator from './JobSearchingNavigator'
import SelectUser from '../screens/onboarding/SelectUser'
import DashboardForCompany from '../screens/jobposting/DashboardForCompany'
import AddJob from '../screens/jobposting/tabs/AddJob'
import EditJob from '../../src/screens/jobposting/tabs/EditJob'
import UpdateProfileForCompany from '../screens/jobposting/UpdateProfileForCompany'

const STACK=createStackNavigator()
const MainNavigator = () => {
  return (
   <NavigationContainer independent={true}>
    <STACK.Navigator>
      <STACK.Screen name='Splash' component={Splash} options={{headerShown: false}} />
      <STACK.Screen name='DashboardForCompany' component={DashboardForCompany} options={{headerShown: false}} />
      <STACK.Screen name='SelectUser' component={SelectUser} options={{headerShown: false}} />
      <STACK.Screen name='JobPostingNavigator' component={JobPostingNavigator} options={{headerShown: false}} />
      <STACK.Screen name='JobSearchingNavigator' component={JobSearchingNavigator} options={{headerShown: false}} />
      <STACK.Screen name='AddJob' component={AddJob} options={{headerShown: true, title: 'Add New Job',  }} />
      <STACK.Screen name='EditJob' component={EditJob} options={{headerShown: true, title: 'Edit Job',  }} />
      <STACK.Screen name='UpdateProfileForCompany' component={UpdateProfileForCompany} options={{headerShown: true, title: 'Update Profile',  }} />
    </STACK.Navigator>
   </NavigationContainer>
  )
}

export default MainNavigator