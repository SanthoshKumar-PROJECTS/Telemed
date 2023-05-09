import { FlatList, ScrollView, ScrollViewBase, ScrollViewComponent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import DatePicker from 'react-native-date-picker'
import Feather from 'react-native-vector-icons/Feather'
import ReactNativeCalendarStrip from 'react-native-calendar-strip'

const Calendar = ({ navigation }) => {

    const ToProvider = () => {
        navigation.navigate('Provider')
    }

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [open, setOpen] = useState(false);

    const [selectedTab, setSelectedTab] = useState('AM');
    const [selectedTabss, setSelectedTabss] = useState('09');
    const [selectedTabs, setSelectedTabs] = useState('30');
   

    return (
        <View style={{ flex: 1, backgroundColor: '#eaeaea' }}>
            <View style={{ height: 60, backgroundColor: '#11266c', }}>
                <Octicons style={{ color: '#e6c402', marginTop: 10, marginLeft: 20, position: 'absolute' }} name='arrow-left' size={30} />
                <Text style={{ fontSize: 25, color: '#eaeaea', marginTop: 7, marginLeft: 60, position: 'absolute', fontFamily: 'SpaceGrotesk-Regular' }}>Date and Time</Text>
                <TouchableOpacity onPress={() => { setOpen(true); }}>
                    <Feather style={{ marginLeft: 315, color: '#e6c402', marginTop: 10, }} name='calendar' size={30} />
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

            <View style={{ height: 200, borderRadius: 8, marginTop: -5, backgroundColor: '#eaeaea' }}>
                <View style={{ backgroundColor: '#dcdcdc', height: 10, borderRadius: 8, marginTop: 1 }}></View>
                <View style={{ width: "82%", height: 1, backgroundColor: '#333333', marginLeft: 30, marginRight: 30, marginTop: 30, position: 'absolute' }}>
                    <View style={{ width: 10, height: 10, borderRadius: 50, borderColor: '#333333', borderWidth: 1, marginTop: -5, backgroundColor: '#808080' }}></View>
                    <Text style={{ color: '#11266c', fontSize: 12, position: 'absolute', marginTop: 8, marginLeft: -15, fontFamily: 'SpaceGrotesk-Regular' }}>Facility</Text>
                    <View style={{ width: 10, height: 10, borderRadius: 50, borderColor: '#333333', borderWidth: 1, marginTop: -5, backgroundColor: '#808080', marginLeft: 73, position: 'absolute' }}></View>
                    <Text style={{ color: '#11266c', fontSize: 12, position: 'absolute', marginTop: 8, marginLeft: 60, fontFamily: 'SpaceGrotesk-Regular' }}>Patient</Text>
                    <View style={{ width: 10, height: 10, borderRadius: 50, borderColor: '#333333', borderWidth: 1, marginTop: -5, backgroundColor: '#eaeaea', marginLeft: 146, position: 'absolute' }}></View>
                    <Text style={{ color: '#11266c', fontSize: 12, position: 'absolute', marginTop: 8, marginLeft: 120, fontFamily: 'SpaceGrotesk-Regular' }}>Date & Time</Text>
                    <View style={{ width: 10, height: 10, borderRadius: 50, borderColor: '#333333', borderWidth: 1, marginTop: -5, backgroundColor: '#808080', marginLeft: 218, position: 'absolute' }}></View>
                    <Text style={{ color: '#11266c', fontSize: 12, position: 'absolute', marginTop: 8, marginLeft: 205, fontFamily: 'SpaceGrotesk-Regular' }}>Provider</Text>
                    <View style={{ width: 10, height: 10, borderRadius: 50, borderColor: '#333333', borderWidth: 1, marginTop: -5, backgroundColor: '#808080', marginLeft: 290, position: 'absolute' }}></View>
                    <Text style={{ color: '#11266c', fontSize: 12, position: 'absolute', marginTop: 8, marginLeft: 250, left: 20, fontFamily: 'SpaceGrotesk-Regular' }}>Submit</Text>
                </View>
                <Text style={{ fontSize: 18, color: '#333333', marginLeft: 15, marginTop: 80, fontFamily: 'SpaceGrotesk-Regular' }}>Date</Text>

                <ReactNativeCalendarStrip
                    scrollable
                    style={{ height: 100 }}
                    // calendarColor={'#3343CE'}
                    calendarHeaderStyle={{ color: 'black', fontSize: 10, }}
                    dayContainerStyle={{ width: 35, height: 42, backgroundColor: '#e6c402', borderRadius: 8, borderWidth: 1, borderColor: '#808080' }}
                    highlightDateContainerStyle={{ backgroundColor: '#eaeaea' }}
                    dateNumberStyle={{ color: 'black', fontSize: 15, }}
                    highlightDateNumberStyle={{ color: '#808080' }}
                    dateNameStyle={{ color: 'black', fontSize: 10 }}
                    highlightDateNameStyle={{ color: '#808080' }}
                />

            </View>
            <View style={{ height: 80, marginTop: 20 }}>
                <Text style={{ fontSize: 18, color: '#333333', marginLeft: 15, fontFamily: 'SpaceGrotesk-Regular' }}>Hours</Text>
                <View style={{ width: 55, height: 20, backgroundColor: 'green', position: 'absolute', marginLeft: 280, borderRadius: 7, marginTop: 2.5 }}>
                    <View style={{ width: 55, height: 20, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => { setSelectedTab('AM') }} style={{ backgroundColor: selectedTab == 'AM' ? '#eaeaea' : 'green', borderRadius: 7, width: 27.5 }}><Text style={{ color: selectedTab == 'AM' ? '#11266c' : '#eaeaea', fontSize: 13, textAlign: 'center', marginTop: 1 }}>AM</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => { setSelectedTab('PM') }} style={{ backgroundColor: selectedTab == 'PM' ? '#eaeaea' : 'green', borderRadius: 7, width: 27.5 }}><Text style={{ color: selectedTab == 'PM' ? '#11266c' : '#eaeaea', fontSize: 13, textAlign: 'center', marginTop: 1 }}>PM</Text></TouchableOpacity>
                    </View>
                </View>
                <ScrollView horizontal style={{flexDirection:'row'}}>

                <TouchableOpacity onPress={() => { setSelectedTabss('12') }} style={{ width: 50, borderRadius: 5, marginTop: 5, height: 45, backgroundColor: selectedTabss == '12' ? '#eaeaea' : '#e6c402', borderWidth: 0.5, borderColor: '#808080', marginLeft: 15 }}>
                    <Text style={{ color: '#808080', textAlign: 'center', fontSize: 18, marginTop: 10, fontFamily: 'SpaceGrotesk-Regular' }}>12</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTabss('01') }} style={{ width: 50, borderRadius: 5, marginTop: 5, height: 45, backgroundColor: selectedTabss == '01' ? '#eaeaea' : '#e6c402', borderWidth: 0.5, borderColor: '#808080', marginLeft: 15 }}>
                    <Text style={{ color: '#808080', textAlign: 'center', fontSize: 18, marginTop: 10, fontFamily: 'SpaceGrotesk-Regular' }}>01</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTabss('02') }} style={{ width: 50, borderRadius: 5, marginTop: 5, height: 45, backgroundColor: selectedTabss == '02' ? '#eaeaea' : '#e6c402', borderWidth: 0.5, borderColor: '#808080', marginLeft: 15 }}>
                    <Text style={{ color: '#808080', textAlign: 'center', fontSize: 18, marginTop: 10, fontFamily: 'SpaceGrotesk-Regular' }}>02</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTabss('03') }} style={{ width: 50, borderRadius: 5, marginTop: 5, height: 45, backgroundColor: selectedTabss == '03' ? '#eaeaea' : '#e6c402', borderWidth: 0.5, borderColor: '#808080', marginLeft: 15 }}>
                    <Text style={{ color: '#808080', textAlign: 'center', fontSize: 18, marginTop: 10, fontFamily: 'SpaceGrotesk-Regular' }}>03</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTabss('04') }} style={{ width: 50, borderRadius: 5, marginTop: 5, height: 45, backgroundColor: selectedTabss == '04' ? '#eaeaea' : '#e6c402', borderWidth: 0.5, borderColor: '#808080', marginLeft: 15 }}>
                    <Text style={{ color: '#808080', textAlign: 'center', fontSize: 18, marginTop: 10, fontFamily: 'SpaceGrotesk-Regular' }}>04</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTabss('05') }} style={{ width: 50, borderRadius: 5, marginTop: 5, height: 45, backgroundColor: selectedTabss == '05' ? '#eaeaea' : '#e6c402', borderWidth: 0.5, borderColor: '#808080', marginLeft: 15 }}>
                    <Text style={{ color: '#808080', textAlign: 'center', fontSize: 18, marginTop: 10, fontFamily: 'SpaceGrotesk-Regular' }}>05</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTabss('06') }} style={{ width: 50, borderRadius: 5, marginTop: 5, height: 45, backgroundColor: selectedTabss == '06' ? '#eaeaea' : '#e6c402', borderWidth: 0.5, borderColor: '#808080', marginLeft: 15 }}>
                    <Text style={{ color: '#808080', textAlign: 'center', fontSize: 18, marginTop: 10, fontFamily: 'SpaceGrotesk-Regular' }}>06</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTabss('07') }} style={{ width: 50, borderRadius: 5, marginTop: 5, height: 45, backgroundColor: selectedTabss == '07' ? '#eaeaea' : '#e6c402', borderWidth: 0.5, borderColor: '#808080', marginLeft: 15 }}>
                    <Text style={{ color: '#808080', textAlign: 'center', fontSize: 18, marginTop: 10, fontFamily: 'SpaceGrotesk-Regular' }}>07</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTabss('08') }} style={{ width: 50, borderRadius: 5, marginTop: 5, height: 45, backgroundColor: selectedTabss == '08' ? '#eaeaea' : '#e6c402', borderWidth: 0.5, borderColor: '#808080', marginLeft: 15 }}>
                    <Text style={{ color: '#808080', textAlign: 'center', fontSize: 18, marginTop: 10, fontFamily: 'SpaceGrotesk-Regular' }}>08</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTabss('09') }} style={{ width: 50, borderRadius: 5, marginTop: 5, height: 45, backgroundColor: selectedTabss == '09' ? '#eaeaea' : '#e6c402', borderWidth: 0.5, borderColor: '#808080', marginLeft: 15 }}>
                    <Text style={{ color: '#808080', textAlign: 'center', fontSize: 18, marginTop: 10, fontFamily: 'SpaceGrotesk-Regular' }}>09</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTabss('10') }} style={{ width: 50, borderRadius: 5, marginTop: 5, height: 45, backgroundColor: selectedTabss == '10' ? '#eaeaea' : '#e6c402', borderWidth: 0.5, borderColor: '#808080', marginLeft: 15 }}>
                    <Text style={{ color: '#808080', textAlign: 'center', fontSize: 18, marginTop: 10, fontFamily: 'SpaceGrotesk-Regular' }}>10</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setSelectedTabss('11') }} style={{ width: 50, borderRadius: 5, marginTop: 5, height: 45, backgroundColor: selectedTabss == '11' ? '#eaeaea' : '#e6c402', borderWidth: 0.5, borderColor: '#808080', marginLeft: 15,marginRight:15 }}>
                    <Text style={{ color: '#808080', textAlign: 'center', fontSize: 18, marginTop: 10, fontFamily: 'SpaceGrotesk-Regular' }}>11</Text>
                </TouchableOpacity>

                </ScrollView>
            </View>
            <View style={{ height: 80, marginTop: 20 }}>
                <Text style={{ fontSize: 18, color: '#333333', marginLeft: 15, fontFamily: 'SpaceGrotesk-Regular' }}>Minutes</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => { setSelectedTabs('00') }} style={{ width: 50, borderRadius: 5, marginTop: 5, height: 45, backgroundColor: selectedTabs == '00' ? '#eaeaea' : '#e6c402', borderWidth: 0.5, borderColor: '#808080', marginLeft: 15 }}>
                        <Text style={{ color: '#808080', textAlign: 'center', fontSize: 18, marginTop: 10, fontFamily: 'SpaceGrotesk-Regular' }}>00</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { setSelectedTabs('15') }} style={{ width: 50, borderRadius: 5, marginTop: 5, height: 45, backgroundColor: selectedTabs == '15' ? '#eaeaea' : '#e6c402', borderWidth: 0.5, borderColor: '#808080', marginLeft: 15 }}>
                        <Text style={{ color: '#808080', textAlign: 'center', fontSize: 18, marginTop: 10, fontFamily: 'SpaceGrotesk-Regular' }}>15</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { setSelectedTabs('30') }} style={{ width: 50, borderRadius: 5, marginTop: 5, height: 45, backgroundColor: selectedTabs == '30' ? '#eaeaea' : '#e6c402', borderWidth: 0.5, borderColor: '#808080', marginLeft: 15 }}>
                        <Text style={{ color: '#808080', textAlign: 'center', fontSize: 18, marginTop: 10, fontFamily: 'SpaceGrotesk-Regular' }}>30</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { setSelectedTabs('45') }} style={{ width: 50, borderRadius: 5, marginTop: 5, height: 45, backgroundColor: selectedTabs == '45' ? '#eaeaea' : '#e6c402', borderWidth: 0.5, borderColor: '#808080', marginLeft: 15 }}>
                        <Text style={{ color: '#808080', textAlign: 'center', fontSize: 18, marginTop: 10, fontFamily: 'SpaceGrotesk-Regular' }}>45</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ height: 80, marginTop: 60 }}>
                <Text style={{ fontSize: 18, color: '#333333', marginLeft: 15, fontFamily: 'SpaceGrotesk-Regular' }}>{selectedTabss}:{selectedTabs} {selectedTab}</Text>
                <Text style={{ fontSize: 13.5, color: '#333333', marginLeft: 15, fontFamily: 'SpaceGrotesk-Regular' }}>Apr 23,Sunday</Text>
                <TouchableOpacity onPress={() => ToProvider()} style={{ width: 120, height: 40, backgroundColor: 'green', position: 'absolute', marginTop: 2, marginLeft: 200, borderRadius: 10 }}>
                    <Text style={{ fontSize: 26, textAlign: 'center', color: '#eaeaea', fontFamily: 'SpaceGrotesk-Regular' }}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Calendar;

const styles = StyleSheet.create({})