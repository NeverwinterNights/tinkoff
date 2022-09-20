import React from 'react';
import {Text, TouchableHighlight} from 'react-native';

type AppButtonPropsType = {
    onPress: () => void
    title: string
    colors?: [string, string]

}

export const AppButton = ({onPress, title, colors = ["bg-yellow-300", "#FBBF24"]}: AppButtonPropsType) => {
    return (
        <TouchableHighlight className={`${colors[0]} text-gray-800 rounded-xl my-3 w-full py-3`} onPress={onPress}
                            underlayColor={colors[1]}>
            <Text className="text-center">{title}</Text>
        </TouchableHighlight>
    );
};

