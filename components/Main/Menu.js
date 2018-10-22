import React, { Component } from 'react';
import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native';
export default class Menu extends Component {
  constructor(props){
    super(props);
    this.state = { user: null };
  }
  render() {
    const {
      container, profile, btnStyle, btnText,
      btnSignInStyle, btnTextSignIn, loginContainer,
      username
    } = styles;
    const { user } = this.state;
    const logoutJSX = (
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={btnStyle} onPress={()=>this.props.navigation.navigate('Authentication')}>
          <Text style={btnText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
    const loginJSX = (
      <View style={loginContainer}>
        <Text style={username}>{user ? user.name : ''}</Text>
        <View>
          <TouchableOpacity style={btnSignInStyle} onPress={()=>this.props.navigation.navigate('OrderHistory')}>
            <Text style={btnTextSignIn}>Order History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnSignInStyle} onPress={()=>this.props.navigation.navigate('ChangeInfo')}>
            <Text style={btnTextSignIn}>Change Info</Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnSignInStyle} >
            <Text style={btnTextSignIn}>Sign out</Text>
          </TouchableOpacity>
        </View>
        <View />
      </View>
    );
    const mainJSX = this.state.user ? loginJSX : logoutJSX;
    return (
      <View style={container}>
        <Image source={require('../../Images/iconsprofile-64.png')} style={profile} />
        {mainJSX}
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34B089',
    borderRightWidth: 3,
    borderColor: '#fff',
    alignItems: 'center'
  },
  profile: {
    width: 120,
    height: 120,
    // borderRadius: 60,
    marginVertical: 30
  },
  btnStyle: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 70
  },
  btnText: {
    color: '#34B089',
    fontFamily: 'Avenir',
    fontSize: 20
  },
  btnSignInStyle: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    width: 200,
    marginBottom: 10,
    justifyContent: 'center',
    paddingLeft: 10
  },
  btnTextSignIn: {
    color: '#34B089',
    fontSize: 15
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  username: {
    color: '#fff',
    fontFamily: 'Avenir',
    fontSize: 15
  }
});



{/* <TouchableOpacity onPress={()=>this.props.navigation.navigate('Authentication')}>
          <Text>Authenticaion</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('OrderHistory')}>
          <Text>OrderHistory</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ChangeInfo')}>
          <Text>ChangeInfo</Text>
        </TouchableOpacity> */}