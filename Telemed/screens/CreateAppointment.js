import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'

const CreateAppointment = ({navigation}) => {

    const ToTelemed = () => {
        navigation.navigate('Telemed')
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#11266c' }}>
            <View style={{ height: 50}}>
                <Octicons style={{ color: '#e6c402', marginTop: 10, marginLeft: 20, position: 'absolute' }} name='arrow-left' size={30} />
                <Text style={{ fontSize: 23, color: '#eaeaea', marginTop: 7, marginLeft: 60, position: 'absolute',fontFamily: 'SpaceGrotesk-Regular' }}>Create Appointment</Text>
            </View>
            <View style={{ flex: 1, marginTop: 100 }}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=>ToTelemed()}>
                        <Image source={require('../images/VD_Telemed.png')} style={{width:60,height:60,resizeMode:'contain',alignSelf:'center',marginTop:20,marginLeft:20}} />
                        <Text style={{ color: '#e6c402', fontSize: 17, textAlign: 'center',marginLeft:20,fontFamily: 'SpaceGrotesk-Regular',marginTop:10}}>Telemed</Text>
                        </TouchableOpacity>  
                        <Text style={{height:100,borderRightWidth:1,borderRightColor:'#eaeaea',position:'absolute',marginLeft:120,marginTop:15}}/>
                   

                    <TouchableOpacity onPress={()=>ToTelemed()}>
                        <Image source={require('../images/VD_WheelChair.png')} style={{width:60,height:60,resizeMode:'contain',alignSelf:'center',marginTop:20,marginLeft:60}} />
                        <Text style={{ color: '#e6c402', fontSize: 17, textAlign: 'center',marginLeft:60,fontFamily: 'SpaceGrotesk-Regular',marginTop:10}}>OP</Text>
                        </TouchableOpacity> 
                        <Text style={{height:100,borderRightWidth:1,borderRightColor:'#eaeaea',position:'absolute',marginLeft:240,marginTop:15}}/>
                    

                    <TouchableOpacity onPress={()=>ToTelemed()}>
                        <Image source={require('../images/VD_MedicalBed.png')} style={{width:60,height:60,resizeMode:'contain',alignSelf:'center',marginTop:20,marginLeft:60}} />
                        <Text style={{ color: '#e6c402', fontSize: 17, textAlign: 'center',marginLeft:60,fontFamily: 'SpaceGrotesk-Regular',marginTop:10}}>TCM</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    )
}

export default CreateAppointment;

const styles = StyleSheet.create({
    container: {
        width: 360,
        height: 180,
        marginTop:100,
        flexDirection:'row',
    }
})