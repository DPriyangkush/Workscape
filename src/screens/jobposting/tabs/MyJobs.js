import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BG_COLOR, TEXT_COLOR } from '@/src/utils/Colors'
import { moderateScale } from 'react-native-size-matters'
import { useIsFocused } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'


const MyJobs = () => {
  const isFocused = useIsFocused();
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    getJobs();
  }, [isFocused]);
  const getJobs = async () => {
    let id = await AsyncStorage.getItem('USER_ID');
    firestore()
    .collection('jobs')
    .where('postedBy', '==', id)
    .get()
    .then(data => {
      let temp = [];
      data.docs.forEach(item => {
        temp.push({...item.data(), id: item.id});
      });
      setJobs(temp)
    });

  }
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>WorkScape</Text>
      <FlatList data={jobs} renderItem={({item, index}) => {
        return(<View style={styles.jobItem}>
          <Text style={styles.title}>{item.jobTitle}</Text>
          <Text>{item.jobDescription}</Text>
          <Text>{item.salary + 'L/Year'}</Text>
          <Text>{item.category + ''}</Text>
          <Text>{item.skill}</Text>
        </View>)
      }} />
      
    </View>
    
  )
  
}

export default MyJobs
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
    jobItem: {
        width: '90%',
        alignSelf: 'center',
        marginTop: moderateScale(20),
        backgroundColor: '#f3f3f3',
        borderRadius: moderateScale(20),
        padding: moderateScale(15),
    },
    title: {
      fontSize: moderateScale(20),
      fontWeight: '600',
    }
})