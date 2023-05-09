import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Signin = ({ navigation }) => {

    const ToOTP = () => {
        navigation.navigate('OTP')
    }

    const ToSignup = () => {
        navigation.navigate('Signup')
    }

    const ToLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#11266c' }}>
            <TouchableOpacity style={{marginTop: -50, top: 260, left: 280,height:50,width:50 }} onPress={()=>ToSignup()}>
                <Image source={require('../images/VD_WheelChair.png')} style={{ width: 50, height: 35, resizeMode: 'contain'}} />
                <Text style={{ color: '#808080',fontSize: 13,textAlign:'center', fontFamily: 'SpaceGrotesk-Regular', }}>Needy</Text>
            </TouchableOpacity>
            <Text style={{ color: '#eaeaea', fontFamily: 'SpaceGrotesk-Regular', fontSize: 36, textAlign: 'center', marginTop: 65, }}><Text style={{ fontStyle: 'italic' }}>Vis<Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Doc</Text></Text></Text>
            <View style={{ width: 360, height: 720, backgroundColor: '#eaeaea', borderRadius: 8, rotation: -45, marginTop: 50, marginLeft: 40 }}></View>
            <View style={{ width: 360, height: 280, backgroundColor: '#eaeaea', marginTop: 430, position: 'absolute' }}>
                <Image source={require('../images/VD_Stethescope.png')} style={{ width: 80, height: 55, resizeMode: 'contain', marginTop: -50, top: -200, left: 50 }} />
                <Text style={{ color: '#11266c', fontSize: 35, textAlign: 'center', top: -195, left: -75, fontFamily: 'SpaceGrotesk-Regular', }}>Sign up</Text>
                <Text style={{ color: '#11266c', fontSize: 13, textAlign: 'left', fontFamily: 'SpaceGrotesk-Regular', margin: 75, top: -255, left: -35 }}>Doctor, to schedule and view the status for your appointments</Text>
                <TextInput placeholder='Full Name' placeholderTextColor={'#808080'}
                    style={{ borderBottomWidth: 1, borderBottomColor: '#333333', fontFamily: 'SpaceGrotesk-Regular', color: '#333333', fontSize: 17, top: -310, marginLeft: 40, marginRight: 35 }}
                />
                <TextInput placeholder='NPI Number' placeholderTextColor={'#808080'} keyboardType='numeric'
                    style={{ borderBottomWidth: 1, borderBottomColor: '#333333', fontFamily: 'SpaceGrotesk-Regular', color: '#333333', fontSize: 17, top: -310, marginLeft: 40, marginRight: 35 }}
                />
                <TextInput placeholder='Phone Number' placeholderTextColor={'#808080'} keyboardType='numeric'
                    style={{ borderBottomWidth: 1, borderBottomColor: '#333333', fontFamily: 'SpaceGrotesk-Regular', color: '#333333', fontSize: 17, top: -310, marginLeft: 40, marginRight: 35 }}
                />
            </View>
            <View>
                <Text style={{ color: '#808080', fontSize: 14, marginTop: -320, marginLeft: 40, position: 'absolute', fontFamily: 'SpaceGrotesk-Regular', }}>Already member ?</Text>
                <Text onPress={()=>ToLogin()} style={{ color: '#0071bc', fontSize: 14, marginTop: -300, marginLeft: 40, fontFamily: 'SpaceGrotesk-Regular', }}>Login</Text>
                <TouchableOpacity onPress={() => ToOTP()} style={{ width: 123, height: 40, backgroundColor: 'green', borderRadius: 8, position: 'absolute', marginTop: -320, marginLeft: 205 }}>
                    <Text style={{ color: '#eaeaea', fontSize: 25, textAlign: 'center', fontFamily: 'SpaceGrotesk-Regular', }}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={{ color: '#808080', fontSize: 13, marginTop: -265, marginLeft: 40, position: 'absolute', fontFamily: 'SpaceGrotesk-Regular', margin: 150, left: 135 }}>By submitting you agree the <Text style={{ color: '#0071bc' }}>Terms & Conditions</Text></Text>
            </View>
        </View>
    )
}
export default Signin;

const styles = StyleSheet.create({})
