import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import {ColorSetting} from '../utils/ColorsSetting';
import {
  getProportionalFontSize,
  TextFieldTypes,
} from '../utils/GeneralSettings';
interface RKTextInputProps {
  titleIs: string;
  mainStyle: any;
}
const RKTextinput: FC<RKTextInputProps> = (props: any) => {
  const fieldKeyboardType = () => {
    if (props.type === TextFieldTypes.email) {
      return 'email-address';
    } else if (props.type === TextFieldTypes.password) {
      return 'default';
    } else if (props.type === TextFieldTypes.phone) {
      return 'phone-pad';
    }
  };
  const shouldAutoCapitalise = () => {
    if (props.type === TextFieldTypes.email) {
      return 'none';
    } else if (props.type === TextFieldTypes.password) {
      return 'none';
    }
  };
  const onTextChangeHandler = (newText: string) => {
    if (props.onChangeText !== undefined) {
      props.onChangeText(newText, props.identifier || '');
    }
  };
  return (
    <View style={[{}, props.containerStyle]}>
      <View
        style={[styles.mainTextFieldStyle, props.style]}
        pointerEvents={props.isDisable ? 'none' : 'auto'}>
        <View
          style={{alignItems: 'flex-start', flex: 1, justifyContent: 'center'}}>
          {props.prefix ? (
            <View style={styles.prefixContainer}>
              <Text style={[styles.prefixText, props.prefixTextStyle]}>
                {props.prefix}
              </Text>
            </View>
          ) : null}

          <TextInput
            {...props}
            ref={props.refName}
            defaultValue={props.defaultValue}
            value={props.initialValue}
            style={[styles.textFieldStyle, props.textFieldStyle]}
            placeholderTextColor={'black'}
            placeholder={props.placeholder}
            autoFocus={props.autoFocus || false}
            autoCapitalize={shouldAutoCapitalise()}
            keyboardType={fieldKeyboardType()}
            autoCorrect={false}
            clearButtonMode={'unless-editing'}
            returnKeyType={props.returnKeyType || 'next'}
            onChangeText={
              props.onChangeText != undefined ? onTextChangeHandler : undefined
            }
            secureTextEntry={false}
            maxLength={props.maxLength !== undefined ? props.maxLength : 250}
            editable={props.editable !== undefined ? props.editable : true}
            pointerEvents={'auto'}
            multiline={props.isMultiline ? props.isMultiline : false}
          />
        </View>
      </View>
      {props.errorFromScreen ? (
        <Text style={styles.errorTextStyle}>{props.errorFromScreen}</Text>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  mainTextFieldStyle: {
    backgroundColor: 'transparent',
    margin: 10,
    borderColor: '#999999',
    borderBottomWidth: 1,
    paddingLeft: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textStyle: {
    flex: 1,
    fontSize: getProportionalFontSize(14),
    color: ColorSetting.gray,
    paddingVertical: 5,
  },
  textFieldStyle: {
    fontSize: getProportionalFontSize(14),
    color: ColorSetting.black,
    textAlign: 'left',
    paddingTop: 25,
    paddingBottom: 25,
    marginHorizontal: 10,
  },
  errorTextStyle: {
    fontSize: getProportionalFontSize(12),
    color: ColorSetting.error,
    marginBottom: 10,
    marginTop: -10,
    textTransform: 'capitalize',
  },
  prefixContainer: {flexDirection: 'row', alignItems: 'center'},
  prefixText: {
    fontSize: getProportionalFontSize(20),
    paddingLeft: 10,
    paddingVertical: 10,
    color: ColorSetting.gray,
  },
});
export default RKTextinput;
