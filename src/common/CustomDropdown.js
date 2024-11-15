import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import { BG_COLOR } from '../utils/Colors';



const CustomDropdown = ({title, placeholder, bad, onClick}) => {
  return (
    <TouchableOpacity style={[styles.input,{borderColor:bad?'red':'#9e9e9e'}]} onPress={() => {
      onClick()
      }}>
      <Text style={[styles.title, {color:bad?'red':'black'}]}>{title}</Text>
      <Text style={{color:placeholder.includes('Select') ? '#9e9e9e' :'black'}}>{placeholder}</Text>
      <Image source={require('../images/down.png')} style={styles.icon} />
    </TouchableOpacity>
  )
}

export default CustomDropdown;
const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: verticalScale(42),
        borderWidth: 0.4,
        alignSelf: 'center',
        marginTop: moderateVerticalScale(20),
        borderRadius: moderateScale(20),
        justifyContent: "center",
        paddingLeft: moderateScale(15),
        paddingRight: moderateScale(15),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    },
    icon: {
        width: scale(20),
        height: scale(20),
    }
    
})