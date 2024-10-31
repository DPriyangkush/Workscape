import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters';
import LoginForCompany from '../screens/jobposting/LoginForCompany';
import { BG_COLOR } from '../utils/Colors';
import { TextInput } from 'react-native-gesture-handler';

const CustomTextInput = ({title, placeholder}) => {
  return (
    <View style={styles.input}>
      <Text style={styles.title}>{title}</Text>
      <TextInput placeholder={placeholder}></TextInput>
    </View>
  )
}

export default CustomTextInput;
const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: verticalScale(45),
        borderWidth: 0.4,
        alignSelf: 'center',
        marginTop: moderateVerticalScale(20),
        borderRadius: moderateScale(20),
        justifyContent: "center",
        paddingLeft: moderateScale(15),
        paddingRight: moderateScale(15),
    },
    title: {
        alignSelf: "flex-start",
        marginLeft: moderateScale(20),
        top: -moderateVerticalScale(8),
        position: "absolute",
        backgroundColor: BG_COLOR,
        paddingLeft: moderateScale(10),
        paddingRight: moderateScale(10),

    },
    placeholder: {
        alignSelf: "flex-start",
        marginLeft: moderateScale(20),
        marginTop: moderateVerticalScale(10),
        backgroundColor: BG_COLOR,
        paddingLeft: moderateScale(10),
        paddingRight: moderateScale(10),
    }
    
})