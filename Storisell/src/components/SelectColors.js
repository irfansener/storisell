//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import ModalStore from '../stores/ModalStore';
import { observer } from 'mobx-react/native';
import { Icon } from 'native-base';
import { COLORS } from '../helper/CONSTANT';

// create a component
@observer class SelectColors extends Component {
    state = {
        selectedIndex: null
    }
    select = (item, index) => {
        this.setState({ selectedIndex: index });
        this.props.parentState.setState({ color: item })
    }
    renderItem = ({ item, index }) => {
        const active = this.state.selectedIndex === index;
        return (
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.select(item, index)} style={[styles.itemContainer, { backgroundColor: item }]}>
                {active ? <Icon type='FontAwesome5' name='check' /> : <View />}
            </TouchableOpacity >
        )
    }

    render() {
        return (
            <Modal
                isVisible={ModalStore.selectedColorModalVisible}
                onBackdropPress={() => ModalStore.setSelectedColorModalVisible(false)}
                onModalHide={() => ModalStore.setSelectedColorModalVisible(false)}
                backdropOpacity={0}
                style={styles.bottomModal}
            >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => { this.select(null, null); ModalStore.setSelectedColorModalVisible(false) }}>
                            <Icon style={styles.checkIcon} type='Ionicons' name='md-close' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => ModalStore.setSelectedColorModalVisible(false)}>
                            <Icon style={styles.checkIcon} type='FontAwesome5' name='check' />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={COLORS}
                        extraData={this.state}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => item}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </Modal>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        paddingBottom: 25,
        paddingRight: 5,
        paddingLeft: 5,
        backgroundColor: "rgba(255,255,255,0.3)",
        alignItems: "center",
        borderRadius: 4,
    },
    header: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0
    },
    itemContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        padding: 5,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemText: {
        fontSize: 21
    },
    checkIcon: {
        fontSize: 24,
        padding: 10
    }
});

//make this component available to the app
export default SelectColors;
