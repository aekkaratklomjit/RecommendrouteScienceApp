import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import db_TransportBus from '../../../assets/Database/db_TransportBus';
import db_building from '../../../assets/Database/db_building';
export default class Menu_RecommendRoute_ExternalPath_typeBus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      db_typeBus: [],
      building_name: null,
      picture: null,
    };
    this.onStart();
  }
  onStart = async () => {
    const listBuilding = await AsyncStorage.getItem('listBuilding');
    const db_typeBus = db_TransportBus.filter((item) => {
      return item.id_ == listBuilding;
    });
    const picture = db_typeBus.map((item) => {
      return item.picture;
    });
    const building = db_building.filter((item) => {
      return item.id_ == listBuilding;
    });
    const building_name = building.map((item) => {
      return item.officialname;
    });
    this.setState({
      db_typeBus: db_typeBus,
      picture: picture[0],
      building_name: building_name[0],
    });
  };
  render() {
    return (
      <View style={{flex: 4}}>
        <View
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            flex: 1,
            elevation: 6,
          }}>
          <Image
            style={{width: 340, height: 170, resizeMode: 'stretch'}}
            source={require('../../../assets/Menu_RecommendRoute/Menu_RecommendRoute_ExternalPath/typeBus.png')}
          />
        </View>
        <View style={{flex: 2, alignItems: 'center'}}>
          <Image
            style={{width: 340, height: 340, resizeMode: 'stretch'}}
            source={this.state.picture}
          />
        </View>
        <View style={{flex: 0.65, backgroundColor: '#2A2E43', paddingLeft: 12}}>
          <Text style={styles.Topic_fonts}>จุดลงรถที่แนะนำ</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.Seccon_fonts}>เลือกจุดลงที่แนะนำ : </Text>
            {this.state.db_typeBus.map((item) =>
              item.casebus.map((value) => (
                <TouchableOpacity
                  onPress={async () => {
                    await AsyncStorage.setItem('casebus_id', value.casebus_id);
                    this.props.navigation.navigate(
                      'Menu_RecommendRoute_ExternalPath_typeBus_Map',
                    );
                  }}
                  style={{paddingLeft: 18}}>
                  <View
                    style={{
                      width: 80,
                      backgroundColor: '#FFC757',
                      borderRadius: 5,
                      padding: 5,
                      alignItems: 'center',
                    }}>
                    <Text style={styles.fonts}>จุดที่ {value.casebus_id}</Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: 'white',
                        fontFamily: 'upcll',
                        backgroundColor: value.color,
                      }}>
                      {' '}
                      {value.distance}{' '}
                    </Text>
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
