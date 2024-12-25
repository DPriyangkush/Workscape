import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { BG_COLOR, TEXT_COLOR } from '@/src/utils/Colors'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from 'expo-router';


const SelectUser = () => {
    const navigation=useNavigation();
  return (
    <View style={styles.container}>
        <Image source={require('../../images/logows.png')} style={styles.logo} />
      <Text style={styles.title}>What are you looking for?</Text>
      <TouchableOpacity style={styles.wantToHire} onPress={() => {
        navigation.navigate("JobPostingNavigator")
      }}>
        <Text style={styles.btnText1}>Want to Hire</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wantToJob} onPress={() => {
        navigation.navigate("JobSearchingNavigator")
       }}>
        <Text style={styles.btnText2}>Want to get Job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SelectUser;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BG_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: moderateScale(20),
        fontWeight: '600',
    },
    wantToHire: {
        width: '90%',
        height: verticalScale(40),
        backgroundColor: TEXT_COLOR,
        borderRadius: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateVerticalScale(20),
    },
    wantToJob: {
        width: '90%',
        height: verticalScale(40),
        borderColor: TEXT_COLOR,
        borderWidth: 1,
        borderRadius: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateVerticalScale(10),
    },
    btnText1: {
        color: BG_COLOR,
        fontSize: moderateScale(15),
        fontWeight: '500',
    },
    btnText2: {
        color: TEXT_COLOR,
        fontSize: moderateScale(15),
        fontWeight: '500',
    },
    logo: {
        width: scale(65),
        height: scale(80),
        marginBottom: moderateVerticalScale(50),
    }
})