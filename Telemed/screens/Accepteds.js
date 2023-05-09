import { Image, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { SwipeListView } from 'react-native-swipe-list-view';

const Accepteds = () => {

  const ToSignup = () => {
    navigation.navigate('Signup')
  }

  const [selectedTab, setSelectedTab] = useState(0);

  const [listData, setListData] = useState(
    Array(10)
      .fill('')
      .map((_, i) => ({ key: `${i}`, time: `1${i}:00 PM` }))
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const renderItem = data => (
    <TouchableHighlight
      onPress={() => console.log('You touched me')}
      style={styles.rowFront}
      underlayColor={'#AAA'}
    >
      <View>
        <View style={{ height: 90, width: 328, margin: 16, backgroundColor: '#dcdcdc', }}>
          {/* <TouchableOpacity onPress={() => handleOnpress(item)}> */}
          <View style={{ width: 30, height: 30, borderColor: '#333333', borderWidth: 1, position: 'absolute', borderRadius: 8, marginTop: 35, marginLeft: 5 }}>
            <Octicons style={{ color: 'green', alignSelf: 'center', position: 'absolute' }} name='check' size={27} />
          </View>
          <Text style={{ color: '#333333', fontFamily: 'SpaceGrotesk-Regular', width: 150, height: 25, backgroundColor: '#dcdcdc', textAlign: 'center', marginLeft: 40, borderRadius: 5, top: -15 }}>Facility - Garnet Hill</Text>
          <Text style={{ color: '#333333', fontFamily: 'SpaceGrotesk-Regular', fontSize: 15, marginTop: 30, marginLeft: 50, position: 'absolute' }}>{data.item.time}</Text>
          <Text style={{ color: '#333333', fontFamily: 'SpaceGrotesk-Regular', fontSize: 15, marginTop: 30, marginLeft: 140, position: 'absolute' }}>Telemed - Cardiology</Text>
          <Text style={{ color: '#808080', fontFamily: 'SpaceGrotesk-Regular', fontSize: 13, marginTop: 50, marginLeft: 50, position: 'absolute' }}>Today</Text>
          <Text style={{ color: '#808080', fontFamily: 'SpaceGrotesk-Regular', fontSize: 13, marginTop: 50, marginLeft: 140, position: 'absolute' }}>Jonnnie M.Preslar | 57/M</Text>
          {/* </TouchableOpacity> */}
          <Text style={{ borderBottomWidth: 1, borderBottomColor: '#333333', marginTop: 55 }} />
        </View>
      </View>
    </TouchableHighlight>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => deleteRow(rowMap, data.item.key)}
      >
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => closeRow(rowMap, data.item.key)}
      >
        <Text style={styles.backTextWhite}>Accept</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{ height: 50,backgroundColor:'#11266c' }}>
        <Octicons style={{ marginLeft: 20, marginTop: 10 }} name='arrow-left' color={'#e6c402'} size={30} />
        <Text onPress={() => ToSignup()} style={{ color: '#eaeaea', fontFamily: 'SpaceGrotesk-Regular', fontSize: 25, marginLeft: 60, textAlign: 'center', marginTop: 5, position: 'absolute' }}>Accepted</Text>
        <MaterialIcons style={{ marginLeft: 225, marginTop: 10, position: 'absolute' }} name='notifications-none' color={'#e6c402'} size={25} />
        <Fontisto style={{ marginLeft: 270, marginTop: 12, position: 'absolute' }} name='search' color={'#e6c402'} size={20} />
        <Image source={require('../images/add.png')} style={{ marginLeft: 300, position: 'absolute', width: 55, height: 55 }} />
      </View>

      <View style={{ height: 35,backgroundColor:'#11266c' }}>
        <Text style={{ color: '#eaeaea', marginLeft: 20, fontSize: 16, marginTop: 10, fontFamily: 'SpaceGrotesk-Regular' }}>Appointments</Text>
      </View>
      <View style={{ height: 60,backgroundColor:'#11266c' }}>

        <TouchableOpacity onPress={() => { setSelectedTab(0) }} style={{ backgroundColor: selectedTab == 0 ? '#eaeaea' : '#e6c402', borderColor: '#808080', borderWidth: 0.5, height: 25, width: 70, borderRadius: 5, marginLeft: 20, marginTop: 10 }}>
          <Text style={{ color: '#11266c', fontSize: 14, textAlign: 'center', marginTop: 1, fontFamily: 'SpaceGrotesk-Regular' }}>Telemed</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setSelectedTab(1) }} style={{ height: 25, width: 60, backgroundColor: selectedTab == 1 ? '#eaeaea' : '#e6c402', borderColor: '#808080', borderWidth: 0.5, borderRadius: 5, marginLeft: 105, marginTop: 10, position: 'absolute' }}>
          <Text style={{ color: '#11266c', fontSize: 14, textAlign: 'center', marginTop: 1, fontFamily: 'SpaceGrotesk-Regular' }}>TCM</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setSelectedTab(2) }} style={{ backgroundColor: selectedTab == 2 ? '#eaeaea' : '#e6c402', height: 25, width: 50, borderColor: '#808080', borderWidth: 0.5, borderRadius: 5, marginLeft: 180, marginTop: 10, position: 'absolute' }}>
          <Text style={{ color: '#11266c', fontSize: 14, textAlign: 'center', marginTop: 1, fontFamily: 'SpaceGrotesk-Regular' }}>OP</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setSelectedTab(3); }} style={{ backgroundColor: selectedTab == 3 ? '#eaeaea' : '#e6c402', height: 25, width: 60, borderColor: '#808080', borderWidth: 0.5, borderRadius: 5, marginLeft: 245, marginTop: 10, position: 'absolute' }}>
          <Text style={{ color: '#11266c', fontSize: 14, textAlign: 'center', marginTop: 1, fontFamily: 'SpaceGrotesk-Regular' }}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { setSelectedTab(4); }}>
          <Entypo style={{ marginLeft: 315, marginTop: -25, position: 'absolute', color: selectedTab == 4 ? '#eaeaea' : '#e6c402' }} name='list' size={25} />
        </TouchableOpacity>
      </View>
      <View style={{ height: 570,marginTop: -8 }}>
        <SwipeListView
          data={listData}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={75}
          rightOpenValue={-75}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          onRowDidOpen={onRowDidOpen}
        />
      </View>
    </View>
  );
}

export default Accepteds;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dcdcdc',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#dcdcdc',
    justifyContent: 'center',
    flex: 1,
    borderRadius:8
  },
  rowBack: {
    alignItems: 'center',
    // backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: 'red',
    left: 0,
    borderRadius: 8
  },
  backRightBtnRight: {
    backgroundColor: 'green',
    right: 0,
    borderRadius:8 
  },
});