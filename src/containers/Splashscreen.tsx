import React, {FC, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../utils/Rootnavigator';

interface Splashscreenprops {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}
const Splashscreen = ({navigation}: Splashscreenprops) => {
    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('Home');
        }, 3000);
      }, []);
  return (
    <View>
    </View>
  );
};
export default Splashscreen;
