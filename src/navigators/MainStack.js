import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import AuthorScreen from '../screens/AuthorDetail';

const MainStack = createStackNavigator();

export default () => {
    return(
        <MainStack.Navigator >
            <MainStack.Screen name="home" component={HomeScreen} options={{headerTitle: null, headerTransparent: true, headerLeft: null}}/>
            <MainStack.Screen name="authordetail" component={AuthorScreen} options={{headerTitle: 'Detail Author', headerTitleAlign: 'center'}}/>
        </MainStack.Navigator>
    )
}