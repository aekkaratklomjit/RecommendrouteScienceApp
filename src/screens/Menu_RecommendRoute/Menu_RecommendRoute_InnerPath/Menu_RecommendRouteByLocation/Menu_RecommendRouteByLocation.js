import React from 'react';
import {View, Button, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UnityView, {UnityModule} from '@asmadsen/react-native-unity-view';
export default class Menu_RecommendRouteByLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listBuilding: null,
    };
  }
  callBridge = (data, cb = null) => {
    if (!cb)
      cb = (data) => {
        console.log(data);
        if (data) setUnityMessageCb(JSON.stringify(data));
      };
    UnityModule.postMessageToUnityManager({
      name: data,
      data: data,
      callBack: cb,
    });
  };
  showUnity = (onUnityMessage) => {
    return (
      <View style={{flex: 1}}>
        <UnityView
          style={{flex: 1}}
          onMessage={onUnityMessage}
          onUnityMessage={onUnityMessage}
        />
      </View>
    );
  };
  componentDidMount = async () => {
    const Menu = await AsyncStorage.getItem('Menu');
    if (Menu == null || Menu == 'AR') {
      setTimeout(() => {
        this.callBridge('ChangeScene');
      }, 2000);
    } else {
      this.callBridge('ChangeScene');
    }
    await AsyncStorage.setItem('Menu', 'AR');
  };

  onNavigater = async () => {
    if (this.state.listBuilding == null) {
      Alert.alert(
        'กรุณาเลือกอาคาร',
        'ผู้ใช้ต้องเลือกอาคารเพื่อดูรายละเอียดของอาคาร',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    } else {
      console.log('On');
      await AsyncStorage.setItem(
        'listBuildingBeginning',
        this.state.listBuilding,
      );
      //await AsyncStorage.setItem('listBuildingBeginning','1')
      this.props.navigation.navigate(
        'Menu_RecommendRouteByLocation_detailBuilding',
      );
    }
  };
  render() {
    const onUnityMessage = (message) => {
      console.log(message);
      // if(message!="Hello from Unity!"&&message!="Scene changed."){
      // this.setState({listBuilding:message})
      // }
      this.setState({listBuilding: message});
    };
    const UnityView = this.showUnity(onUnityMessage);
    return (
      <View style={{flex: 1}}>
        {UnityView}
        <View style={{alignItems: 'center', backgroundColor: 'black'}}>
          <Button onPress={() => this.onNavigater()} title="แนะนำอาคาร" />
        </View>
      </View>
    );
  }
}
