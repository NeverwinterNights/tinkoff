import React from 'react';
import {ImageBackground, ImageSourcePropType, Text} from 'react-native';
import {AccountsType} from "../../hooks/useAccounts";

type ImageCartPropsType = {
    account: AccountsType
}

export const ImageCart = ({account}: ImageCartPropsType) => {
    const imageBlack: ImageSourcePropType = require("../../../assets/visa.png")
    const imageAll: ImageSourcePropType = require("../../../assets/creditcard.png")

    return (
        <ImageBackground source={account.name === "Tin Black" ? imageBlack : imageAll} resizeMode={"center"}
                         className="justify-end w-16 h-12 p-1">
            <Text className="text-white font-medium" style={{fontSize: 11}}>{account.cardNumber.slice(-4)}</Text>
        </ImageBackground>
    );
};

