import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import {Card_listBuilding} from './components';
import db_building from './../../assets/Database/db_building';

export default class Menu_listBuilding extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          <Image
            source={require('../../assets/Line/line.png')}
            style={{resizeMode: 'cover', width: 375, height: 6}}
          />
          {db_building.map((item) => (
            <Card_listBuilding
              key={item.id_}
              id_={item.id_}
              name={item.officialname}
              pic_building={item.picture}
              officialname={item.officialname}
              navigateto={'Menu_listBuilding_detail'}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
