import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors, { BG_COLOR, TEXT_COLOR } from "../../utils/Colors";
import { StyleSheet } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source = {require('../../images/logows.png')} style={styles.logo} />
      <Text style={styles.name}>WorkScape</Text>
      <Text style={styles.slogan}>Connecting you with Opportunities.</Text>
    </View>
  )
}

export default Splash
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: BG_COLOR
    },
    logo:{
        width: scale(100),
        height: verticalScale(120),
    },
    name:{
        fontSize:moderateScale(30),
        fontWeight: '600',
        marginTop: moderateVerticalScale(10),
        color: TEXT_COLOR,
    },
    slogan:{
        fontSize: moderateScale(16),
        fontStyle: 'italic',
        position: 'absolute',
        fontWeight: '600',
        bottom: moderateVerticalScale(50),
    }
})