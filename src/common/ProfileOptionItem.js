import React from 'react'
import { Text, TouchableOpacity, Image, View } from 'react-native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'

function ProfileOptionItem( {title, icon, onClick} ) {
    return (
        <TouchableOpacity style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: moderateVerticalScale(20) }} onPress={() => onClick()}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={icon} style={{width: scale(20), height: scale(20)}}/>
                <Text style={{marginLeft: moderateScale(15), fontSize: moderateScale(18)}}>{title}</Text>
            </View>
            <Image source={require('../images/right.png')} style={{width: scale(15), height: scale(15)}} />
        </TouchableOpacity>
    )
}

export default ProfileOptionItem