import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  YellowBox,
  Linking,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import db_building from '../../assets/Database/db_building';
YellowBox.ignoreWarnings(['Failed prop type']);
export default class Menu_listBuilding_Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      detail: [],
    };
    this.onStart();
  }
  onStart = async () => {
    const listBuilding = await AsyncStorage.getItem('listBuilding');
    this.setState({listBuilding: listBuilding});
    const detail = db_building.filter((item) => {
      return item.id_ == listBuilding;
    });
    this.setState({detail: detail});
    let latitude = null,
      longitude = null;
    this.state.detail.map(
      (item) => (
        (latitude = Number(item.coord.latitude)),
        (longitude = Number(item.coord.longitude))
      ),
    );
    console.log(latitude, longitude);
    this.setState({latitude: latitude, longitude: longitude});
  };
  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          remove
          if
          not
          using
          Google
          Maps
          style={styles.map}
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}>
          <Marker
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
            }}>
            <Callout>
              {this.state.detail.map((item) => (
                <View
                  style={{
                    width: 180,
                    height: 160,
                    alignItems: 'center',
                    paddingTop: 9,
                  }}>
                  <Text style={styles.fonts}>{item.officialname}</Text>
                  <Text style={{bottom: 70}}>
                    <Image
                      style={{height: 180, width: 160, resizeMode: 'repeat'}}
                      source={item.picture}
                    />
                  </Text>
                </View>
              ))}
            </Callout>
          </Marker>
        </MapView>
        {this.state.detail.map((item) => (
          <View style={{position: 'absolute', bottom: 10, right: 10}}>
            <TouchableOpacity
              onPress={() => Linking.openURL(item.LocationOnGoogleMaps)}>
              <Image
                source={require('../../assets/Line/ic_map.png')}
                style={{width: 35, height: 35}}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 575,
    width: 355,
    alignItems: 'flex-end',
  },
  fonts: {
    fontSize: 27,
    fontFamily: 'upcll',
    color: '#2A2E43',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
