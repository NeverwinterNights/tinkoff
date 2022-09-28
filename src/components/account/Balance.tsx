import React from 'react';
import {Text, View} from 'react-native';
import {AccountsType} from "../../hooks/useAccounts";


type BalancePropsType = {
    account: AccountsType
}


export const Balance = ({account}: BalancePropsType) => {

    // interface WebpackRequire extends NodeRequire {
    //     ensure(
    //         dependencies: string[],
    //         callback: (require: WebpackRequire) => void,
    //         errorCallback?: (error: Error) => void,
    //         chunkName?: string
    //     ): void;
    // };
    // const require: WebpackRequire = (window as any).require;

    const {balance, name, currency} = account

    // function addData() {
    //
    //     if (!global.Intl) {
    //         console.log("value")
    //         require.ensure([
    //             'intl',
    //         ], function (require: any) {
    //             require('intl');
    //             addData()
    //         });
    //     } else {
    //         return new Intl.NumberFormat(undefined, {
    //             currency,
    //             style: "currency"
    //         }).format(balance);
    //     }
    // }

    return (
        <View className="w-8/12">
            <Text style={{fontSize: 15}}>{name}</Text>
            <Text style={{fontSize: 15, fontWeight:"bold", marginTop:2}}>{Intl.NumberFormat(undefined, {
                currency,
                style: "currency"
            }).format(balance)}</Text>
            {/*<Text style={{fontSize: 15, fontWeight: "bold", marginTop: 2}}>{addData()}</Text>*/}
        </View>
    );
};

