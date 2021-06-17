import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import db_building from '../../assets/Database/db_building';
import db_room from '../../assets/Database/db_room';
export default class Menu_listBuilding_detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [],
      room: null,
    };
    this.onStart();
  }
  onStart = async () => {
    const listBuilding = await AsyncStorage.getItem('listBuilding');
    const detail = db_building.filter((item) => {
      return item.id_ == listBuilding;
    });
    const room = db_room.filter((item) => {
      return item.id_ == listBuilding;
    });
    this.setState({detail: detail, room: room});
  };
  render() {
    let room_detail;
    if (this.state.room != null) {
      room_detail = this.state.room.map((item) => {
        return (
          <Text key={item.room_id} style={styles.fonts}>
            ชั้นที่ {item.floor} {item.room_name}
          </Text>
        );
      });
    }
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../assets/Line/line.png')}
          style={{resizeMode: 'cover', width: 375, height: 5}}
        />
        <View style={{paddingBottom: 15}}>
          {this.state.detail.map((item) => (
            <Image style={{height: 200, width: 375}} source={item.picture} />
          ))}
        </View>
        {this.state.detail.map((item) => (
          <View
            style={{
              width: 335,
              height: 163,
              backgroundColor: '#F8F8F8',
              elevation: 6,
              paddingLeft: 15,
            }}
            key={item.id_}>
            <Text style={styles.Topic_fonts}>{item.officialname}</Text>
            <Text style={styles.Seccon_fonts}>รายละเอียด</Text>
            <Text style={styles.fonts}>{item.description}</Text>
          </View>
        ))}
        <View style={{padding: 5}}></View>
        <View
          style={{
            width: 335,
            height: 170,
            backgroundColor: '#F8F8F8',
            elevation: 6,
            paddingLeft: 15,
          }}>
          <Text style={styles.Seccon_fonts}>ห้องสำคัญ</Text>
          {room_detail}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Topic_fonts: {
    fontSize: hp('4.5%'),
    color: '#2A2E43',
    fontFamily: 'upcll',
  },
  Seccon_fonts: {
    fontSize: hp('4%'),
    color: '#2A2E43',
    fontFamily: 'upcll',
  },
  fonts: {
    fontSize: hp('3.5%'),
    color: '#2A2E43',
    fontFamily: 'upcll',
  },
});
