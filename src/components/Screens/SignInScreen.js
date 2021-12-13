import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, emailError } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FormButton from '../buttons/Formbutton';
import FormInput from '../buttons/FormInput'


const SignInScreen = ({ navigation }) => {

    const goSignUp = () => navigation.navigate('SignUp')

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    //const [emailErrow, setEmailError] = React.useState('')

    const [showPass, setShowPass] = React.useState(false)
    const [passwordErrow, setPasswordError] = React.useState('')

    return (
        <View style={styles.signInContainer}>
            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                Style={{
                    flex: 1,
                    paddingHorizontal: 10,
                    backgroundColor: 'silver'
                }}
            >
                <Text>Sign In</Text>
                <FormInput
                    label='Email'
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
                    secureTextEntry={!showPass}
                    autocompleteType='password'
                    onChange={(value) =>
                        setPassword(value)
                    }
                />
                <Text>Forgot your password ?</Text>
                <FormButton
                    buttonTitle='Sign In'
                    onPress={goSignUp}

                />


            </KeyboardAwareScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    signInContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})


export default SignInScreen;