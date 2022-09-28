import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

type HeaderSupportPropsType = {}

export const HeaderSupport = ({}: HeaderSupportPropsType) => {
    return (
        <View className="flex-row items-center py-1 mb-2 -mt-4">
            <Image className="h-14 w-10 mr-2" source={require("../../../assets/logo.png")}/>
            <View>
                <Text className="text-sm text-gray-800 font-medium">Support</Text>
                <Text className="text-xs text-gray-500">We are always online</Text>
            </View>
        </View>
    );
};

