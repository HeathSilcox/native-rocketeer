import React from 'react';
import {Dimensions, View} from 'react-native';
import HTML from "react-native-render-html";

export default (props) => {
    return (
        <View style={{backgroundColor: '#c7f5f8', width: '100%', paddingVertical: 6, justifyContent: 'center'}}>
            <HTML
                baseFontStyle={{
                    fontFamily: 'SpaceMono',
                    fontSize: 12,
                    color: '#1e4072',
                }}
                containerStyle={{
                    paddingHorizontal: 3
                }}
                tagsStyles={{
                    p: {
                        textAlign: 'center'
                    }
                }}
                html={props.data.description.replace(/\s\s/g, ' ')}
                imagesMaxWidth={Dimensions.get('window').width}
            />
        </View>
    );
};