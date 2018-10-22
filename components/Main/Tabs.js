import React, { Component } from 'react';
import { Icon, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'
import Home from './Shop/Home/Home'
import Contact from './Shop/Contact/Contact'
import Cart from './Shop/Cart/Cart'
import Search from './Shop/Search/Search'
const Tabs = createBottomTabNavigator({
    Home: {
        screen: Home,
    },
    Cart: {
        screen: Cart,
    },
    Search: {
        screen: Search,
    },
    Contact: {
        screen: Contact,
    }
},{
     
        tabBarOptions: {
            showLabel: false,
            activeTintColor: 'white',
            inactiveTintColor: 'black',
            // style: {
            //     backgroundColor: '#5CC9F5' // TabBar background
            // }
        },
        
            
    },
    
    )
export default Tabs;