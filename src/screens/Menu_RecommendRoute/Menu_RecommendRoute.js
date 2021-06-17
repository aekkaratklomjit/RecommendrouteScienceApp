import React from 'react';
import {View, ImageBackground, TouchableOpacity, Image} from 'react-native';
export default class Menu_RecommendRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ImageBackground
        source={require('../../assets/Background/bg_menu_RecommendRoute.jpg')}
        style={{flex: 1, resizeMode: 'cover'}}>
        <View style={{flex: 3, alignItems: 'center'}}>
          <Image
            source={require('../../assets/Line/line.png')}
            style={{resizeMode: 'cover', width: 375, height: 5}}
          />
          <View style={{flex: 0.1}} />
          <View style={{flex: 0.7}}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate(
                  'Menu_RecommendRoute_ExternalPath',
                )
              }>
              <Image
                source={require('../../assets/Button/btn_Menu_RecommendRoute_ExternalPath.png')}
                style={{width: 337, height: 208}}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Menu_RecommendRoute_InnerPath')
              }>
              <Image
                source={require('../../assets/Button/btn_Menu_RecommendRoute_InnerPath.png')}
                style={{width: 337, height: 208}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
