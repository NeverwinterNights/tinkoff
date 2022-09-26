import React, {FC} from 'react';
import {Text} from 'react-native';
import {Padding} from "./Padding";


export const SubTitle: FC<{ text: string }> = ({text}) => {
    return (
        <Padding>
            <Text
                className={"text-2xl font-bold text-gray-800"}>{text}</Text>
        </Padding>
    );
};

