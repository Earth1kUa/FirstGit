import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    TextInput,
} from 'react-native';

import GlobalStyle from '../../utils/GlobalStyle';

const MapScreen = () => {
    return (
        <View style={styles.containerMap}>
            <Text>Kyky epta MAP </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerMap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    textMap: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'red'
    }
})

export default MapScreen