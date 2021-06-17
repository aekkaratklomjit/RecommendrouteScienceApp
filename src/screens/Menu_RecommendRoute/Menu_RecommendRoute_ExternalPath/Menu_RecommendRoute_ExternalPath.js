import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  YellowBox,
  ImageBackground,
} from 'react-native';
import {
  Card_listBuilding,
  Card_searchlistBuilding,
} from '../../../components/index';
import db_building from '../../../assets/Database/db_building';
import db_room from '../../../assets/Database/db_room';
import {SearchBar} from 'react-native-elements';
YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);
export default class Menu_RecommendRoute_ExternalPath extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      room: [],
      temp: [],
      searchTxt: null,
    };
    this.state.room.push(db_room);
    this.state.temp.push(db_room);
  }
  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={require('../../../assets/Background/bg_menu_RecommendRoute_ExternalPath.png')}
          style={{flex: 1, resizeMode: 'cover'}}>
          <View style={{flex: 3, paddingTop: 15}}>
            <Text style={styles.Topic_fonts}>ค้นหาจากห้องเรียน</Text>
            <View style={{flex: 1}}>
              <FlatList
                ListHeaderComponent={this.renderHeader}
                data={this.state.room}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <Text style={styles.Topic_fonts}>หรืออาคารเรียน</Text>
            <View style={{margin: 5, borderWidth: 5, borderColor: 'white'}}>
              <FlatList
                data={db_building}
                renderItem={this.renderCardlistBuilding}
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
  renderCardlistBuilding = ({item}) => {
    return (
      <View
        style={{
          margin: 5,
          borderWidth: 1,
          borderRadius: 12 / 3,
          borderColor: 'black',
        }}>
        <Card_listBuilding
          id_={item.id_}
          pic_building={item.picture}
          code={item.code}
          officialname={item.officialname}
          navigateto={'Menu_RecommendRoute_ExternalPath_detailBuilding'}
        />
      </View>
    );
  };
  renderHeader = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <View style={{width: 320, paddingBottom: 15}}>
          <SearchBar
            inputStyle={{paddingLeft: 15, fontSize: 15, color: 'black'}}
            containerStyle={{
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 1,
            }}
            cancelIconColor="white"
            backgroundColor="#EAF2F9"
            placeholder="Ex. สาขาวิชาสถิติ,อาคารวิทยวิภาส"
            placeholderTextColor="#747474"
            editable={true}
            value={this.state.searchTxt}
            onChangeText={(text) => this.SearchFilterFunction(text)}
            onClear={(text) => this.SearchFilterFunction('')}
          />
        </View>
      </View>
    );
  };
  renderItem = ({item}) => {
    if (this.state.searchTxt == '' || this.state.searchTxt == null) {
      return null;
    } else {
      return (
        <Card_searchlistBuilding
          room_name={item.room_name}
          id_={item.id_}
          room_id={item.room_id}
          picture={item.picture}
          floor={item.floor}
          navigateto={'Menu_RecommendRoute_ExternalPath_detailRoom'}
        />
      );
    }
  };
  SearchFilterFunction(text) {
    const newData = this.state.temp[0].filter(function (item) {
      const itemSet = item.room_name;
      const itemData = itemSet ? itemSet.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    console.log(this.state.searchTxt);
    this.setState({
      room: newData,
      searchTxt: text,
    });
  }
}
const styles = StyleSheet.create({
  Topic_fonts: {
    paddingLeft: 15,
    fontSize: 31,
    fontFamily: 'upcll',
    color: '#2A2E43',
  },
  fonts: {
    paddingLeft: 6,
    fontSize: 19,
    fontFamily: 'upcll',
    color: '#2A2E43',
  },
});
