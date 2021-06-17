import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
export default class Menu_getStart extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../../assets/Background/bg_menu_getStart.jpg')}
        style={{flex: 1, resizeMode: 'cover'}}>
        <View style={{flex: 6}}>
          <View style={{paddingLeft: 12, paddingTop: 12}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Developer')}>
              <Image
                source={require('../../assets/ic_developer.png')}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 5}} />
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Menu')}>
              <Image
                source={require('../../assets/Button/btn_get_started.png')}
                style={{width: 189, height: 63, paddingTop: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
