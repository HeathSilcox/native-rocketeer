import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createStore} from "redux";
import {Provider, connect, useSelector, useDispatch} from "react-redux";

// Fichier Constants/action-types.js
const UNE_ACTION = 'UNE_ACTION';

// Fichier Actions/actions.js
const uneAction = (payload) => {
    return {type: UNE_ACTION, payload};
};

// Fichier initialState.js
const initialState = {
    compteur: 0,
};

// Fichier Reducers/rootReducer.js
const rootReducer = (state = initialState, action) => {
    if (action.type === UNE_ACTION) {
        return {
            ...state,
            compteur: state.compteur + 1,
        };
    }

    return state;
};

// Fichier store.js
const store = createStore(rootReducer);


const mapStateToProps = (state, ownProps) => {
    return {
        compteur: state.compteur,
        props: ownProps,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        uneAction: (payload) => (dispatch) => dispatch(uneAction(payload)),
    };
};

const ComposantConnect = (props) => {
    const handlePress = () => {
        uneAction();
    };

    return (
        <View style={{flex: 1}}>
            <Text>
                Je suis le n°{props.compteur}
            </Text>
            <TouchableOpacity onPress={handlePress}>
                <Text>Cliquez-moi dessus</Text>
            </TouchableOpacity>
        </View>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ComposantConnect);


const ComposantHooked = (props) => {
    const compteur = useSelector(state => state.compteur);
    const dispatch = useDispatch();

    const handlePress = () => {
        dispatch(uneAction());
    };

    return (
        <View style={{flex: 1}}>
            <Text>
                Je suis le n°{compteur}
                <TouchableOpacity onPress={handlePress}>
                    <Text>Cliquez-moi dessus</Text>
                </TouchableOpacity>
            </Text>
        </View>
    )
};