import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
const { height } = Dimensions.get('window');
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSearch: ''
        };
    }
    render() {
        const { wrapper, decor, textInput, iconStyle, titleStyle } = styles;
        return (
            <View style={wrapper} >
                <View style={decor}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} >
                        <Image style={iconStyle}
                            source={require('../../Images/ic_menu.png')}
                        />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Dress Shop</Text>
                    <Image style={iconStyle}
                        source={require('../../Images/react.png')}
                    />

                </View>
                <TextInput
                    style={textInput}
                    placeholder="What do you want to buy ?"
                    underlineColorAndroid="transparent"
                    value={this.state.txtSearch}
                    onChangeText={text => this.setState({ txtSearch: text })}

                />



            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        height: height / 8,
        backgroundColor: '#3CB99C',
        padding: 10,
        justifyContent: 'space-around'
    },
    decor: { flexDirection: 'row', justifyContent: 'space-between' },
    textInput: {
        height: height / 23,
        backgroundColor: '#FFF',
        paddingLeft: 10,
        paddingVertical: 0
    },
    titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20 },
    iconStyle: { width: 25, height: 25 }
})