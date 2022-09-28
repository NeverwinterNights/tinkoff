import React from 'react';
import {Layout} from "../components/Layout";
import {Padding} from "../components/Padding";
import {HeaderSupport} from "../components/support/HeaderSupport";
import {ScrollView} from "react-native";
import {MessageItem} from "../components/support/MessageItem";
import {useMessages} from "../hooks/useMessages";
import {Field} from "../components/support/Field";

type SupportScreenPropsType = {}

export type MessageType = {
    id:string
    text:string
    userId:string
    timestamp: Date | string
}

export const SupportScreen = ({}: SupportScreenPropsType) => {
    const {messages} = useMessages()

    return (
        <Layout isScrollView={false}>
            <Padding>
                <HeaderSupport/>
                <ScrollView style={{height: "83%"}}>
                    {messages.map((item) => <MessageItem key={item.text} message={item}/>)}
                </ScrollView>
                <Field/>
            </Padding>
        </Layout>
    );
};

