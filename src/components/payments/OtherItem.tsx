import React from 'react';
import { Pressable } from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {OtherType} from "./Other";
import {OtherIcon} from "./OtherIcon";
import {BOX_SHADOW} from "../../utils/styles";
import {handleTransfer} from "../../utils/handleTransfer";
import {useAccounts} from "../../hooks/useAccounts";

type OtherItemPropsType = {
    item: OtherType
}

export const OtherItem = ({item}: OtherItemPropsType) => {
    const {accounts} = useAccounts()

    return (
        <Pressable style={BOX_SHADOW} className="ml-4 p-2 rounded-xl bg-white h-24 w-24">
            <OtherIcon iconName={item.iconName}/>
            <Text className="text-xs" style={{marginTop:6}}>{item.title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {}
});
