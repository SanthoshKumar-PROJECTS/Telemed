import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View,Animated } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {

    const ToSignup = () => {
        navigation.navigate('Signup')
    }

    const ToSignin = () => {
        navigation.navigate('Signin')
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#11266c' }}>
            <Text style={{ color: '#eaeaea', fontFamily: 'SpaceGrotesk-Regular', fontSize: 36, textAlign: 'center', marginTop: 65, }}><Text style={{ fontStyle: 'italic' }}>Vis<Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Doc</Text></Text></Text>
            <View style={{ width: 360, height: 720, backgroundColor: '#eaeaea', borderRadius: 8,rotation:-45,marginTop: 50,marginLeft:40}}></View>
            <View style={{ width: 360, height: 280, backgroundColor: '#eaeaea', marginTop: 430,position:'absolute' }}>
                <Image source={require('../images/VD_Login.png')} style={{width:70,height:45,resizeMode:'contain',marginTop:-50,top:-180,left:50}}/>
                <Text style={{ color: '#11266c', fontSize: 35, textAlign: 'center', top: -175, left: -100, fontFamily: 'SpaceGrotesk-Regular', }}>Login</Text>
                <Text style={{ color: '#11266c', fontSize: 13, textAlign: 'left', fontFamily: 'SpaceGrotesk-Regular', margin: 90, top: -250, left: -55 }}>to schedule or view status of appointments</Text>
                <TextInput placeholder='Phone Number' placeholderTextColor={'#808080'} keyboardType='numeric'
                    style={{ borderBottomWidth: 1, borderBottomColor: '#333333',fontFamily: 'SpaceGrotesk-Regular', color: '#333333', fontSize: 18, top: -290, marginLeft: 35, marginRight: 35 }}
                /> 
            </View>
            <View>
                    <Text style={{ color: '#808080', fontSize: 14, marginTop: -400, marginLeft: 35,fontFamily: 'SpaceGrotesk-Regular',position:'absolute' }}>Not a member ?</Text>
                    <Text onPress={()=>ToSignin()} style={{ color: '#0071bc', fontSize: 14, marginTop: -380, marginLeft: 35,fontFamily: 'SpaceGrotesk-Regular',position:'absolute' }}>Sign Up</Text>
                    <TouchableOpacity onPress={()=>ToSignup()} style={{ width: 123, height: 40, backgroundColor: 'green', borderRadius: 8, marginTop: -400, marginLeft: 205,position:'absolute' }}>
                        <Text style={{ color: '#eaeaea', fontSize: 25, textAlign: 'center',fontFamily: 'SpaceGrotesk-Regular',}}>Log in</Text>
                    </TouchableOpacity>
                    <Text style={{ color: '#0071bc', fontSize: 14, marginTop: -340, marginLeft: 35,position:'absolute',fontFamily: 'SpaceGrotesk-Regular', }}>Forgot Password ?</Text>
                </View>
                
        </View>
    )
}
export default Login;

const styles = StyleSheet.create({})
