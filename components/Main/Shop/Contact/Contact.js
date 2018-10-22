import React, {Component} from 'react';
import {View,Text,Image,Dimensions,StyleSheet} from 'react-native';
import MapView from 'react-native-maps'
export default class Contact extends Component {
    static navigationOptions = {
        tabBarIcon: param =>{
            if(param.focused) {return <Image style = {{width : 30 , height : 30}} source = {require('../../../../Images/iconsContact.png')}/>}
            else {
                return <Image style = {{width : 20 , height : 20}} source= {require('../../../../Images/iconsContact0-50.png')} />
            }

    }}
    render() {
        const {
            mapContainer, wrapper, infoContainer,
            rowInfoContainer, imageStyle, infoText
        } = styles;
        return (
            <View style={wrapper}>
                <View style={mapContainer}>
                    {/* <MapView
                        style={{ width: width - 20, height: 250 }}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <MapView.Marker
                            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                            title="Khoa Pham"
                            description="React Native Khoa pham training"
                        />
                    </MapView> */}
                </View>
                <View style={infoContainer}>
                    <View style={rowInfoContainer}>
                        {/* <Image source={locationIcon} style={imageStyle} /> */}
                        <Text style={infoText}>29/60 Doan Thi Diem</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        {/* <Image source={phoneIcon} style={imageStyle} /> */}
                        <Text style={infoText}>(+84) 962111199</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        {/* <Image source={mailIcon} style={imageStyle} /> */}
                        <Text style={infoText}>ngohoang1211@gmail.com</Text>
                    </View>
                    <View style={[rowInfoContainer, { borderBottomWidth: 0 }]}>
                        {/* <Image source={messageIcon} style={imageStyle} /> */}
                        <Text style={infoText}>(+84) 962111199</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#F6F6F6' },
    mapStyle: {
        width: width - 40,
        height: 230,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 10,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    infoContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 0,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    rowInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6'
    },
    imageStyle: {
        width: 30,
        height: 30
    },
    infoText: {
        fontFamily: 'Avenir',
        color: '#AE005E',
        fontWeight: '500'
    }
});





