//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform, TouchableWithoutFeedback, CameraRoll, Alert } from 'react-native';
import GlobalStore from '../stores/GlobalStore';
import ModalStore from '../stores/ModalStore';
import { observer } from 'mobx-react/native';
import Gestures from 'react-native-easy-gestures';
import TextModal from '../components/TextModal';
import SelectFonts from '../components/SelectFonts';
import SelectColors from '../components/SelectColors';
import ViewShot from "react-native-view-shot";
import Share from 'react-native-share';
import { Root, ActionSheet, Icon } from 'native-base';


@observer class ThemeTwo extends Component {
    state = {
        visible: false,
        title: GlobalStore.linkData.title.toUpperCase(),
        type: 'title',
        font: null,
        color: null
    }
    showModal() {
        this.setState({ visible: true });
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
                    <View style={styles.container}>
                        <TextModal visible={this.state.visible} parentState={this} />
                        <SelectFonts parentState={this} />
                        <SelectColors parentState={this} />
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: GlobalStore.linkData.images[0] }}
                                style={styles.image}
                            />
                            <Gestures style={styles.titleWrapper}>
                                <TouchableWithoutFeedback onLongPress={() => this.showModal('title')}>
                                    <Text style={[styles.title, this.state.font && { fontFamily: this.state.font }, this.state.color && { color: this.state.color }]}>{this.state.title}</Text>
                                </TouchableWithoutFeedback>
                            </Gestures>
                            <Gestures>
                                <Text style={[styles.price, this.state.font && { fontFamily: this.state.font }, this.state.color && { color: this.state.color }]}>{GlobalStore.linkData.price}</Text>
                            </Gestures>
                        </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#f8d9c4'
    },
    imageContainer: {
        width: '85%',
        height: '85%',
        padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '85%',
        height: '85%',
    },
    title: {
        marginTop: 10,
        fontWeight: '600',
        fontSize: 24,
        textTransform: 'uppercase',
    },
    price: {
        marginTop: 5,
        fontSize: 18,
    }

});

//make this component available to the app
export default ThemeTwo;
