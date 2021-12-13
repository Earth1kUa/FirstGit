import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormButton from '../buttons/Formbutton';
import FormInput from '../buttons/FormInput'
import SocialButton from '../buttons/SocialButton';

const SignUpScreen = ({ navigation }) => {

    const goSignIn = () => navigation.navigate('SignIn')

    const [email, setEmail] = React.useState('')
    const [UserName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [emailErrow, setEmailError] = React.useState('')
    const [UserNameError, setUserNameError] = React.useState('')
    const [showPass, setShowPass] = React.useState(false)

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
                    label='UserName'
                    placeholderText='User Name'
                    onChange={(value) => setUserName(value)}

                />
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
                    buttonTitle='Sign Up'
                    onPress={goSignIn}

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