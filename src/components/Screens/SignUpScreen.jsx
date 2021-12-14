import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormButton from '../buttons/Formbutton';
import FormInput from '../buttons/FormInput'
import SocialButton from '../buttons/SocialButton';

const SignUpScreen = ({ navigation }) => {

    // const goSignIn = () => navigation.navigate('SignIn')

    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')
    const [password, setPassword] = React.useState('')

    useEffect(() => { getData(); }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        navigation.navigate('SignIn');
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const setData = async () => {
        if (name.length == 0 || password.length == 0 || email.length == 0) {
            Alert.alert('Warning!', 'Please write your ...!')
        } else {
            try {
                let user = {
                    Name: name,
                    Password: password,
                    Email: email,
                }
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                navigation.navigate('SignIn');
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <View style={styles.signUpContainer}>
            <Text>SignUp</Text>
            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                Style={{
                    flex: 1,
                    paddingHorizontal: 10,
                }}
            >
                <FormInput
                    label='name'
                    placeholderText='User Name'
                    onChange={(value) => setName(value)}

                />
                <FormInput
                    label='email'
                    placeholderText='Email'
                    keyboardType='email-address'
                    autocompleteType='email'
                    onChange={(value) => {
                        setEmail(value)
                    }}

                />
                <FormInput
                    label='Password'
                    placeholderText='Password'
                    secureTextEntry={false}
                    autocompleteType='password'
                    onChange={(value) =>
                        setPassword(value)
                    }
                />
                <Text>Forgot your password ?</Text>
                <FormButton
                    buttonTitle='Sign Up'
                    onPress={getData}

                />

            </KeyboardAwareScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    signUpContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default SignUpScreen;