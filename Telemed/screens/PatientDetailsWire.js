import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

const Data = [
    {
        id:1,
        name:'Daisy M.Sanders',
        facility:'Facility - Dial Senior Living',
        specility:'Telemed - Cardiology',
        date:"Mar'30.2023 | 9.00 am",
        refer:'Referred by: Dr.Ken Hurt'
    },
    {
        id:2,
        name:'Daisy M.Sanders',
        facility:'Facility - Dial Senior Living',
        specility:'Telemed - Cardiology',
        date:"Mar'30.2023 | 9.00 am",
        refer:'Referred by: Dr.Ken Hurt'
    },
    {
        id:3,
        name:'Daisy M.Sanders',
        facility:'Facility - Dial Senior Living',
        specility:'Telemed - Cardiology',
        date:"Mar'30.2023 | 9.00 am",
        refer:'Referred by: Dr.Ken Hurt'
    },
    {
        id:4,
        name:'Daisy M.Sanders',
        facility:'Facility - Dial Senior Living',
        specility:'Telemed - Cardiology',
        date:"Mar'30.2023 | 9.00 am",
        refer:'Referred by: Dr.Ken Hurt'
    },
    {
        id:5,
        name:'Daisy M.Sanders',
        facility:'Facility - Dial Senior Living',
        specility:'Telemed - Cardiology',
        date:"Mar'30.2023 | 9.00 am",
        refer:'Referred by: Dr.Ken Hurt'
    }
]

const ItemView = ({item}) => {
    return(
        <View style={{ height: 270, width: 332, marginLeft: 5, marginTop: 15,backgroundColor:'#eaeaea',borderRadius: 8, borderWidth: 3, borderColor: '#dcdcdc' }}>
        <View style={{flexDirection:'row',height:65,}}>
         <View style={{width:50,height:50,backgroundColor:'#808080',borderRadius:8,margin:10}}></View>
         <Text style={{fontSize:27,color:'#333333',marginTop:3,fontFamily: 'SpaceGrotesk-Regular'}}>{item.name}</Text>
         <Text style={{fontSize:16,color:'#333333',marginTop:40,marginLeft:-215,fontFamily: 'SpaceGrotesk-Regular'}}>{item.facility}</Text>
        </View>
        <View style={{height:115,}}>
         <Text style={{fontSize:20,color:'#333333',marginTop:15,marginLeft:15,fontFamily: 'SpaceGrotesk-Regular'}}>{item.specility}</Text>
         <Text style={{fontSize:17,color:'#333333',marginLeft:15,fontFamily: 'SpaceGrotesk-Regular'}}>{item.date}</Text>
         <Text style={{fontSize:16,color:'#333333',marginTop:20,marginLeft:15,fontFamily: 'SpaceGrotesk-Regular'}}>{item.refer}</Text>
        </View>
        <View style={{height:80,flexDirection:'row'}}>
         <Text style={{marginTop:25,marginLeft:15,color:'#0071bc',fontSize:15,fontFamily: 'SpaceGrotesk-Regular'}}>Reschedule</Text>
         <TouchableOpacity style={{width:120,height:40,marginTop:15,backgroundColor:'green',borderRadius:8,marginLeft:90}}>
             <Text style={{textAlign:'center',fontSize:28,fontFamily: 'SpaceGrotesk-Regular',}}>Accept</Text>
         </TouchableOpacity>
        </View>
     </View>
    )
}

const PatientDetailsWire = () => {
    return (
        <View style={{ flex: 1}}>
            <View style={{ height: 225, backgroundColor: '#11266c', flexDirection: 'row' }}>
                <Octicons style={{ color: '#e6c402', marginTop: 10, marginLeft: 20, }} name='arrow-left' size={30} />
                <Text style={{ color: '#eaeaea', marginTop: 3, marginLeft: 25, fontSize: 28,fontFamily: 'SpaceGrotesk-Regular'}}>Patient Details</Text>
            </View>
            <View style={{backgroundColor:'#eaeaea',height:475,borderRadius:8}}>
            <View style={{ height: 300, flexDirection: 'row',marginTop:-160 }}>
                <FontAwesome5 style={{ marginTop: 130 }} name='chevron-left' color={'#eaeaea'} size={15} />
                <FlatList
                data={Data}
                renderItem={ItemView}
                horizontal
                />
                <FontAwesome5 style={{ marginTop: 130, marginLeft:2 }} name='chevron-right' color={'#eaeaea'} size={15} />
            </View>
            <Text style={{fontSize:16,color:'#808080',marginTop:10,marginLeft:17,fontFamily: 'SpaceGrotesk-Regular'}}>Report</Text>
            <View style={{flexDirection:'row',height:35,marginTop:10}}>
                <TouchableOpacity style={{backgroundColor:'#dcdcdc',marginLeft:22,width:70,height:25,borderRadius:8}}>
                    <Text style={{fontSize:15,color:'#808080',textAlign:'center',marginTop:1,fontFamily: 'SpaceGrotesk-Regular'}}>No Show</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#dcdcdc',marginLeft:15,width:50,height:25,borderRadius:8}}>
                    <Text style={{fontSize:15,color:'#808080',textAlign:'center',marginTop:1,fontFamily: 'SpaceGrotesk-Regular'}}>Here</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#dcdcdc',marginLeft:15,width:70,height:25,borderRadius:8}}>
                    <Text style={{fontSize:15,color:'#808080',textAlign:'center',marginTop:1,fontFamily: 'SpaceGrotesk-Regular'}}>Room No</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#dcdcdc',marginLeft:15,width:90,height:25,borderRadius:8}}>
                    <Text style={{fontSize:15,color:'#808080',textAlign:'center',marginTop:1,fontFamily: 'SpaceGrotesk-Regular'}}>Completed</Text>
                </TouchableOpacity>
            </View>
            <View style={{height:200}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#808080',fontSize:14,marginLeft:15,marginTop:25,fontFamily: 'SpaceGrotesk-Regular'}}>Supporting Documents</Text>
                    <Text style={{color:'#0071bc',fontSize:15,marginLeft:15,marginTop:25,fontFamily: 'SpaceGrotesk-Regular'}}>4 - uploaded</Text>
                    <FontAwesome5 style={{ marginTop: 27, marginLeft: 29 }} name='chevron-right' color={'#808080'} size={13} />
                </View>
                <View style={{flexDirection:'row',marginTop:25}}>
                    <Text style={{color:'#808080',fontSize:14,marginLeft:15,marginTop:25,fontFamily: 'SpaceGrotesk-Regular'}}>Telemed Notes</Text>
                    <FontAwesome5 style={{ marginTop: 27, marginLeft: 195 }} name='chevron-right' color={'#808080'} size={13} />
                </View>
                <View style={{flexDirection:'row',marginTop:25}}>
                    <Text style={{color:'#808080',fontSize:14,marginLeft:15,marginTop:25,fontFamily: 'SpaceGrotesk-Regular'}}>Cancel Schedule</Text>
                    <FontAwesome5 style={{ marginTop: 27, marginLeft: 182 }} name='chevron-right' color={'#808080'} size={13} />
                </View>
            </View>
            </View>
        </View>
    )
}

export default PatientDetailsWire;

const styles = StyleSheet.create({})