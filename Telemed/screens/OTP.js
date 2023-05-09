import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useRef } from 'react'

const OTP = ({navigation}) => {

    const ToProfile = () => {
        navigation.navigate('Profile')
      }

    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);

    const [pin1, SetPin1] = useState("");
    const [pin2, SetPin2] = useState("");
    const [pin3, SetPin3] = useState("");
    const [pin4, SetPin4] = useState("");

    return (
        <View style={{ flex: 1, backgroundColor: '#11266c' }}>
            <Text style={{ color: '#eaeaea', fontFamily: 'SpaceGrotesk-Regular', fontSize: 36, textAlign: 'center', marginTop: 65, }}><Text style={{ fontStyle: 'italic' }}>Vis<Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Doc</Text></Text></Text>
            <Text onPress={()=>ToProfile()} style={{ color: '#eaeaea', fontSize: 18, textAlign: 'center',marginTop:80,fontFamily: 'SpaceGrotesk-Regular' }}>Enter OTP sent to your phone number</Text>
            <View style={{ marginTop:50,marginLeft: 80, marginRight: 80, flexDirection: 'row', justifyContent: 'space-between',}}>
                <View style={styles.TextInputView}>
                    <TextInput
                        ref={pin1Ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChange={(pin1) => {
                            SetPin1(pin1);
                            if (pin1 != "") {
                                pin2Ref.current.focus();
                            }
                        }}
                        style={styles.TextInputText}
                    />
                </View>

                <View style={styles.TextInputView}>
                    <TextInput
                        ref={pin2Ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChange={(pin2) => {
                            SetPin2(pin2);
                            if (pin2 != "") {
                                pin3Ref.current.focus();
                            }
                        }}
                        style={styles.TextInputText}
                    />
                </View>

                <View style={styles.TextInputView}>
                    <TextInput
                        ref={pin3Ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChange={(pin3) => {
                            SetPin3(pin3);
                            if (pin3 != "") {
                                pin4Ref.current.focus();
                            }
                        }}
                        style={styles.TextInputText}
                    />
                </View>

                <View style={styles.TextInputView}>
                    <TextInput
                        ref={pin4Ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChange={(pin4) => {
                            SetPin4(pin4)
                        }}
                        style={styles.TextInputText}
                    />
                </View>
            </View>
        </View>
    )
}

export default OTP;

const styles = StyleSheet.create({
    TextInputView: {
        borderBottomWidth: 1,
        borderBottomColor:'#eaeaea',
        width: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextInputText: {
        fontSize: 25,
        color: '#eaeaea',
        fontFamily: 'SpaceGrotesk-Regular'
    }
})