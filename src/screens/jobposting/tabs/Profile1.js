import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { TEXT_COLOR, BG_COLOR } from '@/src/utils/Colors'
import { useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile1 = () => {
  const [name, setName] = useState('');
  const isFocused = useIsFocused()
  useEffect(() => {
    getData()
  }, [isFocused])
  const getData = async () => {
    setName(await AsyncStorage.getItem('NAME'));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>WorkScape</Text>
      <TouchableOpacity>
        <Image source={require('../../../images/account.png')} style={styles.profileImg} />
      </TouchableOpacity>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.changeProfile}>Edit Name</Text>
      <Text style={styles.changeProfile}>Change Profile Picture </Text>
    </View>
  )
}

export default Profile1
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  heading: {
    fontSize: moderateScale(25),
    marginLeft: moderateScale(10),
    fontWeight: '600',
    color: TEXT_COLOR,
    
},
profileImg: {
  width: scale(80),
  height: scale(80),
  borderRadius: scale(50),
  alignSelf: 'center',
  marginTop: moderateScale(20)
},
changeProfile: {
  alignSelf: 'center',
  marginTop: moderateScale(10),
  color: TEXT_COLOR,
  fontSize: moderateScale(16),
},
name: {
  fontSize: moderateScale(25),
  fontWeight: '600',
  alignSelf: 'center',
  marginTop: moderateScale(10),
}
})