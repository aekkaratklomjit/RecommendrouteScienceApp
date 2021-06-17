import React from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
export default class Card_listContact extends React.Component {
  render() {
    return (
      <View style={{width: 320, height: 180, borderRadius: 1, elevation: 12}}>
        <View style={{flex: 1.5, borderRadius: 20}}>
          <ImageBackground
            source={this.props.picture}
            style={{flex: 1, resizeMode: 'stretch'}}
          />
        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: '#2A2E43',
            borderBottomLeftRadius: 16,
            borderBottomEndRadius: 16,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 4.5, paddingLeft: 9}}>
              <Text style={styles.Topic_fonts}>{this.props.name}</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(`fb://page/${this.props.facebook}`)
                }>
                <Image
                  source={require('../assets/ic_facebook.png')}
                  style={{width: 24, height: 24}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL(this.props.website)}>
                <Image
                  style={{width: 24, height: 24}}
                  source={require('../assets/ic_website.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 6,
              paddingLeft: 9,
            }}>
            <TouchableOpacity
              onPress={() => Linking.openURL(`tel:${this.props.telephone}`)}>
              <Image
                source={require('../assets/ic_tel.png')}
                style={{width: 24, height: 24}}
              />
            </TouchableOpacity>
            <Text style={styles.fonts}>{this.props.telephone}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 9,
            }}>
            <TouchableOpacity
              onPress={() => Linking.openURL(`mailto:${this.props.email}`)}>
              <Image
                source={require('../assets/ic_email.png')}
                style={{width: 24, height: 24}}
              />
            </TouchableOpacity>
            <Text style={styles.fonts}>{this.props.email}</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Topic_fonts: {
    //fontSize:30,+5
    fontSize: 25,
    color: '#FFFFFF',
    fontFamily: 'upcll',
  },
  fonts: {
    paddingLeft: 6,
    fontSize: 19,
    color: '#FFFFFF',
    fontFamily: 'upcll',
  },
});
