import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'

const EditPersonalInfo = ({navigation}) => {

    const ToProfile = () => {
        navigation.navigate('Profile')
      }

    return (
        <View style={{ flex: 1, backgroundColor:'#eaeaea' }}>
            <View style={{ height: 70, backgroundColor: '#11266c' }}>
                <Octicons style={{ color: '#e6c402', marginTop: 10, marginLeft: 20, position: 'absolute' }} name='arrow-left' size={30} />
                <Text style={{ fontSize: 24, color:'#eaeaea', marginTop: 7, marginLeft: 60, position: 'absolute',fontFamily: 'SpaceGrotesk-Regular' }}>Edit Personal Info</Text>
            </View>
            <View style={{flex:1,backgroundColor:'#eaeaea',borderRadius:8,marginTop:-15}}>
                <Text style={styles.title}>First Name</Text>
                <TextInput style={styles.body} placeholder='William L.' placeholderTextColor={'#333333'}/>
                <Text style={styles.title}>Last Name</Text>
                <TextInput style={styles.body} placeholder='Hutchinson' placeholderTextColor={'#333333'}/>
                <Text style={styles.title}>Nickname(Display)</Text>
                <TextInput style={styles.body} placeholder="Will I'm" placeholderTextColor={'#333333'}/>
                <Text style={styles.title}>NPI</Text>
                <TextInput style={styles.body} placeholder='8668125040' placeholderTextColor={'#333333'} keyboardType='numeric'/>
                <Text style={styles.title}>CMD</Text>
                <TextInput style={styles.body} placeholder='4840238492v' placeholderTextColor={'#333333'}/>
                <TouchableOpacity onPress={()=>ToProfile()} style={{width:100,height:35,backgroundColor:'green',borderRadius:8,marginTop:30,marginLeft:225}}>
                    <Text style={{color:'#eaeaea',textAlign:'center',fontSize:20,marginTop:2,fontFamily: 'SpaceGrotesk-Regular'}}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EditPersonalInfo

const styles = StyleSheet.create({
    title:{
        color:'#808080',
        fontSize:14,
        marginLeft:30,
        marginRight:30,
        marginTop:20,
        fontFamily: 'SpaceGrotesk-Regular'
    },
    body:{
        color:'#333333',
        fontSize:18,
        marginLeft:30,
        marginRight:30,
        borderBottomColor:'#11266c',
        borderBottomWidth:1,
        marginTop:-10,
        fontFamily: 'SpaceGrotesk-Regular'
    },
})