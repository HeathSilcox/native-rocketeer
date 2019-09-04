import React from 'react';
import {Dimensions, Text, View, ScrollView} from 'react-native';
import Carousel from "react-native-snap-carousel";
import {useSelector} from "react-redux";
import SmallCards from "../Components/SmallCards";

export default (props) => {

    return (
        <ScrollView style={{flex: 1}}>
            <SmallCards/>
        </ScrollView>
    );
};