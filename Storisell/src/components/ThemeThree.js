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
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
}

// define your styles
const styles = StyleSheet.create({
    container: {
        width: '48%',
        height: '48%',
        margin: '0.5%',
        position: 'relative',
        backgroundColor: '#3926b3',
        justifyContent: 'center',
        position: 'relative'
    },
    image: {
        width: '70%',
        height: '60%',
        marginTop: '40%',
        marginLeft: '10%'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: 10,
        textAlign: 'center',
        letterSpacing: 5,

    },
    brand: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 2,
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
        right: -40,
        color: '#fff',
        fontWeight: 'bold',
       textTransform: 'uppercase',
       fontSize: 12,
    letterSpacing: 2,
    zIndex: 9999

    }
});

//make this component available to the app
export default ThemeThree;
