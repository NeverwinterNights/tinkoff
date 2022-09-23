import React from 'react';
import {Text} from 'react-native';
import {Header} from "../components/Header";
import {Layout} from "../components/Layout";
import {Stories} from "../components/Stories";
import {Accounts} from "../components/account/Accounts";
import {AddNewProduct} from "../components/AddNewProduct";

type HomeScreenPropsType = {}

export const HomeScreen = () => {
    return (
        <Layout>
            <Header/>
            <Stories/>
            <Accounts/>
            <AddNewProduct/>
        </Layout>
    );
};


