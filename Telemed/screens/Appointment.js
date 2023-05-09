import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import moment from 'moment';
import DatePicker from 'react-native-date-picker'

const Menu = [
    {
        id: 1,
        next: 'Next : Telemed - Primary care',
        time: '09.00 am',
        main: 'Facility - Adora',
        text1: 'Reschedule',
        text2: "I'm Ready",
        text3: 'Call',
        text4: 'Particulars'
    },
    {
        id: 2,
        next: 'Next : Telemed - Primary care',
        time: '10.00 am',
        main: 'Facility - Adora',
        text1: 'Reschedule',
        text2: "I'm Ready",
        text3: 'Call',
        text4: 'Particulars'
    },
    {
        id: 3,
        next: 'Next : Telemed - Primary care',
        time: '11.00 am',
        main: 'Facility - Adora',
        text1: 'Reschedule',
        text2: "I'm Ready",
        text3: 'Call',
        text4: 'Particulars'
    },
    {
        id: 4,
        next: 'Next : Telemed - Primary care',
        time: '12.00 pm',
        main: 'Facility - Adora',
        text1: 'Reschedule',
        text2: "I'm Ready",
        text3: 'Call',
        text4: 'Particulars'
    },
    {
        id: 5,
        next: 'Next : Telemed - Primary care',
        time: '01.00 pm',
        main: 'Facility - Adora',
        text1: 'Reschedule',
        text2: "I'm Ready",
        text3: 'Call',
        text4: 'Particulars'
    },
]

const Slot = [
    {
        id: 1,
        main: 'Facility - Garnet Hill',
        time: '10.15 am',
        title: 'Telemed - Cardiology',
        day: 'Today',
        name: 'Jonnnie M.Preslar | 57/M',
    },
    {
        id: 2,
        main: 'Facility - Garnet Hill',
        time: '11.15 am',
        title: 'Telemed - Cardiology',
        day: 'Tomorrow',
        name: 'Jeff V.Scarborough | 64/M',
    },
    {
        id: 3,
        main: 'Facility - Garnet Hill',
        time: '12.15 pm',
        title: 'Telemed - Cardiology',
        day: 'Today',
        name: 'Jonnnie M.Preslar | 57/M',
    },
    {
        id: 4,
        main: 'Facility - Garnet Hill',
        time: '01.15 pm',
        title: 'Telemed - Cardiology',
        day: 'Tomorrow',
        name: 'Jeff V.Scarborough | 64/M',
    },
    {
        id: 5,
        main: 'Facility - Garnet Hill',
        time: '02.15 pm',
        title: 'Telemed - Cardiology',
        day: 'Today',
        name: 'Jonnnie M.Preslar | 57/M',
    },
]

const Appointment = ({ navigation }) => {

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [open, setOpen] = useState(false);

    const ToProfile = () => {
        navigation.navigate('Profile')
    }

    const [selectedTab, setSelectedTab] = useState(0);

    const ItemView = ({ item }) => {
        return (
            <View style={{ height: 265, width: 330, borderColor: 'gray', borderWidth: 0.5, margin: 15, borderRadius: 5 }}>
                <View>
                    <Text style={{ fontSize: 15, color: 'black', margin: 10 }}>{item.next}</Text>
                    <Text style={{ fontSize: 15, color: 'black', marginTop: 10, marginLeft: 250, position: 'absolute' }}>{item.time}</Text>
                </View>
                <View style={{ height: 100, alignSelf: 'center' }}>

                    <CountdownCircleTimer
                        isPlaying
                        size={120}
                        duration={3600}
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

                            return (<Text style={{ color: 'black', fontSize: 25 }}>{moment(remainingTime).format(hours + ":" + minutes + ":" + seconds)}</Text>)
                        }}
                    </CountdownCircleTimer>

                    <Text style={{ color: 'black', alignSelf: 'center', fontSize: 20, marginTop: 10 }}>{item.main}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 15, color: 'gray', marginLeft: 10, marginTop: 80 }}>{item.text1}</Text>
                    <Text onPress={ToProfile} style={{ fontSize: 15, color: 'black', backgroundColor: 'white', borderColor: 'black', marginTop: 80, borderWidth: 1, height: 23, width: 80, position: 'absolute', textAlign: 'center', alignSelf: 'center', borderRadius: 5 }}>{item.text2}</Text>
                    <Text style={{ fontSize: 15, color: 'gray', marginLeft: 245, marginTop: 80, position: 'absolute' }}>{item.text4}</Text>
                    <Text onPress={ToProfile} style={{ fontSize: 15, color: 'black', backgroundColor: 'white', borderColor: 'black', marginTop: 110, borderWidth: 1, height: 23, width: 80, position: 'absolute', textAlign: 'center', alignSelf: 'center', borderRadius: 5 }}>{item.text3}</Text>
                </View>
            </View>
        )
    }

    const SlotView = ({ item }) => {
        return (
            <View style={{ height: 90, width: 328, borderColor: 'gray', borderWidth: 0.5, margin: 15, borderRadius: 5 }}>
                <TouchableOpacity onPress={ToProfile}>
                    <Text style={{ color: 'black', backgroundColor: '#dcdcdc', width: 150, height: 20, textAlign: 'center', marginLeft: 40, borderRadius: 5 }}>{item.main}</Text>
                    <Text style={{ color: 'black', fontSize: 15, marginTop: 30, marginLeft: 40, position: 'absolute' }}>{item.time}</Text>
                    <Text style={{ color: 'black', fontSize: 15, marginTop: 30, marginLeft: 130, position: 'absolute' }}>{item.title}</Text>
                    <Text style={{ color: 'gray', fontSize: 15, marginTop: 50, marginLeft: 40, position: 'absolute' }}>{item.day}</Text>
                    <Text style={{ color: 'gray', fontSize: 15, marginTop: 50, marginLeft: 130, position: 'absolute' }}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ height: 50, backgroundColor: '#dcdcdc' }}>
                <Entypo style={{ marginLeft: 10, marginTop: 10 }} name='menu' color={'black'} size={30} />
                <Text style={{ color: 'black', fontStyle: 'italic', fontSize: 25, position: 'absolute', marginLeft: 60, marginTop: 6 }}>Vis<Text style={{ fontStyle: 'normal', fontWeight: 'bold' }}>Doc</Text></Text>
                <MaterialIcons style={{ marginLeft: 225, marginTop: 10, position: 'absolute' }} name='notifications-none' color={'black'} size={30} />
                <Fontisto style={{ marginLeft: 270, marginTop: 12, position: 'absolute' }} name='search' color={'black'} size={25} />
                <AntDesign style={{ marginTop: -3.5, marginLeft: 307, position: 'absolute' }} name='plussquare' color={'#32cd32'} size={55} />
            </View>
            <View style={{ height: 35 }}>
                <Text style={{ color: 'black', marginLeft: 10, fontSize: 14, marginTop: 10, }}>Appointments</Text>
            </View>
            <View style={{ height: 40 }}>

                <TouchableOpacity onPress={() => { setSelectedTab(0); ToProfile() }} style={{ backgroundColor: selectedTab == 0 ? 'black' : 'white', borderColor: 'gray', borderWidth: 0.5, height: 20, width: 55, borderRadius: 5, marginLeft: 10, marginTop: 10 }}>
                    <Text style={{ color: selectedTab == 0 ? 'white' : 'gray', fontSize: 14, textAlign: 'center' }}>Today</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTab(1); ToProfile() }} style={{ height: 20, width: 75, backgroundColor: selectedTab == 1 ? 'black' : 'white', borderColor: 'gray', borderWidth: 0.5, borderRadius: 5, marginLeft: 80, marginTop: 10, position: 'absolute' }}>
                    <Text style={{ color: selectedTab == 1 ? 'white' : 'gray', fontSize: 14, textAlign: 'center' }}>Tomorrow</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTab(2); ToProfile() }} style={{ backgroundColor: selectedTab == 2 ? 'black' : 'white', height: 20, width: 55, borderColor: 'gray', borderWidth: 0.5, borderRadius: 5, marginLeft: 170, marginTop: 10, position: 'absolute' }}>
                    <Text style={{ color: selectedTab == 2 ? 'white' : 'gray', fontSize: 14, textAlign: 'center' }}>Week</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTab(3); }} style={{ backgroundColor: selectedTab == 3 ? 'black' : 'white', height: 20, width: 45, borderColor: 'gray', borderWidth: 0.5, borderRadius: 5, marginLeft: 240, marginTop: 10, position: 'absolute' }}>
                    <Text style={{ color: selectedTab == 3 ? 'white' : 'gray', fontSize: 14, textAlign: 'center' }}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTab(4); setOpen(true); }}>
                    <Feather style={{ marginLeft: 315, marginTop: -25, position: 'absolute', color: selectedTab == 4 ? 'black' : 'gray' }} name='calendar' size={25} />
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
            <View>
                <FontAwesome5 style={{ alignSelf: 'flex-start', top: 150, position: 'absolute', left: 3 }} name='chevron-left' color={'black'} size={15} />
                <FontAwesome5 style={{ alignSelf: 'flex-end', top: 150, position: 'absolute', right: 3 }} name='chevron-right' color={'black'} size={15} />
            </View>
            <View>
                <FlatList
                    data={Menu}
                    renderItem={ItemView}
                    keyExtractor={item => item.id}
                    horizontal
                />
            </View>
            <FlatList
                data={Slot}
                renderItem={SlotView}
                keyExtractor={item => item.id}
            />
            <View>
                <Text style={{ marginLeft: 15, marginTop: 10, color: 'gray', fontSize: 25, }}>{time?.toLocaleTimeString()}</Text>
                <Text style={{ marginLeft: 40, marginTop: 17, color: 'black', fontSize: 15, position: 'absolute' }}>{date?.toLocaleDateString()}</Text>
            </View>
        </View>
    )
}

export default Appointment;

const styles = StyleSheet.create({})