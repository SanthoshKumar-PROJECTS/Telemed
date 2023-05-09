import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SearchFilterFacility = ({ data, input, setInput }) => {
  return (
    <FlatList
      style={{marginBottom: 200, marginRight: 40, marginLeft: 40, backgroundColor: '#eaeaea', }}
      data={data}
      renderItem={({ item }) => {
        if (input === "") {
          return (
            <View style={{ marginVertical: 10,}}>
              <TouchableOpacity>
                <Text style={{ fontSize: 14, color: '#333333', top: 5, marginLeft: 20, marginRight: 20, fontFamily: 'SpaceGrotesk-Regular' }}>{item.name}</Text>
              </TouchableOpacity>
              <Text style={{ borderColor: '#808080', borderWidth: 0.5, height: 1, marginTop: 5, marginLeft: 20, marginRight: 20, top: 10, fontFamily: 'SpaceGrotesk-Regular' }} />
            </View>
          )
        }
        if(item.name.toLowerCase().includes(input.toLowerCase())){
            return(
                <View style={{marginVertical:10}}>
                    <TouchableOpacity>
                    <Text style={{fontSize:14,color:'#333333',top:5,marginLeft:20,marginRight:20, fontFamily: 'SpaceGrotesk-Regular'}}>{item.name}</Text>
                    </TouchableOpacity>
                    <Text style={{borderColor:'#808080',borderWidth:0.5,height:1,marginTop:5,marginLeft:20,marginRight:20,top:10, fontFamily: 'SpaceGrotesk-Regular'}}/>
                </View>
            )
        }
      }}
    />
  )
}

export default SearchFilterFacility;

const styles = StyleSheet.create({})