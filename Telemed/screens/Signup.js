import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Signup = ({ navigation }) => {

  const ToDoctor = () => {
    navigation.navigate('Signin')
  }

  const ToNeedy = () => {
    navigation.navigate('CreateAppointment')
  }

  const ToLogin= () => {
    navigation.navigate('Login')
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#11266c' }}>
      <Text style={{ color: '#eaeaea', fontFamily: 'SpaceGrotesk-Regular', fontSize: 36, textAlign: 'center', marginTop: 65, }}><Text style={{ fontStyle: 'italic' }}>Vis<Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Doc</Text></Text></Text>
      <Text style={{ color: '#eaeaea', fontSize: 20, marginTop: 65, textAlign: 'center', fontFamily: 'SpaceGrotesk-Regular', }}>Sign Up</Text>
      <View style={{ height: 300 }}>

        <TouchableOpacity style={{ width: 70, height: 70, alignSelf: 'center', marginTop: 85, marginLeft: -150 }} onPress={() => ToDoctor()}>
          <Image style={{ width: 50, height: 50, alignSelf: 'center' }} source={require('../images/VD_Stethescope.png')} />
          <Text style={{ color: '#e6c402', fontSize: 17, alignSelf: 'center', fontFamily: 'SpaceGrotesk-Regular' }}>Doctor</Text>
        </TouchableOpacity>

        <Text style={{ width: 1, height: 100, backgroundColor: '#eaeaea', alignSelf: 'center', position: 'absolute', marginTop: 70 }} />

        <TouchableOpacity style={{ width: 70, height: 70, alignSelf: 'center', marginTop: -68, marginLeft: 150 }} onPress={() => ToNeedy()}>
          <Image style={{ width: 50, height: 50, alignSelf: 'center' }} source={require('../images/VD_WheelChair.png')} />
          <Text style={{ color: '#e6c402', fontSize: 17, alignSelf: 'center', fontFamily: 'SpaceGrotesk-Regular' }}>Needy</Text>
        </TouchableOpacity>

        <Text style={{ color: '#eaeaea', fontSize: 13, textAlign: 'center', marginTop: 100, fontFamily: 'SpaceGrotesk-Regular' }}>Already member ?</Text>
        <Text onPress={()=>ToLogin()} style={{ color: '#e6c402', fontSize: 13, textAlign: 'center', fontFamily: 'SpaceGrotesk-Regular' }}>Login</Text>
      </View>
    </View>
  )
}

export default Signup;

const styles = StyleSheet.create({})