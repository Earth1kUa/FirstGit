import React from 'react';
import MainScreen from '../Screens/MainScreen';
import SliderScreen from '../Screens/SliderScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../Screens/SignInScreen'
import SignUpScreen from '../Screens/SignUpScreen'

const Stack = createNativeStackNavigator();

export default function Navigate() {
    return (<NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Main' component={MainScreen} />
            <Stack.Screen name='Slider' component={SliderScreen} />
            <Stack.Screen name='SignIn' component={SignInScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
        </Stack.Navigator>
    </NavigationContainer>)
}

