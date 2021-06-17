import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  YellowBox,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import db_building from '../../../../assets/Database/db_building';
import db_room from '../../../../assets/Database/db_room';
YellowBox.ignoreWarnings([
  'Each child in a list should have a unique "key" prop.',
]);
export default class Menu_RecommendRouteByLocation_detailBuilding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [],
      room: null,
    };
    this.onStart();
  }
  onStart = async () => {
    const listBuilding = await AsyncStorage.getItem('listBuildingBeginning');
    const detail = db_building.filter((item) => {
      return item.id_ == listBuilding;
    });
    const room = db_room.filter((item) => {
      return item.id_ == listBuilding;
    });
    this.setState({room: room});
    this.setState({detail: detail});
  };
  componentDidMount() {
    console.log('hello');
  }
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
      <View style={{flex: 1}}>
        <Image
          source={require('../../../../assets/Line/line.png')}
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
                width: 335,
                height: 163,
                backgroundColor: '#F8F8F8',
                elevation: 6,
                paddingLeft: 15,
              }}>
              <Text style={styles.Topic_fonts}>{item.officialname}</Text>
              <Text style={styles.Seccon_fonts}>รายละเอียด</Text>
              <Text style={styles.fonts}>{item.description}</Text>
            </View>
          ))}
          <View style={{padding: 6}}></View>
          <View
            style={{
              width: 335,
              height: 137,
              backgroundColor: '#F8F8F8',
              elevation: 6,
              paddingLeft: 15,
            }}>
            <Text style={styles.Seccon_fonts}>ห้องสำคัญ</Text>
            {room_detail}
          </View>
        </View>
        <View style={{flexDirection: 'row', paddingTop: 20}}>
          <View style={{width: 225, height: 80}}>
            <Text style={{...styles.Seccon_fonts, paddingLeft: 15}}>
              เเนะนำเส้นทางระหว่างอาคารคณะวิทยาศาสตร์
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(
                'Menu_RecommendRouteByLocation_listBuilding',
              )
            }>
            <Image
              style={{width: 150, height: 50, resizeMode: 'center'}}
              source={require('../../../../assets/Button/btn_go.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Topic_fonts: {
    fontSize: 28,
    color: '#2A2E43',
    fontFamily: 'upcll',
  },
  Seccon_fonts: {
    fontSize: 25,
    color: '#2A2E43',
    fontFamily: 'upcll',
  },
  fonts: {
    fontSize: 19,
    color: '#2A2E43',
    fontFamily: 'upcll',
  },
});
