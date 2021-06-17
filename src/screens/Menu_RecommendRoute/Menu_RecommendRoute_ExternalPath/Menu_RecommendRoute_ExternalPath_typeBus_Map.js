import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import db_TransportBus from '../../../assets/Database/db_TransportBus';
import ImageZoom from 'react-native-image-pan-zoom';
export default class Menu_RecommendRoute_ExternalPath_typeBus_Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic_location: null,
      casebus_pic: [],
    };
    this.onStart();
  }
  onStart = async () => {
    const listBuilding = await AsyncStorage.getItem('listBuilding');
    const casebus_id = await AsyncStorage.getItem('casebus_id');
    const bus_id = db_TransportBus.filter((item) => {
      return item.id_ == listBuilding;
    });
    const casebus = bus_id.map((item) => {
      return item.casebus;
    });
    const casebus_pic = casebus[0].filter((item) => {
      return item.casebus_id == casebus_id;
    });
    this.setState({
      casebus_pic: casebus_pic,
      pic_location: casebus_pic[0].casebus_pic,
    });
  };
  render() {
    return (
      <View style={{flex: 3}}>
        <View style={{flex: 1.5}}>
          <ImageZoom
            cropWidth={Dimensions.get('window').width}
            cropHeight={Dimensions.get('window').height}
            imageWidth={300}
            imageHeight={400}>
            <Image
              style={{resizeMode: 'cover', width: 300, height: 300}}
              source={this.state.pic_location}
            />
          </ImageZoom>
        </View>
        <View
          style={{flex: 0.7, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{borderRadius: 9, backgroundColor: '#353A50', width: 279}}>
            {this.state.casebus_pic.map((item) => (
              <View
                style={{
                  flexDirection: 'row',
                  padding: 12,
                  justifyContent: 'space-between',
                }}>
                <Text style={{backgroundColor: item.color}}> </Text>
                <Text style={{...styles.fonts, color: 'white'}}>
                  {item.color[0].toUpperCase() + item.color.slice(1)} Path
                </Text>
                <Text
                  style={{
                    ...styles.fonts,
                    color: 'white',
                    backgroundColor: item.color,
                    borderRadius: 3,
                  }}>
                  {item.distance}{' '}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  parent: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  child: {
    width: '33%',
    margin: '1%',
    aspectRatio: 1,
  },
  fonts: {
    paddingLeft: 6,
    fontSize: 19,
    fontFamily: 'upcll',
    color: 'white',
  },
});
