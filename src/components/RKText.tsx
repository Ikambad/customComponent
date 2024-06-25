import React, { FC } from "react";
import { View, Text } from 'react-native'
interface RKTextProps {
    titleIs: string;
    mainStyle:any
}
const RKText: FC<RKTextProps> = (props) => {
    return (
        <View style={{flex:1,justifyContent:'center'}}>
            <Text style={props.mainStyle}>{props.titleIs}</Text>
        </View>
    )
}
export default RKText;