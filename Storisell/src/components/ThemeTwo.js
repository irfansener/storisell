//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import GlobalStore from '../stores/GlobalStore';
import { observer } from 'mobx-react/native';


@observer class ThemeTwo extends Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.navigate('ThemeTwo')} style={styles.container}>
                <View style={styles.priceTags}>
                    <Text style={{ color: '#fff' }}>{GlobalStore.linkData.price}</Text>
                </View>
                <Image
                    source={{ uri: GlobalStore.linkData.images[0] }}
                    style={styles.image}
                />
                <View style={styles.nameTag}>
                    <Text style={{ color: '#fff' }}>{GlobalStore.linkData.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ddd',
        borderWidth: 3,
        width: '48%',
        height: '48%',
        margin: '0.5%',
        backgroundColor: '#fff',
        borderRadius: 5
    },
    image: {
        width: '90%',
        height: '80%',
        padding: 5,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#ddd'
    },
    priceTags: {
        position: 'absolute',
        backgroundColor: '#4F5378',
        top: '3%',
        left: '8%',
        padding: 10,
        borderRadius: 4,
        zIndex: 1,
        transform: [{ rotate: '-5deg'}]
    },
    nameTag: {
        position: 'absolute',
        backgroundColor: '#E84326',
        bottom: '5%',
        right: '8%',
        padding: 10,
        borderRadius: 4,
        zIndex: 1,
        transform: [{ rotate: '-5deg'}]
    }
});

//make this component available to the app
export default ThemeTwo;
