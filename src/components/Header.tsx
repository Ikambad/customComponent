import React, {FC} from "react";
import {View,Text,StyleSheet, SafeAreaView} from 'react-native'
import { FontSize } from "./FontsSettings";
import { ColorSetting } from "../utils/ColorsSetting";
interface Header {
    Title:string;
}
const Header: FC<Header> = props => {
    return (
            <View style={styles.headerStyle}>
            <Text style={styles.headerText}>{props.Title}</Text>
            </View>
    )
}
const styles  = StyleSheet.create ({
    headerStyle:{
        paddingVertical: 10,
    },
    headerText: {
        fontSize: 40,
        fontWeight: FontSize.LargeFont,
        color:ColorSetting.white,
        position:'absolute',
        top:60,left:20
      },
})
export default Header;