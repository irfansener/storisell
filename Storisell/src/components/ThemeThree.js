//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {observer} from 'mobx-react/native';
import GlobalStore from '../stores/GlobalStore';


@observer class ThemeThree extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: GlobalStore.linkData.images[0]}} />
                <View style={styles.textWrapper}>
                    <Text style={styles.price}>{GlobalStore.linkData.price}</Text>
                    <Text style={styles.brand}>{GlobalStore.linkData.title}</Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        borderColor: '#000',
        borderWidth: 1,
        width: '48%',
        height: '48%',
        margin: '0.5%',
        position: 'relative'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    textWrapper: {
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 10,
        bottom: '10%',
        right: 10,
        padding: 10,
    },
    price: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    },
    brand: {
        textAlign: 'center'
    }
});

//make this component available to the app
export default ThemeThree;
