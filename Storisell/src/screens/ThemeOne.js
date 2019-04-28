//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform, TouchableWithoutFeedback, CameraRoll } from 'react-native';
import { observer } from 'mobx-react/native';
import GlobalStore from '../stores/GlobalStore';
import ModalStore from '../stores/ModalStore';
import TextModal from '../components/TextModal';
import Gestures from 'react-native-easy-gestures';
import SelectFonts from '../components/SelectFonts';
import SelectColors from '../components/SelectColors';
import ViewShot from "react-native-view-shot";
import Share from 'react-native-share';


@observer class ThemeOne extends Component {
    state = {
        title: GlobalStore.linkData.title.toUpperCase(),
        visible: false,
        type: 'title',
        font: null,
        color: null
    }
    showModal() {
        ModalStore.setEditModalVisible(true);
    }
    componentDidMount() {
        this.props.navigation.setParams({ save: this.save })
    }
    save = () => {
        this.refs.viewShot.capture({ width: 1080, height: 1920 }).then(async (uri) => {
            let shareImage = {
                title: "Story maker for storisell",
                message: "",
                url: Platform.OS == 'android' ? 'file://' + uri : uri,
                subject: "Share Link" //  for email
            };
            Share.open(shareImage)
            console.log("do something with ", uri);
        });
    }
    render() {
        return (
            <ViewShot ref="viewShot" style={styles.container} options={{ format: "jpg", quality: 0.9 }}>
                <TextModal visible={this.state.visible} parentState={this} />
                <SelectFonts parentState={this} />
                <SelectColors parentState={this} />
                <View style={styles.top}></View>
                <View style={styles.center}>
                    <Gestures>
                        <TouchableWithoutFeedback onLongPress={() => this.showModal("title")}>
                            <Text style={[styles.title, this.state.font && { fontFamily: this.state.font }, this.state.color && { color: this.state.color }]}>{this.state.title}</Text>
                        </TouchableWithoutFeedback>
                    </Gestures>
                    <Image style={styles.image} source={{ url: GlobalStore.linkData.images[0] }} />
                    <Gestures>
                        <View style={styles.priceWrapper}>
                            <Text style={[styles.price, this.state.font && { fontFamily: this.state.font }, this.state.color && { color: this.state.color }]}>{GlobalStore.linkData.price}</Text>
                        </View>
                    </Gestures>
                </View>
                <View style={styles.bottom}></View>
            </ViewShot>
        );
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: <TouchableOpacity style={{ padding: 10 }} onPress={navigation.getParam('save')}><Text style={{ fontSize: 18 }}>Save</Text></TouchableOpacity>
        }
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
