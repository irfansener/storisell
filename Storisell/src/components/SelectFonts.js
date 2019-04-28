//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import ModalStore from '../stores/ModalStore';
import { observer } from 'mobx-react/native';
import { Icon } from 'native-base';
import { FONT_NAMES } from '../helper/CONSTANT';

// create a component
@observer class SelectFonts extends Component {
    state = {
        selectedIndex: null
    }
    openTextModal = () => {
        ModalStore.setSelectedFontModalVisible(false);
        setTimeout(() => {
            ModalStore.setEditTextModalVisible(true);
        }, 500);
    }
    select = (item, index) => {
        this.setState({ selectedIndex: index });
        this.props.parentState.setState({ font: item })
    }
    renderItem = ({ item, index }) => {
        const active = this.state.selectedIndex === index;
        return (
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.select(item, index)} style={[styles.itemContainer, active && { backgroundColor: '#000' }]}>
                <Text style={[styles.itemText, { fontFamily: item }, active && { color: '#fff' }]}>Abc</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <Modal
                isVisible={ModalStore.selectedFontModalVisible}
                onBackdropPress={() => ModalStore.setSelectedFontModalVisible(false)}
                onModalHide={() => ModalStore.setSelectedFontModalVisible(false)}
                backdropOpacity={0}
                style={styles.bottomModal}
            >
                <View style={styles.container}>
                    <FlatList
                        data={FONT_NAMES}
                        extraData={this.state}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => item}
                        horizontal={true}
                    />
                </View>
            </Modal>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 25,
        paddingRight: 5,
        paddingLeft: 5,
        backgroundColor: "#fff",
        alignItems: "center",
        borderRadius: 4,
    },
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0
    },
    itemContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#eee',
        color: '#000',
        padding: 5,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemText: {
        fontSize: 21
    }
});

//make this component available to the app
export default SelectFonts;
