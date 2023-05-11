import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
import Octicons from 'react-native-vector-icons/Octicons'
import Entypo from 'react-native-vector-icons/Entypo'

const PopupMenu = () => {

  const [selectedTab, setSelectedTab] = useState(0);

    return (
      <MenuProvider style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
          <Menu>
            <MenuTrigger><Text> <Entypo style={{ marginLeft: 315, marginTop: -25, color: '#e6c402' }} name='list' size={25} /></Text></MenuTrigger> 
            <MenuOptions optionsContainerStyle={{marginTop:-150,marginLeft:-75,width:140,height:140,justifyContent:'center'}}>
              <MenuOption>
              <TouchableOpacity onPress={() => { setSelectedTab(0) }}>
                <View style={{flexDirection:'row'}}>
               <View style={{width:17,height:17,borderColor:'#dcdcdc',borderWidth:1}}>
                <Octicons style={{ color: selectedTab == 0 ?'green':'white', alignSelf: 'center', }} name='check' size={17} /></View>
               <Text style={{ color: '#333333',fontFamily: 'SpaceGrotesk-Regular',fontSize:15,marginLeft:10 }}>All Location</Text>
               </View>
               </TouchableOpacity>
              </MenuOption>
              <MenuOption>
              <TouchableOpacity onPress={() => { setSelectedTab(1) }}>
              <View style={{flexDirection:'row'}}>
              <View style={{width:17,height:17,borderColor:'#dcdcdc',borderWidth:1}}>
                <Octicons style={{ color: selectedTab == 1 ?'green':'white', alignSelf: 'center', }} name='check' size={17} /></View>
                <Text style={{ color: '#333333',fontFamily: 'SpaceGrotesk-Regular',fontSize:15,marginLeft:10 }}>Clinic</Text>
               </View>
               </TouchableOpacity>
              </MenuOption>
              <MenuOption>
              <TouchableOpacity onPress={() => { setSelectedTab(2) }}>
              <View style={{flexDirection:'row'}}>
              <View style={{width:17,height:17,borderColor:'#dcdcdc',borderWidth:1}}>
                <Octicons style={{ color: selectedTab == 2 ?'green':'white', alignSelf: 'center', }} name='check' size={17} /></View>
                <Text style={{ color: '#333333',fontFamily: 'SpaceGrotesk-Regular',fontSize:15,marginLeft:10 }}>Facility</Text>
               </View>
               </TouchableOpacity>
              </MenuOption>
              <MenuOption>
              <TouchableOpacity onPress={() => { setSelectedTab(3) }}>
              <View style={{flexDirection:'row'}}>
              <View style={{width:17,height:17,borderColor:'#dcdcdc',borderWidth:1}}>
                <Octicons style={{ color: selectedTab == 3 ?'green':'white', alignSelf: 'center', }} name='check' size={17} /></View>
                <Text style={{ color: '#333333',fontFamily: 'SpaceGrotesk-Regular',fontSize:15,marginLeft:10 }}>Home Health</Text>
               </View>
               </TouchableOpacity>
              </MenuOption>
            </MenuOptions>
          </Menu>
      </MenuProvider>
    );
  
}

export default PopupMenu;

const styles = StyleSheet.create({
});
