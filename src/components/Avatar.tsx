import React from 'react';
import {Text, View} from 'react-native';

type AvatarPropsType = {
    name?: string | null
    size?: "small" | "large"
}

export const Avatar = ({name, size = "small"}: AvatarPropsType) => {
    return (
        <View
            className={`rounded-full bg-gray-300 ${size === "small" ? "w-9 h-9 mr-3" : "w-12 h-12"} items-center justify-center`}>
            <Text
                className={`text-white ${size === "small" ? "text-lg" : "text-xl"} font-medium`}>{name?.slice(0, 1)}</Text>
        </View>
    );
};

