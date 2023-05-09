import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../screens/Profile';
import Appointment from '../screens/Appointment';
import Appointments from '../screens/Appointments';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Signin from '../screens/Signin';
import OTP from '../screens/OTP';
import EditPersonalInfo from '../screens/EditPersonalInfo';
import Accepted from '../screens/Accpeted';
import CreateAppointment from '../screens/CreateAppointment';
import Telemed from '../screens/Telemed';
import Facility from '../screens/Facility';
import PatientDetails from '../screens/PatientDetails';
import Calendar from '../screens/Calendar';
import Provider from '../screens/Provider';
import Proceed from '../screens/Proceed';
import Facilitys from '../screens/Facilitys';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Signup'
                    component={Signup}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name='Signin'
                    component={Signin}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name='OTP'
                    component={OTP}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name='Profile'
                    component={Profile}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name='EditPersonalInfo'
                    component={EditPersonalInfo}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name='Appointments'
                    component={Appointments}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name='Accepted'
                    component={Accepted}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name='CreateAppointment'
                    component={CreateAppointment}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name='Telemed'
                    component={Telemed}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name='Facilitys'
                    component={Facilitys}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name='PatientDetails'
                    component={PatientDetails}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name='Calendar'
                    component={Calendar}
                    options={{ headerShown: false }}
                />

                 <Stack.Screen
                    name='Provider'
                    component={Provider}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Proceed'
                    component={Proceed}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;