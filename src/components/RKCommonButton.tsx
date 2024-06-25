import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
interface RKCommonButtonProps {
  type: '0' | '1';
  height: any;
  width: any;
  backgroundColor: string;
  borderRadius?: number;
  onPress: () => void;
  leftIcon?: React.ElementType;
  RightIcon?: React.ElementType;
  textAlign?: 'center' | 'flex-start';
  textColor?: string;
  fontFamily?: string;
  textSize?: number;
  title: string;
}
const RKCommonButton: FC<RKCommonButtonProps> = props => {
  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          {
            height: props.height || (props.type === '0' ? '45%' : 45),
            width: props.width || '100%',
            backgroundColor:
              props.backgroundColor ||
              (props.type === '0' ? 'green' : 'yellow'),
            borderRadius: props.borderRadius || (props.type === '0' ? 10 : 25),
          },
        ]}
        onPress={props.onPress}>
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.buttonText,
              {
                color:
                  props.textColor || (props.type === '0' ? 'white' : 'blue'),
                fontFamily: props.fontFamily || 'Arial',
                fontSize: props.textSize || (props.type === '0' ? 14 : 15),
              },
            ]}>
            {props.title || (props.type === '0' ? 'Button' : 'Ok')}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  parentContainer: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
export default RKCommonButton;
