import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from './screens';
import Home from '../Feature/Home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={screens.Home.name} component={Home}/>
        </Stack.Navigator>
    )
}

export default Navigation;