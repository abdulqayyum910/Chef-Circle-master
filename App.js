/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Container} from 'native-base';

import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  useEffect(() => {
    console.disableYellowBox = true;
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <Container>
          <Navigation />
        </Container>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
