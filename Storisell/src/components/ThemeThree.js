//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class ThemeThree extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ThemeThree</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 1,
        width: '48%',
        height: '48%',
        margin: '0.5%'
    },
});

//make this component available to the app
export default ThemeThree;
