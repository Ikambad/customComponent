import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

interface RKImageProps {
  source: any;
  style: any;
  setBorderRadius: 8;
  resizeMode: 'cover';
}
const RKImage: FC<RKImageProps> = props => {
  return props.source !== undefined &&
    props.source !== null &&
    props.source.trim().length > 0 ? (
    <View style={{flex:1,marginTop:20}}>
      <FastImage
      
        style={[
          {
            borderRadius:
              props.setBorderRadius !== undefined ? props.setBorderRadius : 0,
          },
          styles.fastImageStyle,
          props.style,
        ]}
        source={{
          uri: props.source,
          priority: FastImage.priority.high,
        }}
        resizeMode={props.resizeMode || FastImage.resizeMode.cover}
      />
    </View>
  ) : null;
};
const styles = StyleSheet.create({
  fastImageStyle: {
    overflow: 'hidden',
    width: 80,
    height: 80,
    alignSelf: 'center',
    
  },
});
export default RKImage;
