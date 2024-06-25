import React, {FC} from 'react';
import {View, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import {ColorSetting} from '../utils/ColorsSetting';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {getProportionalFontSize} from '../utils/GeneralSettings';

interface RKPopupViewProps {
  shouldShowModal: false;
  animation: 'fade';
  hideClose: false;
  onRequestClose: () => void;
}
const RKPopupView: FC<RKPopupViewProps> = props => {
  return (
    <Modal
      visible={props.shouldShowModal}
      animationType={props.animation !== undefined ? props.animation : 'fade'}
      transparent={true}
      onRequestClose={props.onRequestClose}>
      <View
        style={[
          {
            flex: 1,
            backgroundColor: props.backgroundColor || ColorSetting.transparent,
            justifyContent: 'center',
            alignItems: 'center',
          },
          props.style,
        ]}>
        <View style={styles.iconViewStyle}>
          <TouchableOpacity onPress={props.onRequestClose}>
            <FontAwesome
              accessible={true}
              accessibilityLabel={'DropdownCloseClick'}
              onPress={props.onRequestClose}
              size={25}
              color={ColorSetting.white}
              name={'close'}
            />
          </TouchableOpacity>
        </View>
        {props.children}
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  headerTextStyle: {
    alignSelf: 'flex-start',
    fontSize: getProportionalFontSize(18),
  },
  iconViewStyle: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: ColorSetting.backgroundColor,
  },
  titleViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});
export default RKPopupView;
