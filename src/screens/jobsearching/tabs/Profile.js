import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NoLoginComponent from '@/src/common/NoLoginComponent'
import { BG_COLOR } from '@/src/utils/Colors'

const Profile = () => {
  return (
    <View style={styles.container}>
      <NoLoginComponent desc={"Effortlessly Manage Your Profile!"} heading={'Manage your Professional Portfolio'} />
    </View>
  )
}

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  }
})