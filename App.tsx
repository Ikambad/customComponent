import React from 'react';
import Rootnavigator from './src/utils/Rootnavigator';
import { NavigationContainer } from '@react-navigation/native';
import Splashscreen from './src/containers/Splashscreen';

function App(): React.JSX.Element {
 
  return (
    <NavigationContainer>
      <Rootnavigator></Rootnavigator>
  </NavigationContainer>
  );
}

export default App;
