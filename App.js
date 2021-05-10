import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainStack from './src/navigators/MainStack';
import { StatusBar } from 'react-native';

function App() {
  return(
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor='#fff' />
      <MainStack />
    </NavigationContainer>
  )
}

export default App;
