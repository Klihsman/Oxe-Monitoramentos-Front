/* eslint-disable prettier/prettier */
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './src/components/Home';

const App = function () {
  return (
    <PaperProvider>
          <Home />
    </PaperProvider>
  );
};
export default App;
