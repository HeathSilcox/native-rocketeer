import React from 'react';
import {Dimensions, Text, View, TouchableOpacity} from 'react-native';


export default ({value, style}) => {
    return (
        <TouchableOpacity style={{...style}}>
            <View style={{
                backgroundColor: '#fff',
                paddingVertical: 10,
                paddingHorizontal: 5,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
                width: Dimensions.get('window').width / 2,
            }}>
                <Text style={{
                    fontFamily: 'SpaceMono',
                    fontSize: 15,
                    color: '#1e4072',
                    textAlign: 'center',
                }}>
                    {value}
                </Text>
            </View>
        </TouchableOpacity>
    );
};