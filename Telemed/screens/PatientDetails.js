import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import SearchFilterPatient from './SearchFilterPatient'
import { MultiSelect } from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo'

const PatientDetails = ({navigation}) => {

    const data = [{
        value: '1',
        label: 'Cardiology'
      }, {
        value: '2',
        label: 'Hypertension'
      }, {
        value: '3',
        label: 'Dentist'
      }, {
        value: '4',
        label: 'Cardiomyopathy'
      }, {
        value: '5',
        label: 'Cardia dysrhythminas'
      },]

  const ToCalendar = () =>{
    navigation.navigate('Calendar')
}

const [input, setInput] = useState("");

const [selected, setSelected] = useState([]);

const renderItem = item => {
  return (
    <View style={styles.item}>
      <Text style={styles.selectedTextStyle}>{item.label}</Text>
    </View>
  );
};


  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#dcdcdc' }}>
    <View style={{ height: 60, backgroundColor: '#11266c' }}>
        <Octicons style={{ color: '#e6c402', marginTop: 10, marginLeft: 20, position: 'absolute' }} name='arrow-left' size={30} />
        <Text style={{ fontSize: 25, color: '#eaeaea', marginTop: 7, marginLeft: 60, position: 'absolute',fontFamily: 'SpaceGrotesk-Regular' }}>Patient Details</Text>
    </View>
    <View style={{backgroundColor:'#dcdcdc',height:160,borderRadius:8,marginTop:1}}>
    <View style={{backgroundColor:'#dcdcdc',height:10,borderRadius:8,marginTop:-5}}></View>
            <View style={{width:"82%",height:1,backgroundColor:'#333333',marginLeft:30,marginRight:30,marginTop:30,position:'absolute'}}>
        <View style={{width:10,height:10,borderRadius:50,borderColor:'#333333',borderWidth:1,marginTop:-5,backgroundColor:'#808080'}}></View>
        <Text style={{color:'#11266c',fontSize:12,position:'absolute',marginTop:8,marginLeft:-15,fontFamily: 'SpaceGrotesk-Regular'}}>Facility</Text>
        <View style={{width:10,height:10,borderRadius:50,borderColor:'#333333',borderWidth:1,marginTop:-5,backgroundColor:'#eaeaea',marginLeft:73,position:'absolute'}}></View>
        <Text style={{color:'#11266c',fontSize:12,position:'absolute',marginTop:8,marginLeft:60,fontFamily: 'SpaceGrotesk-Regular'}}>Patient</Text>
        <View style={{width:10,height:10,borderRadius:50,borderColor:'#333333',borderWidth:1,marginTop:-5,backgroundColor:'#808080',marginLeft:146,position:'absolute'}}></View>
        <Text style={{color:'#11266c',fontSize:12,position:'absolute',marginTop:8,marginLeft:120,fontFamily: 'SpaceGrotesk-Regular'}}>Date & Time</Text>
        <View style={{width:10,height:10,borderRadius:50,borderColor:'#333333',borderWidth:1,marginTop:-5,backgroundColor:'#808080',marginLeft:218,position:'absolute'}}></View>
        <Text style={{color:'#11266c',fontSize:12,position:'absolute',marginTop:8,marginLeft:205,fontFamily: 'SpaceGrotesk-Regular'}}>Provider</Text>
        <View style={{width:10,height:10,borderRadius:50,borderColor:'#333333',borderWidth:1,marginTop:-5,backgroundColor:'#808080',marginLeft:290,position:'absolute'}}></View>
        <Text style={{color:'#11266c',fontSize:12,position:'absolute',marginTop:8,marginLeft:250,left:20,fontFamily: 'SpaceGrotesk-Regular'}}>Submit</Text>
        </View>
    <Text style={{ color: '#808080', fontSize: 13, marginLeft: 40, marginTop: 80,fontFamily: 'SpaceGrotesk-Regular' }}>Full Name</Text>
    <View style={{ flexDirection: 'row', borderBottomWidth: 1,borderBottomColor:'#11266c', alignItems: 'center', marginTop: 10, marginLeft: 40, marginRight: 40 }}>
        <TextInput style={{ fontSize: 15, color:'#333333', backgroundColor: '#dcdcdc', width: '100%',fontFamily: 'SpaceGrotesk-Regular' }}
            placeholder='Full Name'
            placeholderTextColor={'#808080'}
            onChangeText={(text) => setInput(text)}
        />
    </View>
    </View>
    <Text style={{ color: '#808080', fontSize: 13, marginLeft: 40,marginTop:20,fontFamily: 'SpaceGrotesk-Regular' }}>Speciality</Text>
    {/* <View style={{ flexDirection: 'row', borderBottomWidth: 1, alignItems: 'center', marginTop: 10, marginLeft: 40, marginRight: 40 }}> */}
    <View style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Specialities"
        value={selected}
        search
        searchPlaceholder="Search..."
        onChange={item => {
          setSelected(item);
        }}
        renderItem={renderItem}
        renderSelectedItem={(item, unSelect) => (
          <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
            <View style={styles.selectedStyle}>
              <Entypo color='#808080' name="cross" size={18} />
              <Text style={styles.textSelectedStyle}>{item.label}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
       
    {/* </View> */}
    {/* <SearchFilterPatient data={words} input={input} setInput={setInput} selectedItems={selectedItems} onSelectedItemsChange={onSelectedItemsChange}/> */}
    <Text style={{ color: '#808080', fontSize: 13, marginLeft: 40,top:100,fontFamily: 'SpaceGrotesk-Regular'}}>Patient Notes</Text>
    <View style={{ flexDirection: 'row', borderBottomWidth: 1,borderBottomColor:'#11266c', alignItems: 'center',top:100,marginLeft: 40, marginRight: 40 }}>
        <TextInput style={{ fontSize: 15, color:'#333333', backgroundColor: '#dcdcdc', width: '100%',fontFamily: 'SpaceGrotesk-Regular' }}
            placeholder='Patient Notes'
            placeholderTextColor={'#808080'}
            onChangeText={(text) => setInput(text)}
        />
    </View>
    <TouchableOpacity onPress={()=>ToCalendar()} style={{ backgroundColor: 'green', width: 135, height: 45,top:120, borderRadius: 5, marginLeft:185 }}>
        <Text style={{ color: '#eaeaea', fontSize: 25, textAlign: 'center', marginTop: 4,fontFamily: 'SpaceGrotesk-Regular' }}>Add</Text>
    </TouchableOpacity>
</View>
  )
}

export default PatientDetails;

const styles = StyleSheet.create({
  container: {marginLeft:40,marginRight:40,marginTop:25,borderBottomWidth:1,borderBottomColor:'#11266c',},
  dropdown: {
    height: 15,
    backgroundColor: '#dcdcdc',
    borderRadius: 12
  },
  placeholderStyle: {
    fontSize: 1,
  },
  selectedTextStyle: {
    fontSize: 14,
    color:'#333333',
    marginLeft:-10,
  },
  inputSearchStyle: {
    fontSize: 15,
    color:'#333333'
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth:1,
    borderBottomColor:'#333333',
    marginLeft:25,
    marginRight:25
  },
  selectedStyle: {
    flexDirection:'row',
    borderRadius: 8,
    backgroundColor: '#e6c402',
    shadowColor: '#000',
    margin : 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    paddingHorizontal:6,
    paddingVertical:3
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 15,
    color: '#333333',
  },
})