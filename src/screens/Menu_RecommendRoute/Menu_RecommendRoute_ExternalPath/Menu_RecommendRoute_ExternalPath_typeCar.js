import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import db_TransportCar from '../../../assets/Database/db_TransportCar';
import db_building from '../../../assets/Database/db_building';
export default class Menu_RecommendRoute_ExternalPath_typeCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      db_typeCar: [],
      building_name: null,
      picture: null,
    };
    this.onStart();
  }
  onStart = async () => {
    console.log('function start');
    const listBuilding = await AsyncStorage.getItem('listBuilding');
    const db_typeCar = db_TransportCar.filter((item) => {
      return item.id_ == listBuilding;
    });
    const picture = db_typeCar.map((item) => {
      return item.picture;
    });
    const building = db_building.filter((item) => {
      return item.id_ == listBuilding;
    });
    const building_name = building.map((item) => {
      return item.officialname;
    });
    this.setState({
      db_typeCar: db_typeCar,
      picture: picture[0],
      building_name: building_name[0],
    });
  };
  render() {
    return (
      <View style={{flex: 4}}>
        <View style={{alignItems: 'center', flex: 0.7}}>
          <View
            style={{
              width: 320,
              height: 127,
              borderWidth: 0.05,
              justifyContent: 'center',
              elevation: 3,
            }}>
            <Image
              style={{width: 300, height: 102, resizeMode: 'stretch'}}
              source={require('../../../assets/Menu_RecommendRoute/Menu_RecommendRoute_ExternalPath/typeCar.png')}
            />
          </View>
        </View>
        <View style={{alignItems: 'center', flex: 1.9}}>
          <View
            style={{
              width: 330,
              height: 390,
              borderWidth: 0.05,
              justifyContent: 'center',
              elevation: 3,
            }}>
            <Image
              style={{width: 330, height: 390, resizeMode: 'stretch'}}
              source={this.state.picture}
            />
          </View>
        </View>
        <View style={{flex: 0.4, backgroundColor: '#2A2E43', paddingLeft: 12}}>
          <Text style={styles.Topic_fonts}>จุดลงรถที่แนะนำ</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.Seccon_fonts}>เลือกจุดลงที่แนะนำ : </Text>
            {this.state.db_typeCar.map((item) =>
              item.casecar.map((value) => (
                <TouchableOpacity
                  onPress={() => Linking.openURL(value.map)}
                  style={{paddingLeft: 18}}>
                  <View
                    style={{
                      width: 65,
                      backgroundColor: '#FFC757',
                      borderRadius: 5,
                      padding: 5,
                      alignItems: 'center',
                    }}>
                    <Text style={styles.fonts}>จุดที่ {value.casecar_id}</Text>
                  </View>
                </TouchableOpacity>
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
    fontSize: 25,
    color: 'white',
    fontFamily: 'upcll',
  },
  Seccon_fonts: {
    fontSize: 19,
    color: 'white',
    fontFamily: 'upcll',
  },
  fonts: {
    fontSize: 25,
    color: '#2A2E43',
    fontFamily: 'upcll',
  },
});
