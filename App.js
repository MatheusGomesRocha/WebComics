import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainStack from './src/navigators/MainStack';
import { StatusBar } from 'react-native';
import Header from './src/components/Header';

function App() {
  return(
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor='#fff' />
      <Header />
      <MainStack />
    </NavigationContainer>
  )
}

export default App;
