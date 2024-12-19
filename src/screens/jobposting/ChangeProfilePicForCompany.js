import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BG_COLOR } from '@/src/utils/Colors';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import CustomBorderBtn from '@/src/common/CustomBorderBtn';
import CustomSolidBtn from '@/src/common/CustomSolidBtn';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from 'expo-router';
import Loader from '@/src/common/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangeProfilePicForCompany = () => {
    const [imageData, setImageData] = useState(null);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const openGallery = async () => {
        try {
            const res = await launchImageLibrary({ mediaType: 'photo' });
            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.assets && res.assets.length > 0) {
                setImageData(res.assets[0]); // Only store the asset
            } else {
                Alert.alert('No Images', 'No images found in the gallery.');
            }
        } catch (error) {
            console.error('Error opening gallery:', error);
            Alert.alert('Error', 'Unable to open the gallery.');
        }
    };

    const openCamera = async () => {
        try {
            const res = await launchCamera({ mediaType: 'photo' });
            if (res.didCancel) {
                console.log('User cancelled camera');
            } else if (res.assets && res.assets.length > 0) {
                setImageData(res.assets[0]); // Only store the asset
            } else {
                Alert.alert('Error', 'No image captured.');
            }
        } catch (error) {
            console.error('Error opening camera:', error);
            Alert.alert('Error', 'Unable to open the camera.');
        }
    };

    const uploadPic = async() => {
        setLoading(true)
        const id = await AsyncStorage.getItem("USER_ID")
        const reference = storage().ref(imageData.assets[0].fileName);
        const pathToFile = imageData.assets[0].uri;

        await reference.putFile(pathToFile);
        const url = await storage().ref(imageData.assets[0].fileName).getDownloadURL();

        firestore()
            .collection('job_posters')
            .doc(id)
            .update({
                profileImage: url
                
            })
            .then(async() => {
                setLoading(false);
                await AsyncStorage.setItem('PROFILE_IMAGE', url)
                navigation.goBack();
            })
            .catch(error => {
                setLoading(false);
                console.log(error);

            });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={
                    imageData?.uri
                        ? { uri: imageData.uri }
                        : require('../../images/account.png')
                }
                style={styles.profile}
            />
            <CustomBorderBtn title={'Capture with Camera'} onClick={() => {openCamera()}} />
            <CustomSolidBtn title={'Upload from Gallery'} onClick={() => {openGallery()}} />
            <Text style={styles.pickBtnGallery} onPress={() => {
                uploadPic()
            }}> Upload</Text>
            <Loader visible={loading} />
        </SafeAreaView>
    );
};

export default ChangeProfilePicForCompany;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    profile: {
        width: '50%',
        height: '50%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    pickBtn: {
        padding: moderateScale(10),
        borderWidth: 1,
        width: '60%',
        alignSelf: 'center',
        textAlign: 'center',
        borderRadius: moderateScale(20),
        marginVertical: moderateScale(10),
    },
    pickBtnGallery: {
        padding: moderateScale(10),
        borderWidth: 1,
        borderColor: BG_COLOR,
        width: '40%',
        alignSelf: 'center',
        textAlign: 'center',
        borderRadius: moderateScale(20),
        marginVertical: moderateScale(80),
        backgroundColor: '#8B5DFF',
    }
});
