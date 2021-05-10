import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';


const MainStack = createStackNavigator();

export default () => {
    return(
        <MainStack.Navigator >
            <MainStack.Screen name="home" component={HomeScreen} options={{headerTitle: null, headerTransparent: true, headerLeft: null}}/>
        </MainStack.Navigator>
    )
}