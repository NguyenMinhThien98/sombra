import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screens} from './screens';
import Home from '../Feature/Home';
import VectorIcon from '../Components/VectorIcon';
import {typeIcon} from '../until/constand';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const {AntDesign} = typeIcon;

const renderIcon = ({forcused, color, size, route}) => {
  if (!route) return;
const iconName = route?.name === screens.Home.name ? 'home' : null;
  return <VectorIcon type={AntDesign} name={iconName} size={size} color={color} />;
};
const Navigation = () => {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({forcused, color, size}) => renderIcon({forcused, color, size, route}),
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'blue',
        headerShown: false
    })}>
      <Tab.Screen name={screens.Home.name} component={HomeStackNavigation} />
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

export default Navigation;
