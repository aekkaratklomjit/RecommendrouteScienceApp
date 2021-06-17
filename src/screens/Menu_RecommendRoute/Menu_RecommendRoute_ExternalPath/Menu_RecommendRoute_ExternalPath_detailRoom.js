import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import db_room from '../../../assets/Database/db_room';

export default class Menu_RecommendRoute_ExternalPath_detailRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DB_Room: [],
      listBuilding: null,
    };
    this.onStart();
  }
  onStart = async () => {
    const listBuilding = await AsyncStorage.getItem('listBuilding');
    const room_id = await AsyncStorage.getItem('room_id');
    console.log(listBuilding + ' And ' + room_id);
    const DB_Room = db_room.filter((item) => {
      return item.room_id == room_id;
    });
    this.setState({DB_Room: DB_Room, listBuilding: listBuilding});
  };
  render() {
    let name_building;
    if (this.state.listBuilding == '0') {
      name_building = 'ตึกกลม';
    } else if (this.state.listBuilding == '1') {
      name_building = 'อาคารวิทยาศาสตร์ 1 ';
    } else if (this.state.listBuilding == '2') {
      name_building = 'อาคารวิทยาศาสตร์ 3 ';
    } else if (this.state.listBuilding == '3') {
      name_building = 'อาคารวิทยาศาสตร์ 4';
    } else if (this.state.listBuilding == '4') {
      name_building = 'อาคารวิทยาศาสตร์ 5';
    } else if (this.state.listBuilding == '5') {
      name_building = 'อาคารวิทยาศาสตร์ 6';
    } else if (this.state.listBuilding == '6') {
      name_building = 'อาคารวิทยาศาสตร์ 7';
    } else if (this.state.listBuilding == '7') {
      name_building = 'อาคารวิทยาศาสตร์ 8';
    } else if (this.state.listBuilding == '8') {
      name_building = 'อาคารวิทยาศาสตร์ 9';
    }
    const Data = this.state.DB_Room.map((item) => {
      if (item.contract == null) {
        return (
          <View
            style={{
              width: 335,
              height: 163,
              backgroundColor: '#F8F8F8',
              elevation: 6,
              paddingLeft: 15,
            }}>
            <Text style={styles.Seccon_fonts}>รายละเอียด</Text>
            <Text style={styles.fonts}>{item.description}</Text>
          </View>
        );
      } else {
        return (
          <View
            style={{
              width: 335,
              height: 163,
              backgroundColor: '#F8F8F8',
              elevation: 6,
              paddingLeft: 15,
              paddingTop: 12,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(`tel:${item.contract.telephone}`)
                }>
                <Image
                  source={require('../../Menu_Contact/assets/ic_tel.png')}
                  style={{width: 35, height: 35}}
                />
              </TouchableOpacity>
              <Text style={styles.fonts}> {item.contract.telephone}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(`mailto:${item.contract.email}`)
                }>
                <Image
                  source={require('../../Menu_Contact/assets/ic_email.png')}
                  style={{width: 35, height: 35}}
                />
              </TouchableOpacity>
              <Text style={styles.fonts}> {item.contract.email}</Text>
            </View>
          </View>
        );
      }
    });
    return (
      <View>
        <Image
          source={require('../../../assets/Line/line.png')}
          style={{resizeMode: 'cover', width: 375, height: 6}}
        />
        <View style={{alignItems: 'center'}}>
          {this.state.DB_Room.map((item) => (
            <View key={item.room_id} style={{paddingBottom: 15}}>
              <Image style={{height: 200, width: 375}} source={item.picture} />
            </View>
          ))}
          {this.state.DB_Room.map((item) => (
            <View
              style={{
                width: 335,
                height: 120,
                backgroundColor: '#F8F8F8',
                elevation: 6,
                paddingLeft: 15,
              }}>
              <Text style={styles.Topic_fonts}>{item.room_name}</Text>
              <Text style={styles.Seccon_fonts}>
                ตำแหน่งที่ตั้ง : ชั้นที่ {item.floor} {name_building}{' '}
              </Text>
            </View>
          ))}
          <View style={{padding: 5}}></View>
          {Data}
        </View>
        <View style={{paddingTop: 15, paddingLeft: 15}}>
          <Text style={styles.Seccon_fonts}>เลือกประเภทการเดินทาง</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate(
                  'Menu_RecommendRoute_ExternalPath_typeBus',
                )
              }>
              <Image
                style={{width: 172, height: 48, resizeMode: 'center'}}
                source={require('../../../assets/Button/btn_typeBus.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate(
                  'Menu_RecommendRoute_ExternalPath_typeCar',
                )
              }>
              <Image
                style={{width: 172, height: 48, resizeMode: 'center'}}
                source={require('../../../assets/Button/btn_typeCar.png')}
              />
            </TouchableOpacity>
          </View>
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
