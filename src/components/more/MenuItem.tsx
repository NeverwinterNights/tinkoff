import React from 'react';
import {Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import {MoreScreenItemsType} from "./itemsData";
import {BOX_SHADOW} from "../../utils/styles";
import {MaterialIcons} from "@expo/vector-icons";

type MenuItemPropsType = {
    item: MoreScreenItemsType
}

export const MenuItem = ({item}: MenuItemPropsType) => {
    return (
        <Pressable onPress={() => Linking.openURL(item.link)} className={"mt-4 flex-row bg-white p-4 rounded-2xl" +
            " justify-between"} style={BOX_SHADOW}>
            <View className="w-10/12">
                <Text className="text-xl text-gray-800 font-bold">{item.title}</Text>
                <Text className="mt-1 text-gray-500 opacity-90">{item.description}</Text>
            </View>
            <View className="rounded-full bg-blue-500 w-9 h-9 items-center justify-center">
                <MaterialIcons name={item.iconName} size={22} color={"#EDF4FE"}/>
            </View>
        </Pressable>
    );
};

