import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BG_COLOR, TEXT_COLOR } from '@/src/utils/Colors'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { useIsFocused } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from 'expo-router'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';


const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)


const MyJobs = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getJobs();
  }, [isFocused]);
  const getJobs = async () => {
    setLoading(true)
    let id = await AsyncStorage.getItem('USER_ID');
    firestore()
      .collection('jobs')
      .where('postedBy', '==', id)
      .get()
      .then(async (data) => {
        setLoading(false)
        let temp = [];
        data.docs.forEach(item => {
          temp.push({ ...item.data(), id: item.id });
        });
        await AsyncStorage.setItem("JOBS", temp.length + "")
        setJobs(temp)
      });

  }

  const deleteJob = id => {
    firestore()
      .collection('jobs')
      .doc(id)
      .delete()
      .then(() => {
        getJobs();
      });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>WorkScape</Text>
      {loading && (
        <View>
        <FlatList data={[1, 2, 3]} renderItem={({ item, index }) => {
          return (
            <View style={styles.loaderView}>
              <ShimmerPlaceholder style={styles.loaderTitle} />
              <ShimmerPlaceholder style={styles.loaderTitle} />
              <ShimmerPlaceholder style={styles.loaderTitle} />
              <ShimmerPlaceholder style={styles.loaderTitle} />
              <ShimmerPlaceholder style={styles.loaderTitle} />
              <View style={styles.loaderBottomView}>
                <ShimmerPlaceholder style={styles.loaderBtn} />
                <ShimmerPlaceholder style={styles.loaderBtn} />
              </View>

            </View>
          )
        }} />
      </View>
      )}
      
      {jobs.length > 0 ? (
        <FlatList data={jobs} renderItem={({ item, index }) => {
          return (<View style={styles.jobItem}>
            <Text style={styles.title}>{item.jobTitle}</Text>
            <Text style={styles.desc}>{item.jobDescription}</Text>
            <Text style={styles.salary}>{'Salary: ' + item.salary + 'L/Year'}</Text>
            <Text style={styles.salary}>{'Category: ' + item.category + ''}</Text>
            <Text style={styles.salary}>{'Skill: ' + item.skill}</Text>
            <View style={styles.bottomView}>
              <TouchableOpacity style={styles.deleteBtn} onPress={() => {
                deleteJob(item.id)
              }}>
                <Text style={{ color: 'red' }}>Delete Job</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.editBtn} onPress={() => {
                navigation.navigate("EditJob", { data: item });
              }}>
                <Text>Edit Job</Text>
              </TouchableOpacity>
            </View>
          </View>
          )
        }} />
      ) : <View style={styles.emptyView}>
        <Text style={styles.title}>No Jobs Posted</Text>
      </View>}


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
    backgroundColor: '#FFF7D1',
    borderRadius: moderateScale(20),
    padding: moderateScale(15),
    shadowColor: '#FFF7D1',
    shadowOpacity: 1,
    shadowOffset: { x: 0, y: 1 },
    elevation: -10,
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: '600',
  },
  desc: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    marginTop: moderateScale(5)
  },
  salary: {
    fontSize: moderateScale(15),
    fontWeight: '500',
    marginTop: moderateScale(5)
  },
  bottomView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: moderateScale(20),
    alignItems: 'center',
    marginTop: moderateScale(15),
  },
  editBtn: {
    width: '40%',
    height: verticalScale(30),
    borderWidth: 1,
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#403D35',

  },
  deleteBtn: {
    width: '40%',
    height: verticalScale(30),
    borderWidth: 1,
    borderRadius: moderateScale(10),
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',

  },
  emptyView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  loaderTitle: {
    width: '70%',
    height: verticalScale(20),
    borderRadius: moderateScale(10),
    marginTop: moderateScale(10),
  },
  loaderBottomView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: moderateScale(10),
  },
  loaderBtn: {
    width: '45%',
    height: verticalScale(30),
    borderRadius: moderateScale(10),
  }
})