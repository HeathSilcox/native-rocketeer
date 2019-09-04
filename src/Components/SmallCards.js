import React from 'react';
import {Dimensions, Text, View, ScrollView, Image} from 'react-native';
import Carousel from "react-native-snap-carousel";
import {useSelector} from "react-redux";
import SmallButton from "./SmallButton";

export default (props) => {

    return (
        <View>
            <View style={{
                borderWidth: 2,
                borderColor: '#222',
                borderRadius: 20,
                overflow: 'hidden',
                width: 150,
            }}>
                <Image
                    style={{
                        width: 150,
                        height: 120
                    }}
                    source={{uri: 'https://place-hold.it/150x120'}}
                />
            </View>

            <Text>Coucou</Text>
            <SmallButton value="Buy it !"/>
        </View>
    );
};