import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react/native';
import ModalStore from '../stores/ModalStore';

export default @observer class ModalExample extends Component {
  state = {
    modalVisible: this.props.visible,
    text: this.props.parentState.state[this.props.parentState.state.type]
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  changeText = () => {
    const text = this.state.text;
    if (text !== '') {
      ModalStore.setEditTextModalVisible(false)
      this.props.parentState.setState({ [this.props.parentState.state.type]: this.state.text })
    } else {
      ModalStore.setEditTextModalVisible(false)
      this.setState({ text: this.props.parentState.state[this.props.parentState.state.type] })
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ text: nextProps.parentState.state[this.props.parentState.state.type] })
  }
  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={ModalStore.editTextModalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.container}>
            <View>
              <View style={styles.header}>
                <TouchableOpacity onPress={() => ModalStore.setEditTextModalVisible(false)} style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>Geri</Text>
                </TouchableOpacity >
                <TouchableOpacity onPress={this.changeText} style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>Bitti</Text>
                </TouchableOpacity>
              </View>
              <TextInput placeholder="Başlık Giriniz" placeholderTextColor='#3f434e' autoFocus style={styles.input} value={this.state.text} onChangeText={(text) => this.setState({ text: text.toUpperCase() })} />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    opacity: 0.8
  },
  header: {
    backgroundColor: '#3f434e',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  input: {
    color: '#fff',
    width: '100%',
    padding: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  actionButton: {
    padding: 10,
    fontSize: 14,
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: '600',
    textTransform: 'uppercase'
  }
})