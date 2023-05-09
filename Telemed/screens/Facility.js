import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import SearchFilterFacility from './SearchFilterFacility';

const Facility = ({navigation}) => {
    const words = [
        {
            id: "1",
            name: "Adoptional SL"

        },
        {
            id: "2",
            name: "Adora ab"

        },
        {
            id: "3",
            name: "Adora al"

        },
        {
            id: "4",
            name: "Adora NY"

        },
        {
            id: "5",
            name: "Adora CA"

        },
    ]

    const [input, setInput] = useState("");

    const ToPatientDetails = () =>{
        navigation.navigate('PatientDetails')
    }

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: '#dcdcdc' }}>
            <View style={{ height: 60, backgroundColor: '#11266c' }}>
                <Octicons style={{ color: '#e6c402', marginTop: 10, marginLeft: 20, position: 'absolute' }} name='arrow-left' size={30} />
                <Text style={{ fontSize: 25, color: '#eaeaea', marginTop: 7, marginLeft: 60, position: 'absolute', fontFamily: 'SpaceGrotesk-Regular' }}>Facility</Text>
            </View>
            <View style={{backgroundColor:'#dcdcdc',height:10,borderRadius:8,marginTop:-5}}></View>
            <View style={{width:"82%",height:1,backgroundColor:'#333333',marginLeft:30,marginRight:30,marginTop:85,position:'absolute'}}>
        <View style={{width:10,height:10,borderRadius:50,borderColor:'#333333',borderWidth:1,marginTop:-5,backgroundColor:'#eaeaea'}}></View>
        <Text style={{color:'#11266c',fontSize:12,position:'absolute',marginTop:8,marginLeft:-15,fontFamily: 'SpaceGrotesk-Regular'}}>Facility</Text>
        <View style={{width:10,height:10,borderRadius:50,borderColor:'#333333',borderWidth:1,marginTop:-5,backgroundColor:'#808080',marginLeft:73,position:'absolute'}}></View>
        <Text style={{color:'#11266c',fontSize:12,position:'absolute',marginTop:8,marginLeft:60,fontFamily: 'SpaceGrotesk-Regular'}}>Patient</Text>
        <View style={{width:10,height:10,borderRadius:50,borderColor:'#333333',borderWidth:1,marginTop:-5,backgroundColor:'#808080',marginLeft:146,position:'absolute'}}></View>
        <Text style={{color:'#11266c',fontSize:12,position:'absolute',marginTop:8,marginLeft:120,fontFamily: 'SpaceGrotesk-Regular'}}>Date & Time</Text>
        <View style={{width:10,height:10,borderRadius:50,borderColor:'#333333',borderWidth:1,marginTop:-5,backgroundColor:'#808080',marginLeft:218,position:'absolute'}}></View>
        <Text style={{color:'#11266c',fontSize:12,position:'absolute',marginTop:8,marginLeft:205,fontFamily: 'SpaceGrotesk-Regular'}}>Provider</Text>
        <View style={{width:10,height:10,borderRadius:50,borderColor:'#333333',borderWidth:1,marginTop:-5,backgroundColor:'#808080',marginLeft:290,position:'absolute'}}></View>
        <Text style={{color:'#11266c',fontSize:12,position:'absolute',marginTop:8,marginLeft:250,left:20,fontFamily: 'SpaceGrotesk-Regular'}}>Submit</Text>
        </View>
            <Text style={{ color: '#808080', fontSize: 13, marginLeft: 40, marginTop: 140, fontFamily: 'SpaceGrotesk-Regular' }}>Facility Name</Text>
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, alignItems: 'center', marginTop: 10, marginLeft: 40, marginRight: 40 }}>
                <TextInput style={{ fontSize: 15, color: '#333333', backgroundColor: '#dcdcdc', width: '100%', fontFamily: 'SpaceGrotesk-Regular' }}
                    placeholder='Search'
                    placeholderTextColor={'#808080'}
                    value={input}
                    onChangeText={(text) => setInput(text)}
                />
            </View>
            <SearchFilterFacility data={words} input={input} setInput={setInput} />
            <TouchableOpacity onPress={()=>ToPatientDetails()} style={{ backgroundColor: 'green', width: 135, height: 45,top:-185, borderRadius: 5, marginLeft:185 }}>
                <Text style={{ color: '#eaeaea', fontSize: 25, textAlign: 'center', marginTop: 4, fontFamily: 'SpaceGrotesk-Regular' }}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Facility;

const styles = StyleSheet.create({})