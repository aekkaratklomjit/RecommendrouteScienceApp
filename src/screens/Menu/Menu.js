import React from 'react';
import {View, ImageBackground, TouchableOpacity, Image} from 'react-native';
export default class Menu extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../../assets/Background/bg_menu.jpg')}
        style={{flex: 1, resizeMode: 'cover'}}>
        <View style={{flex: 6}}>
          <View style={{flex: 1.3}} />
          <View style={{flex: 4.5}}>
            <MenuCard
              flex="0.35"
              onPress={() =>
                this.props.navigation.navigate('Menu_RecommendRoute')
              }
              picture={require('../../assets/Button/btn_Menu_RecommendRoute.png')}
            />
            <MenuCard
              onPress={() =>
                this.props.navigation.navigate('Menu_listBuilding')
              }
              picture={require('../../assets/Button/btn_Menu_listBuilding.png')}
            />
            <MenuCard
              onPress={() => this.props.navigation.navigate('Menu_Contact')}
              picture={require('../../assets/Button/btn_Menu_Contract.png')}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

function MenuCard(props) {
  return (
    <View style={{alignItems: 'center', paddingBottom: 25}}>
      <TouchableOpacity onPress={props.onPress}>
        <Image
          source={props.picture}
          style={{width: 340, height: 100, resizeMode: 'stretch'}}
        />
      </TouchableOpacity>
    </View>
  );
}
