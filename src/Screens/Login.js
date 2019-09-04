import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import Carousel from "react-native-snap-carousel";
import {useSelector} from "react-redux";


export default (props) => {
    const rockets = useSelector(state => state.rockets);

    const renderItem = ({item, index}) => {
        return (
            <View style={{flex: 1, backgroundColor: '#eee'}}>
                <Text style={{fontWeight: 'bold', textAlign: 'center'}}>{item.title}</Text>
            </View>
        );
    };

    return (
        <Carousel
            ref={(c) => {
                this._carousel = c;
            }}
            data={rockets}
            renderItem={renderItem}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width}
        />
    );
};