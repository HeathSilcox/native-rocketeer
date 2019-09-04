import React from 'react';
import {Dimensions, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {useSelector} from "react-redux";


export default (props) => {
    const [value, setValue] = React.useState('');
    const [bgColor, setBgColor] = React.useState('#fff');

    return (
        <View style={{width: '100%', marginVertical: 12, alignItems: 'center'}}>
            <Text style={{
                textAlign: 'center',
                fontFamily: 'SpaceMono',
                fontSize: 16,
                color: '#fff',
            }}>{props.value}</Text>
            <TextInput
                style={{
                    height: 40,
                    width: '80%',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.23,
                    shadowRadius: 2.62,
                    backgroundColor: bgColor,
                    borderColor: 'rgba(34,34,34, 0.5)',
                    borderWidth: 1,
                    borderRadius: 2,
                    paddingLeft: 8
                }}
                onChangeText={input => setValue(input)}
                value={value}
                onFocus={() => setBgColor('rgba(151,227,247,0.5)')}
                onBlur={() => setBgColor('#fff')}
            />
        </View>
    );
};