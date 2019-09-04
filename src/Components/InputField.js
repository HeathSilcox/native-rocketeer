import React from 'react';
import {Dimensions, Text, View, Image, TouchableOpacity} from 'react-native';
import Input from "./Input";
import Button from "./Button";

export default () => {

    return (
        <View style={{
            backgroundColor: 'rgba(93,202,247,0.7)',
            width: Dimensions.get('window').width / 1.25,
            borderRadius: 1,
            alignItems: 'center',
        }}>
            <Input value="Email" type="email"/>
            <Input value="Username" type="text"/>
            <Input value="Password" type="password"/>
            <Button value="Register" style={{marginVertical: 20}}/>
        </View>
    );
};