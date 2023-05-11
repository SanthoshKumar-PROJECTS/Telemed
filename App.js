import { View, Text } from 'react-native'
import React from 'react'
import Navigator from './Telemed/navigations/Navigator'
import Login from './Telemed/screens/Login';
import Profile from './Telemed/screens/Profile';
import Appointment from './Telemed/screens/Appointment';
import OTP from './Telemed/screens/OTP';
import Passcode from './Telemed/screens/Passcode';
import CreateAppointment from './Telemed/screens/CreateAppointment';
import Telemed from './Telemed/screens/Telemed';
import Provider from './Telemed/screens/Provider';
import MedicalReport from './Telemed/screens/MedicalReport';
import Facility from './Telemed/screens/Facility';
import SearchFilterFacility from './Telemed/screens/SearchFilterFacility';
import PatientDetails from './Telemed/screens/PatientDetails';
import SearchFilterPatient from './Telemed/screens/SearchFilterPatient';
import Calendar from './Telemed/screens/Calendar';
import Proceed from './Telemed/screens/Proceed';
import EditPersonalInfo from './Telemed/screens/EditPersonalInfo';
import Signup from './Telemed/screens/Signup';
import Signin from './Telemed/screens/Signin';
import Appointments from './Telemed/screens/Appointments';
import Accepted from './Telemed/screens/Accpeted';
import Facilitys from './Telemed/screens/Facilitys';
import Accepteds from './Telemed/screens/Accepteds';
import Rough from './Telemed/screens/Rough';
import PatientDetailsWire from './Telemed/screens/PatientDetailsWire';
import PopupMenu from './Telemed/screens/PopupMenu';
import Roughs from './Telemed/screens/Roughs';



const App = () => {
  
  return (
    <View style={{flex:1}}>
      {/* <Navigator/> */}
      {/* <Profile/> */}
      {/* <Appointment/> */}
      {/* <Appointments/> */}
      {/* <Accepted/> */}
      {/* <Navigator/> */}
      {/* <Login/> */}
      {/* <Signin/> */}
      {/* <OTP/> */}
      {/* <Passcode/> */}
      {/* <CreateAppointment/> */}
      {/* <Telemed/> */}
      {/* <Provider/> */}
      {/* <MedicalReport/> */}
      {/* <Facility/> */}
    {/* <SearchFilterFacility/> */}
      {/* <PatientDetails/> */}
      {/* <SearchFilterPatient/> */}
      {/* <Calendar/> */}
      {/* <Proceed/> */}
      {/* <EditPersonalInfo/> */}
      {/* <Signup/> */}
      {/* <Accepteds/> */}
      {/* <MainForm/> */}
      {/* <Facilitys/> */}
      {/* <Rough/> */}
      {/* <PatientDetailsWire/> */}
      {/* <PopupMenu/> */}
      <Roughs/>
    </View>
  )
}

export default App;

