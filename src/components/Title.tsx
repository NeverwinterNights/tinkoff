import React, {FC} from 'react';
import {Text} from 'react-native';
import {Padding} from "./Padding";


export const Title: FC<{ text: string, isCentered?: boolean }> = ({text, isCentered = false}) => {
    return (
        <Padding>
            <Text
                className={`${isCentered ? "text-center" : ""} text-2xl font-bold text-gray-800`}>{text}</Text>
        </Padding>
    );
};

