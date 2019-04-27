//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import GlobalStore from '../stores/GlobalStore';
import { observer } from 'mobx-react/native';


class ThemeFour extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.leftSide}>
                </View>
                <View style={styles.rightSide}>
                </View>
                <Text style={styles.price}>
                    {GlobalStore.linkData.price}
                </Text>
                <Image
                    style={styles.imageOne}
                    source={{ uri: GlobalStore.linkData.images[0] }}
                />
                <Image
                    style={styles.imageTwo}
                    source={{ uri: GlobalStore.linkData.images[1] }}
                />
                <Text style={styles.title}>
                    {GlobalStore.linkData.title}
                </Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
    },
    leftSide: {
        backgroundColor: '#DFA3A5',
        width: '70%',
        height: '100%'
    },
    rightSide: {
        backgroundColor: '#FFFFFF',
        width: '30%',
        height: '100%',
    },
    price: {
        position: 'absolute',
        top: '5%',
        left: '5%',
        color: '#fff',
        fontWeight: '800',
    },
    imageOne: {
        width: '80%',
        height: '35%',
        position: 'absolute',
        top: '10%',
        left: '5%',
        borderWidth: 4,
        borderColor: '#fff'
    },
    imageTwo: {
        width: '60%',
        height: '35%',
        position: 'absolute',
        top: '48%',
        right: 10,
        borderWidth: 4,
        borderColor: '#fff',

    },
    title: {
        position: 'absolute',
        bottom: '6%',
        left: '15%',
        color: '#fff',
        backgroundColor: '#DFA3A5',
        fontWeight: '600',
        fontSize: 16,
        padding: 5,
        borderWidth: 3,
        borderColor: '#fff'
    },
});

//make this component available to the app
export default ThemeFour;
