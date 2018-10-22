import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
export default class ListProduct extends Component {
    
    render() {
        const {goBack} = this.props.navigation;
        return (
            <View>
                <Text> ListProduct </Text>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('ProductDetail')}>
                    <Text > go to detail</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => goBack()} >
                        <Text>Back</Text>

                </TouchableOpacity>
            </View>
        );
    }
}