import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, IconBadge } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import CartView from './CartView'
import ProductDetail from '../ProductDetail/ProductDetail';
export default class Cart extends Component {
    static navigationOptions = {
        tabBarIcon: param => {
            if (param.focused) { return <Image style={{ width: 30, height: 30 }} source={require('../../../../Images/iconsCart.png')} /> }
            else {
                return <Image style={{ width: 20, height: 20 }} source={require('../../../../Images/iconsCart0.png')} />
            }
            <IconBadge>
                

            </IconBadge>
        },
    }
    render() {
        const StackCart = createStackNavigator({
            CartView: { screen: CartView },
            ProductDetail: { screen: ProductDetail }
        }, {
                initialRouteName: 'CartView',
                headerMode: 'none'
            })
        return (
            <View>
                <Text>Cart</Text>
                <StackCart />
            </View>
        );
    }
}