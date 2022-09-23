import React, {Fragment} from 'react';
import {FlatList, Text, View} from 'react-native';
import {AccountsType, useAccounts} from "../../hooks/useAccounts";
import {Loader} from '../Loader';
import {Padding} from "../Padding";
import {ListItemSeparator} from "../ListItemSeparator";
import {AccountItem} from "./AccountItem";

type AccountsPropsType = {}

export const Accounts = ({}: AccountsPropsType) => {
     const {accounts, isLoading} = useAccounts()

    const renderFunction = (item: AccountsType) => {
        return (
            <Fragment key={item.id}>
                <AccountItem account={item}/>
            </Fragment>
        )
    }



    return (
        <Padding>
            {isLoading ? <Loader/> : accounts.length ?
                <FlatList nestedScrollEnabled data={accounts} keyExtractor={(item) => item.id} ItemSeparatorComponent={ListItemSeparator} renderItem={({item})=> renderFunction(item)}/> :
                <Text>You don't ave any cards</Text>}
        </Padding>
    );
};

