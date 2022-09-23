import React from 'react';
import {Text, View} from 'react-native';
import {AccountsType} from "../../hooks/useAccounts";

type BalancePropsType = {
    account: AccountsType
}

export const Balance = ({account}: BalancePropsType) => {

    const {balance, name, currency} = account
    return (
        <View className="w-8/12">
            <Text style={{fontSize: 15}}>{name}</Text>
            <Text style={{fontSize: 15, fontWeight:"bold", marginTop:2}}>{Intl.NumberFormat(undefined, {
                currency,
                style: "currency"
            }).format(balance)}</Text>
        </View>
    );
};

