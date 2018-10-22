import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

// import sp1 from '../../../../media/temp/sp1.jpeg';
// import sp2 from '../../../../media/temp/sp2.jpeg';
// import sp3 from '../../../../media/temp/sp3.jpeg';
// import sp4 from '../../../../media/temp/sp4.jpeg';

export default class TopProduct extends Component {
    render() {
        const { 
            container, titleContainer, title, 
            body, productContainer, productImage,
            produceName, producePrice 
        } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>BEST SELLER</Text>
                </View>
                <View style={body}>
                    <TouchableOpacity onPress = {() =>this.props.navigation.navigate('ProductDetail')}>
                    <View style={productContainer}>
                        <Image source={require('../../../../Images/temp/sp1.jpeg')} style={productImage} />
                        <Text style={produceName}>PRODUCT NAME</Text>
                        <Text style={producePrice}>400$</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={productContainer}>
                        <Image source={require('../../../../Images/temp/sp2.jpeg')} style={productImage} />
                        <Text style={produceName}>PRODUCT NAME</Text>
                        <Text style={producePrice}>250$</Text>
                    </View>
                    <View style={{ height: 10, width }} />
                    <View style={productContainer}>
                        <Image source={require('../../../../Images/temp/sp3.jpeg')} style={productImage} />
                        <Text style={produceName}>PRODUCT NAME</Text>
                        <Text style={producePrice}>400$</Text>
                    </View>
                    <View style={productContainer}>
                        <Image source={require('../../../../Images/temp/sp4.jpeg')} style={productImage} />
                        <Text style={produceName}>PRODUCT NAME</Text>
                        <Text style={producePrice}>250$</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const produtWidth = (width - 60) / 2;
const productImageHeight = (produtWidth / 361) * 452; 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: {
        color: '#D3D3CF',
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productContainer: {
        width: produtWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: produtWidth,
        height: productImageHeight
    },
    produceName: {
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500'
    },
    producePrice: {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90'
    }
});