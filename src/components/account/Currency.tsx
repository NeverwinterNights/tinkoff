import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CurrencyType} from "../../hooks/useAccounts";
import {FontAwesome} from "@expo/vector-icons"

type CurrencyPropsType = {
    currency: CurrencyType
}

export const Currency = ({currency}: CurrencyPropsType) => {
    return (
        <View className=" rounded-full bg-blue-500 w-9 h-9 items-center justify-center">
            <View className=" rounded-full bg-[#EDF4FE]  w-5 h-5 items-center justify-center">
                <FontAwesome color={"#488CF9"} size={13} name={currency === "RUB" ? "ruble" : "usd"}/>
            </View>
        </View>
    );
};

