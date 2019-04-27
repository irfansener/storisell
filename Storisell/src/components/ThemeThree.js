//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
class ThemeThree extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: 'https://img-trendyol.mncdn.com/mnresize/415/622/Assets/ProductImages/oa/69/5216808/3/8680651744939_1_org_zoom.jpg'}} />
                <View style={styles.textWrapper}>
                    <Text style={styles.price}>19.99₺</Text>
                    <Text style={styles.brand}>Koton Bayan Bluz</Text>
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
