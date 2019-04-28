//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { observer } from 'mobx-react/native';
import GlobalStore from '../stores/GlobalStore';
import ModalStore from '../stores/ModalStore';
import TextModal from '../components/TextModal';
import Gestures from 'react-native-easy-gestures';
import SelectFonts from '../components/SelectFonts';

const window = Dimensions.get("window");

@observer class ThemeThree extends Component {
    state = {
        visible: false,
        title: GlobalStore.linkData.title.toUpperCase(),
        promotion: '10-20% Indirsdsdsdim',
        type: 'title'
    }
    showModal(type) {
        this.setState({type}, () => {
            this.setState({visible: true})
        });
        ModalStore.setEditModalVisible(true, type);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextModal visible={this.state.visible} parentState={this} />
                <SelectFonts parentState={this} />
                <Gestures style={styles.titleWrapper}>
                    <TouchableWithoutFeedback onLongPress={() => this.showModal("title")}>
                        <Text style={styles.title}>
                            {this.state.title}
                        </Text>
                    </TouchableWithoutFeedback>
                </Gestures>
                <TouchableWithoutFeedback  onLongPress={() => this.showModal("promotion")}>
                    <Text style={styles.sideText}>{this.state.promotion}</Text>
                </TouchableWithoutFeedback>
                <Image style={styles.image} source={{ uri: GlobalStore.linkData.images[0] }} />
                <View style={styles.imageBackground}></View>
                <Gestures>
                    <TouchableWithoutFeedback >
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
        marginTop: '35%',
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
        top: 0,
        right: '-35%',
        top: '50%',
        fontSize: 20,
        width: '100%',
        height: 40,
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 5,
        textAlign: 'center'

    },
    titleWrapper: {
        position: 'absolute',
        top: '15%',
        marginLeft: 10,
    }
});

//make this component available to the app
export default ThemeThree;
