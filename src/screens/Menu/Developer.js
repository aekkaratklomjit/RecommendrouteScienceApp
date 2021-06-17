import React from 'react';
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

export default class Developer extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          source={require('../../assets/Line/line.png')}
          style={{resizeMode: 'cover', width: 375, height: 6}}
        />
        <View style={{padding: 47}}>
          <DeveloperCard
            englishName="  Silada Intarasothonchun"
            thaiName="  ผศ.ดร.สิลดา อินทรโสธรฉันท์"
            position="อาจารย์ที่ปรึกษา"
            email="silain@kku.ac.th"
            photo={require('../../assets/Developer/developer_Silada.jpg')}
          />
          <DeveloperCard
            englishName="Thiantawat Jantrirat"
            thaiName="เธียรธวัช จันทร์ไตรรัตน์"
            facebook="100002113555716"
            email="Thiantawat_ja@kkumail.com"
            position="ผู้พัฒนาแอปพลิเคชัน"
            photo={require('../../assets/Developer/developer_Thiantawat.jpg')}
          />
          <DeveloperCard
            englishName="Aekkarat Klomjit"
            thaiName="เอกราช กล่อมจิตต์"
            position="ผู้พัฒนาแอปพลิเคชัน"
            facebook="1732821023"
            email="aekkarat_klomjit@kkumail.com"
            photo={require('../../assets/Developer/develop_Aekkarat.jpg')}
          />
        </View>
      </View>
    );
  }
}

function DeveloperCard(props) {
  return (
    <View style={{paddingBottom: 45}}>
      <View
        style={{
          width: 300,
          height: 157,
          borderWidth: 1,
          flexDirection: 'row',
          borderRadius: 9,
        }}>
        <View
          style={{
            width: 110,
            height: 157,
            backgroundColor: '#2A2E43',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 9,
            borderBottomLeftRadius: 9,
          }}>
          <Image
            style={{
              resizeMode: 'cover',
              width: 90,
              height: 105,
              borderRadius: 9,
            }}
            source={props.photo}
          />
        </View>
        <View style={{height: 157, width: 5, backgroundColor: '#FFC757'}} />
        <View style={{width: 157, paddingBottom: 20}}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.Topic_fonts}>{props.englishName}</Text>
            <Text style={{...styles.fonts, paddingBottom: 9}}>
              {props.thaiName}
            </Text>
            <View
              style={{
                height: 5,
                width: 90,
                backgroundColor: '#FFC757',
                paddingTop: 5,
              }}
            />
            <Text style={{...styles.fonts, paddingBottom: 9}}>
              {props.position}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity
              onPress={() => Linking.openURL(`fb://profile/${props.facebook}`)}>
              <Image
                style={{
                  resizeMode: 'cover',
                  width: 25,
                  height: 25,
                  borderRadius: 9,
                }}
                source={require('../../assets/Line/ic_facebook.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL(`mailto:${props.email}`)}>
              <Image
                style={{
                  resizeMode: 'cover',
                  width: 25,
                  height: 25,
                  borderRadius: 9,
                }}
                source={require('../../assets/Line/ic_email.png')}
              />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => Linking.openURL(`tel:${props.telephone}`)} >
            <Image style={{resizeMode:"cover",width:25,height:25,borderRadius:9}} source={require('../../assets/Line/ic_telephone.png')} />
          </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Topic_fonts: {
    //fontSize:30,+5
    fontSize: 24,
    fontFamily: 'upcll',
  },
  fonts: {
    paddingLeft: 6,
    fontSize: 22,
    fontFamily: 'upcll',
  },
});
