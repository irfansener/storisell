//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import ThemeOne from '../components/ThemeOne';
import ThemeTwo from '../components/ThemeTwo';
import ThemeThree from '../components/ThemeThree';
import ThemeFour from '../components/ThemeFour';
import EditModalIndex from '../components/EditModalIndex'
import { Icon } from 'native-base'

class Themes extends Component {
    render() {
        return (
            <View style={styles.container}>
                <EditModalIndex />
                <ThemeOne navigate={this.props.navigation.navigate} />
                <ThemeTwo navigate={this.props.navigation.navigate} />
                <ThemeThree navigate={this.props.navigation.navigate} />
                <ThemeFour navigate={this.props.navigation.navigate} />
            </View>
        );
    }
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Choose Template',
            headerStyle: {
                backgroundColor: '#e16262',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerLeft: (
                <TouchableOpacity style={{ paddingRight: 8, alignItems: 'center', justifyContent: 'center', }} onPress={() => navigation.goBack()}>
                    <Icon type='Ionicons' name='arrow-back' style={{ fontSize: 32, color: "#fff", marginLeft: 10 }} />
                </TouchableOpacity>
            )
        }
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
