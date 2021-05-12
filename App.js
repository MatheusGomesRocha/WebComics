import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainStack from './src/navigators/MainStack';
import { StatusBar } from 'react-native';
import { HeaderModalContextProvider } from './src/contexts/HeaderModalContext';

function App() {
  return(
    <NavigationContainer>
      <HeaderModalContextProvider>
        <StatusBar barStyle='dark-content' backgroundColor='#fff' />
        <MainStack />
      </HeaderModalContextProvider>
    </NavigationContainer>
  )
}

export default App;
