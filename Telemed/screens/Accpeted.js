import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign';

const Slot = [
    {
        id: 1,
        main: 'Facility - Garnet Hill',
        time: '10.15 AM',
        title: 'Telemed - Cardiology',
        day: 'Today',
        name: 'Jonnnie M.Preslar | 57/M',
        selected: false
    },
    {
        id: 2,
        main: 'Facility - Garnet Hill',
        time: '11.15 AM',
        title: 'Telemed - Cardiology',
        day: 'Tomorrow',
        name: 'Jeff V.Scarborough | 64/M',
        selected: false
    },
    {
        id: 3,
        main: 'Facility - Garnet Hill',
        time: '12.15 PM',
        title: 'Telemed - Cardiology',
        day: 'Today',
        name: 'Jonnnie M.Preslar | 57/M',
        selected: false
    },
    {
        id: 4,
        main: 'Facility - Garnet Hill',
        time: '01.15 PM',
        title: 'Telemed - Cardiology',
        day: 'Tomorrow',
        name: 'Jeff V.Scarborough | 64/M',
        selected: false
    },
    {
        id: 5,
        main: 'Facility - Garnet Hill',
        time: '02.15 PM',
        title: 'Telemed - Cardiology',
        day: 'Today',
        name: 'Jonnnie M.Preslar | 57/M',
        selected: false
    },
    {
        id: 6,
        main: 'Facility - Garnet Hill',
        time: '10.15 AM',
        title: 'Telemed - Cardiology',
        day: 'Today',
        name: 'Jonnnie M.Preslar | 57/M',
        selected: false
    },
    {
        id: 7,
        main: 'Facility - Garnet Hill',
        time: '11.15 AM',
        title: 'Telemed - Cardiology',
        day: 'Tomorrow',
        name: 'Jeff V.Scarborough | 64/M',
        selected: false
    },
    {
        id: 8,
        main: 'Facility - Garnet Hill',
        time: '12.15 PM',
        title: 'Telemed - Cardiology',
        day: 'Today',
        name: 'Jonnnie M.Preslar | 57/M',
        selected: false
    },
    {
        id: 9,
        main: 'Facility - Garnet Hill',
        time: '01.15 PM',
        title: 'Telemed - Cardiology',
        day: 'Tomorrow',
        name: 'Jeff V.Scarborough | 64/M',
        selected: false
    },
    {
        id: 10,
        main: 'Facility - Garnet Hill',
        time: '02.15 PM',
        title: 'Telemed - Cardiology',
        day: 'Today',
        name: 'Jonnnie M.Preslar | 57/M',
        selected: false
    },
]


const Accepted = ({navigation}) => {

    const ToSignup = () => {
        navigation.navigate('Signup')
      }

    const [selectedTab, setSelectedTab] = useState(0);
    const [select, setSelect] = useState(Slot);

    const handleOnpress = (item) => {
        const newItem = select.map((val) => {
            if (val.id === item.id) {
                return { ...val, selected: !val.selected }
            }
            else {
                return val;
            }
        })
        setSelect(newItem)
    }

    const SlotView = ({ item }) => {
        return (
            <View style={{ height: 90, width: 328,margin:16,backgroundColor: '#eaeaea',}}>
                <TouchableOpacity onPress={() => handleOnpress(item)}>
                    <View style={{width:30,height:30,borderColor:'#333333',borderWidth:1,position:'absolute',borderRadius:8,marginTop: 35,marginLeft:5}}>
                     {item.selected ? (<Octicons style={{ color:'green',alignSelf:'center',position: 'absolute' }} name='check' size={27} />):null}
                    </View>
                    <Text style={{ color: '#333333',fontFamily: 'SpaceGrotesk-Regular', width: 150, height: 25,backgroundColor:'#dcdcdc', textAlign: 'center', marginLeft: 40, borderRadius: 5,top:-15 }}>{item.main}</Text>
                    <Text style={{ color: '#333333',fontFamily: 'SpaceGrotesk-Regular', fontSize: 15, marginTop: 30, marginLeft: 50, position: 'absolute' }}>{item.time}</Text>
                    <Text style={{ color: '#333333',fontFamily: 'SpaceGrotesk-Regular', fontSize: 15, marginTop: 30, marginLeft: 140, position: 'absolute' }}>{item.title}</Text>
                    <Text style={{ color: '#808080',fontFamily: 'SpaceGrotesk-Regular', fontSize: 13, marginTop: 50, marginLeft: 50, position: 'absolute' }}>{item.day}</Text>
                    <Text style={{ color: '#808080',fontFamily: 'SpaceGrotesk-Regular', fontSize: 13, marginTop: 50, marginLeft: 140, position: 'absolute' }}>{item.name}</Text>
                </TouchableOpacity>
                <Text style={{borderBottomWidth:1,borderBottomColor:'#333333',marginTop:55}}/>
            </View>
        )
    }

  return (
    <View style={{flex:1,backgroundColor:'#11266c'}}>
       <View style={{ height: 50, }}>
                <Octicons style={{ marginLeft: 20, marginTop: 10 }} name='arrow-left' color={'#e6c402'} size={30} />
                <Text onPress={()=>ToSignup()} style={{ color: '#eaeaea', fontFamily: 'SpaceGrotesk-Regular', fontSize: 25,marginLeft:60, textAlign: 'center', marginTop: 5,position:'absolute' }}>Accepted</Text>
                <MaterialIcons style={{ marginLeft: 225, marginTop: 10, position: 'absolute' }} name='notifications-none' color={'#e6c402'} size={25} />
                <Fontisto style={{ marginLeft: 270, marginTop: 12, position: 'absolute' }} name='search' color={'#e6c402'} size={20} />
                <Image source={require('../images/add.png')} style={{marginLeft: 300, position: 'absolute',width:55,height:55}}/>
            </View>

            <View style={{ height: 35 }}>
                <Text style={{ color: '#eaeaea', marginLeft: 20, fontSize: 16, marginTop: 10,fontFamily: 'SpaceGrotesk-Regular' }}>Appointments</Text>
            </View>
            <View style={{ height: 40 }}>

                <TouchableOpacity onPress={() => { setSelectedTab(0) }} style={{ backgroundColor: selectedTab == 0 ? '#eaeaea' : '#e6c402', borderColor: '#808080', borderWidth: 0.5, height: 25, width: 70, borderRadius: 5, marginLeft: 20, marginTop: 10 }}>
                    <Text style={{ color: '#11266c', fontSize: 14, textAlign: 'center',marginTop:1 ,fontFamily: 'SpaceGrotesk-Regular'}}>Telemed</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTab(1)}} style={{ height: 25, width: 60, backgroundColor: selectedTab == 1 ?  '#eaeaea' : '#e6c402', borderColor: '#808080', borderWidth: 0.5, borderRadius: 5, marginLeft: 105, marginTop: 10, position: 'absolute' }}>
                    <Text style={{ color: '#11266c', fontSize: 14, textAlign: 'center',marginTop:1,fontFamily: 'SpaceGrotesk-Regular' }}>TCM</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTab(2)}} style={{ backgroundColor: selectedTab == 2 ?  '#eaeaea' : '#e6c402', height: 25, width: 50, borderColor: '#808080', borderWidth: 0.5, borderRadius: 5, marginLeft: 180, marginTop: 10, position: 'absolute' }}>
                    <Text style={{ color: '#11266c', fontSize: 14, textAlign: 'center',marginTop:1,fontFamily: 'SpaceGrotesk-Regular'}}>OP</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTab(3); }} style={{ backgroundColor: selectedTab == 3 ?  '#eaeaea' : '#e6c402', height: 25, width: 60, borderColor: '#808080', borderWidth: 0.5, borderRadius: 5, marginLeft: 245, marginTop: 10, position: 'absolute' }}>
                    <Text style={{ color: '#11266c', fontSize: 14, textAlign: 'center',marginTop:1,fontFamily: 'SpaceGrotesk-Regular' }}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTab(4); }}>
                    <Entypo style={{ marginLeft: 315, marginTop: -25, position: 'absolute', color: selectedTab == 4 ?  '#eaeaea' : '#e6c402'}} name='list' size={25} />
                </TouchableOpacity>
            </View>
            
            <View style={{height:570,backgroundColor:'#eaeaea',borderRadius:8,marginTop:15}}>
            <FlatList
                data={select}
                renderItem={SlotView}
                keyExtractor={item => item.id}
            />
            </View>
    </View>
  )
}

export default Accepted;

const styles = StyleSheet.create({})