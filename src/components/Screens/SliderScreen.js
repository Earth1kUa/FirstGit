import React, { useState, createRef } from 'react';
import { View, Text, FlatList, StyleSheet, useWindowDimensions, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import AppIntroSlider from 'react-native-app-intro-slider';

const data =

    [{
        image: require('../../../assets/taxi/1taxi.png.png'),
        title: 'Check fare',
        text: 'Bla bla car TAXI best of the best TAXI in the World Bla bla car TAXI best of the best TAXI in the World',

    },
    {
        image: require('../../../assets/taxi/2taxi.png.png'),
        title: 'Book a ride',
        text: 'Bla bla car TAXI best of the best TAXI in the World Bla bla car TAXI best of the best TAXI in the World',

    },
    {
        image: require('../../../assets/taxi/3taxi.png.png'),
        title: 'Enjoy your trip',
        text: 'Bla bla car TAXI best of the best TAXI in the World Bla bla car TAXI best of the best TAXI in the World',

    }]



const SliderScreen = ({ navigation }) => {

    const goLogin = () => navigation.navigate('SignIn')

    const renderItem = ({ item }) => {

        return (
            <View style={styles.slide}>
                <View style={styles.mid}>
                    <Image style={styles.image} source={item.image} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>

            </View >
        )

    }
    const keyExtractor = (item) => item.title

    const renderLoginButton = () => {
        return (
            <View style={styles.rightBtnWrap}>
                <TouchableOpacity
                    onPress={goLogin}>
                    <Text style={styles.rightText}>Login?</Text>
                </TouchableOpacity>
            </View>
        )
    }



    const renderNextButton = () => {
        return (
            <View style={styles.rightBtnWrap}>

                <Text style={styles.rightText}>Next</Text>
            </View>
        )
    }

    const renderPrevButton = () => {
        return (
            <View style={styles.leftBtnWrap}>
                <View>
                    <Text style={styles.leftText}>Prev</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="transparent" />
            <AppIntroSlider
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                renderDoneButton={renderLoginButton}
                renderNextButton={renderNextButton}
                renderPrevButton={renderPrevButton}
                showPrevButton
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
                data={data}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    slide: {
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'silver',

    },
    mid: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '50%',
        flex: 1,

    },
    down: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 60,
        resizeMode: 'contain',

    },
    text: {
        color: 'darkblue',
        textAlign: 'center',
        paddingHorizontal: 32,
        fontSize: 14,
    },
    title: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30,
    },
    rightBtnWrap: {
        width: 40,
        height: 40,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightText: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'OpenSans-SemiBold'

    },
    leftText: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'OpenSans-SemiBold'

    },
    leftBtnWrap: {
        width: 40,
        height: 40,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotStyle: {
        backgroundColor: '#fff'
    },
    activeDotStyle: {
        backgroundColor: 'purple'
    },
})

export default SliderScreen;