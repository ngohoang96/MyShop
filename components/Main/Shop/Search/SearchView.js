import React, { Component } from 'react';
import { View , Text , TouchableOpacity } from 'react-native';
export default class SearchView extends Component {
    
    render() {
        return (
            <View>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate('ProductDetail')}>
                    <Text>SearchView</Text>
                </TouchableOpacity>
            </View>
            
        );
    }
}