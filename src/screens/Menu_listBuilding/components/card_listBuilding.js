import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {withNavigation} from 'react-navigation';
import db_room from '../../../assets/Database/db_room';
class Card_listBuilding extends React.Component {
  onNavigation = async () => {
    await AsyncStorage.setItem('listBuilding', this.props.id_);
    this.props.navigation.navigate(this.props.navigateto);
  };
  render() {
    const db_Room = db_room.filter((item) => {
      return item.id_ == this.props.id_;
    });
    const db_roomname = db_Room.map((item) => {
      return <Text style={styles.fonts}>{item.room_name}</Text>;
    });
    return (
      <View
        style={{
          paddingBottom: 3,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10,
          elevation: 12,
        }}>
        {/* <View style={{width:333,height:120,flexDirection:"row",flex:7,borderRadius:15,borderWidth:0.01,elevation:1}}> */}
        <View
          style={{
            width: 333,
            height: 129,
            flexDirection: 'row',
            flex: 7,
            borderRadius: 15,
            borderWidth: 0.01,
            elevation: 1,
          }}>
          <View style={{flex: 2}}>
            <Image source={this.props.pic_building} style={styles.Image} />
          </View>
          <View style={{flex: 4.5}}>
            <Text style={styles.Topic_fonts}>{this.props.officialname}</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{justifyContent: 'center'}}>
                <Image
                  style={{width: 12, height: 15, resizeMode: 'stretch'}}
                  source={require('../../../assets/Line/ic_location.png')}
                />
              </View>
              <View style={{flexDirection: 'column'}}>{db_roomname}</View>
            </View>
          </View>
          <View style={{flex: 0.7, justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => this.onNavigation()}>
              <Image
                source={require('../../../assets/ic_.png')}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(Card_listBuilding);
const styles = StyleSheet.create({
  Image: {
    width: 86,
    //height: 120,
    height: 128,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },
  Topic_fonts: {
    paddingLeft: 6,
    //fontSize:30,
    fontSize: hp('4'),
    fontFamily: 'upcll',
    color: '#2A2E43',
  },
  fonts: {
    paddingLeft: 6,
    fontSize: hp('2.8'),
    fontFamily: 'upcll',
    color: '#2A2E43',
  },
});
