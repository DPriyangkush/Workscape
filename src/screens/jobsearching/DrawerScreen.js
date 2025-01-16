import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React,  { useState }from 'react'
import { BG_COLOR } from '@/src/utils/Colors'
import { scale, verticalScale } from 'react-native-size-matters'
import { useNavigation } from 'expo-router'
import Home from '../jobsearching/tabs/Home'
import Search from '../jobsearching/tabs/Search'
import Applies from '../jobsearching/tabs/Applies'
import Profile from '../jobsearching/tabs/Profile'


const DrawerScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {selectedTab == 0 ? <Home />: selectedTab == 1 ? <Search /> : selectedTab == 2 ? <Applies /> :  <Profile  onJobsClick={() => {setSelectedTab(0)}}/>}
      <View style={styles.bottomNavView}>
        <TouchableOpacity style={styles.tabs} onPress={() => {
          setSelectedTab(0)
        }}>
          <Image source={require('../../images/home.png')} style={[styles.tabIcon, { tintColor: selectedTab == 0 ? '#8B5DFF' : 'rgba(15, 15, 15, 0.8)' },]} />
          {selectedTab === 0 && <View style={styles.selectedIndicator} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabs} onPress={() => {
          setSelectedTab(1)
        }}>
          <Image source={require('../../images/search.png')} style={[styles.tabIcon, { tintColor: selectedTab == 1 ? '#8B5DFF' : 'rgba(15, 15, 15, 0.8)' },]} />
          {selectedTab === 1 && <View style={styles.selectedIndicator} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabs} onPress={() => {
          setSelectedTab(2)
        }}>
          <Image source={require('../../images/applied.png')} style={[styles.tabIcon, { tintColor: selectedTab == 2 ? '#8B5DFF' : 'rgba(15, 15, 15, 0.8)' },]} />
          {selectedTab === 2 && <View style={styles.selectedIndicator} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabs} onPress={() => {
          setSelectedTab(3)
        }}>
          <Image source={require('../../images/user.png')} style={[styles.tabIcon, { tintColor: selectedTab == 3 ? '#8B5DFF' : 'rgba(15, 15, 15, 0.8)' },]} />
          {selectedTab === 3 && <View style={styles.selectedIndicator} />}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DrawerScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  bottomNavView: {
    width: '100%',
    height: verticalScale(60),
    backgroundColor: '#FFF7D1',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: { x: 0, y: 1 },
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 10,
  },
  tabs: {
    width: '25%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    
  },
  tabIcon: {
    width: scale(24),
    height: scale(24),
  },
  selectedIndicator: {
    width: '30%',
    height: 4,
    backgroundColor: '#8B5DFF',
    borderRadius: 2,

  }
})