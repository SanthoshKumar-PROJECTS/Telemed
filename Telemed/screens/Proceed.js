import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Proceed = ({navigation}) => {

  const ToSignup = () =>{
    navigation.navigate('Signup')
  }

  return (
    <View style={{flex:1,backgroundColor:'#333333'}}>
      <View style={{height:350,backgroundColor:'#eaeaea',marginTop:170,marginLeft:20,marginRight:20,borderRadius:10}}>
         <Text style={styles.title}>Facility</Text>
         <Text style={styles.body}>Adora NY</Text>
         <Text style={styles.title}>Patient Name</Text>
         <Text style={styles.body}>Chris P.Bacon</Text>
         <Text style={styles.title}>Speciality</Text>
         <Text style={styles.body}>Hypertension,Cardia dysrhythminas</Text>
         <Text style={styles.title}>Date & Time</Text>
         <Text style={styles.body}>09:30 AM - Sunday,Apr 23</Text>
         <Text style={styles.title}>Provider</Text>
         <Text style={styles.body}>No Provider(s) Selected</Text>
         <Text style={{borderBottomWidth:1,borderColor:'#333333',marginLeft:10,marginRight:10}} /> 
         <Text onPress={()=>ToSignup()} style={{color:'#0071bc',textAlign:'center',marginTop:16,fontSize:17, fontFamily: 'SpaceGrotesk-Regular'}}>Ok, Proceed</Text>
      </View>
    </View>
  )
}

export default Proceed;

const styles = StyleSheet.create({
    title:{
        color:'#808080',
        fontSize:13,
        marginLeft:15,
        marginTop:15,
        fontFamily: 'SpaceGrotesk-Regular'
    },
    body:{
        color:'#333333',
        fontSize:16,
        marginLeft:15,
        fontFamily: 'SpaceGrotesk-Regular'
    }
})