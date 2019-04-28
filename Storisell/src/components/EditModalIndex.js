//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import ModalStore from '../stores/ModalStore';
import { observer } from 'mobx-react/native';
import { Icon } from 'native-base';

// create a component
@observer class EditModalIndex extends Component {
    openTextModal = () => {
        ModalStore.setEditModalVisible(false);
        setTimeout(() => {
            ModalStore.setEditTextModalVisible(true);
        }, 500);
    }
    openFontModal = () => {
        ModalStore.setEditModalVisible(false);
        setTimeout(() => {
            ModalStore.setSelectedFontModalVisible(true);
        }, 500);
    }
    render() {
        return (
            <Modal
                isVisible={ModalStore.editModalVisible}
                onSwipeComplete={() => ModalStore.setEditModalVisible(false)}
                onBackdropPress={() => ModalStore.setEditModalVisible(false)}
                onModalHide={() => ModalStore.setEditModalVisible(false)}
                swipeDirection='down'
                style={styles.bottomModal}
            >
                <View style={styles.container}>
                    <TouchableOpacity style={styles.itemContainer} onPress={this.openTextModal}>
                        <Icon type='FontAwesome5' style={styles.icon} name='keyboard' />
                        <Text style={styles.itemText}>Keyboard</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContainer} onPress={this.openFontModal}>
                        <Icon type='FontAwesome5' style={styles.icon} name='font' />
                        <Text style={styles.itemText}>Fonts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContainer} onPress={this.openTextModal}>
                        <Icon type='FontAwesome5' style={styles.icon} name='tint' />
                        <Text style={styles.itemText}>Colors</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: 'row',
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
    },
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        marginTop: 10,
        fontSize: 16,
    },
    icon: {
        fontSize: 26
    }
});

//make this component available to the app
export default EditModalIndex;
