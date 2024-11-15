import { View, Text, SafeAreaView, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '@/src/common/CustomTextInput'
import { BG_COLOR } from '@/src/utils/Colors'
import CustomDropdown from '../../../common/CustomDropdown'
import CustomSolidBtn from '@/src/common/CustomSolidBtn'
import { useNavigation } from 'expo-router'
import { moderateScale } from 'react-native-size-matters'

const AddJob = () => {
    const [jobTitle, setJobTitle] = useState('')
    const [jobDescription, setJobDescription] = useState('');
    const [experience, setExperience] = useState('');
    const [salary, setSalary] = useState('');
    const [company, setCompany] = useState('');
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
        <CustomTextInput value={jobTitle} 
          onChangeText={txt => { setJobTitle(txt); }} 
          title={"Job Title"} 
          placeholder={"Ex. Web Dev"}  />
        
        <CustomTextInput value={jobDescription} 
          onChangeText={txt => { setJobDescription(txt); }} 
          title={"Job Description"} 
          placeholder={"Provide a detailed description of job"}  />

        <CustomDropdown value={jobDescription} 
          onChangeText={txt => { setJobDescription(txt); }} 
          title={"Select Skills"} 
          placeholder={"Select Skills"}
          onClick={() => {}}  />
        

        <CustomTextInput value={experience} 
          onChangeText={txt => { setExperience(txt); }} 
          title={"Experience"} 
          placeholder={"Required Experience"}  
          keyboardType={'number-pad'} />

        <CustomTextInput value={salary} 
          onChangeText={txt => { setSalary(txt); }} 
          title={"Package"} 
          placeholder={"Ex. 10L/Annum"}
          keyboardType={'number-pad'}  />

        <CustomTextInput value={company} 
          onChangeText={txt => { setCompany(txt); }} 
          title={"Company Name"} 
          placeholder={"Ex. Google"}  />

        <CustomSolidBtn title={'Post Job'} onClick={() => {}}/>
        <Modal visible transparent style={{flex: 1}}>
          <View style={styles.ModalMainView}>
            <View style={styles.listingView}>

            </View>
          </View>
        </Modal>
    </SafeAreaView>
  )
}

export default AddJob;
const styles = StyleSheet.create({
    container: {
        backgroundColor: BG_COLOR,
        flex: 1,
    },
    ModalMainView: {
        backgroundColor: 'rgba(0,0,0,.5)',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    listingView: {
        width: '90%',
        height: '80%',
        borderRadius: moderateScale(10),
        backgroundColor: BG_COLOR,
    },
})