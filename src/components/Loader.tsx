import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, Dimensions, Animated, Easing } from 'react-native'
import { ColorSetting } from '../utils/ColorsSetting'
import LoaderKit from 'react-native-loader-kit'

const startRotationAnimation = (durationMs: number, rotationDegree: Animated.Value): void => {
    Animated.loop(Animated.timing(
        rotationDegree,
        {
            toValue: 360,
            duration: durationMs,
            easing: Easing.linear,
            useNativeDriver: true
        }
    )).start()
}

const Loader = ({ }: Props): JSX.Element => {

    return (
        <View style={styles.mainViewStyle}>
            <LoaderKit
                style={{ width: 100, height: 100 }}
                name={'BallPulseSync'} // Optional: see list of animations below
                color={ColorSetting.backgroundColor} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
            />
        </View>
    )
}
const styles = StyleSheet.create({
    mainViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:ColorSetting.transparentBlack,
        position:'absolute',
        width: Dimensions.get("window").width,
        height: Dimensions.get("screen").height ,
        zIndex: 997,

    }
})
export default Loader
