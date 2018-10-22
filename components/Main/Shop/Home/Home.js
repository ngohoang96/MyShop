import React, { Component } from 'react'
import { Image,IconBadge } from 'react-native';
import {createStackNavigator} from 'react-navigation'
import HomeView from './HomeView'
import ListProduct from '../ListProduct/ListProduct'
import ProductDetail from '../ProductDetail/ProductDetail'
import Collection from './Collection'
import Category from './Category'
import TopProduct from './TopProdcut';
export default class Home extends Component {
    static navigationOptions = {
        tabBarIcon: param =>{
            if(param.focused) {return <Image style = {{width : 33 , height : 33}} source = {require('../../../../Images/iconssHome.png')}/>}
            else {
                return <Image style = {{width : 25 , height : 25}} source= {require('../../../../Images/iconsHome0.png')} />
            }

    },
        
}
    render() {  
        
         const StackHomeView = createStackNavigator({
            HomeView : {screen : HomeView, },
            Collection : {screen : Collection},
            Category : {screen : Category,},
            TopProduct :{screen : TopProduct}},{
                initialRouteName : 'HomeView',
                headerMode : 'none'
        }
        )
        const StackHome = createStackNavigator({
            StackHomeView : {screen:StackHomeView},
            ListProduct : {screen: ListProduct},
            ProductDetail : {screen : ProductDetail},
            // Collection : {screen : Collection},
            // Category : {screen : Category},
            // BestSeller :{screen : BestSeller},
        },{
                initialRouteName : 'StackHomeView',
                headerMode : 'none',
                

        
        })
        return (
            <StackHome />
        );
    }
}