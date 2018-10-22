import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation'
// import { NavigationActions } from 'react-navigation';
StatusBar.setHidden(true)
import Main from './components/Main/Main'
import Authentication from './components/Authentication/Authentication'
import ChangeInfo from './components/ChangeInfo/ChangeInfo'
import OrderHistory from './components/OrderHistory/OrderHistory'
export default class App extends Component {
render() {
  const Stack = createStackNavigator({
    Main : {screen : Main},
    ChangeInfo : {screen : ChangeInfo,},
    OrderHistory :{screen : OrderHistory},
    Authentication : {screen : Authentication}
  },{
    initialRouteName : 'Main',
    headerMode : 'none'
  })
  return (
    <Stack/>
  );
}
}