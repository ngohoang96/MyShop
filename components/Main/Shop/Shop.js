import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Tabs from '../Tabs'
import Header from '../Header'
export default class Shop extends Component {
  // componentDidMount() {
  //   fetch('http://192.168.64.2/app/')
  //   .then(res =>res.json())
  //   .then(resJson =>{
  //     const {type} = resJson;
  //     this.setState({types : type})
  //   })
  // }
  render() {
  //  const {types } = this.state;
   const {navigation} = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Header navigation = {navigation}/>
        <Tabs  />
      </View>
    );
  }
}
