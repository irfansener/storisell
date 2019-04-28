//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import GlobalStore from '../stores/GlobalStore';
import ModalStore from '../stores/ModalStore';
import { observer } from 'mobx-react/native';
import Gestures from 'react-native-easy-gestures';
import TextModal from '../components/TextModal';
import SelectFonts from '../components/SelectFonts';


@observer class ThemeTwo extends Component {
    state = {
        visible: false,
        title: GlobalStore.linkData.title.toUpperCase(),
        type: 'title'
    }
    showModal() {
        this.setState({ visible: true });
        ModalStore.setEditModalVisible(true);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextModal visible={this.state.visible} parentState={this} />
                <SelectFonts parentState={this} />
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: GlobalStore.linkData.images[0] }}
                        style={styles.image}
                    />
                    <Gestures style={styles.titleWrapper}>
                        <TouchableWithoutFeedback onLongPress={() => this.showModal('title')}>
                            <Text style={styles.title}>{this.state.title}</Text>
                        </TouchableWithoutFeedback>
                    </Gestures>
                    <Gestures>
                        <Text style={styles.price}>{GlobalStore.linkData.price}</Text>
                    </Gestures>
                </View>
            </View>
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
        backgroundColor: '#f8d9c4'
    },
    imageContainer: {
        width: '85%',
        height: '85%',
        padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '85%',
        height: '85%',
    },
    title: {
        marginTop: 10,
        fontWeight: '600',
        fontSize: 24,
        textTransform: 'uppercase',
    },
    price: {
        marginTop: 5,
        fontSize: 18,
    }

});

//make this component available to the app
export default ThemeTwo;
