//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import GlobalStore from '../stores/GlobalStore';
import { observer } from 'mobx-react/native';


@observer class ThemeTwo extends Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.navigate('ThemeTwo')} style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: GlobalStore.linkData.images[0] }}
                        style={styles.image}
                    />
                    <Text style={styles.title}>{GlobalStore.linkData.title}</Text>
                    <Text style={styles.price}>{GlobalStore.linkData.price}</Text>
                </View>
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
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8d9c4',
    },
    imageContainer: {
        width: '90%',
        height: '90%',
        padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '85%',
        height: '85%',
    },
    title: {
        marginTop: 7,
        fontWeight: '600',
        fontSize: 14,
        textTransform: 'uppercase',
    },
    price: {
        marginTop: 5,
        fontSize: 12,
    }
});

//make this component available to the app
export default ThemeTwo;
