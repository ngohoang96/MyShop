import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
const { width, height } = Dimensions.get('window');

export default class Category extends Component {

    render() {
        const { wrapper, textStyle, imageStyle } = styles;
        const { types } = this.props;
        return (
            <View style={wrapper}>
                <View style={{ justifyContent: 'center', flex: 1, paddingTop: 5 }}>
                    <Text style={textStyle} >SPRING COLLECTION</Text>
                </View>
                <View style={{ justifyContent: 'flex-end', flex: 4 }} >
                    <SwiperFlatList
                        showPagination
                        autoplay
                        autoplayDelay={3}
                        autoplayLoop
                        index={1}
                    >
                    {this.types.map(e =>{
                        <TouchableOpacity >
                        <Image source = {require('../../../../Images/temp/maxi.jpg')} style={imageStyle}/>
                        </TouchableOpacity>
                    
                    })}
                    {/* <TouchableOpacity >
                        <Image source = {require('../../../../Images/temp/maxi.jpg')} style={imageStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source = {require('../../../../Images/temp/midi.jpg')} style={imageStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source = {require('../../../../Images/temp/sp2.jpeg')} style={imageStyle}/>
                    </TouchableOpacity> */}

                    </SwiperFlatList>
                </View>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.35,
        backgroundColor: '#FFF',
        margin: 10,
        justifyContent: 'space-between',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cateTitle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#9A9A9A'
    }
});