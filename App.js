import React from 'react';
import AppNavigator from './src/route';
import { NavigationContainer} from '@react-navigation/native';
export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}