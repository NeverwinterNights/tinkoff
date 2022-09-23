import React from 'react';
import {View} from 'react-native';
import {AccountsType} from "../../hooks/useAccounts";
import {Currency} from "./Currency";
import {Balance} from "./Balance";
import {ImageCart} from "./ImageCart";

type AccountItemPropsType = {
    account: AccountsType
}

export const AccountItem = ({account}: AccountItemPropsType) => {
    return (
        <View className="flex-row items-center justify-between mb-7">
            <Currency currency={account.currency}/>
            <Balance account={account}/>
            <ImageCart account={account}/>

        </View>
    );
};

