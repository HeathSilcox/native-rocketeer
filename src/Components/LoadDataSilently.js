import React from 'react';
import {useDispatch} from "react-redux";
import {loadFonts, loadProducts} from '../Actions/actions';
import * as Font from "expo-font";

export default () => {
    const dispatch = useDispatch();

    (
        async () => {
            const baseUri = 'https://rocketeer.simplon-roanne.com';
            const requestType = '/wp-json/wc/v3/products';
            const apiKey = 'ck_3c914d2597381f3e7ba8e4bdb33d5c25b4a6b97c';
            const apiSecret = 'cs_d346f5cf4b26af1ef6ce28e69c9734efea2842a8';

            const response = await fetch(`${baseUri}${requestType}?consumer_key=${apiKey}&consumer_secret=${apiSecret}`);
            const data = await response.json();

            dispatch(loadProducts(data));
        }
    )();

    return (
        <></>
    );
};