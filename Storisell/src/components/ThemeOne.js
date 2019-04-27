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
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>
                       {GlobalStore.linkData.title}
                    </Text>
                </View>
                <View style={styles.imageWrapper}>
                   <Image 
                    source={{uri: GlobalStore.linkData.images[0]}} 
                    style={styles.image}
                   />
                   <Image 
                    source={{uri: GlobalStore.linkData.images[1]}} 
                    style={{...styles.image,position: 'absolute',top: '40%',left: '30%'}}
                   />
                   <View style={styles.priceWrapper}>
                   <Text style={styles.price}>{GlobalStore.linkData.price}</Text>
                   </View>
                </View>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        borderColor: '#ddd',
        borderWidth: 3,
        width: '48%',
        height: '48%',
        margin: '0.5%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    imageWrapper: {
        width: '100%',
        paddingTop: 7,
        position: 'relative',
    },
    image: {
        width: '70%',
        height: '80%',
        borderWidth: 8,
        borderColor: '#fff',
    },
    price: {

        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff'
    },
    priceWrapper: {
      position: 'absolute',
      top: '30%',
      right: -5,
      backgroundColor: '#4F5378',
      padding: 5,
      borderRadius: 5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#fff',
        textAlign: "center",
        
    },
    titleWrapper: {
      borderRadius: 5,
      marginLeft: 10,
      marginRight: 10,
      padding: 5,
      backgroundColor: '#E84326',
      borderRadius: 5
    }
});

//make this component available to the app
export default ThemeOne;
