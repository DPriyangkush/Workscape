import { View, Text, SafeAreaView, StyleSheet, Modal, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomTextInput from '@/src/common/CustomTextInput'
import { BG_COLOR } from '@/src/utils/Colors'
import CustomDropdown from '../../../common/CustomDropdown'
import CustomSolidBtn from '@/src/common/CustomSolidBtn'
import { useNavigation } from 'expo-router'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import {profiles} from '../../../utils/Profiles'
import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from '@/src/common/Loader'
import { useRoute } from '@react-navigation/native'


const EditJob = () => {
    const route = useRoute();
    const [jobTitle, setJobTitle] = useState(route.params.data.jobTitle);
    const [badJobTitle, setBadJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState(route.params.data.jobDescription);
    const [badJobDescription, setBadJobDescription] = useState('');
    const [experience, setExperience] = useState(route.params.data.experience);
    const [badExperience, setBadJobExperience] = useState('');
    const [salary, setSalary] = useState(route.params.data.salary);
    const [badSalary, setBadSalary] = useState('');
    const [company, setCompany] = useState(route.params.data.company);
    const [badCompany, setBadCompany] = useState('');
    const navigation = useNavigation();
    const [openCategoryModal, setCategoryModal] = useState(false)
    const [openSkillModal, setSkillModal] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('Select Category');
    const [badJobCategory, setBadJobCategory] = useState('');
    const [SelectedSkill, setSelectedSkill] = useState('Select Skill');
    const [badJobSkill, setBadJobSkill] = useState('');
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        profiles.map((item, index) => {
            if (item.category == route.params.data.category) {
                setSelectedCategory(index);
                profiles[index].keywords.map((x, y) => {
                    if (x[0] == route.params.data.skill){
                        setSelectedSkill(x[0]);
                    }
                });
            }
        });
    }, []);


    const postJob = async () => { // Make the function async
      try {
          setLoading(true); // Set loading before starting the async process
          
          // Fetch USER_ID and NAME from AsyncStorage
          const id = await AsyncStorage.getItem("USER_ID");
          const name = await AsyncStorage.getItem("NAME");
  
          // Add the job posting to Firestore
          await firestore().collection("jobs").doc(route.params.data.id).update({
              postedBy: id,
              posterName: name,
              jobTitle,
              jobDescription,
              experience,
              salary,
              company,
              skill: SelectedSkill,
              category: profiles[selectedCategory].category,
          });
  
          // Navigate back after successful post
          setLoading(false);
          navigation.goBack();
      } catch (err) {
          // Handle errors
          setLoading(false);
          console.error("Error posting job:", err);
      }
  };
  
  const validate =()=> {
    let validJobTitle = true
    let validJobDescription = true
    let validJobCategory = true
    let validSkill = true
    let validExperience = true
    let validPackage = true
    let validCompany = true

    if (jobTitle == ''){
      validJobTitle = false;
      setBadJobTitle('Please Enter Job Title')
    }else if(jobTitle != ''){
      validJobTitle=true;
      setBadJobTitle('');
    }

    if (jobDescription == ''){
      validJobDescription = false;
      setBadJobDescription('Please Enter Job Description')
    }else if(jobDescription != '' && jobDescription.length < 50){
      validJobDescription=false;
      setBadJobDescription('Minimum 50 Characters');
    }else if(jobDescription != '' && jobDescription.length >= 50){
      validJobDescription=true;
      setBadJobDescription('');
    }

    if(selectedCategory == 'Select Category'){
      validJobCategory=false;
      setBadJobCategory('Please select Job Category')
    }else if(selectedCategory != 'Select Category'){
      validJobCategory=true;
      setBadJobCategory('');
    }

    if(SelectedSkill == 'Select Skill'){
      validSkill=false;
      setBadJobSkill('Please select Job Skill')
    }else if(SelectedSkill != 'Select Skill'){
      validSkill=true;
      setBadJobSkill('');
    }

    let expRegx = /^\d+$/;
    if (experience == ''){
      validExperience = false;
      setBadJobExperience('Please Enter Experience')
    }else if(experience != '' && experience.length > 2){
      validExperience=false;
      setBadJobExperience('Enter a valid Experience');
    }else if(experience != '' && !experience.match(expRegx)){
      validExperience=false;
      setBadJobExperience('Enter a valid Experience');
    }else if(experience != '' && experience.match(expRegx)){
      validExperience=true;
      setBadJobExperience('');
    }

    
    if (salary == ''){
      validPackage = false;
      setBadSalary('Please Enter Salary Package')
    }else if(salary != '' && !salary.match(expRegx)){
      validPackage=false;
      setBadSalary('Enter a valid Salary Package');
    }else if(salary != '' && salary.match(expRegx)){
      validPackage=true;
      setBadSalary('');
    }

    if (company == ''){
      validCompany = false;
      setBadCompany('Please Enter Company Name')
    }else if(company != ''){
      validCompany=true;
      setBadCompany('');
    }

    return validJobTitle && validJobDescription && validJobCategory && validSkill && validExperience && validPackage && validCompany

  }

  return (
    <SafeAreaView style={styles.container}>
        <CustomTextInput value={jobTitle} 
          onChangeText={txt => { setJobTitle(txt); }} 
          title={"Job Title"} 
          bad={badJobTitle != '' ? true : false}
          placeholder={"Ex. Web Dev"}  />
          {badJobTitle != '' && <Text style={styles.errorMsg}>{badJobTitle}</Text>}
        
        <CustomTextInput value={jobDescription} 
          onChangeText={txt => { setJobDescription(txt); }} 
          title={"Job Description"} 
          bad={badJobDescription != '' ? true : false}
          placeholder={"Provide a detailed description of job"}  />
          {badJobDescription != '' && <Text style={styles.errorMsg}>{badJobDescription}</Text>}

        <CustomDropdown value={jobDescription} 
          onChangeText={txt => { setJobDescription(txt); }} 
          title={"Category"} 
          bad={badJobCategory != '' ? true : false}
          placeholder={selectedCategory =='Select Category'?'Select Category' : profiles[selectedCategory].category}
          onClick={() => {
            setCategoryModal(true);
          }}  />
          {badJobCategory != '' && <Text style={styles.errorMsg}>{badJobCategory}</Text>}


        <CustomDropdown value={jobDescription} 
          onChangeText={txt => { setJobDescription(txt); }} 
          title={"Skills"} 
          bad={badJobSkill != '' ? true : false}
          placeholder={SelectedSkill}
          onClick={() => {
            setSkillModal(true);
          }}  />
          {badJobSkill != '' && <Text style={styles.errorMsg}>{badJobSkill}</Text>}
        

        <CustomTextInput value={experience} 
          onChangeText={txt => { setExperience(txt); }} 
          title={"Experience"} 
          bad={badExperience != '' ? true : false}
          placeholder={"Required Experience"}  
          keyboardType={'number-pad'} />
          {badExperience != '' && <Text style={styles.errorMsg}>{badExperience}</Text>}

        <CustomTextInput value={salary} 
          onChangeText={txt => { setSalary(txt); }} 
          title={"Package"} 
          bad={badSalary != '' ? true : false}
          placeholder={"Ex. 10L/Annum"}
          keyboardType={'number-pad'}  />
          {badSalary != '' && <Text style={styles.errorMsg}>{badSalary}</Text>}

        <CustomTextInput value={company} 
          onChangeText={txt => { setCompany(txt); }} 
          title={"Company Name"} 
          bad={company != '' ? true : false}
          placeholder={"Ex. Google"}  />
          {badCompany != '' && <Text style={styles.errorMsg}>{badCompany}</Text>}

        <CustomSolidBtn title={'Post Job'} onClick={() => {
          if(validate()){
            postJob();
          }
        }}/>
        <Modal visible={openCategoryModal} transparent style={{flex: 1}}>
          <View style={styles.ModalMainView}>
            <View style={styles.listingView}>
              <Text style={[styles.title, {marginTop: moderateScale(10)}]}>Select Category</Text>
              <FlatList data={profiles} renderItem={({item, index}) => {
                return(
                  <TouchableOpacity style={styles.profileItem} onPress={() => {
                    setSelectedCategory(index);
                    setCategoryModal(false);
                  }}>
                    <Text>{item.category}</Text>
                    
                    
                  </TouchableOpacity>
                  
                )
                
              }}/>
              
            </View>
          </View>
        </Modal>
        <Modal visible={openSkillModal} transparent style={{flex: 1}}>
          <View style={styles.ModalMainView}>
            <View style={styles.listingView}>
              <Text style={[styles.title, {marginTop: moderateScale(10)}]}>Select Category</Text>
              <FlatList data={selectedCategory == 'Select Category' ? profiles[0].keywords : profiles[selectedCategory].keywords} renderItem={({item, index}) => {
                return(
                  <TouchableOpacity style={styles.profileItem} onPress={() => {
                    setSelectedSkill(item[0]);
                    setSkillModal(false);
                  }}>
                    <Text>{item[0]}</Text>
                    
                    
                  </TouchableOpacity>
                  
                )
                
              }}/>
              
            </View>
          </View>
        </Modal>
        <Loader visible={loading} />
    </SafeAreaView>
    
  )
}

export default EditJob;
const styles = StyleSheet.create({
    container: {
        backgroundColor: BG_COLOR,
        flex: 1,
    },
    title: {
      fontSize: moderateScale(20),
      alignSelf: 'center',
      fontWeight: '600',
      marginTop: verticalScale(20),
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

    profileItem: {
        width: '90%',
        height: verticalScale(40),
        justifyContent: 'center',
        paddingLeft: moderateScale(20),
        paddingTop: verticalScale(10),
        alignSelf: 'center',
        borderBottomWidth: .2,
    },
    errorMsg: {
      color: 'red',
      marginLeft: moderateScale(25),
    },
})