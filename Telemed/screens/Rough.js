import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Rough = ({route}) => {

    const{item} = route.params;

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'black'}}>{item.name}</Text>
    </View>
  )
}

export default Rough;

const styles = StyleSheet.create({})