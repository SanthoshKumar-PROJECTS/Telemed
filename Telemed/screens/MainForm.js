import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Sign from './Sign';
import Personal from './Personal';
import Contact from './Contact';

const MainForm = () => {

    const [step, setStep] = useState(0);

    const ShowStep = () => {
        if(step === 0) {
            return(
                <Sign/>
            )
        }
        else if(step === 1){
            return(
                <Personal/>
            )
        }
        else if(step === 2){
            return(
                <Contact/>
            )
        }
        else if(step === 3){
            return(
                <Contact/>
            )
        }
        else if(step === 4){
            return(
                <Contact/>
            )
        }
        else if(step === 5){
            return(
                <Contact/>
            )
        }
    }
  return (
    <>
      <View style={styles.progressbar}>
        {/* <View style={{width: step === 0 ? "0%" : step === 1 ? "20%" : step === 2 ? "40%" : step === 3 ? "60%" : step === 4 ? "80%": "100%",height:10,backgroundColor:'red'}}> */}
        <View style ={{width:10,height:10,borderColor:'blue',borderWidth:1,borderRadius:20,backgroundColor:'white',marginTop:-5,
    marginLeft: step === 0 ? "0%" : step === 1 ? "20%" : step === 2 ? "40%" : step === 3 ? "60%" : step === 4 ? "80%": "100%"}}>
        </View>
        </View>
        <View style={styles.container}>
            <View>
               {ShowStep()}
            </View>
            <View style={styles.btnContainer}>
            <TouchableOpacity onPress={()=>setStep(step - 1)} disabled={step == 0} style={styles.btn}><Text>Prev</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>setStep(step + 1)} disabled={step == 5} style={styles.btn}><Text>Next</Text></TouchableOpacity>
        </View>
        </View>
    </>
  )
}

export default MainForm;

const styles = StyleSheet.create({

    progressbar :{
        position:'relative',
        marginBottom: 0.5,
        borderRadius:3,
        width:'90%',
        alignSelf:'center',
        height:1,
        backgroundColor:'blue',
        marginTop:20,
        flexDirection:'row'
      },
      progress:{
        width:'33.3%',
        
      },
      container:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        borderRadius:8,
        padding:30,
        backgroundColor:'#fff',
        marginTop:20
      },
      btnContainer:{
        display:'flex',
        justifyContent:'space-between',
        width:'85%',
        marginTop:10
      },
      btn:{
        fontSize:10,
        marginTop:5,
        padding:10,
        backgroundColor:'#ff3300',
      }
})




