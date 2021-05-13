import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import AuthorScreen from '../screens/AuthorDetail';
import ComicScreen from '../screens/ComicDetail';
import ComicReadScreen from '../screens/ComicRead';
import ExploreScreen from '../screens/Explore';
import FavoriteScreen from '../screens/Favorite';

const MainStack = createStackNavigator();

export default () => {
    return(
        <MainStack.Navigator >
            <MainStack.Screen name="home" component={HomeScreen} options={{headerTitle: null, headerTransparent: true, headerLeft: null}}/>
            <MainStack.Screen name="authordetail" component={AuthorScreen} options={{headerTitle: 'Detail Author', headerTitleAlign: 'center' }}/>
            <MainStack.Screen name="comicdetail" component={ComicScreen} options={{headerTitle: 'Detail Comic', headerTitleAlign: 'center' }}/>
            <MainStack.Screen name="comicread" component={ComicReadScreen} options={{headerTitle: 'Fairy Tail', headerTitleAlign: 'center' }}/>
            <MainStack.Screen name="explore" component={ExploreScreen} options={{headerTitle: null, headerTransparent: true, headerLeft: null}}/>
            <MainStack.Screen name="favorite" component={FavoriteScreen} options={{headerTitle: null, headerTransparent: true, headerLeft: null}}/>
        </MainStack.Navigator>
    )
}