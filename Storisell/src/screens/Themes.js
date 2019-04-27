//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import ThemeOne from '../components/ThemeOne';
import ThemeTwo from '../components/ThemeTwo';
import ThemeThree from '../components/ThemeThree';
import ThemeFour from '../components/ThemeFour';

class Themes extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ThemeOne navigate={this.props.navigation.navigate} />
                <ThemeTwo navigate={this.props.navigation.navigate} />
                <ThemeThree navigate={this.props.navigation.navigate} />
                <ThemeFour navigate={this.props.navigation.navigate} />
            </View >
        );
    }
    static navigationOptions = {
        title: 'Themes'
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

//make this component available to the app
export default Themes;
