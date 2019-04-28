//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback } from 'react-native';
import { observer } from 'mobx-react/native';
import GlobalStore from '../stores/GlobalStore';
import ModalStore from '../stores/ModalStore';
import TextModal from '../components/TextModal';
import Gestures from 'react-native-easy-gestures';
import SelectFonts from '../components/SelectFonts';


@observer class ThemeOne extends Component {
    state = {
        title: GlobalStore.linkData.title.toUpperCase(),
        visible: false,
        type: 'title'
    }
    showModal() {
        ModalStore.setEditModalVisible(true);
    }
    render() {
        return (
            <View style={styles.container}>
                <TextModal visible={this.state.visible} parentState={this} />
                <SelectFonts parentState={this} />
                <View style={styles.top}></View>
                <View style={styles.center}>
                    <Gestures>
                        <TouchableWithoutFeedback onLongPress={() => this.showModal("title")}>
                            <Text style={styles.title}>{this.state.title}</Text>
                        </TouchableWithoutFeedback>
                    </Gestures>
                    <Image style={styles.image} source={{ url: GlobalStore.linkData.images[0] }} />
                    <Gestures>
                        <View style={styles.priceWrapper}>
                            <Text style={styles.price}>{GlobalStore.linkData.price}</Text>
                        </View>
                    </Gestures>
                </View>
                <View style={styles.bottom}></View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    top: {
        height: '50%',
        backgroundColor: '#fff'
    },
    bottom: {
        height: '50%',
        backgroundColor: '#202020'
    },
    center: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 999,
        alignSelf: 'center',
        top: '10%',
        left: '10%'
    },
    priceWrapper: {
        backgroundColor: '#fee03f',
        width: '70%',
        marginLeft: '5%',
        padding: 10,
        marginTop: 10
    },
    price: {
        letterSpacing: 2,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    image: {
        height: '60%',
        width: '80%',
        zIndex: -1,
    },
    title: {
        fontSize: 24,
        letterSpacing: 4,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
        width: '80%'
    }
});

//make this component available to the app
export default ThemeOne;
