import { View, Text, StyleSheet,TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { BG_COLOR, TEXT_COLOR } from '@/src/utils/Colors'
import { moderateScale, scale, verticalScale, moderateVerticalScale } from 'react-native-size-matters'
import CustomSolidBtn from '@/src/common/CustomSolidBtn'

const Home = (  ) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} style={styles.searchBox}>
        <Image source={require('../../../images/search.png')} style={styles.icon} />
        <Text style={styles.placeholder}>Search Job...</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>{'You are one step away from getting a good Job'}</Text>
      <View style={styles.notes}>
        <Image source={require('../../../images/star.png')} style={styles.icon} />
        <Text style={styles.note}>{'Get Jobs after creating account'}</Text>
      </View>
      <View style={styles.notes}>
        <Image source={require('../../../images/star.png')} style={styles.icon} />
        <Text style={styles.note}>{'Chat directly with recruiter'}</Text>
      </View>

      <View style={styles.btnViews}>
              <TouchableOpacity style={styles.loginBtn}>
                <Text style={[styles.btnText, {color: BG_COLOR}]}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.SignupBtn}>
                <Text style={styles.btnText}>Register</Text>
              </TouchableOpacity>
            </View>

        <View style={styles.jobSearchCard}>
          <Image source={require('../../../images/searchmag.gif')} style={styles.gif} />
          <TextInput style={styles.input} placeholder='Enter Job Title' />
          <TextInput style={[styles.input, {marginTop: moderateScale(15)}]} placeholder='Preferred Location' />
          <CustomSolidBtn title={'Search Jobs'} onClick={() => {

          }} />
        </View>
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  searchBox: {
    width: '90%',
    height: verticalScale(40),
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: moderateScale(20),
    borderRadius: moderateScale(30),
    borderColor: TEXT_COLOR,
    flexDirection: 'row',
    paddingLeft: moderateScale(15),
    alignItems: 'center',
  },
  icon: {
    width: scale(20),
    height: scale(20),
    tintColor: '#8B5DFF',
  },
  placeholder: {
    marginLeft: moderateScale(10),
    color: '#8B5DFF',
  },
  heading: {
    color: TEXT_COLOR,
    fontWeight: '700',
    fontSize: moderateScale(20),
    alignSelf: 'center',
    width: '90%',
    marginTop: moderateScale(20),
  },
  notes: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: moderateScale(10)
  },
  note: {
    marginLeft: moderateScale(10),
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
    jobSearchCard: {
      width: '90%',
      height: verticalScale(200),
      alignSelf: 'center',
      marginTop: moderateScale(10),
      paddingBottom: moderateScale(20),
      borderRadius: moderateScale(10),
    },
    gif: {
      width: '60%',
      height: '60%',
      alignSelf: 'center',
    },
    input: {
      width: '90%',
      height: verticalScale(35),
      borderWidth: 1,
      alignSelf: 'center',
      borderRadius: moderateScale(15),
      paddingLeft: moderateScale(10),
    }
});