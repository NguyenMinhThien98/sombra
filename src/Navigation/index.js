import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screens} from './screens';
import VectorIcon from '../Components/VectorIcon';
import {typeIcon} from '../until/constand';
import Home from '../Feature/Home';
import Profile from '../Feature/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const {AntDesign} = typeIcon;

const renderIcon = ({forcused, color, size, route}) => {
  if (!route) return;
  const iconName = route?.name === screens.Home.navigator ? 'home' : route?.name === screens.Profile.navigator ? 'profile' : null
  return (
    <VectorIcon type={AntDesign} name={iconName} size={size} color={color} />
  );
};
const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({forcused, color, size}) =>
          renderIcon({forcused, color, size, route}),
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'blue',
        headerShown: false,
      })}>
      <Tab.Screen name={screens.Home.navigator} component={HomeStackNavigation} />
      <Tab.Screen name={screens.Profile.navigator} component={ProfileStackNavigation} />
      
    </Tab.Navigator>
  );
};

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={screens.Home.name}>
      <Stack.Screen name={screens.Home.name} component={Home} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={screens.Profile.name}>
      <Stack.Screen name={screens.Profile.name} component={Profile} />
    </Stack.Navigator>
  );
};

export default Navigation;
