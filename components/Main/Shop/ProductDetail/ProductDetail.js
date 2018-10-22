import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
export default class ProductDetail extends Component {
    
    render() {
        const {goBack} = this.props.navigation;
        return (
            <View>
                <Text> ProductDetail </Text>
                <TouchableOpacity onPress = {() =>goBack()}>
                    <Text>goBack</Text>
                </TouchableOpacity>
            </View>
        );
    }
}