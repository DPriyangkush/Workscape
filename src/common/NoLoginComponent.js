import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { BG_COLOR } from '../utils/Colors';
import { moderateScale } from 'react-native-size-matters';
import CustomSolidBtn from './CustomSolidBtn';
import { useNavigation } from 'expo-router';


const NoLoginComponent = ({heading, desc}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.heading}>{heading ? heading : ''}</Text>
      <Text style={styles.desc}>{desc ? desc : ''}</Text>
      <CustomSolidBtn title={'Login'} onClick={() => {
        navigation.navigate('LoginForUser')
      }} />
      <View style={styles.signUpView}>
        <Text style={styles.text1}>{"Don't have an Account?"}</Text>
        <Text style={styles.text2} onPress={() => {
          navigation.navigate('SignupForUser')
        }}>{"Create Account"}</Text>
      </View>
    </View>
  )
}

export default NoLoginComponent;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BG_COLOR,
    },
    heading: {
        fontSize: moderateScale(25),
        alignSelf: 'center',
        width: '90%',
        marginTop: moderateScale(10),
        fontWeight: '700',
        textAlign: 'center'
    },
    desc: {
        width: "80%",
        alignSelf: 'center',
        fontSize: moderateScale(12),
        textAlign: 'center',
        marginTop: moderateScale(10),
    },
    signUpView: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: '90%',
        marginTop: moderateScale(30),
        justifyContent: 'center',
    }, 
    text1: {
        fontWeight: '500',
        fontSize: moderateScale(16),
    },
    text2: {
        fontWeight: '700',
        fontSize: moderateScale(16),
        marginLeft: moderateScale(5),
        textDecorationLine: "underline"
    } 
})