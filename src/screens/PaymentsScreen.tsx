import React from 'react';
import {Layout} from "../components/Layout";
import {Title} from "../components/Title";
import {Contacts} from "../components/payments/Contacts";
import {Other} from "../components/payments/Other";
import {View} from "react-native";

type PaymentsScreenPropsType = {}

export const PaymentsScreen = ({}: PaymentsScreenPropsType) => {
    return (
        <Layout>
            <Title text="Payment"/>
            <Contacts/>
            <Other/>
        </Layout>
    );
};

