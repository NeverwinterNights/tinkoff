import React from 'react';
import {Text, View} from 'react-native';
import {ServicesType} from "../../screens/ServicesScreen";
import {LinearGradient} from "expo-linear-gradient";
import {MaterialIcons} from "@expo/vector-icons";
import {Percent} from "./Percent";
import {getRandomGradient} from "../../utils/getRandomgradient";


type ServicesItemPropsType = {
    item: ServicesType
}

export const ServicesItem = ({item}: ServicesItemPropsType) => {
    return (
        <View className="mb-4">
            <View className="rounded-xl overflow-hidden w-14 h-14 mx-4">
                <LinearGradient colors={getRandomGradient()} className="w-full h-full items-center justify-center">
                    <Percent percent={item.percent}/>
                    <MaterialIcons name={item.iconName} size={30} color={"#fff"}/>
                </LinearGradient>
            </View>
            <Text style={{marginTop: 6}} className="text-xs text-center">{item.title}</Text>
        </View>
    );
};

