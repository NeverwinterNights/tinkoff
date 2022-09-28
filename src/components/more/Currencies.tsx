import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useCurrency} from "../../hooks/useCurrency";
import {BOX_SHADOW} from "../../utils/styles";
import {Loader} from "../Loader";

type CurrenciesPropsType = {}

export const Currencies = ({}: CurrenciesPropsType) => {

    const {currency, isLoading} = useCurrency()


    return (
        <View className="flex-row mt-5 rounded-2xl bg-white py-3 justify-center" style={BOX_SHADOW}>
            {isLoading ? <Loader/> : currency.map((item) => (
                <View key={item.name} className="text-xs w-1/3 flex-row justify-center" style={BOX_SHADOW}>
                    <Text className="text-gray-400 mr-1">{item.name}</Text>
                    <Text className="text-gray-800">{item.value}</Text>
                </View>
            ))
            }
        </View>
    );
};


