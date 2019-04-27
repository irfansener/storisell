//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {observer} from 'mobx-react/native';
import GlobalStore from '../stores/GlobalStore';


@observer class ThemeThree extends Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.navigate('ThemeThree')} style={styles.container}>
                <Text style={styles.brand}>{GlobalStore.linkData.title}</Text>
                <Text style={styles.sideText}>10-20% Indirim</Text>
                <Image style={styles.image} source={{uri: GlobalStore.linkData.images[0]}} />
                <View style={styles.imageBackground}></View>
                <Text style={styles.price}>{GlobalStore.linkData.price}</Text>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#3926b3',
        justifyContent: 'center',
        position: 'relative'
    },
    image: {
        width: '70%',
        height: '60%',
        marginTop: '25%',
        marginLeft: '10%'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: 10,
        textAlign: 'center',
        letterSpacing: 5,

    },
    brand: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 8,
        marginLeft: 10,
        position: 'absolute',
        top: '15%'
    },
    imageBackground: {
        width: '70%',
        height: '60%',
        backgroundColor: '#f5dcd7',
        position: 'absolute',
        zIndex: -1
    },
    sideText: {
        transform: [{ rotate: '90deg'}],
        position: 'absolute',
        top: '50%',
        right: -80,
        color: '#fff',
        fontWeight: 'bold',
       textTransform: 'uppercase',
       fontSize: 18,
    letterSpacing: 8,
    zIndex: 9999

    }
});

//make this component available to the app
export default ThemeThree;
