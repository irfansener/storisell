//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {observer} from 'mobx-react/native';
import GlobalStore from '../stores/GlobalStore';

// create a component
@observer class ThemeOne extends Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.navigate('ThemeOne')} style={styles.container}>
                <View style={styles.top}></View>
                <View style={styles.center}>
                <Text style={styles.title}>{GlobalStore.linkData.title}</Text>
                <Image style={styles.image}  source={{url: GlobalStore.linkData.images[0]}}/>
                <View style={styles.priceWrapper}>
                    <Text style={styles.price}>{GlobalStore.linkData.price}</Text>
                </View>
                </View>
                <View style={styles.bottom}></View>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: '50%',
        backgroundColor: 'red',
    },
    top: {
        height: '50%',
        backgroundColor: '#fff'
    },
    bottom: {
        height: '50%',
        backgroundColor: '#202020'
    },
    center: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 999,
        alignSelf: 'center',
        top: '10%',
        left:'10%'
    },
    priceWrapper: {
        backgroundColor: '#fee03f',
        width: '70%',
        marginLeft: '5%',
        padding: 10,
        marginTop: 10
    },
    price: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    image: {
        height: '60%',
        width: '80%'
    },
    title: {
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
        width: '80%'
    }
});

//make this component available to the app
export default ThemeOne;
