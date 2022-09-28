import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moreItems} from "./itemsData";
import {MenuItem} from "./MenuItem";

type MenuPropsType = {}

export const Menu = ({}: MenuPropsType) => {
    return (
        <View>
            {moreItems.map((item, index)=> <MenuItem key={index} item={item}/>)}
        </View>
    );
};

