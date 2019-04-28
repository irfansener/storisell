//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform, TouchableWithoutFeedback, CameraRoll, Alert } from 'react-native';
import { observer } from 'mobx-react/native';
import GlobalStore from '../stores/GlobalStore';
import ModalStore from '../stores/ModalStore';
import TextModal from '../components/TextModal';
import Gestures from 'react-native-easy-gestures';
import SelectFonts from '../components/SelectFonts';
import SelectColors from '../components/SelectColors';
import ViewShot from "react-native-view-shot";
import Share from 'react-native-share';
import { Root, ActionSheet, Icon } from 'native-base';


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
                    <TextModal visible={this.state.visible} parentState={this} />
                    <SelectFonts parentState={this} />
                    <SelectColors parentState={this} />
                    <View style={styles.top}></View>
                    <View style={styles.center}>
                        <Gestures>
                            <TouchableWithoutFeedback onLongPress={() => this.showModal("title")} delayLongPress="300">
                                <Text style={[styles.title, this.state.font && { fontFamily: this.state.font }, this.state.color && { color: this.state.color }]}>{this.state.title}</Text>
                            </TouchableWithoutFeedback>
                        </Gestures>
                        <Image style={styles.image} source={{ uri: GlobalStore.linkData.images[0] }} />
                        <Gestures>
                            <View style={styles.priceWrapper}>
                                <Text style={[styles.price, this.state.font && { fontFamily: this.state.font }, this.state.color && { color: this.state.color }]}>{GlobalStore.linkData.price}</Text>
                            </View>
                        </Gestures>
                    </View>
                    <View style={styles.bottom}></View>
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
        flex: 1,
        position: 'relative'
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
        marginTop: 15
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
