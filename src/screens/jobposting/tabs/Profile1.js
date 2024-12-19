import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import { TEXT_COLOR, BG_COLOR } from '@/src/utils/Colors'
import { useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ProfileOptionItem from "../../../common/ProfileOptionItem"
import { useNavigation } from 'expo-router'

const Profile1 = ({onJobsClick}) => {
  const [name, setName] = useState('');
  const [jobs, setJobs] = useState('');
  const [profileImg, setProfileImg]=useState('');
  const navigation = useNavigation();
  const isFocused = useIsFocused()
  useEffect(() => {
    getData()
  }, [isFocused])
  const getData = async () => {
    setName(await AsyncStorage.getItem('NAME'));
    setJobs(await AsyncStorage.getItem("JOBS"));
    let img = await AsyncStorage.getItem('PROFILE_IMAGE');
    if (img != null){
      setProfileImg(img);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>WorkScape</Text>
      <TouchableOpacity>
        {profileImg != '' ? ( <Image source={{uri: profileImg}} style={styles.profileImg} /> ) : ( <Image source={require('../../../images/account.png')} style={styles.profileImg} /> )}
      </TouchableOpacity>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.changeProfile} onPress={() => {navigation.navigate('UpdateProfileForCompany')}}>Edit Name</Text>
      <Text style={styles.changeProfile} onPress={() => {navigation.navigate('ChangeProfilePicForCompany')}}>Change Profile Picture </Text>
      <View style={styles.optionArea}>
        <ProfileOptionItem icon={require('../../../images/jobs.png')} title={'My Jobs ('+jobs+")"} onClick={() => onJobsClick()}/>
        <ProfileOptionItem icon={require('../../../images/contact_us.png')} title={'Contact Us'} onClick={() => { } }/>
        <ProfileOptionItem icon={require('../../../images/theme.png')} title={'App Theme'} onClick={() => { } }/>
        <ProfileOptionItem icon={require('../../../images/logout.png')} title={'Logout'} onClick={() => { } }/>
      </View>
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
},
optionArea: {
  marginTop: moderateVerticalScale(70),
}
})