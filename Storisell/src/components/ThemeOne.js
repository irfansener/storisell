//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
class ThemeOne extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>
                       MOR T-SHIRT ERKEK
                    </Text>
                </View>
                <View style={styles.imageWrapper}>
                   <Image 
                    source={{uri: 'https://s3.eu-central-1.amazonaws.com/shopier1/pictures_large/Camiseta1589_t-shirts1.jpg'}} 
                    style={styles.image}
                   />
                   <Image 
                    source={{uri: 'https://s3.eu-central-1.amazonaws.com/shopier1/pictures_large/Camiseta1356_purple-t-shirt.jpg'}} 
                    style={{...styles.image,position: 'absolute',top: '50%',left: '35%'}}
                   />
                   <Text style={styles.price} >19.99₺</Text>
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
        padding: 10,
        backgroundColor: '#fff'
    },
    imageWrapper: {
        width: '100%',
        paddingTop: 7,
        position: 'relative',
    },
    image: {
        width: '65%',
        height: '70%',
        borderWidth: 8,
        borderColor: '#fff',
    },
    price: {
        position: 'absolute',
        top: '40%',
        right: 0,
        fontSize: 14,
        fontWeight: 'bold'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14
    }
});

//make this component available to the app
export default ThemeOne;
