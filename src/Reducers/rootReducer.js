import initialState from "../initialState";
import {LOAD_FONTS, LOAD_PRODUCTS} from "../Constants/action-types";


export default (state = initialState, action) => {
    if (action.type === LOAD_PRODUCTS) {
        return {
            ...state,
            rockets: [...action.payload],
            isDataLoaded: true,
        };
    }

    if (action.type === LOAD_FONTS) {
        return {
            ...state,
            areFontsLoaded: action.payload,
        };
    }

    return state;
};