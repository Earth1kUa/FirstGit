import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';




export default function MainScreen({ navigation }) {
    const MoveTo = () => {
        navigation.navigate('Slider')

    }
    return (
        <View style={styles.wrapper}>
            <View style={styles.taxiO}>
                <Image style={styles.imgMain} source={{ uri: 'https://www.taxi-chayka.dp.ua/wp-content/uploads/2020/04/taxi.png' }} />
                <View style={styles.titleRow}>
                    <Text style={styles.mainTitle}>TA</Text><Text style={styles.redText}>X</Text><Text style={styles.mainTitle}>I</Text>
                </View>
                <Text style={styles.subTitle}>UI Design</Text>
            </View>
            <TouchableOpacity style={styles.mainBtn}
                onPress={MoveTo}
            >
                <Text style={styles.next}>Next</Text>
                <Ionicons style={{ alignItems: 'center', justifyContent: 'center' }} name="chevron-down" size={24} color="darkblue" />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',

    },
    taxiO: {
        borderWidth: 3,
        borderColor: '#000',
        borderRadius: 110,
        borderStyle: 'solid',
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainBtn: {
        padding: 10,
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 70,
    },
    mainTitle: {
        fontSize: 100,
        textAlign: 'center',
        color: 'purple'
    },
    subTitle: {
        fontSize: 40,
        textAlign: 'center',
        color: 'darkblue'
    },
    imgMain: {
        width: 300,
        height: 200,
        resizeMode: 'contain'
    },
    redText: {
        color: 'red',
        fontSize: 100,
        textAlign: 'center',
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    next: {
        fontSize: 20,

    }
});
