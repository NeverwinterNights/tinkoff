import React from 'react';
import {StyleSheet, View} from 'react-native';
import AntDesign from "@expo/vector-icons/AntDesign";

type OtherIconPropsType = {
    iconName: keyof typeof AntDesign.glyphMap

}

export const OtherIcon = ({iconName}: OtherIconPropsType) => {
    return (
        <View className="rounded-full bg-blue-500 w-8 h-8 items-center justify-center">
            <AntDesign name={iconName} size={19} color={"#EDF4FE"}/>
        </View>
    );
};

