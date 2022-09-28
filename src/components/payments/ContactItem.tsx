import React, {useState} from 'react';
import {Pressable, Text} from 'react-native';
import {ContactType} from "../../hooks/useContacts";
import {Avatar} from "../Avatar";
import {handleTransfer} from "../../utils/handleTransfer";
import {useAccounts} from "../../hooks/useAccounts";
import Prompt from "react-native-prompt-cross";

type ContactItemPropsType = {
    contact: ContactType
}

export const ContactItem = ({contact}: ContactItemPropsType) => {
    const {accounts} = useAccounts()

    const [visibleState, setVisibleState] = useState(false);


    return (
        <>
            <Pressable className="ml-4 mr-1 items-center" onPress={() => setVisibleState(true)}>
                <Avatar size="large" name={contact.displayName}/>
                <Text className="text-xs mt-1">{contact.displayName}</Text>
            </Pressable>
            <Prompt
                title="Sum transfer"
                message="Enter transfer amount"
                defaultValue="value"
                visible={visibleState}
                useNatifIosPrompt
                callbackOrButtons={[
                    {
                        text: "Cancel",
                        style: "cancel",
                        onPress: () => setVisibleState(false),
                    },
                    {
                        text: "Ok",
                        onPress: async (text?: string) => {
                            if (text) await handleTransfer(accounts[0], contact.cardNumber, text)
                            setVisibleState(false);
                        },
                    },
                ]}
            />

        </>
    );
};

