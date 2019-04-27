//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import GlobalStore from '../stores/GlobalStore';
import { observer } from 'mobx-react/native';
import TextModal from '../components/TextModal';
import Gestures from 'react-native-easy-gestures';


class ThemeFour extends Component {
    state = {
        visible: false,
        title: GlobalStore.linkData.title.toUpperCase(),
        type: 'title'
    }
    showModal() {
        this.setState({ visible: true });
    }
    render() {
        return (
            <ImageBackground source={{ uri: GlobalStore.linkData.images[0] }} style={styles.container}>
                <TextModal visible={this.state.visible} parentState={this} />
                <View style={styles.border}>
                    <Gestures>
                        <TouchableWithoutFeedback onLongPress={() => this.showModal("title")}>
                            <Text style={styles.title}>
                                {this.state.title}
                            </Text>
                        </TouchableWithoutFeedback>
                    </Gestures>
                    <View style={styles.priceContainer}>
                        <Gestures>
                            <TouchableWithoutFeedback >
                                <Text style={styles.price}>
                                    {GlobalStore.linkData.price}
                                </Text>
                            </TouchableWithoutFeedback>
                        </Gestures>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
    },
    border: {
        borderWidth: 6,
        borderColor: '#fff',
        width: '90%',
        height: '80%',
    },
    title: {
        backgroundColor: '#fff',
        color: '#000',
        padding: 10,
        width: '50%',
        position: 'absolute',
        top: 0,
        left: '25%',
        fontWeight: '600',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20
    },
    price: {
        position: 'absolute',
        bottom: 0,
        left: '35%',
        color: '#000',
        backgroundColor: '#fff',
        fontWeight: '600',
        fontSize: 16,
        padding: 8,
        borderColor: '#fff',
        fontSize: 18
    },
    priceContainer: {
        bottom: 0,
        position: 'absolute',
        left: '35%'
    }
});

//make this component available to the app
export default ThemeFour;
