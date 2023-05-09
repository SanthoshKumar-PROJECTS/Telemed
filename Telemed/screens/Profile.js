import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { Picker } from '@react-native-picker/picker';


const Profile = ({navigation}) => {

    const ToAppointments = () => {
        navigation.navigate('Appointments')
      }

      const ToEditPersonalInfo = () => {
        navigation.navigate('EditPersonalInfo')
      }

    const [selectedValue, setSelectedValue] = useState("Active");
    const [showInfo, SetShowInfo] = useState(false);
    const [showContact, SetShowContact] = useState(false);
    const [showSpecial, setShowSpecial] = useState(false);
    const [showAvail, setShowAvail] = useState(false);
    const [showAddress, setShowAddress] = useState(false);
    const [showPer1, SetShowPer1] = useState(false);
    const [showPer2, SetShowPer2] = useState(false);
    const [showPer3, SetShowPer3] = useState(false);
    const [showPer4, SetShowPer4] = useState(false);
    const [showPer5, SetShowPer5] = useState(false);
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <View style={{ flex: 1, backgroundColor: '#11266c', }}>
            <View style={{ height: 50 }}>
                <Octicons style={{ color: '#e6c402', marginTop: 10, marginLeft: 20, position: 'absolute' }} name='arrow-left' size={30} />
                <Text style={{ fontSize: 25, color: '#eaeaea', marginTop: 7, marginLeft: 60, position: 'absolute',fontFamily: 'SpaceGrotesk-Regular'}}>Profile</Text>
            </View>
            <View style={{height:50,width:150,marginLeft: 85,top:60,position:'absolute'}}>
                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 50, width: 160, color: '#32cd32', marginLeft: 5 }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item style={{ fontSize: 18,fontFamily: 'SpaceGrotesk-Regular' }} label="Active" value="Active" />
                                <Picker.Item style={{ fontSize: 18,fontFamily: 'SpaceGrotesk-Regular' }} label="De-Active" value="De-Active" />
                            </Picker>      
            </View>
            <View style={{ height: 530, backgroundColor: '#dcdcdc', marginTop: 130, borderRadius: 8 }}>
                <View style={{ height: 310, backgroundColor: '#eaeaea', marginLeft: 15, marginRight: 15, borderRadius: 8, top: -125 }}>
                    <View>
                        <View style={{marginLeft:85}}>
                        <Picker
                                selectedValue={selectedValue}
                                style={{ height: 50, width: 140, color: '#32cd32', marginLeft: 5 }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item style={{ fontSize: 18,fontFamily: 'SpaceGrotesk-Regular' }} label="Active" value="Active" />
                                <Picker.Item style={{ fontSize: 18,fontFamily: 'SpaceGrotesk-Regular' }} label="De-Active" value="De-Active" />
                            </Picker>
                        </View>
                        <Text style={{ color: '#333333', fontSize: 18, margin: 15, position: 'absolute',fontFamily: 'SpaceGrotesk-Regular'}}>Status :</Text>
                        <MaterialIcons style={{ color: '#333333', marginTop: 13, marginLeft: 190.5, position: 'absolute' }} name='arrow-drop-down' size={30} />
                        <Image source={require('../images/link.png')} style={{ height: 20, resizeMode: 'contain', marginTop: 15, marginLeft: -20, position: 'absolute' }} />
                        <Image source={require('../images/sms.png')} style={{ height: 20, resizeMode: 'contain', marginTop: 15, marginLeft: 5, position: 'absolute' }} />
                        <Image source={require('../images/whatsapp.png')} style={{ height: 20, resizeMode: 'contain', marginTop: 15, marginLeft: 30, position: 'absolute' }} />
                        <Image source={require('../images/mail.png')} style={{ height: 20, resizeMode: 'contain', marginTop: 15, marginLeft: 55, position: 'absolute' }} />
                        <View style={{ width: 130, height: 130, backgroundColor: '#dcdcdc', alignSelf: 'center', marginTop: 70, borderRadius: 5, position: 'absolute' }}>
                            <Entypo style={{ color: 'white', alignSelf: 'center', marginTop: 48, position: 'absolute' }} name='camera' size={30} />
                        </View>
                        <Text onPress={()=>ToAppointments()} style={{ color: '#333333', fontSize: 25, marginTop: 230, position: 'absolute', alignSelf: 'center',fontFamily: 'SpaceGrotesk-Regular' }}>Willian L.Hutchinson</Text>
                        <Text style={{ color: '#808080', fontSize: 15, marginTop: 270, position: 'absolute', alignSelf: 'center',fontFamily: 'SpaceGrotesk-Regular' }}>NPI : 7026003922</Text>
                    </View>
                </View>
                <View>
                    <Text style={{position:'absolute',marginTop: -100,marginLeft:20,color:'#11266c',fontFamily: 'SpaceGrotesk-Regular'}}>Profile</Text>
                {showPer1 ?  (<Text style={{position:'absolute',marginTop: -100,marginLeft:240,color:'red',fontFamily: 'SpaceGrotesk-Regular'}}>20%<Text style={{color:'#11266c'}}> Completed</Text></Text>):
                showPer2 ?  (<Text style={{position:'absolute',marginTop: -100,marginLeft:240,color:'red',fontFamily: 'SpaceGrotesk-Regular'}}>40%<Text style={{color:'#11266c'}}> Completed</Text></Text>):
                showPer3 ?  (<Text style={{position:'absolute',marginTop: -100,marginLeft:240,color:'red',fontFamily: 'SpaceGrotesk-Regular'}}>60%<Text style={{color:'#11266c'}}> Completed</Text></Text>):
                showPer4 ?  (<Text style={{position:'absolute',marginTop: -100,marginLeft:240,color:'red',fontFamily: 'SpaceGrotesk-Regular'}}>80%<Text style={{color:'#11266c'}}> Completed</Text></Text>):
                showPer5 ?  (<Text style={{position:'absolute',marginTop: -100,marginLeft:234,color:'red',fontFamily: 'SpaceGrotesk-Regular'}}>100%<Text style={{color:'#11266c'}}> Completed</Text></Text>):null}
                    <View style={{ width: '90%', height: 1, backgroundColor: '#808080', marginTop: -75, alignSelf: 'center',position:'relative' }}><View style={{width:10,height:10,borderRadius:30,backgroundColor:'white',borderColor:'#11266c',borderWidth:1,marginTop:-5,
                    marginLeft: selectedTab == 0 ? "0%" : selectedTab == 1 ? "25%" : selectedTab == 2 ? "50%" : selectedTab == 3 ? "75%" : selectedTab == 4 ? "100%": "125%"}}></View></View>
                    <Text style={{position:'absolute',marginTop: -70,marginLeft:100,fontSize:10,fontFamily: 'SpaceGrotesk-Regular',color:'#808080'}}><Ionicons name='warning'color={'#e6c402'}/> In-completion of profile will affect the schedule</Text>
                </View>
                    <ScrollView style={{marginTop:-60}}>
                <TouchableOpacity onPress={() => { SetShowInfo(!showInfo);setSelectedTab(0);SetShowPer1(!showPer1)}}>
                    <Entypo style={{ color: '#e6c402', fontSize: 25, marginTop: 10, marginLeft: 20 }} name='plus' size={25} />
                   {showInfo ? (<Entypo style={{ color: '#e6c402', fontSize: 25, marginTop: -25, marginLeft: 20,backgroundColor:'#dcdcdc'}} name='minus' size={25} />):null}
                    <Text style={{ color: '#333333', fontSize: 15, marginTop: -24, marginLeft: 50,fontFamily: 'SpaceGrotesk-Regular' }}>Personal info</Text>
                    
                    <Feather style={{ color: '#32cd32', marginTop: -22, marginLeft: 225, }} name='check' size={25} /> 
                </TouchableOpacity>
                <Text style={{borderBottomColor:'#333333',borderBottomWidth:1,marginTop:-10,marginLeft:20,marginRight:20,}}/>
                {
                    showInfo ? (

                        <View style={{ width: 200, height: 200, marginLeft: 30, marginTop: -20 }}>
                            <Text style={{ color: '#808080', fontSize: 13, marginTop: 30, marginLeft: 20 ,fontFamily: 'SpaceGrotesk-Regular'}}>First Name</Text>
                            <Text style={{ color: '#333333', fontSize: 15, marginLeft: 20 ,fontFamily: 'SpaceGrotesk-Regular'}}>Willian L.</Text>
                            <Text style={{ color: '#808080', fontSize: 13, marginTop: 15, marginLeft: 20 ,fontFamily: 'SpaceGrotesk-Regular'}}>Last Name</Text>
                            <Text style={{ color: '#333333', fontSize: 15, marginLeft: 20 ,fontFamily: 'SpaceGrotesk-Regular'}}>Hutchinson</Text>
                            <Text style={{ color: '#808080', fontSize: 13, marginTop: 15, marginLeft: 20,fontFamily: 'SpaceGrotesk-Regular' }}>Nickname</Text>
                            <Text style={{ color: '#333333', fontSize: 15, marginLeft: 20,fontFamily: 'SpaceGrotesk-Regular' }}>Will I'm</Text>
                            <Text onPress={()=>ToEditPersonalInfo()} style={{ color: '#0071bc', fontSize: 15, left: 260,fontFamily: 'SpaceGrotesk-Regular',top:-10 }}>Modify</Text>
                        </View>

                    ) : null
                }
                <TouchableOpacity onPress={() => { SetShowContact(!showContact);setSelectedTab(1);SetShowPer2(!showPer2)}}>
                <Entypo style={{ color: '#e6c402', fontSize: 25, marginTop: 10, marginLeft: 20 }} name='plus' size={25} />
                   {showContact ? (<Entypo style={{ color: '#e6c402', fontSize: 25, marginTop: -25, marginLeft: 20,backgroundColor:'#dcdcdc'}} name='minus' size={25} />):null}

                    <Text style={{ color: '#333333', fontSize: 15, marginTop: -24, marginLeft: 50,fontFamily: 'SpaceGrotesk-Regular' }}>Contact</Text>

                    <Feather style={{ color: '#32cd32', marginTop: -22, marginLeft: 225, }} name='check' size={25} />
                </TouchableOpacity>
                <Text style={{borderBottomColor:'#333333',borderBottomWidth:1,marginTop:-10,marginLeft:20,marginRight:20}}/>
                {
                    showContact ? (

                        <View style={{ width: 200, height: 200, marginLeft: 30, marginTop: -20 }}>
                            <Text style={{ color: '#808080', fontSize: 13, marginTop: 30, marginLeft: 20,fontFamily: 'SpaceGrotesk-Regular' }}>First Name</Text>
                            <Text style={{ color: '#333333', fontSize: 15, marginLeft: 20 ,fontFamily: 'SpaceGrotesk-Regular'}}>Willian L.</Text>
                            <Text style={{ color: '#808080', fontSize: 13, marginTop: 15, marginLeft: 20,fontFamily: 'SpaceGrotesk-Regular' }}>Last Name</Text>
                            <Text style={{ color: '#333333', fontSize: 15, marginLeft: 20,fontFamily: 'SpaceGrotesk-Regular' }}>Hutchinson</Text>
                            <Text style={{ color: '#808080', fontSize: 13, marginTop: 15, marginLeft: 20 ,fontFamily: 'SpaceGrotesk-Regular'}}>Nickname</Text>
                            <Text style={{ color: '#333333', fontSize: 15, marginLeft: 20 ,fontFamily: 'SpaceGrotesk-Regular'}}>Will I'm</Text>
                            <Text onPress={()=>ToEditPersonalInfo()} style={{ color: '#0071bc', fontSize: 15, left: 260,fontFamily: 'SpaceGrotesk-Regular',top:-10 }}>Modify</Text>
                        </View>

                    ) : null
                }
                <TouchableOpacity onPress={() => { setShowSpecial(!showSpecial);setSelectedTab(2);SetShowPer3(!showPer3)}}>
                <Entypo style={{ color: '#e6c402', fontSize: 25, marginTop: 10, marginLeft: 20 }} name='plus' size={25} />
                   {showSpecial ? (<Entypo style={{ color: '#e6c402', fontSize: 25, marginTop: -25, marginLeft: 20,backgroundColor:'#dcdcdc'}} name='minus' size={25} />):null}
                    <Text style={{ color: '#333333', fontSize: 15, marginTop: -24, marginLeft: 50,fontFamily: 'SpaceGrotesk-Regular' }}>Specialities</Text>
                    <Feather style={{ color: '#32cd32', marginTop: -22, marginLeft: 225, }} name='check' size={25} />
                </TouchableOpacity>
                <Text style={{borderBottomColor:'#333333',borderBottomWidth:1,marginTop:-10,marginLeft:20,marginRight:20}}/>
                {
                    showSpecial ? (

                        <View style={{ width: 200, height: 200, marginLeft: 30, marginTop: -20 }}>
                            <Text style={{ color: '#808080', fontSize: 13, marginTop: 30, marginLeft: 20,fontFamily: 'SpaceGrotesk-Regular' }}>First Name</Text>
                            <Text style={{ color: '#333333', fontSize: 15, marginLeft: 20 ,fontFamily: 'SpaceGrotesk-Regular'}}>Willian L.</Text>
                            <Text style={{ color: '#808080', fontSize: 13, marginTop: 15, marginLeft: 20 ,fontFamily: 'SpaceGrotesk-Regular'}}>Last Name</Text>
                            <Text style={{ color: '#333333', fontSize: 15, marginLeft: 20 ,fontFamily: 'SpaceGrotesk-Regular'}}>Hutchinson</Text>
                            <Text style={{ color: '#808080', fontSize: 13, marginTop: 15, marginLeft: 20,fontFamily: 'SpaceGrotesk-Regular' }}>Nickname</Text>
                            <Text style={{ color: '#333333', fontSize: 15, marginLeft: 20 ,fontFamily: 'SpaceGrotesk-Regular'}}>Will I'm</Text>
                            <Text onPress={()=>ToEditPersonalInfo()} style={{ color: '#0071bc', fontSize: 15, left: 260,fontFamily: 'SpaceGrotesk-Regular',top:-10 }}>Modify</Text>
                        </View>

                    ) : null
                }
                <TouchableOpacity onPress={() => { setShowAvail(!showAvail);setSelectedTab(3);SetShowPer4(!showPer4)}}>
                <Entypo style={{ color: '#e6c402', fontSize: 25, marginTop: 10, marginLeft: 20 }} name='plus' size={25} />
                   {showAvail ? (<Entypo style={{ color: '#e6c402', fontSize: 25, marginTop: -25, marginLeft: 20,backgroundColor:'#dcdcdc'}} name='minus' size={25} />):null}
                    <Text style={{ color: '#333333', fontSize: 15, marginTop: -24, marginLeft: 50 ,fontFamily: 'SpaceGrotesk-Regular'}}>Availability</Text>
                    <Feather style={{ color: '#32cd32', marginTop: -22, marginLeft:225 }} name='check' size={25} />
                </TouchableOpacity>
                <Text style={{borderBottomColor:'#333333',borderBottomWidth:1,marginTop:-10,marginLeft:20,marginRight:20}}/>
                {
                    showAvail ? (

                        <View style={{ width: 200, height: 200, marginLeft: 30, marginTop: -20 }}>
                            <Text style={{ color: '#808080', fontSize: 13, marginTop: 30, marginLeft: 20,fontFamily: 'SpaceGrotesk-Regular' }}>First Name</Text>
                            <Text style={{ color: '#333333', fontSize: 15, marginLeft: 20,fontFamily: 'SpaceGrotesk-Regular' }}>Willian L.</Text>
                            <Text style={{ color: '#808080', fontSize: 13, marginTop: 15, marginLeft: 20,fontFamily: 'SpaceGrotesk-Regular' }}>Last Name</Text>
                            <Text style={{ color: '#333333', fontSize: 15, marginLeft: 20,fontFamily: 'SpaceGrotesk-Regular' }}>Hutchinson</Text>
                            <Text style={{ color: '#808080', fontSize: 13, marginTop: 15, marginLeft: 20,fontFamily: 'SpaceGrotesk-Regular' }}>Nickname</Text>
                            <Text style={{ color: '#333333', fontSize: 15, marginLeft: 20,fontFamily: 'SpaceGrotesk-Regular' }}>Will I'm</Text>
                            <Text onPress={()=>ToEditPersonalInfo()} style={{ color: '#0071bc', fontSize: 15, left: 260,fontFamily: 'SpaceGrotesk-Regular',top:-10 }}>Modify</Text>
                        </View>

                    ) : null
                }
                <TouchableOpacity onPress={() => { setShowAddress(!showAddress);setSelectedTab(4);SetShowPer5(!showPer5)}}>
                <Entypo style={{ color: '#e6c402', fontSize: 25, marginTop: 10, marginLeft: 20 }} name='plus' size={25} />
                   {showAddress ? (<Entypo style={{ color: '#e6c402', fontSize: 25, marginTop: -25, marginLeft: 20,backgroundColor:'#dcdcdc'}} name='minus' size={25} />):null}
                    <Text style={{ color: '#333333', fontSize: 15, marginTop: -24, marginLeft: 50,fontFamily: 'SpaceGrotesk-Regular' }}>Address</Text>
                    <Feather style={{ color: '#32cd32', marginTop: -22, marginLeft: 225, }} name='check' size={25} />
                </TouchableOpacity>
                <Text style={{borderBottomColor:'#333333',borderBottomWidth:1,marginTop:-10,marginLeft:20,marginRight:20}}/>
                {
                    showAddress ? (

                        <View style={{ width: 200, height: 200, marginLeft: 30, marginTop: -20 }}>
                            <Text style={{ color: '#808080', fontSize: 13, marginTop: 30, marginLeft: 20 ,fontFamily: 'SpaceGrotesk-Regular'}}>First Name</Text>
                            <Text style={{ color: '#333333', fontSize: 15, marginLeft: 20 ,fontFamily: 'SpaceGrotesk-Regular'}}>Willian L.</Text>
                            <Text style={{ color: '#808080', fontSize: 13, marginTop: 15, marginLeft: 20,fontFamily: 'SpaceGrotesk-Regular' }}>Last Name</Text>
                            <Text style={{ color: '#333333', fontSize: 15, marginLeft: 20,fontFamily: 'SpaceGrotesk-Regular' }}>Hutchinson</Text>
                            <Text style={{ color: '#808080', fontSize: 13, marginTop: 15, marginLeft: 20,fontFamily: 'SpaceGrotesk-Regular' }}>Nickname</Text>
                            <Text style={{ color: '#333333', fontSize: 15, marginLeft: 20 ,fontFamily: 'SpaceGrotesk-Regular'}}>Will I'm</Text>
                            <Text onPress={()=>ToEditPersonalInfo()} style={{ color: '#0071bc', fontSize: 15, left: 260,fontFamily: 'SpaceGrotesk-Regular',top:-10 }}>Modify</Text>
                        </View>

                    ) : null
                }
                </ScrollView>
                
            </View>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({

})