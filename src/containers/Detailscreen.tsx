import React, {FC, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import BaseContainer from './BaseContainer';
import Messages from '../components/Messages';
import {ColorSetting} from '../utils/ColorsSetting';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../utils/Rootnavigator';
import {useRoute} from '@react-navigation/native';
import RKText from '../components/RKText';
import RKCommonButton from '../components/RKCommonButton';
import Loader from '../components/Loader';
import RKTextinput from '../components/RKTextinput';
import RKImage from '../components/RKImage';
import RKPopupView from '../components/RKPopupView';

interface Detailscreenprops {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}
const Detailscreen = ({navigation}: Detailscreenprops) => {
  const route = useRoute();
  const [txtValue, settextValue] = useState('');
  const [showPopup, setPopup] = useState(true);
  const onChangeText = (text: string) => {
    console.log('Typed text', text);
    settextValue(text);
  };
  const hidePopup = () => {
    setPopup(false);
  };
  return (
    <BaseContainer
      title={Messages.titleHome}
      left={true}
      leftIconName={Messages.leftArrow}
      onLeft={() => navigation.goBack()}>
      <View
        style={{
          marginTop: 120,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        {route.params.componentIndex == 0 ? (
          <RKText
            titleIs={'This is Text Component'}
            mainStyle={{
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 20,
            }}></RKText>
        ) : route.params.componentIndex == 1 ? (
          <RKCommonButton
            type={'0'}
            height={50}
            width={'90%'}
            backgroundColor={ColorSetting.backgroundColor}
            onPress={() => customButtonClick}
            title={'Custom Button'}></RKCommonButton>
        ) : route.params.componentIndex == 2 ? (
          <Loader></Loader>
        ) : route.params.componentIndex == 3 ? (
          <RKTextinput
            prefix={'Enter Text'}
            initialValue={txtValue}
            returnKeyType={'done'}
            onChangeText={onChangeText}></RKTextinput>
        ) : route.params.componentIndex == 4 ? (
          <RKImage
            source={'https://dummyimage.com/600/09f/fff.png'}
            style={undefined}
            setBorderRadius={8}
            resizeMode={'cover'}></RKImage>
        ) : (
          <RKPopupView
            shouldShowModal={showPopup}
            animation={'fade'}
            hideClose={false}
            onRequestClose={hidePopup}
            backgroundColor={ColorSetting.transparentBlack}></RKPopupView>
        )}
      </View>
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
export default Detailscreen;
