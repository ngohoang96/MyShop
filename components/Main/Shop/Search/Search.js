import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import ProductDetail from '../ProductDetail/ProductDetail';
import SearchView from './SearchView'
export default class Search extends Component {
    static navigationOptions = {
        tabBarIcon: param =>{
            if(param.focused) {return <Image style = {{width : 33 , height : 33}} source = {require('../../../../Images/iconsSearch.png')}/>}
            else {
                return <Image style = {{width : 25 , height : 25}} source= {require('../../../../Images/iconsSearch0.png')} />
            }

    }}
    render() {
        const StackSearch = createStackNavigator({
            SearchView : {screen: SearchView},
            ProductDetail : {screen : ProductDetail}},{
                initialRouteName: 'SearchView',
                headerMode : 'none'
        })
        return (
            <View>
                <Text>Search</Text>
                <StackSearch/>
            </View>
        );
    }
}