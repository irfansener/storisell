//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import ModalStore from '../stores/ModalStore';
import { observer } from 'mobx-react/native';

// create a component
@observer class EditModalIndex extends Component {
    render() {
        return (
            <Modal
                isVisible={ModalStore.editModalVisible}
                onSwipeComplete={() => ModalStore.setEditModalVisible(false)}
                swipeDirection='down'
                style={styles.bottomModal}>
                <View style={styles.container}>
                    <TouchableOpacity>
                        <Text>Deneme</Text>
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
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
    },
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0,
    },
});

//make this component available to the app
export default EditModalIndex;
