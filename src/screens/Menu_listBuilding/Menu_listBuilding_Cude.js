import React from 'react';
import {View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UnityView, {UnityModule} from '@asmadsen/react-native-unity-view';
export default class Menu_listBuilding_Cude extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listBuilding: null,
    };
    this.onStart();
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
  componentDidUpdate = async () => {
    const Menu = await AsyncStorage.getItem('Menu');
    if (Menu == 'AR') {
      console.log('OPEN AR');
      this.callBridge('ChangeScene');
    } else {
      this.callBridge('ResetModel');
    }
    await AsyncStorage.setItem('Menu', 'MODEL');
    console.log('DidMount');
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
  onStart = async () => {
    const listBuilding = await AsyncStorage.getItem('listBuilding');
    this.setState({listBuilding: 'id_:' + listBuilding});
  };
  render() {
    const onUnityMessage = (message) => {};
    const UnityView = this.showUnity(onUnityMessage);
    return (
      <View style={{flex: 1}}>
        {UnityView}
        <View style={{alignItems: 'center', backgroundColor: '#2A2E43'}}>
          <Button
            onPress={() => this.callBridge(this.state.listBuilding)}
            title="แสดงโมเดล"
          />
        </View>
      </View>
    );
  }
}
