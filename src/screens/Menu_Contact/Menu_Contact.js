import React from 'react';
import {View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card_listContact from './components/card_listContact';
import db_room from '../../assets/Database/db_room';
import {ScrollView} from 'react-native-gesture-handler';
export default class Menu_Contact extends React.Component {
  render() {
    const datab_room = db_room.filter((item) => {
      return item.contract != null;
    });
    return (
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/Line/line.png')}
            style={{resizeMode: 'cover', width: 375, height: 10}}
          />
          {datab_room.map((item) => (
            <View style={{paddingTop: 15}} key={item.room_id}>
              <Card_listContact
                key={item.room_id}
                name={item.room_name}
                email={item.contract.email}
                website={item.contract.website}
                facebook={item.contract.facebook}
                telephone={item.contract.telephone}
                picture={item.picture}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}
