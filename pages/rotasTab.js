import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'react-native';

import Netflix from './netflix';
import Home from './home';
import Amazon from './amazon';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    <Tab.Navigator
      initialRouteName="Homepage"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Netflix"
        component={Netflix}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="netflix" color={'black'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Homepage"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'black'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Amazon"
        component={Amazon}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../assets/Amazon/amazon.png')}
              style={{ width: 25, height: 25, marginTop: 4}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
