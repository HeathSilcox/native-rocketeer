import React from 'react';
import {Dimensions, Text, View, Image, TouchableOpacity} from 'react-native';


export default ({props}) => {
    const openDrawer = () => {
        props.navigation.openDrawer();
    };

    return (
        <View style={{
            backgroundColor: '#1e4072',
            height: 70,
            borderBottomWidth: 1,
            borderBottomColor: '#111',
            // marginBottom: 5,
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
        }}>
            <View>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('../../assets/img/rocket-icon.png')}
                />
            </View>
            <Text style={{
                fontFamily: 'SpaceMono',
                textAlign: 'center',
                color: '#fff',
                fontSize: 22,
            }}>Rocketeer</Text>

            <TouchableOpacity onPress={openDrawer}>
                <View>
                    <Image
                        style={{width: 50, height: 50}}
                        source={require('../../assets/img/burger-btn-white.png')}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};