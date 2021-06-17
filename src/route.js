import React from 'react';
import {Router, Scene,Actions} from "react-native-router-flux";
import {NavigationContainer,NavigationActions} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from'react-native-elements';
//const Tab = createBottomTabNavigator();

  {/* Menu */}
import Menu_getStart from './screens/Menu/Menu_getStart';
import Menu from './screens/Menu/Menu'
import Developer from './screens/Menu/Developer'


{/* Menu_RecommendRoute */}
import Menu_RecommendRoute from './screens/Menu_RecommendRoute/Menu_RecommendRoute';
      {/* Menu_RecommendRoute_ExternalPath */}
          import Menu_RecommendRoute_ExternalPath from './screens/Menu_RecommendRoute/Menu_RecommendRoute_ExternalPath/Menu_RecommendRoute_ExternalPath';
          import Menu_RecommendRoute_ExternalPath_detailBuilding from './screens/Menu_RecommendRoute/Menu_RecommendRoute_ExternalPath/Menu_RecommendRoute_ExternalPath_detailBuilding';
          import Menu_RecommendRoute_ExternalPath_detailRoom from './screens/Menu_RecommendRoute/Menu_RecommendRoute_ExternalPath/Menu_RecommendRoute_ExternalPath_detailRoom';
          import Menu_RecommendRoute_ExternalPath_typeCar from './screens/Menu_RecommendRoute/Menu_RecommendRoute_ExternalPath/Menu_RecommendRoute_ExternalPath_typeCar';
          import Menu_RecommendRoute_ExternalPath_typeBus from './screens/Menu_RecommendRoute/Menu_RecommendRoute_ExternalPath/Menu_RecommendRoute_ExternalPath_typeBus';
              import Menu_RecommendRoute_ExternalPath_typeBus_Map from './screens/Menu_RecommendRoute/Menu_RecommendRoute_ExternalPath/Menu_RecommendRoute_ExternalPath_typeBus_Map';

      {/* Menu_RecommendRoute_InnerPath */}
          import Menu_RecommendRoute_InnerPath from './screens/Menu_RecommendRoute/Menu_RecommendRoute_InnerPath/Menu_RecommendRoute_InnerPath';
                {/* Menu_RecommendRouteByLocation */}
                import Menu_RecommendRouteByLocation from './screens/Menu_RecommendRoute/Menu_RecommendRoute_InnerPath/Menu_RecommendRouteByLocation/Menu_RecommendRouteByLocation';
                import Menu_RecommendRouteByLocation_detailBuilding from './screens/Menu_RecommendRoute/Menu_RecommendRoute_InnerPath/Menu_RecommendRouteByLocation/Menu_RecommendRouteByLocation_detailBuilding';
                import Menu_RecommendRouteByLocation_listBuilding from './screens/Menu_RecommendRoute/Menu_RecommendRoute_InnerPath/Menu_RecommendRouteByLocation/Menu_RecommendRouteByLocation_listBuilding';
                import Menu_RecommendRouteByLocation_Map from './screens/Menu_RecommendRoute/Menu_RecommendRoute_InnerPath/Menu_RecommendRouteByLocation/Menu_RecommendRouteByLocation_Map';
                {/* Menu_RecommendRouteByBeginning_End */}
                import Menu_RecommendRouteByBeginningEnd_Beginning from './screens/Menu_RecommendRoute/Menu_RecommendRoute_InnerPath/Menu_RecommendRouteByBeginning_End/Menu_RecommendRouteByBeginningEnd_Beginning';
                import Menu_RecommendRouteByBeginningEnd_End from './screens/Menu_RecommendRoute/Menu_RecommendRoute_InnerPath/Menu_RecommendRouteByBeginning_End/Menu_RecommendRouteByBeginningEnd_End';
                import Menu_RecommendRouteByBeginningEnd_Map from './screens/Menu_RecommendRoute/Menu_RecommendRoute_InnerPath/Menu_RecommendRouteByBeginning_End/Menu_RecommendRouteByBeginningEnd_Map';

{/* Menu_ListBuilding */}
import Menu_listBuilding from './screens/Menu_listBuilding/Menu_listBuilding';
import Menu_listBuilding_detail from './screens/Menu_listBuilding/Menu_listBuilding_detail';
import Menu_listBuilding_Map from './screens/Menu_listBuilding/Menu_listBuilding_Map';
import Menu_listBuilding_Cude from './screens/Menu_listBuilding/Menu_listBuilding_Cude';

{/* Menu_Contact */}
import Menu_Contact from './screens/Menu_Contact/Menu_Contact';




const Tab = createBottomTabNavigator();
function AppNavigator() {
  return (
  <NavigationContainer>
    <Router>
      <Scene key='root' navigationBarStyle={{ backgroundColor: '#2A2E43'}} 
                        titleStyle={{ color: 'white'}} 
                        rightButtonImage={require('./assets/Icons_home.png')} 
                        navBarButtonColor="white"
                        onRight={()=> {Actions.jump('Menu')}}>
        {/* Menu */}
        <Scene name='Menu_getStart' key='Menu_getStart' component={Menu_getStart} hideNavBar/>
        <Scene name='Menu' key='Menu'  component={Menu} hideNavBar/>
        <Scene name='Developer' key='Developer'  component={Developer} title="ผู้พัฒนา"/>

        {/* Menu_RecommendRoute */}
        <Scene name='Menu_RecommendRoute' key='Menu_RecommendRoute'  component={Menu_RecommendRoute}
                        title="แนะนำเส้นทาง"/>
                  {/* Menu_RecommendRoute_ExternalPath */}
                  <Scene name='Menu_RecommendRoute_ExternalPath' key='Menu_RecommendRoute_ExternalPath'  component={Menu_RecommendRoute_ExternalPath} />
                  <Scene name='Menu_RecommendRoute_ExternalPath_detailBuilding' key='Menu_RecommendRoute_ExternalPath_detailBuilding'  component={Menu_RecommendRoute_ExternalPath_detailBuilding} title="ข้อมูลห้อง"/>
                  <Scene name='Menu_RecommendRoute_ExternalPath_detailRoom' key='Menu_RecommendRoute_ExternalPath_detailRoom'  component={Menu_RecommendRoute_ExternalPath_detailRoom} />
                  <Scene name='Menu_RecommendRoute_ExternalPath_typeCar' key='Menu_RecommendRoute_ExternalPath_typeCar'  component={Menu_RecommendRoute_ExternalPath_typeCar} />
                  <Scene name='Menu_RecommendRoute_ExternalPath_typeBus' key='Menu_RecommendRoute_ExternalPath_typeBus'  component={Menu_RecommendRoute_ExternalPath_typeBus} />
                  <Scene name='Menu_RecommendRoute_ExternalPath_typeBus_Map' key='Menu_RecommendRoute_ExternalPath_typeBus_Map'  component={Menu_RecommendRoute_ExternalPath_typeBus_Map} title="แผนที่"/>
                  
                  {/* Menu_RecommendRoute_InnerPath */}
                  <Scene name='Menu_RecommendRoute_InnerPath' key='Menu_RecommendRoute_InnerPath'  component={Menu_RecommendRoute_InnerPath} title="เเนะนำเส้นทางภายใน"/>
                        {/* Menu_RecommendRouteByLocation */}
                              <Scene name='Menu_RecommendRouteByLocation' key='Menu_RecommendRouteByLocation'  component={Menu_RecommendRouteByLocation}/>
                              <Scene name='Menu_RecommendRouteByLocation_detailBuilding' key='Menu_RecommendRouteByLocation_detailBuilding'  component={Menu_RecommendRouteByLocation_detailBuilding} title="ข้อมูลอาคาร"/>
                              <Scene name='Menu_RecommendRouteByLocation_listBuilding' key='Menu_RecommendRouteByLocation_listBuilding'  component={Menu_RecommendRouteByLocation_listBuilding}  />
                              <Scene name='Menu_RecommendRouteByLocation_Map' key='Menu_RecommendRouteByLocation_Map'  component={Menu_RecommendRouteByLocation_Map}  title="แผนที่"/>
                        {/* Menu_RecommendRouteByBeginning_End */}
                              <Scene name='Menu_RecommendRouteByBeginningEnd_Beginning' key='Menu_RecommendRouteByBeginningEnd_Beginning'  component={Menu_RecommendRouteByBeginningEnd_Beginning}  title="ต้นทาง"/>
                              <Scene name='Menu_RecommendRouteByBeginningEnd_End' key='Menu_RecommendRouteByBeginningEnd_End'  component={Menu_RecommendRouteByBeginningEnd_End}  title="ปลายทาง"/>
                              <Scene name='Menu_RecommendRouteByBeginningEnd_Map' key='Menu_RecommendRouteByBeginningEnd_Map'  component={Menu_RecommendRouteByBeginningEnd_Map} title="แผนที่"/>
        {/* Menu_listBuilding */}
        <Scene name='Menu_listBuilding' key='Menu_listBuilding'  component={Menu_listBuilding} title="รายชื่ออาคาร"/>
        <Scene name='Menu_listBuilding_detail' key='Menu_listBuilding_detail'  component={HomeTabs} />
        {/* <Scene name='Menu_listBuilding_Map' key='Menu_listBuilding_Map'  component={Menu_listBuilding_Map} /> */}
        
        {/* Menu_Contact */}
        <Scene name='Menu_Contact' key='Menu_Contact'  component={Menu_Contact} title="ติดต่อ"/>

      </Scene>
    </Router>
  </NavigationContainer>
  );
}
 function HomeTabs() {
   return (
     <Tab.Navigator
     tabBarOptions={{showLabel: false,inactiveBackgroundColor:'#2A2E43',
                                      inactiveTintColor:"white",
                                      activeBackgroundColor:"#FFB900",
                                      activeTintColor:"white"}}>
        <Tab.Screen name="Menu_listBuilding_detail" component={Menu_listBuilding_detail} 
                options={{tabBarIcon: ({ color, size }) => (
                <Icon name="info"  type='font-awesome' color={color} size={size} />),}}/>
        <Tab.Screen name="Menu_listBuilding_Cude" component={Menu_listBuilding_Cude} options={{
                tabBarIcon: ({ color, size }) => (
                <Icon name="cube"  type='font-awesome' color={color} size={size} />),}}/>

        <Tab.Screen name="Menu_listBuilding_Map" component={Menu_listBuilding_Map} options={{
                tabBarIcon: ({ color, size }) => (
                <Icon name="map-marker"  type='font-awesome' color={color} size={size} />),}}/>
     </Tab.Navigator>
   );
 }

export default AppNavigator;