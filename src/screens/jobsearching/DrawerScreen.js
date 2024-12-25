import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { BG_COLOR } from '@/src/utils/Colors'
import { scale, verticalScale } from 'react-native-size-matters'


const DrawerScreen = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.bottomNavView}>
        <TouchableOpacity style={styles.tabs}>
          <Image source={require('../../images/home-3-line.png')} style={styles.tabIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabs}>
          <Image source={require('../../images/search-2-line.png')} style={styles.tabIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabs}>
          <Image source={require('../../images/jobs.png')} style={styles.tabIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabs}>
          <Image source={require('../../images/user-3-line.png')} style={styles.tabIcon} />
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
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  tabIcon: {
    width: scale(24),
    height: scale(24),
  }
})