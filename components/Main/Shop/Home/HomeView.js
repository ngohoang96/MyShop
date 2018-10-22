import React, {Component} from 'react';
import {View,ScrollView} from 'react-native';
import Collection from './Collection'
import Category from './Category'
import BestSeller from './TopProdcut'
export default class HomeView extends Component {
    
    render() {
        const {navigation} = this.props;
        
        return (
            <View >
                <ScrollView>
               <Collection navigation = {navigation} />
               <Category navigation = {navigation} />
               <BestSeller navigation = {navigation} />
               </ScrollView>
            </View>
        );
    }
}
