import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class ModalExample extends Component {
  state = {
    modalVisible: this.props.visible,
    title: this.props.parentState.state.title
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  changeText = () => {
    const title = this.state.title;
    if(title !== '') {
      this.props.parentState.setState({visible: false, title})
    } else {
      this.props.parentState.setState({visible: false})
      this.setState({title: this.props.parentState.state.title})
    }
  }
  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.visible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.container}>
            <View>
              <View style={styles.header}>
                <TouchableOpacity onPress={() => this.props.parentState.setState({visible: false})} style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>Geri</Text>
                </TouchableOpacity >
                <TouchableOpacity onPress={this.changeText} style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>Bitti</Text>
                </TouchableOpacity>
              </View>
              <TextInput placeholder="Başlık Giriniz" placeholderTextColor='#3f434e' autoFocus style={styles.input} value={this.state.title} onChangeText={(title) => this.setState({title: title.toUpperCase()})} />
              <TouchableHighlight
                onPress={() => {
                  this.props.parentState.setState({ visible: false });
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
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