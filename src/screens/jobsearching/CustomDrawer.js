import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { BG_COLOR, TEXT_COLOR } from '@/src/utils/Colors'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import { FlatList } from 'react-native-gesture-handler'


const CustomDrawer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
      <Image source={require('../../images/profile.png')} style={styles.profile} />
      <View>
        <Text style={styles.heading}>Build Your Profile</Text>
        <Text style={styles.subHeading}>Connecting you with opportunities at WorkScape!</Text>
      </View>
      </View>
      
      <View style={styles.btnViews}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={[styles.btnText, {color: BG_COLOR}]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SignupBtn}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.seperator}></View>

      <FlatList 
      data={[{title: 'Rate us', icon: require('../../images/contact_us.png')}, {title: 'Theme', icon: require('../../images/theme.png')}, {title: 'Know More', icon: require('../../images/knowmore.png')}]}
      renderItem={({item, index}) => {
        return(
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeftView}>
              <Image source={item.icon} style={styles.menuItemIcon} />
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <Image source={require('../../images/right.png')} />
          </TouchableOpacity>
        )
      }} />
    </SafeAreaView>
  )
}

export default CustomDrawer
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR
  },
  profile: {
    width: scale(50),
    height: scale(50),
    marginLeft: moderateScale(10),
    marginTop: verticalScale(20),
  },
  topView: {
    flexDirection: 'row',
    marginTop: moderateScale(10)
  },
  heading: {
    fontSize: 18,
    width: '70%',
    fontWeight: '700',
    marginLeft: moderateScale(10),
    marginTop: moderateScale(20),

  },
  subHeading: {
    fontSize: moderateScale(12),
    width: '60%',
    marginLeft: moderateScale(10),
    marginTop: moderateScale(2),
  },
  btnViews: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    marginTop: moderateVerticalScale(20),
  },
  loginBtn: {
    width: '40%',
    height: verticalScale(30),
    backgroundColor: TEXT_COLOR,
    borderWidth: 1,
    borderRadius: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center'
  },
  SignupBtn: {
    width: '40%',
    height: verticalScale(30),
    borderColor: TEXT_COLOR,
    borderWidth: 1,
    borderRadius: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontWeight: '500',
    fontSize: moderateScale(15),
  },
  seperator: {
    width: "90%",
    height: moderateScale(.5),
    backgroundColor: TEXT_COLOR,
    alignSelf: "center",
    marginTop: moderateScale(20),
  },
  menuItem: {
    width: "90%",
    alignSelf: 'center',
    height: verticalScale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItemLeftView: {
    flexDirection: 'row',
    alignItems: "center",
  },
  menuItemIcon: {
    width: scale(24),
    height: scale(24),
  },
  title: {
    fontSize: moderateScale(15),
    fontWeight: 600,
    marginLeft: moderateScale(10),
  }
})