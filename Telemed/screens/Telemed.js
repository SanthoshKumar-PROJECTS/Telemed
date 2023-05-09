import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'

const Telemed = ({navigation}) => {

    const ToFacility = () => {
        navigation.navigate('Facilitys')
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#11266c' }}>
            <View style={{ height: 50}}>
                <Octicons style={{ color: '#e6c402', marginTop: 10, marginLeft: 20, position: 'absolute' }} name='arrow-left' size={30} />
                <Text style={{ fontSize: 23, color: '#eaeaea', marginTop: 7, marginLeft: 60, position: 'absolute',fontFamily: 'SpaceGrotesk-Regular' }}>Telemed</Text>
            </View>
            <View style={{ flex: 1, marginTop: 100 }}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=>ToFacility()}>
                        <Image source={require('../images/VD_Facility.png')} style={{width:60,height:60,resizeMode:'contain',alignSelf:'center',marginTop:20,marginLeft:35}} />
                        <Text style={{ color: '#e6c402', fontSize: 17, textAlign: 'center',marginLeft:35,fontFamily: 'SpaceGrotesk-Regular',marginTop:10}}>Facility</Text>
                        </TouchableOpacity>  
                        <Text style={{height:100,borderRightWidth:1,borderRightColor:'#eaeaea',position:'absolute',marginLeft:120,marginTop:15}}/>

                    <TouchableOpacity onPress={()=>ToFacility()}>
                        <Image source={require('../images/VD_Home.png')} style={{width:60,height:60,resizeMode:'contain',alignSelf:'center',marginTop:20,marginLeft:34}} />
                        <Text style={{ color: '#e6c402', fontSize: 17, textAlign: 'center',marginLeft:34,fontFamily: 'SpaceGrotesk-Regular',marginTop:10}}>Home Health</Text>
                        </TouchableOpacity> 
                        <Text style={{height:100,borderRightWidth:1,borderRightColor:'#eaeaea',position:'absolute',marginLeft:240,marginTop:15}}/>

                    <TouchableOpacity onPress={()=>ToFacility()}>
                        <Image source={require('../images/VD_Clinic.png')} style={{width:60,height:60,resizeMode:'contain',alignSelf:'center',marginTop:20,marginLeft:35}} />
                        <Text style={{ color: '#e6c402', fontSize: 17, textAlign: 'center',marginLeft:35,fontFamily: 'SpaceGrotesk-Regular',marginTop:10}}>Clinic</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    )
}

export default Telemed;

const styles = StyleSheet.create({
    container: {
        width: 360,
        height: 180,
        marginTop:100,
        flexDirection:'row',
    }
})