import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { BG_COLOR } from '@/src/utils/Colors'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import CustomTextInput from "../../common/CustomTextInput"

const LoginForCompany = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Image source={require('../../images/logows.png')} style={styles.logo}/>
        <Text style={styles.title}>Login</Text>
        <CustomTextInput title={"Email"} placeholder={"xyz@gmail.com"} />
        <CustomTextInput title={"Password"} placeholder={"*********"} />
    </SafeAreaView>
  )
}

export default LoginForCompany;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BG_COLOR,
    },
    logo: {
        width: scale(65),
        height: scale(80),
        alignSelf: 'center',
        marginTop: moderateVerticalScale(60),
    },
    title: {
        fontSize: moderateScale(20),
        alignSelf: 'center',
        fontWeight: '600',
        marginTop: moderateVerticalScale(40),
    }
})