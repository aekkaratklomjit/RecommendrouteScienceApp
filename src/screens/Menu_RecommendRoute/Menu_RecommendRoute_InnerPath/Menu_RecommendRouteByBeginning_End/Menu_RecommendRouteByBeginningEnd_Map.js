import React from 'react';
import {StyleSheet, Dimensions, Image, View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageZoom from 'react-native-image-pan-zoom';
import db_RecommendRoute_InnerPath from '../../../../assets/Database/db_RecommendRoute_InnerPath';
export default class Menu_RecommendRouteByBeginningEnd_Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id_AB: null,
      db_InnerPath: [],
      pic_location: null,
    };
    this.onStart();
  }
  onStart = async () => {
    const id_A = await AsyncStorage.getItem('listBuildingBeginning');
    const id_B = await AsyncStorage.getItem('listBuildingEnd');
    const db_InnerPath = db_RecommendRoute_InnerPath.filter((item) => {
      return item.id_A == id_A && item.id_B == id_B;
    });
    const pic_location = db_InnerPath.map((item) => {
      return item.picture;
    });
    this.setState({pic_location: pic_location[0], db_InnerPath: db_InnerPath});
  };
  render() {
    return (
      <View style={{flex: 3}}>
        <View style={{flex: 1.5}}>
          <ImageZoom
            cropWidth={Dimensions.get('window').width}
            cropHeight={Dimensions.get('window').height}
            imageWidth={Dimensions.get('window').width}
            imageHeight={400}>
            <Image
              style={{width: Dimensions.get('window').width, height: 200}}
              source={this.state.pic_location}
            />
          </ImageZoom>
        </View>
        <View
          style={{flex: 0.7, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{borderRadius: 9, backgroundColor: '#353A50', width: 279}}>
            {this.state.db_InnerPath.map((item) =>
              item.innerPath.map((value) => (
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 12,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{backgroundColor: value.color}}> </Text>
                  <Text style={{...styles.fonts}}>
                    {value.color[0].toUpperCase() + value.color.slice(1)} Path
                  </Text>
                  <Text style={{paddingHorizontal: 20}}></Text>
                  <Text
                    style={{
                      ...styles.fonts,
                      color: 'black',
                      backgroundColor: value.color,
                      borderRadius: 3,
                    }}>
                    {value.distance}{' '}
                  </Text>
                </View>
              )),
            )}
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Topic_fonts: {
    paddingLeft: 15,
    fontSize: 31,
    fontFamily: 'upcll',
    color: 'white',
  },
  fonts: {
    paddingLeft: 6,
    fontSize: 19,
    fontFamily: 'upcll',
    color: 'white',
  },
});
