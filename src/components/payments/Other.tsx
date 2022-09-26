import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import AntDesign from "@expo/vector-icons/AntDesign";
import {SubTitle} from "../SubTitle";
import {OtherItem} from "./OtherItem";

type OtherPropsType = {}


const otherItems: OtherType[] = [
    {
        iconName: "mobile1",
        title: "Mobile"
    },
    {
        iconName: "home",
        title: "House Utilities"
    },
    {
        iconName: "wifi",
        title: "By-Fly"
    },
    {
        iconName: "car",
        title: "car"
    },
    {
        iconName: "iconfontdesktop",
        title: "TV"
    },
]

export type OtherType = {
    iconName: keyof typeof AntDesign.glyphMap
    title: string
}

export const Other = ({}: OtherPropsType) => {
    return (
        <View>
            <SubTitle text="Important transfers"/>
            <FlatList contentContainerStyle={{paddingRight:10}} className="py-5" data={otherItems} horizontal showsHorizontalScrollIndicator={false}
                      keyExtractor={(item) => item.iconName}
                      renderItem={({item}) => <OtherItem item={item}/>}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {}
});
