import React from 'react';
import {Text, View} from 'react-native';
import {MessageType} from "../../screens/SupportScreen";
import {useAuth} from "../../hooks/useAuth";

type MessageItemPropsType = {
    message: MessageType
}

export const MessageItem = ({message}: MessageItemPropsType) => {
    const {user} = useAuth()

    const currentLoggedUser = user?.uid === message.userId

    return (
        <View
            className={`flex-row items-end rounded-lg ${currentLoggedUser ? "bg-blue-500 self-end" : "bg-gray-200" +
                " self-start"} my-2 px-3 py-2 `}>
            <Text className={`${currentLoggedUser ? "text-white" : "text-gray-800"}`}>{message.text}</Text>
            <Text className={`ml-2 ${currentLoggedUser ? "text-white" : "text-gray-700"} opacity-70`} style={{fontSize:10}}>{message.timestamp as string}</Text>
        </View>
    );
};

