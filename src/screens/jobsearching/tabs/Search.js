import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { BG_COLOR } from '@/src/utils/Colors'
import NoLoginComponent from '@/src/common/NoLoginComponent'

const Search = () => {
  return (
    <View style={styles.container}>
      <NoLoginComponent desc={"Create an Account to Search and Apply for Jobs"} heading={'Browse and Apply for Job Opportunities'} />
    </View>
  )
}

export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
  }
})