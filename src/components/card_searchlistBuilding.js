import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {withNavigation} from 'react-navigation';
class Card_searchlistBuilding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name_building: null,
    };
  }
  onNavigation = async () => {
    console.log(this.props.navigateto, this.props.navigate);
    if (this.props.navigate == undefined) {
      await AsyncStorage.setItem('listBuilding', this.props.id_);
      await AsyncStorage.setItem('room_id', this.props.room_id);
      this.props.navigation.navigate(this.props.navigateto);
    } else {
      if (this.props.navigate == 'Beginning') {
        await AsyncStorage.setItem('listBuildingBeginning', this.props.id_);
        this.props.navigation.navigate(this.props.navigateto);
      } else if (this.props.navigate == 'End') {
        await AsyncStorage.setItem('listBuildingEnd', this.props.id_);
        this.props.navigation.navigate(this.props.navigateto);
      }
    }
  };
  render() {
    let name_building;
    if (this.props.id_ == '0') {
      name_building = 'ตึกกลม';
    } else if (this.props.id_ == '1') {
      name_building = 'อาคารวิทยาศาสตร์ 1';
    } else if (this.props.id_ == '2') {
      name_building = 'อาคารวิทยาศาสตร์ 3 ';
    } else if (this.props.id_ == '3') {
      name_building = 'อาคารวิทยาศาสตร์ 4';
    } else if (this.props.id_ == '4') {
      name_building = 'อาคารวิทยาศาสตร์ 5';
    } else if (this.props.id_ == '5') {
      name_building = 'อาคารวิทยาศาสตร์ 6';
    } else if (this.props.id_ == '6') {
      name_building = 'อาคารวิทยาศาสตร์ 7';
    } else if (this.props.id_ == '7') {
      name_building = 'อาคารวิทยาศาสตร์ 8';
    } else if (this.props.id_ == '8') {
      name_building = 'อาคารวิทยาศาสตร์ 9';
    }
    return (
      <View
        style={{
          paddingBottom: 6,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 345,
            height: 80,
            padding: 6,
            backgroundColor: 'white',
            flexDirection: 'row',
            flex: 7,
            elevation: 6,
          }}>
          <View style={{flex: 1.5}}>
            <Image
              source={this.props.picture}
              style={{width: 50, height: 70}}
            />
          </View>
          <View style={{flex: 5}}>
            <Text style={styles.Topic_fonts}>{this.props.room_name}</Text>
            <Text style={styles.fonts}>
              ที่อยู่ : {name_building} ชั้นที่ {this.props.floor}
            </Text>
          </View>
          <View style={{flex: 0.7, justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => this.onNavigation()}>
              <Image
                source={require('../assets/ic_.png')}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(Card_searchlistBuilding);
const styles = StyleSheet.create({
  Topic_fonts: {
    padding: 0.3,
    fontSize: 27,
    fontFamily: 'upcll',
    color: '#2A2E43',
  },
  fonts: {
    paddingLeft: 0.3,
    fontSize: 18,
    fontFamily: 'upcll',
    color: '#7B7A7C',
  },
});
