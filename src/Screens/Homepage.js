import React from 'react';
import {Dimensions, Image, Text, View, ScrollView} from 'react-native';
import Carousel from "react-native-snap-carousel";
import {useSelector} from "react-redux";
import LargeButton from "../Components/LargeButton";
import Description from "../Components/Description";


export default (props) => {
    const renderItem = ({item, index}) => {
        return (
            <ScrollView
                style={{flex: 1}}
                contentContainerStyle={{
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>

                <Text style={{
                    fontFamily: 'SpaceMonoBold',
                    fontSize: 18,
                    paddingVertical: 10,
                    textAlign: 'center',
                    color: '#3943a5',
                }}>{item.name}</Text>

                <Image
                    style={{width: 300, height: 400, borderRadius: 2}}
                    source={{uri: item.images[0].src}}
                />

                <Text style={{
                    textAlign: 'center',
                    color: '#3943a5',
                    fontFamily: 'SpaceMonoBold',
                    marginVertical: 20
                }}>{item.title}</Text>

                <LargeButton value="Buy my rocket now !" style={{marginBottom: 40}} index={index}/>

                <Description index={index} data={item}/>
            </ScrollView>
        );
    };

    return (
        <Carousel
            ref={(c) => {
                this._carousel = c;
            }}
            data={props.data}
            renderItem={renderItem}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width}
        />
    );
};