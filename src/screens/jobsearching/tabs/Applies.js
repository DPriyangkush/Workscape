import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NoLoginComponent from '../../../common/NoLoginComponent'
import { BG_COLOR } from '@/src/utils/Colors'

const Applies = () => {
  return (
    <View>
      <NoLoginComponent desc={"Track all your jobs which you've applied previously but firstly, you'll need to create an Account!"} heading={'One place to track all your Application'} />
    </View>
  )
}

export default Applies;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  }
})