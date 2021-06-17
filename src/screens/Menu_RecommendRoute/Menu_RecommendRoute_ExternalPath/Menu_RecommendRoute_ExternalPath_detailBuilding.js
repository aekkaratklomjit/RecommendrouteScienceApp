import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  YellowBox,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import db_building from '../../../assets/Database/db_building';
import db_room from '../../../assets/Database/db_room';
YellowBox.ignoreWarnings([
  'Each child in a list should have a unique "key" prop.',
]);
export default class Menu_RecommendRoute_ExternalPath_detailBuilding extends React.Component {
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
    this.setState({room: room});
    this.setState({detail: detail});
  };
  render() {
    let room_detail;
    if (this.state.room != null) {
      room_detail = this.state.room.map((item) => {
        return (
          <Text style={styles.fonts}>
            ชั้นที่ {item.floor} {item.room_name}
          </Text>
        );
      });
    }
    return (
      <View>
        <Image
          source={require('../../../assets/Line/line.png')}
          style={{resizeMode: 'cover', width: 375, height: 9}}
        />
        <View style={{alignItems: 'center'}}>
          {this.state.detail.map((item) => (
            <View key={item.room_id} style={{paddingBottom: 15}}>
              <Image style={{height: 200, width: 375}} source={item.picture} />
            </View>
          ))}
          {this.state.detail.map((item) => (
            <View
              key={item.room_id}
              style={{
                width: wp('95%'),
                height: hp('24'),
                backgroundColor: '#F8F8F8',
                elevation: 6,
                paddingLeft: 15,
              }}>
              {/* <View key={item.room_id} style={{width:335,height:163,backgroundColor:"#F8F8F8",elevation:6,paddingLeft:15}}> */}
              <Text style={styles.Topic_fonts}>{item.officialname}</Text>
              <Text style={styles.Seccon_fonts}>รายละเอียด</Text>
              <Text style={styles.fonts}>{item.description}</Text>
            </View>
          ))}
          <View style={{padding: 6}}></View>
          <View
            style={{
              width: wp('95%'),
              height: hp('20'),
              backgroundColor: '#F8F8F8',
              elevation: 6,
              paddingLeft: 15,
            }}>
            <Text style={styles.Seccon_fonts}>ห้องสำคัญ</Text>
            {room_detail}
          </View>
        </View>
        <View style={{paddingLeft: 20}}>
          <Text style={styles.Seccon_fonts}>เลือกประเภทการเดินทาง</Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
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
  //   Topic_fonts: {
  //     fontSize:28,
  //     color:"#2A2E43",
  //     fontFamily:'upcll'
  // },
  // Seccon_fonts: {
  //     fontSize:25,
  //     color:"#2A2E43",
  //     fontFamily:'upcll'
  // },
  // fonts: {
  //     fontSize:19,
  //     color:"#2A2E43",
  //     fontFamily:'upcll'
  // }
});
