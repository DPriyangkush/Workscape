import { View, Text, StyleSheet, SafeAreaView, Image, Alert } from 'react-native'
import React  from 'react'
import { BG_COLOR } from '@/src/utils/Colors'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import CustomTextInput from "../../common/CustomTextInput"
import CustomSolidBtn from "../../common/CustomSolidBtn"
import CustomBorderBtn from "../../common/CustomBorderBtn"
import { useNavigation } from 'expo-router'
import { useState } from 'react'

const LoginForCompany = () => {
    const navigation=useNavigation()
    const [email, setEmail] = useState('')
    const [badEmail, setBadEmail] = useState('')

    const [password, setPassword] = useState('')
    const [badPassword, setBadPassword] = useState('')

    const validate = () => {
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let validEmail = true;
        let validPass = true;
    
    
        if (email == '') {
          validEmail = false;
          setBadEmail('Please Enter Email');
        } else if (email != '' && !email.toString().match(emailRegex)) {
          validEmail = false;
          setBadEmail('Please Enter Valid Email');
        } else if (email != '' && email.toString().match(emailRegex)) {
          validEmail = true;
          setBadEmail('');
        }
    
        if (password == '') {
          validPass = false;
          setBadPassword('Please create a password');
        } else if (password != '' && password.length < 6) {
          validPass = false;
          setBadPassword('Password length should be greater than 6');
        }
        else if (password != '' && password.length >= 6) {
          validPass = true;
          setBadPassword('');
        }
    
        return validEmail && validPass
      }

  return (
    <SafeAreaView style={styles.container}>
        <Image source={require('../../images/logows.png')} style={styles.logo}/>
        <Text style={styles.title}>Login</Text>
        <CustomTextInput value={email} onChangeText={txt => { setEmail(txt); }} title={"Email"} placeholder={"xyz@gmail.com"} bad={badEmail != '' ? true : false} />
        {badEmail != '' && <Text style={styles.errorMsg}>{badEmail}</Text>}
        <CustomTextInput value={password} onChangeText={txt => { setPassword(txt); }} title={"Password"} placeholder={"*********"} bad={badPassword != '' ? true : false} />
        {badPassword != '' && <Text style={styles.errorMsg}>{badPassword}</Text>}
        <Text style={styles.forgotPassword}>Forgot Password</Text>
        <CustomSolidBtn onClick={() => {
           if(validate()){
            Alert.alert('Logged IN!')
           }
        }} title={"Login"}/>
        <CustomBorderBtn onClick={() => {
            navigation.navigate("SignUpForCompany")
        }} title={"Create Account"}/>
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
    },
    forgotPassword: {
        alignSelf: "flex-end",
        marginRight: moderateScale(20),
        marginTop: moderateVerticalScale(10),
        fontWeight: "500",
        fontSize: moderateScale(12),

    },
    errorMsg: {
        marginLeft: moderateScale(35),
        color: 'red',
    }
})