import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import moment from 'moment'
import DatePicker from 'react-native-date-picker'

const Appointments = ({ navigation }) => {

    const [toDo, setToDo] = useState([
        {
            "id": 1,
            "next": 'Next : Telemed - Primary care',
            "time": '09.00 AM',
            "main": 'Facility - Adora',
            "text1": 'Reschedule',
            "text2": "I'm Ready",
            "text4": 'Particulars',
            "timer": 15
        },
        {
            "id": 2,
            "next": 'Next : Telemed - Primary care',
            "time": '10.00 AM',
            "main": 'Facility - Adora',
            "text1": 'Reschedule',
            "text2": "I'm Ready",
            "text4": 'Particulars',
            "timer": 5
        },
        {
            "id": 3,
            "next": 'Next : Telemed - Primary care',
            "time": '11.00 AM',
            "main": 'Facility - Adora',
            "text1": 'Reschedule',
            "text2": "I'm Ready",
            "text4": 'Particulars',
            "timer": 10
        },
        {
            "id": 4,
            "next": 'Next : Telemed - Primary care',
            "time": '12.00 PM',
            "main": 'Facility - Adora',
            "text1": 'Reschedule',
            "text2": "I'm Ready",
            "text4": 'Particulars',
            "timer": 25
        },
        {
            "id": 5,
            "next": 'Next : Telemed - Primary care',
            "time": '01.00 PM',
            "main": 'Facility - Adora',
            "text1": 'Reschedule',
            "text2": "I'm Ready",
            "text4": 'Particulars',
            "timer": 20
        },
    ]);

    const ToAccepted = () => {
        navigation.navigate('Accepted')
    }

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState(0);
    const [showInfo, SetShowInfo] = useState(false);
    const [showContact, SetShowContact] = useState(false);
    const [showSpecial, setShowSpecial] = useState(false);
    const [showAvail, setShowAvail] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: '#11266c' }}>
            <View style={{ height: 50, }}>
                <Entypo style={{ marginLeft: 10, marginTop: 10 }} name='menu' color={'#e6c402'} size={30} />
                <Text style={{ color: '#eaeaea', fontFamily: 'SpaceGrotesk-Regular', fontSize: 25, marginLeft: 60, textAlign: 'center', marginTop: 5, position: 'absolute' }}><Text style={{ fontStyle: 'italic' }}>Vis<Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Doc</Text></Text></Text>
                <MaterialIcons style={{ marginLeft: 225, marginTop: 10, position: 'absolute' }} name='notifications-none' color={'#e6c402'} size={25} />
                <Fontisto style={{ marginLeft: 270, marginTop: 12, position: 'absolute' }} name='search' color={'#e6c402'} size={20} />
                <Image source={require('../images/add.png')} style={{ marginLeft: 300, position: 'absolute', width: 55, height: 55 }} />
            </View>

            <View style={{ height: 35 }}>
                <Text style={{ color: '#eaeaea', marginLeft: 10, fontSize: 16, marginTop: 10, fontFamily: 'SpaceGrotesk-Regular' }}>Appointments</Text>
            </View>
            <View style={{ height: 40 }}>

                <TouchableOpacity onPress={() => { setSelectedTab(0) }} style={{ backgroundColor: selectedTab == 0 ? '#eaeaea' : '#e6c402', borderColor: 'gray', borderWidth: 0.5, height: 25, width: 60, borderRadius: 5, marginLeft: 10, marginTop: 10 }}>
                    <Text style={{ color: '#11266c', fontSize: 14, textAlign: 'center', marginTop: 1, fontFamily: 'SpaceGrotesk-Regular' }}>Today</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTab(1) }} style={{ height: 25, width: 80, backgroundColor: selectedTab == 1 ? '#eaeaea' : '#e6c402', borderColor: 'gray', borderWidth: 0.5, borderRadius: 5, marginLeft: 85, marginTop: 10, position: 'absolute' }}>
                    <Text style={{ color: '#11266c', fontSize: 14, textAlign: 'center', marginTop: 1, fontFamily: 'SpaceGrotesk-Regular' }}>Tomorrow</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTab(2) }} style={{ backgroundColor: selectedTab == 2 ? '#eaeaea' : '#e6c402', height: 25, width: 60, borderColor: 'gray', borderWidth: 0.5, borderRadius: 5, marginLeft: 178, marginTop: 10, position: 'absolute' }}>
                    <Text style={{ color: '#11266c', fontSize: 14, textAlign: 'center', marginTop: 1, fontFamily: 'SpaceGrotesk-Regular' }}>Week</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTab(3); }} style={{ backgroundColor: selectedTab == 3 ? '#eaeaea' : '#e6c402', height: 25, width: 50, borderColor: 'gray', borderWidth: 0.5, borderRadius: 5, marginLeft: 253, marginTop: 10, position: 'absolute' }}>
                    <Text style={{ color: '#11266c', fontSize: 14, textAlign: 'center', marginTop: 1, fontFamily: 'SpaceGrotesk-Regular' }}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTab(4); setOpen(true); }}>
                    <Feather style={{ marginLeft: 315, marginTop: -25, position: 'absolute', color: selectedTab == 4 ? '#eaeaea' : '#e6c402' }} name='calendar' size={25} />
                    <DatePicker
                        mode='date'
                        modal
                        open={open}
                        date={date}
                        onConfirm={value => {
                            setOpen(false)
                            setDate(value)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                    <DatePicker
                        mode='time'
                        modal
                        open={open}
                        date={time}
                        onConfirm={value => {
                            setOpen(false)
                            setTime(value)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </TouchableOpacity>
            </View>

            <View style={{ height: 140}}></View>

            <View style={{ height: 440, backgroundColor: '#dcdcdc', borderRadius: 8 }}>

                <View style={{ height: 280, marginTop: -145}}>
                    <ScrollView horizontal style={{ flexDirection: 'row', width: 330, height: 280, elevation: 10, backgroundColor: '#eaeaea', marginTop: 15, marginLeft: 15, marginRight: 15, borderRadius: 8 }}>
                        {toDo && toDo
                            .sort((a, b) => a.timer > b.timer ? 1 : -1)
                            .map(item => {
                                return (
                                    <View key={item.id}>
                                        <View style={{ width: 330, marginTop: 10 }}>
                                            <Text style={{ fontSize: 15, color: '#333333', fontFamily: 'SpaceGrotesk-Regular', marginLeft: 15 }}>{item.next}</Text>
                                            <Text style={{ fontSize: 15, color: '#333333', left: 250, position: 'absolute', fontFamily: 'SpaceGrotesk-Regular' }}>{item.time}</Text>
                                        </View>
                                        <View style={{ height: 100, alignSelf: 'center', marginTop: 30, marginLeft: 35 }}>
                                            
                                            <CountdownCircleTimer
                                                isPlaying
                                                size={100}
                                                duration={item.timer}
                                                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                                                colorsTime={[15, 10, 5, 0]}
                                                onComplete={() => {
                                                    return { shouldRepeat: true, delay: 1 }
                                                }}
                                            >
                                                {({ remainingTime }) => {
                                                    const hours = Math.floor(remainingTime / 3600)
                                                    const minutes = Math.floor((remainingTime % 3600) / 60)
                                                    const seconds = remainingTime % 60

                                                    return (<Text style={{ color: '#333333', fontSize: 20, fontFamily: 'SpaceGrotesk-Regular' }}>{moment(remainingTime).format(hours + ":" + minutes + ":" + seconds)}</Text>)
                                                }}
                                            </CountdownCircleTimer>

                                            <Text style={{ color: '#333333', alignSelf: 'center', fontSize: 20, marginTop: 10, left: -10, fontFamily: 'SpaceGrotesk-Regular' }}>{item.main}</Text>
                                        </View>
                                        <View style={{ marginLeft: 10 }}>
                                            <Text style={{ fontSize: 15, color: '#0071bc', marginLeft: 10, marginTop: 60, fontFamily: 'SpaceGrotesk-Regular' }}>{item.text1}</Text>
                                            <Text style={{ fontSize: 15, color: '#11266c', backgroundColor: '#e6c402', borderColor: '#333333', fontFamily: 'SpaceGrotesk-Regular', marginTop: 60, marginLeft: 115, textAlign: 'center', borderWidth: 1, height: 23, width: 80, position: 'absolute', borderRadius: 5, }}>{item.text2}</Text>
                                            <Text style={{ fontSize: 15, color: '#0071bc', marginLeft: 221, marginTop: 60, position: 'absolute', fontFamily: 'SpaceGrotesk-Regular' }}>{item.text4}</Text>
                                        </View>
                                    </View>
                                )
                            })}
                    </ScrollView>
                </View>

                <ScrollView >
                    <TouchableOpacity onPress={() => { SetShowInfo(!showInfo) }}>
                        <Entypo name='plus' size={24} style={{ color: '#e6c402', marginTop: 25, marginLeft: 20 }} />
                        {showInfo ? (<Entypo name='minus' size={24} style={{ color: '#e6c402', marginTop: -25, marginLeft: 20, backgroundColor: '#dcdcdc' }} />) : null}

                        <Text style={{ color: '#333333', fontSize: 15, marginTop: -25, marginLeft: 50, fontFamily: 'SpaceGrotesk-Regular' }}>Accepted</Text>


                        <Text style={{ color: '#333333', marginTop: -15, marginLeft: 210, top: -5 }}>14</Text>
                    </TouchableOpacity>
                    <Text style={{ borderBottomColor: '#333333', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, }} />
                    {
                        showInfo ? (
                            <TouchableOpacity onPress={() => ToAccepted()}>
                                <View style={{ width: 200, height: 125, marginLeft: 30, marginTop: -20 }}>
                                    <View style={{flexDirection:'row'}}><Text style={{ color: '#808080', fontSize: 13, marginTop: 35, marginLeft: 20, fontFamily: 'SpaceGrotesk-Regular' }}>Telemed</Text>
                                        <Text style={{ color: '#333333', fontSize: 14, fontFamily: 'SpaceGrotesk-Regular', marginTop: 35, marginLeft: 105,}}>09</Text>
                                        <Feather style={{ color: '#808080',marginTop: 38,marginLeft:50 }} name='chevron-right' size={15} /></View>
                                    <View style={{flexDirection:'row'}}><Text style={{ color: '#808080', fontSize: 13, marginTop: 15, marginLeft: 20, fontFamily: 'SpaceGrotesk-Regular' }}>TCM</Text>
                                        <Text style={{ color: '#333333', fontSize: 14, marginTop: 15, marginLeft: 132, fontFamily: 'SpaceGrotesk-Regular'}}>--</Text>
                                        <Feather style={{ color: '#808080',marginTop: 20,marginLeft:53}} name='chevron-right' size={15} /></View>
                                    <View style={{flexDirection:'row'}}><Text style={{ color: '#808080', fontSize: 13, marginTop: 15, marginLeft: 20, fontFamily: 'SpaceGrotesk-Regular' }}>Out Patient</Text>
                                        <Text style={{ color: '#333333', fontSize: 14, marginTop: 15, marginLeft: 85, fontFamily: 'SpaceGrotesk-Regular'}}>05</Text>
                                        <Feather style={{ color: '#808080',marginTop: 20,marginLeft:51 }} name='chevron-right' size={15} /></View>
                                </View>
                            </TouchableOpacity>

                        ) : null
                    }
                    <TouchableOpacity onPress={() => { SetShowContact(!showContact) }}>
                        <Entypo name='plus' size={24} style={{ color: '#e6c402', marginTop: 25, marginLeft: 20 }}/>
                        {showContact ? (<Entypo name='minus' size={24} style={{ color: '#e6c402', marginTop: -25, marginLeft: 20, backgroundColor: '#dcdcdc' }} />) : null}

                        <Text style={{ color: '#333333', fontSize: 15, marginTop: -25, marginLeft: 50, fontFamily: 'SpaceGrotesk-Regular' }}>New Request</Text>

                        <Text style={{ color: '#333333', marginTop: -15, marginLeft: 210, top: -5 }}>13</Text>
                    </TouchableOpacity>
                    <Text style={{ borderBottomColor: '#333333', borderBottomWidth: 1, marginLeft: 20, marginRight: 20 }} />
                    {
                        showContact ? (
                            <TouchableOpacity onPress={() => ToAccepted()}>
                                <View style={{ width: 200, height: 125, marginLeft: 30, marginTop: -20 }}>
                                    <View style={{flexDirection:'row'}}><Text style={{ color: '#808080', fontSize: 13, marginTop: 35, marginLeft: 20, fontFamily: 'SpaceGrotesk-Regular' }}>Telemed</Text>
                                        <Text style={{ color: '#333333', fontSize: 14, fontFamily: 'SpaceGrotesk-Regular', marginTop: 35, marginLeft: 105,}}>09</Text>
                                        <Feather style={{ color: '#808080',marginTop: 38,marginLeft:50 }} name='chevron-right' size={15} /></View>
                                    <View style={{flexDirection:'row'}}><Text style={{ color: '#808080', fontSize: 13, marginTop: 15, marginLeft: 20, fontFamily: 'SpaceGrotesk-Regular' }}>TCM</Text>
                                        <Text style={{ color: '#333333', fontSize: 14, marginTop: 15, marginLeft: 132, fontFamily: 'SpaceGrotesk-Regular'}}>--</Text>
                                        <Feather style={{ color: '#808080',marginTop: 20,marginLeft:53}} name='chevron-right' size={15} /></View>
                                    <View style={{flexDirection:'row'}}><Text style={{ color: '#808080', fontSize: 13, marginTop: 15, marginLeft: 20, fontFamily: 'SpaceGrotesk-Regular' }}>Out Patient</Text>
                                        <Text style={{ color: '#333333', fontSize: 14, marginTop: 15, marginLeft: 85, fontFamily: 'SpaceGrotesk-Regular'}}>05</Text>
                                        <Feather style={{ color: '#808080',marginTop: 20,marginLeft:51 }} name='chevron-right' size={15} /></View>
                                </View>
                            </TouchableOpacity>

                        ) : null
                    }
                    <TouchableOpacity onPress={() => { setShowSpecial(!showSpecial) }}>
                        <Entypo name='plus' size={24} style={{ color: '#e6c402', marginTop: 25, marginLeft: 20 }} />
                        {showSpecial ? (<Entypo name='minus' size={24} style={{ color: '#e6c402', marginTop: -25, marginLeft: 20, backgroundColor: '#dcdcdc' }} />) : null}
                        <Text style={{ color: '#333333', fontSize: 15, marginTop: -25, marginLeft: 50, fontFamily: 'SpaceGrotesk-Regular' }}>Pending</Text>
                        <Text style={{ color: '#333333', marginTop: -15, marginLeft: 210, top: -5 }}>09</Text>
                    </TouchableOpacity>
                    <Text style={{ borderBottomColor: '#333333', borderBottomWidth: 1, marginLeft: 20, marginRight: 20 }} />
                    {
                        showSpecial ? (
                            <TouchableOpacity onPress={() => ToAccepted()}>
                                <View style={{ width: 200, height: 125, marginLeft: 30, marginTop: -20 }}>
                                    <View style={{flexDirection:'row'}}><Text style={{ color: '#808080', fontSize: 13, marginTop: 35, marginLeft: 20, fontFamily: 'SpaceGrotesk-Regular' }}>Telemed</Text>
                                        <Text style={{ color: '#333333', fontSize: 14, fontFamily: 'SpaceGrotesk-Regular', marginTop: 35, marginLeft: 105,}}>09</Text>
                                        <Feather style={{ color: '#808080',marginTop: 38,marginLeft:50 }} name='chevron-right' size={15} /></View>
                                    <View style={{flexDirection:'row'}}><Text style={{ color: '#808080', fontSize: 13, marginTop: 15, marginLeft: 20, fontFamily: 'SpaceGrotesk-Regular' }}>TCM</Text>
                                        <Text style={{ color: '#333333', fontSize: 14, marginTop: 15, marginLeft: 132, fontFamily: 'SpaceGrotesk-Regular'}}>--</Text>
                                        <Feather style={{ color: '#808080',marginTop: 20,marginLeft:53}} name='chevron-right' size={15} /></View>
                                    <View style={{flexDirection:'row'}}><Text style={{ color: '#808080', fontSize: 13, marginTop: 15, marginLeft: 20, fontFamily: 'SpaceGrotesk-Regular' }}>Out Patient</Text>
                                        <Text style={{ color: '#333333', fontSize: 14, marginTop: 15, marginLeft: 85, fontFamily: 'SpaceGrotesk-Regular'}}>05</Text>
                                        <Feather style={{ color: '#808080',marginTop: 20,marginLeft:51 }} name='chevron-right' size={15} /></View>
                                </View>
                            </TouchableOpacity>
                        ) : null
                    }
                    <TouchableOpacity onPress={() => { setShowAvail(!showAvail) }}>
                        <Entypo name='plus' size={24} style={{ color: '#e6c402', marginTop: 25, marginLeft: 20 }} />
                        {showAvail ? (<Entypo name='minus' size={24} style={{ color: '#e6c402', marginTop: -25, marginLeft: 20, backgroundColor: '#dcdcdc' }} />) : null}
                        <Text style={{ color: '#333333', fontSize: 15, marginTop: -25, marginLeft: 50, fontFamily: 'SpaceGrotesk-Regular' }}>Completed</Text>
                        <Text style={{ color: '#333333', marginTop: -15, marginLeft: 210, top: -5 }}>02</Text>
                    </TouchableOpacity>
                    <Text style={{ borderBottomColor: '#333333', borderBottomWidth: 1, marginLeft: 20, marginRight: 20 }} />
                    {
                        showAvail ? (
                            <TouchableOpacity onPress={() => ToAccepted()}>
                                <View style={{ width: 200, height: 125, marginLeft: 30, marginTop: -20 }}>
                                    <View style={{flexDirection:'row'}}><Text style={{ color: '#808080', fontSize: 13, marginTop: 35, marginLeft: 20, fontFamily: 'SpaceGrotesk-Regular' }}>Telemed</Text>
                                        <Text style={{ color: '#333333', fontSize: 14, fontFamily: 'SpaceGrotesk-Regular', marginTop: 35, marginLeft: 105,}}>09</Text>
                                        <Feather style={{ color: '#808080',marginTop: 38,marginLeft:50 }} name='chevron-right' size={15} /></View>
                                    <View style={{flexDirection:'row'}}><Text style={{ color: '#808080', fontSize: 13, marginTop: 15, marginLeft: 20, fontFamily: 'SpaceGrotesk-Regular' }}>TCM</Text>
                                        <Text style={{ color: '#333333', fontSize: 14, marginTop: 15, marginLeft: 132, fontFamily: 'SpaceGrotesk-Regular'}}>--</Text>
                                        <Feather style={{ color: '#808080',marginTop: 20,marginLeft:53}} name='chevron-right' size={15} /></View>
                                    <View style={{flexDirection:'row'}}><Text style={{ color: '#808080', fontSize: 13, marginTop: 15, marginLeft: 20, fontFamily: 'SpaceGrotesk-Regular' }}>Out Patient</Text>
                                        <Text style={{ color: '#333333', fontSize: 14, marginTop: 15, marginLeft: 85, fontFamily: 'SpaceGrotesk-Regular'}}>05</Text>
                                        <Feather style={{ color: '#808080',marginTop: 20,marginLeft:51 }} name='chevron-right' size={15} /></View>
                                </View>
                            </TouchableOpacity>
                        ) : null
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default Appointments

const styles = StyleSheet.create({})