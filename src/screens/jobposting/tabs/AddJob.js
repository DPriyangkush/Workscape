import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '@/src/common/CustomTextInput'
import { BG_COLOR } from '@/src/utils/Colors'

const AddJob = () => {
    const [jobTitle, setJobTitle] = useState('')
  return (
    <SafeAreaView style={styles.container}>
        <CustomTextInput value={jobTitle} onChangeText={txt => { setJobTitle(txt); }} title={"Job Title"} placeholder={"Job Title"}  />
    </SafeAreaView>
  )
}

export default AddJob;
const styles = StyleSheet.create({
    container: {
        backgroundColor: BG_COLOR,
        flex: 1,
    }
})