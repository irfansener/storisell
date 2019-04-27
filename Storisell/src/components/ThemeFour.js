//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import GlobalStore from '../stores/GlobalStore';
import { observer } from 'mobx-react/native';


class ThemeFour extends Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.navigate('ThemeFour')} style={styles.container}>
                <ImageBackground source={{ uri: GlobalStore.linkData.images[0] }} style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                    <View style={styles.border}>
                        <Text style={styles.title}>
                            {GlobalStore.linkData.title}
                        </Text>
                        <Text style={styles.price}>
                            {GlobalStore.linkData.price}
                        </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        width: '48%',
        height: '48%',
        margin: '0.5%',
        borderRadius: 5
    },
    border: {
        borderWidth: 6,
        borderColor: '#fff',
        width: '90%',
        height: '90%',
    },
    title: {
        backgroundColor: '#fff',
        color: '#000',
        padding: 5,
        width: '60%',
        position: 'absolute',
        top: 0,
        left: '20%',
        fontWeight: '600',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 10
    },
    price: {
        position: 'absolute',
        bottom: 0,
        left: '30%',
        color: '#000',
        backgroundColor: '#fff',
        fontWeight: '600',
        padding: 6,
        borderColor: '#fff',
        fontSize: 12
    },
});

//make this component available to the app
export default ThemeFour;
