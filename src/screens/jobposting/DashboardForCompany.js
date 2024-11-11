import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { BG_COLOR, TEXT_COLOR } from '@/src/utils/Colors';
import { moderateScale, verticalScale, scale } from 'react-native-size-matters';

const DashboardForCompany = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.bottomTab} onPress={() => {
          setSelectedTab(0)
        }}>
          <Image source={require('../../images/home.png')} style={[styles.tabIcon, {tintColor: selectedTab == 0 ? '#8B5DFF' : 'rgba(15, 15, 15, 0.8)'},]} />
          {selectedTab === 0 && <View style={styles.selectedIndicator} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={() => {
          setSelectedTab(1)
        }}>
        <Image source={require('../../images/search-user.png')} style={[styles.tabIcon, {tintColor: selectedTab == 1 ? '#8B5DFF' : 'rgba(15, 15, 15, 0.8)'},]}/>
        {selectedTab === 1 && <View style={styles.selectedIndicator} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={() => {
          setSelectedTab(2)
        }}>
        <Image source={require('../../images/addition.png')} style={[styles.tabIcon, {tintColor: selectedTab == 2 ? '#8B5DFF' : 'rgba(15, 15, 15, 0.8)'},]}/>
        {selectedTab === 2 && <View style={styles.selectedIndicator} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={() => {
          setSelectedTab(3)
        }}>
        <Image source={require('../../images/chat.png')} style={[styles.tabIcon, {tintColor: selectedTab == 3 ? '#8B5DFF' : 'rgba(15, 15, 15, 0.8)'},]} />
        {selectedTab === 3 && <View style={styles.selectedIndicator} />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomTab} onPress={() => {
          setSelectedTab(4)
        }}>
        <Image source={require('../../images/user.png')} style={[styles.tabIcon, {tintColor: selectedTab == 4 ? '#8B5DFF' : 'rgba(15, 15, 15, 0.8)'},]} />
        {selectedTab === 4 && <View style={styles.selectedIndicator} />}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default DashboardForCompany;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  bottomView: {
    width: '100%',
    height: verticalScale(60),
    backgroundColor: '#FFF7D1',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: {x: 0, y: 1},
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 10,
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    
    
  },
  tabIcon: {
    width: scale(24),
    height: scale(24),
    
  },
  selectedIndicator: {
    width: '40%',
    height: 4,
    backgroundColor: '#8B5DFF',
    marginTop: 6,
    borderRadius: 2,
    
  }

})