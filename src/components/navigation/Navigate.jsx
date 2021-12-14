import React from 'react';
import MainScreen from '../Screens/MainScreen';
import SliderScreen from '../Screens/SliderScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../Screens/SignInScreen'
import SignUpScreen from '../Screens/SignUpScreen'
import Home from '../Screens/Home'
import Map from '../Screens/MapScreen'

const Stack = createNativeStackNavigator();

export default function Navigate() {
    return (<NavigationContainer>
        <Stack.Navigator initialRouteName="SignInScreen"
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#0080ff'
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                    fontSize: 25,
                    fontWeight: 'bold'
                }
            }}>
            <Stack.Screen name='Main' component={MainScreen} />
            <Stack.Screen name='Slider' component={SliderScreen} />
            <Stack.Screen name='SignIn' component={SignInScreen}
                options={{ headerShown: false, }} />

            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Map' component={MainScreen} />
        </Stack.Navigator>
    </NavigationContainer>)
}

