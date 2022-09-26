import React from 'react';
import {Pressable, Text} from 'react-native';
import {ContactType} from "../../hooks/useContacts";
import {Avatar} from "../Avatar";
import {handleTransfer} from "../../utils/handleTransfer";
import {useAccounts} from "../../hooks/useAccounts";

type ContactItemPropsType = {
    contact: ContactType
}

export const ContactItem = ({contact}: ContactItemPropsType) => {
    const {accounts} = useAccounts()

    return (
        <Pressable className="ml-4 mr-1 items-center" onPress={() => handleTransfer(accounts[0], contact.cardNumber)}>
            <Avatar size="large" name={contact.displayName}/>
            <Text className="text-xs mt-1">{contact.displayName}</Text>
        </Pressable>
    );
};

