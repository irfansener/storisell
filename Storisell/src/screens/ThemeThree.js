//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform, TouchableWithoutFeedback, CameraRoll, Alert, Dimensions } from 'react-native';
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

const window = Dimensions.get("window");

@observer class ThemeThree extends Component {
    state = {
        visible: false,
        title: GlobalStore.linkData.title.toUpperCase(),
        promotion: '10-20% Indirsdsdsdim',
        type: 'title',
        font: null,
        color: null
    }
    showModal(type) {
        this.setState({ type }, () => {
            this.setState({ visible: true })
        });
        ModalStore.setEditModalVisible(true, type);
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
                    <View style={styles.container}>
                        <TextModal visible={this.state.visible} parentState={this} />
                        <SelectFonts parentState={this} />
                        <SelectColors parentState={this} />
                        <View style={styles.titleWrapper}>
                            <Gestures>
                                <TouchableWithoutFeedback onLongPress={() => this.showModal("title")}>
                                    <Text style={[styles.title, this.state.font && { fontFamily: this.state.font }, this.state.color && { color: this.state.color }]}>
                                        {this.state.title}
                                    </Text>
                                </TouchableWithoutFeedback>
                            </Gestures>
                        </View>
                        <TouchableWithoutFeedback onLongPress={() => this.showModal("promotion")}>
                            <Text style={[styles.sideText, this.state.font && { fontFamily: this.state.font }, this.state.color && { color: this.state.color }]}>{this.state.promotion}</Text>
                        </TouchableWithoutFeedback>
                        <Image style={styles.image} source={{ uri: GlobalStore.linkData.images[0] }} />
                        <View style={styles.imageBackground}></View>
                        <Gestures>
                            <TouchableWithoutFeedback >
                                <Text style={[styles.price, this.state.font && { fontFamily: this.state.font }, this.state.color && { color: this.state.color }]}>{GlobalStore.linkData.price}</Text>
                            </TouchableWithoutFeedback>
                        </Gestures>
                    </View>
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
                <TouchableOpacity style={{ alignItems:'center', justifyContent: 'center', }} onPress={() => navigation.getParam('tap')}>
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
        position: 'relative',
        backgroundColor: '#3926b3',
        justifyContent: 'center',
        position: 'relative'
    },
    image: {
        width: '70%',
        height: '60%',
        marginTop: '35%',
        marginLeft: '10%',
        zIndex: -1
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: 10,
        textAlign: 'center',
        letterSpacing: 5,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 8,
    },
    imageBackground: {
        width: '70%',
        height: '60%',
        backgroundColor: '#f5dcd7',
        position: 'absolute',
        zIndex: -2
    },
    sideText: {
        transform: [{ rotate: '90deg' }],
        position: 'absolute',
        top: 0,
        right: '-35%',
        top: '50%',
        fontSize: 20,
        width: '100%',
        height: 40,
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 5,
        textAlign: 'center'

    },
    titleWrapper: {
        position: 'absolute',
        top: '15%',
        marginLeft: 10,
    }
});

//make this component available to the app
export default ThemeThree;
