import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import AuthorScreen from '../screens/AuthorDetail';
import MoreIcon from '../assets/svg/more.svg';

const MainStack = createStackNavigator();

export default () => {
    return(
        <MainStack.Navigator >
            <MainStack.Screen name="home" component={HomeScreen} options={{headerTitle: null, headerTransparent: true, headerLeft: null}}/>
            <MainStack.Screen name="authordetail" component={AuthorScreen} options={{headerTitle: 'Detail Author', headerTitleAlign: 'center' }}/>
        </MainStack.Navigator>
    )
}