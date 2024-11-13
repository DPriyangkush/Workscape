import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '@/src/common/CustomTextInput'
import { BG_COLOR } from '@/src/utils/Colors'
import CustomDropdown from '../../../common/CustomDropdown'

const AddJob = () => {
    const [jobTitle, setJobTitle] = useState('')
    const [jobDescription, setJobDescription] = useState('');
    const [experience, setExperience] = useState('');
    const [salary, setSalary] = useState('');
    const [company, setCompany] = useState('');


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
          placeholder={"Select Skills"}  />
        

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