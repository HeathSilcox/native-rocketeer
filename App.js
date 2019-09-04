import React from 'react';
import {StatusBar, YellowBox} from 'react-native';
import {Provider} from "react-redux";
import store from "./src/store";
import AppDrawer from "./src/Navigation/drawer";
import * as Font from "expo-font";
import {AppLoading} from "expo";

export default function App() {
    YellowBox.ignoreWarnings(['Require cycle:']);

    const [isAppReady, setIsAppReady] = React.useState(false);
    const [data, setData] = React.useState('');

    const prepareApp = async () => {
        await Font.loadAsync({
            'SpaceMono': require('./assets/fonts/SpaceMono-Regular.ttf'),
            'SpaceMonoBold': require('./assets/fonts/SpaceMono-Bold.ttf'),
        });

        const baseUri = 'https://rocketeer.simplon-roanne.com';
        const requestType = '/wp-json/wc/v3/products';
        const apiKey = 'ck_3c914d2597381f3e7ba8e4bdb33d5c25b4a6b97c';
        const apiSecret = 'cs_d346f5cf4b26af1ef6ce28e69c9734efea2842a8';

        const response = await fetch(`${baseUri}${requestType}?consumer_key=${apiKey}&consumer_secret=${apiSecret}`);
        const jsonData = await response.json();

        setData(jsonData);
    };


    if (!isAppReady) {
        return (
            <AppLoading
                startAsync={prepareApp}
                onFinish={() => setIsAppReady(true)}
                onError={console.warn}
            />
        )
    }

    return (
        <Provider store={store}>
            <StatusBar hidden={true}/>
            <AppDrawer screenProps={data}/>
        </Provider>
    );
};