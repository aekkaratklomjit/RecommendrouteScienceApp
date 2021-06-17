import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {withNavigation} from 'react-navigation';
class Card_listBuilding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onCheck = async () => {
    console.log(this.props.pic_building);
    await AsyncStorage.setItem('listBuilding', this.props.id);
    this.props.navigation.navigate('Menu_listBuilding_detail');
  };
  render() {
    let pic_building;
    if (this.props.pic_building == '0') {
      pic_building = require('../Building/ตึกกลม.jpg');
    } else if (this.props.pic_building == '1') {
      pic_building = require('../Building/01.png');
    } else if (this.props.pic_building == '2') {
      pic_building = require('../Building/03.jpg');
    } else if (this.props.pic_building == '3') {
      pic_building = require('../Building/04.jpg');
    } else if (this.props.pic_building == '4') {
      pic_building = require('../Building/05.jpg');
    } else if (this.props.pic_building == '5') {
      pic_building = require('../Building/06.png');
    } else if (this.props.pic_building == '6') {
      pic_building = require('../Building/07.jpg');
    } else if (this.props.pic_building == '7') {
      pic_building = require('../Building/08.jpg');
    } else if (this.props.pic_building == '8') {
      pic_building = require('../Building/09.jpg');
    }
    return (
      <View
        style={{
          paddingBottom: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{borderWidth: 2, width: 312, height: 87, paddingTop: 15}}>
          <ImageBackground source={require('../assets/Group 3941.png')}>
            <View style={{flex: 4}}>
              <View style={styles.controlframe}>
                <Image source={pic_building} style={styles.Image} />
                <View style={{flex: 2, paddingLeft: 10}}>
                  <Text style={styles.Font}>{this.props.name}</Text>
                  <Text style={styles.BasicFont}>{this.props.code}</Text>
                </View>
                <View style={{flexDirection: 'row', flex: 1, paddingLeft: 15}}>
                  <TouchableOpacity onPress={() => this.onCheck()}>
                    <Image
                      source={require('../Button/btn_play.png')}
                      style={styles.btn_play}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default withNavigation(Card_listBuilding);
const styles = StyleSheet.create({
  controlframe: {
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    //justifyContent: 'center',
  },
  Image: {
    width: 54,
    height: 54,
  },
  btn_play: {
    width: 42,
    height: 39,
  },
  Font: {
    paddingLeft: 5,
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  BasicFont: {
    paddingLeft: 5,
    fontSize: 13,
    color: 'black',
  },
  midPicture: {
    width: 312,
    height: 99,
    borderWidth: 1,
  },
});
