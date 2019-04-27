//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, Clipboard, ActivityIndicator } from 'react-native';
import { Item, Input, Label, Button } from 'native-base';
import Api from '../helper/Api';
import GlobalStore from '../stores/GlobalStore';
import EditModalIndex from '../components/EditModalIndex';


class Home extends Component {
    state = {
        text: false,
        loading: false
    }

    async componentDidMount() {
        const clipboardData = await Clipboard.getString();
        const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        const regex = new RegExp(expression)
        if (clipboardData.match(regex)) {
            Alert.alert('Info', `You copy this url \n ${clipboardData} \n Do you want to paste it ?`,
                [
                    { text: 'Yes, please!', onPress: () => this.setState({ text: clipboardData }) },
                    { text: 'No, thanks!', onPress: () => console.log('..') }
                ])
        }
    }

    buttonPress = async () => {
        const { text } = this.state;

        this.setState({ loading: true })
        let data = await Api.getUrlValues(text);
        console.warn(data)
        if (!data) {
            Alert.alert('Error!', "Doesn't support this website. Please try again later!")
            this.setState({ loading: false })
        } else {
            if (!data.response.images[1]) {
                data.response.images[1] = data.response.images[0];
            }
            data.response.price = data.response.price.split('TL')[0].slice(0, -1);
            data.response.price = `₺${data.response.price}`
            data.response.title = data.response.title.slice(0, 11);
            GlobalStore.setLinkData(data.response);
            this.props.navigation.navigate('Themes')
            this.setState({ loading: false })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <EditModalIndex />
                <Item floatingLabel style={styles.input}>
                    <Label>Product Url</Label>
                    <Input
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                    />
                </Item>
                <Button disabled={!this.state.text || this.state.loading} style={styles.button} onPress={this.buttonPress}>
                    <Text style={{ color: '#fff' }}> Create Story Themes </Text>
                    {this.state.loading &&
                        <ActivityIndicator color='#000' style={{ marginLeft: 10, marginRight: 10 }} />}
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
