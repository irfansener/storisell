//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, Clipboard } from 'react-native';
import { Item, Input, Label, Button } from 'native-base';
import Api from '../helper/Api';

// create a component
class Home extends Component {
    state = {
        text: false
    }

    async componentDidMount() {
        const clipboardData = await Clipboard.getString();
        const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        const regex = new RegExp(expression)
        if (clipboardData.match(regex)) {
            Alert.alert('Info', 'You already copy a url. Do you want to paste it ?',
                [
                    { text: 'Yes, please!', onPress: () => this.setState({ text: clipboardData }) },
                    { text: 'No, thanks!', onPress: () => console.log('..') }
                ])
        } else {

        }
    }

    buttonPress = async () => {
        const { text } = this.state;

        const data = await Api.getUrlValues(text);
        if (!data) {
            Alert.alert('Error!', "Doesn't support this website. Please try again later!")
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Item floatingLabel style={styles.input}>
                    <Label>Product Url</Label>
                    <Input
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                    />
                </Item>
                <Button disabled={!this.state.text} style={styles.button} onPress={this.buttonPress}>
                    <Text style={{ color: '#fff' }}> Create Story Themes </Text>
                </Button>
            </View>
        );
    }
    static navigationOptions = {
        title: 'Home'
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    input: {
        width: '80%',
    },
    button: {
        alignSelf: 'center',
        margin: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

//make this component available to the app
export default Home;
