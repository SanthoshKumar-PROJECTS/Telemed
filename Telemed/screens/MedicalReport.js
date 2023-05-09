import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const MedicalReport = () => {

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ height: 50, backgroundColor: '#dcdcdc' }}>
                <Octicons style={{ color: 'black', marginTop: 10, marginLeft: 20, position: 'absolute' }} name='arrow-left' size={30} />
                <Text style={{ fontSize: 25, color: 'black', marginTop: 7, marginLeft: 60, position: 'absolute' }}>Medical Report</Text>
                <Fontisto style={{ marginLeft: 310, marginTop: 12, position: 'absolute' }} name='search' color={'black'} size={25} />
            </View>
            <View style={{ height: 210, width: 330, borderColor: 'gray', borderWidth: 0.5, margin: 15, borderRadius: 5 }}>
                <FontAwesome5 style={{ alignSelf: 'flex-start', top: 105, position: 'absolute', left: -12 }} name='chevron-left' color={'black'} size={12} />
                <FontAwesome5 style={{ alignSelf: 'flex-end', top: 105, position: 'absolute', right: -12 }} name='chevron-right' color={'black'} size={12} />
                <View>
                    <View style={{ width: 60, height: 60, backgroundColor: '#dcdcdc', borderRadius: 5, marginTop: 20, marginLeft: 20 }}></View>
                    <Text style={{ color: 'black', fontSize: 25, marginTop: 18, marginLeft: 100, position: 'absolute' }}>Daisy M.Sanders</Text>
                    <Text style={{ color: 'gray', fontSize: 15, marginTop: 55, marginLeft: 100, position: 'absolute' }}>Facility - Dial Senior Living</Text>
                </View>
                <Text style={{ color: 'black', fontSize: 18, marginTop: 20, marginLeft: 20, }}>Telemed - Cardiology</Text>
                <Text style={{ color: 'black', fontSize: 15, marginTop: 5, marginLeft: 20, }}>Mar 30,2023 | 09.00 am</Text>
                <Text style={{ color: 'gray', fontSize: 15, marginTop: 15, marginLeft: 20, }}>Referred by : Dr.Ken Hurt</Text>
            </View>
            <Text style={{ color: 'black', fontSize: 17, marginLeft: 20 }}>Medical Note</Text>
            <Text style={{ color: 'black', fontSize: 14, margin: 30 }}>HeartTrends is a diagnostic test for early detection of myocardial ischemia in individuals without known coronary artery disease. This clinically proven test analyzes 20 minutes of heart rate data without any stressful maneuvers or heart strain. It is intended for screening patients without known coronary artery disease (CAD) who present with CAD risk factors or with atypical chest pain, offering an independent, new cardiac risk factor for enhanced patient diagnosis.</Text>
            <TouchableOpacity style={{ backgroundColor: 'green', width: 135, height: 45, marginTop: 80, borderRadius: 5, marginLeft: 210 }}>
                <Text style={{ color: 'white', fontSize: 25, textAlign: 'center', marginTop: 4 }}>Share</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MedicalReport;

const styles = StyleSheet.create({})