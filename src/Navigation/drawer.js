import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Homepage from "../Screens/Homepage";
import Catalog from "../Screens/Catalog";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import Header from "../Components/Header";


const DrawerNavigator = createDrawerNavigator(
    {
        Homepage: {
            screen: (props) => [<Header key={12} props={props}/>, <Homepage key={1233} data={props.screenProps}/>]
        },
        Catalog: {
            screen: (props) => [<Header key={142} props={props}/>, <Catalog key={15233} data={props.screenProps}/>]
        },
        Login: {
            screen: (props) => [<Header key={112} props={props}/>, <Login key={123} data={props.screenProps}/>]
        },
        Register: {
            screen: (props) => [<Header key={122} props={props}/>, <Register key={1299} data={props.screenProps}/>]
        },
    },
    {
        drawerBackgroundColor: '#fff',
        overlayColor: 'rgba(25, 25, 25, 0.25)',
        edgeWidth: 0,
        contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#1e4072',
            labelStyle: {
                fontWeight: 'normal',
                fontFamily: 'SpaceMono',
            },
            itemsContainerStyle: {
                backgroundColor: '#fff',
            }
        },
    },
);


export default createAppContainer(DrawerNavigator);
