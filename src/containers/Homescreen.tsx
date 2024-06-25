import React, {FC} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import BaseContainer from './BaseContainer';
import Messages from '../components/Messages';
import {ColorSetting} from '../utils/ColorsSetting';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../utils/Rootnavigator';

interface Homescreenprops {
  navigation: StackNavigationProp<RootStackParamList, 'Details'>;
}
const Homescreen = ({navigation}: Homescreenprops) => {
  const menuArray = [
    'Text Component',
    'Custom Button',
    'Loader Component',
    'Textinput Component',
    'Image Component',
    'Popup Component'
  ];

  const renderMenuItems = (item: string, index: any) => {
    return (
      <View style={styles.mainViewStyle}>
        <View style={{flex: 1}}>
          <Text style={styles.titleStyle}>{item}</Text>
        </View>
        <View style={{flex: 0.1}}>
          <Icon
            name={'arrow-right'}
            onPress={() => onIconPress(index)}
            size={25}
            color={ColorSetting.black}
            style={{marginRight: 10}}
          />
        </View>
      </View>
    );
  };
  const onIconPress = (index: any) => {
    navigation.navigate('Details', {
      componentIndex: index,
    });
  };
  return (
    <BaseContainer title={Messages.titleHome}>
      <FlatList
        data={menuArray}
        renderItem={({item, index}) => renderMenuItems(item, index)}></FlatList>
    </BaseContainer>
  );
};
const styles = StyleSheet.create({
  mainViewStyle: {
    margin: 20,
    borderBottomColor: ColorSetting.backgroundColor,
    flexDirection: 'row',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '700',
    color: ColorSetting.black,
  },
});
export default Homescreen;
