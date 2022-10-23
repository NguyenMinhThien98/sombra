import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from '../Navigation';
import store from '../Store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
