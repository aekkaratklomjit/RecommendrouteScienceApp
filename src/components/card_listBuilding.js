import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {withNavigation} from 'react-navigation';
class Card_listBuilding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onNavigation = async () => {
    if (this.props.navigate == undefined) {
      await AsyncStorage.setItem('listBuilding', this.props.id_);
      this.props.navigation.navigate(this.props.navigateto);
    } else {
      if (this.props.navigate == 'Beginning') {
        console.log('Begin');
        await AsyncStorage.setItem('listBuildingBeginning', this.props.id_);
        this.props.navigation.navigate(this.props.navigateto);
      } else if (this.props.navigate == 'End') {
        console.log('End');
        await AsyncStorage.setItem('listBuildingEnd', this.props.id_);
        this.props.navigation.navigate(this.props.navigateto);
      }
    }
  };
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.onNavigation()}>
          <Image
            source={this.props.pic_building}
            style={{height: 80, width: 102}}
          />
        </TouchableOpacity>
        <View style={{width: 102, height: 45, backgroundColor: '#30343E'}}>
          <Text style={styles.Topic_fonts}>{this.props.code}</Text>
          <Text style={styles.fonts}>{this.props.officialname}</Text>
        </View>
      </View>
    );
  }
}

export default withNavigation(Card_listBuilding);
const styles = StyleSheet.create({
  Topic_fonts: {
    paddingLeft: 5,
    fontSize: 21,
    fontFamily: 'upcll',
    color: 'white',
  },
  fonts: {
    paddingLeft: 5,
    fontSize: 18,
    fontFamily: 'upcll',
    color: 'white',
  },
});
