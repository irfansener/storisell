//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { observer } from 'mobx-react/native';
import GlobalStore from '../stores/GlobalStore';
import TextModal from '../components/TextModal';
import Gestures from 'react-native-easy-gestures';


@observer class ThemeThree extends Component {
    state = {
        visible: false,
    }
    showModal() {
        this.setState({ visible: true });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextModal visible={this.state.visible} parentState={this} />
                <Gestures>
                    <TouchableWithoutFeedback onLongPress={() => this.showModal()}>
                        <Text style={styles.title}>
                            {GlobalStore.linkData.title}
                        </Text>
                    </TouchableWithoutFeedback>
                </Gestures>
                <Text style={styles.sideText}>10-20% Indirim</Text>
                <Image style={styles.image} source={{ uri: GlobalStore.linkData.images[0] }} />
                <View style={styles.imageBackground}></View>
                <Gestures>
                    <TouchableWithoutFeedback onLongPress={() => this.showModal()}>
                        <Text style={styles.price}>{GlobalStore.linkData.price}</Text>
                    </TouchableWithoutFeedback>
                </Gestures>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#3926b3',
        justifyContent: 'center',
        position: 'relative'
    },
    image: {
        width: '70%',
        height: '60%',
        marginTop: '25%',
        marginLeft: '10%',
        zIndex: -1
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: 10,
        textAlign: 'center',
        letterSpacing: 5,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 8,
        marginLeft: 10,
        position: 'absolute',
        top: '15%'
    },
    imageBackground: {
        width: '70%',
        height: '60%',
        backgroundColor: '#f5dcd7',
        position: 'absolute',
        zIndex: -2
    },
    sideText: {
        transform: [{ rotate: '90deg' }],
        position: 'absolute',
        top: '50%',
        right: -80,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 18,
        letterSpacing: 8,
        zIndex: 9999

    }
});

//make this component available to the app
export default ThemeThree;
