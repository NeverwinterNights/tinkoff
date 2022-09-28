import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {OtherType} from "./Other";
import {OtherIcon} from "./OtherIcon";
import {BOX_SHADOW} from "../../utils/styles";
import {handleTransfer} from "../../utils/handleTransfer";
import {useAccounts} from "../../hooks/useAccounts";
import Prompt from "react-native-prompt-cross";

type OtherItemPropsType = {
    item: OtherType
}

export const OtherItem = ({item}: OtherItemPropsType) => {
    const {accounts} = useAccounts()
    const [visibleState, setVisibleState] = useState(false);
    const cardNumber = "6512 4247 6393 1383"


    return (
        <>
            <Pressable onPress={()=> setVisibleState(true)} style={BOX_SHADOW} className="ml-4 p-2 rounded-xl bg-white h-24 w-24">
                <OtherIcon iconName={item.iconName}/>
                <Text className="text-xs" style={{marginTop: 6}}>{item.title}</Text>
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
                            if (text) await handleTransfer(accounts[0], cardNumber, text)
                            setVisibleState(false);
                        },
                    },
                ]}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {}
});
