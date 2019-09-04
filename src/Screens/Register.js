import React from 'react';
import {Dimensions, Text, View, ImageBackground, ScrollView, KeyboardAvoidingView} from 'react-native';
import Carousel from "react-native-snap-carousel";
import {useSelector} from "react-redux";
import InputField from "../Components/InputField";


export default (props) => {

    return (
        <ImageBackground
            source={require('../../assets/img/rocket-bgimage.png')}
            style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
            }}
        >
            <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center'}} behavior="padding" enabled>
                <InputField/>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
};