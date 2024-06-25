import {createStackNavigator} from '@react-navigation/stack';
import Splashscreen from '../containers/Splashscreen';
import Homescreen from '../containers/Homescreen';
import Detailscreen from '../containers/Detailscreen'

export type RootStackParamList = {
  Home: undefined;
  Splash: undefined;
  Details:undefined;
};
const Stack = createStackNavigator<RootStackParamList>();
const Rootnavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Home"
        component={Homescreen}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Splash"
        component={Splashscreen}
        options={{headerShown: false}}></Stack.Screen>
         <Stack.Screen
        name="Details"
        component={Detailscreen}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};
export default Rootnavigator;
