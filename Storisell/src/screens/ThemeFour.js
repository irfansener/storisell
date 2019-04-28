//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform, TouchableWithoutFeedback, CameraRoll, Alert, ImageBackground } from 'react-native';
import GlobalStore from '../stores/GlobalStore';
import ModalStore from '../stores/ModalStore';
import { observer } from 'mobx-react/native';
import TextModal from '../components/TextModal';
import SelectFonts from '../components/SelectFonts';
import SelectColors from '../components/SelectColors';
import Gestures from 'react-native-easy-gestures';
import ViewShot from "react-native-view-shot";
import Share from 'react-native-share';
import { Root, ActionSheet, Icon } from 'native-base';


class ThemeFour extends Component {
    state = {
        visible: false,
        title: GlobalStore.linkData.title.toUpperCase(),
        type: 'title',
        font: null,
        color: null
    }
    showModal() {
        ModalStore.setEditModalVisible(true);
    }
    componentDidMount() {
        this.props.navigation.setParams({ tap: this.tap })
    }
    tap = () => {
        const BUTTONS = [
            { text: "Share to Instagram", icon: "share", iconColor: "#f42ced" },
            { text: "Save to gallery", icon: "download", iconColor: "#2c8ef4" },
            { text: "Cancel", icon: "close", iconColor: "#ff0000" }
        ];
        ActionSheet.show(
            {
                options: BUTTONS,
                cancelButtonIndex: 2,
                title: "Do the last touch"
            },
            buttonIndex => {
                if (buttonIndex === 0)
                    this.share();
                else if (buttonIndex === 1)
                    this.save()
            }
        )
    }
    share = () => {
        this.refs.viewShot.capture().then(async (uri) => {
            let shareImage = {
                title: "Story maker for storisell",
                message: "",
                url: Platform.OS == 'android' ? 'file://' + uri : uri,
                subject: "Share Link" //  for email
            };
            Share.open(shareImage)
        });
    }
    save = () => {
        this.refs.viewShot.capture().then(async (uri) => {
            CameraRoll.saveToCameraRoll(uri);
            Alert.alert('Done!', 'Your story has been saved with successfully!');
        });
    }

    render() {
        return (
            <Root>
                <ViewShot ref="viewShot" style={styles.container} options={{ format: "jpg", quality: 0.9, width: 1080, height: 1920 }}>
                    <ImageBackground source={{ uri: GlobalStore.linkData.images[0] }} style={styles.container}>
                        <TextModal visible={this.state.visible} parentState={this} />
                        <SelectFonts parentState={this} />
                        <SelectColors parentState={this} />
                        <View style={styles.border}>
                            <Gestures>
                                <TouchableWithoutFeedback onLongPress={() => this.showModal("title")}>
                                    <Text style={[styles.title, this.state.font && { fontFamily: this.state.font }, this.state.color && { color: this.state.color }]}>
                                        {this.state.title}
                                    </Text>
                                </TouchableWithoutFeedback>
                            </Gestures>
                            <View style={styles.priceContainer}>
                                <Gestures>
                                    <TouchableWithoutFeedback >
                                        <Text style={[styles.price, this.state.font && { fontFamily: this.state.font }, this.state.color && { color: this.state.color }]}>
                                            {GlobalStore.linkData.price}
                                        </Text>
                                    </TouchableWithoutFeedback>
                                </Gestures>
                            </View>
                        </View>
                    </ImageBackground>
                </ViewShot>
            </Root>
        );
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Choose Template',
            headerStyle: {
                backgroundColor: '#e16262',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerLeft: (
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', }} onPress={() => navigation.goBack()}>
                    <Icon type='Ionicons' name='arrow-back' style={{ fontSize: 32, color: "#fff", marginLeft: 10 }} />
                </TouchableOpacity>
            ),
            headerRight:(
                <TouchableOpacity style={{ alignItems:'center', justifyContent: 'center', }} onPress={navigation.getParam('tap')}>
                    <Icon type='MaterialCommunityIcons' name='check' style={{ fontSize: 32, color: "#fff", marginRight: 10 }}/>
                </TouchableOpacity> 
            )
        }
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
    },
    border: {
        borderWidth: 6,
        borderColor: '#fff',
        width: '90%',
        height: '80%',
    },
    title: {
        backgroundColor: '#fff',
        color: '#000',
        padding: 10,
        width: '55%',
        position: 'absolute',
        top: 0,
        left: '25%',
        fontWeight: '600',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20
    },
    price: {
        position: 'absolute',
        bottom: 0,
        left: '35%',
        color: '#000',
        backgroundColor: '#fff',
        fontWeight: '600',
        padding: 8,
        borderColor: '#fff',
        fontSize: 18
    },
    priceContainer: {
        bottom: 0,
        position: 'absolute',
        left: '40%',
        width: '20%'
    }
});

//make this component available to the app
export default ThemeFour;
