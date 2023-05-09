import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useRef } from 'react'

const Passcode = () => {

    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);

    const [pin1, SetPin1] = useState("");
    const [pin2, SetPin2] = useState("");
    const [pin3, SetPin3] = useState("");
    const [pin4, SetPin4] = useState("");

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Text style={{ color: 'black', fontStyle: 'italic', fontSize: 35, textAlign: 'center', marginTop: 65 }}>Vis<Text style={{ fontStyle: 'normal', fontWeight: 'bold' }}>Doc</Text></Text>
            <Text style={{ color: 'black', fontSize: 20, textAlign: 'center',marginTop:150 }}>Create Passcode</Text>
            <View style={{ marginTop:10,marginLeft: 60, marginRight: 60, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.TextInputView}>
                    <TextInput
                        ref={pin1Ref}
                        keyboardType={'number-pad'}
                        secureTextEntry
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
                        secureTextEntry
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
                        secureTextEntry
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
                        secureTextEntry
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

export default Passcode;

const styles = StyleSheet.create({
    TextInputView: {
        borderBottomWidth: 1,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextInputText: {
        fontSize: 25,
        color: 'black'
    }
})