import React from 'react';
import {Text, View} from 'react-native';
import {Header} from "../components/Header";
import {Layout} from "../components/Layout";
import {Stories} from "../components/Stories";

type HomeScreenPropsType = {}

export const HomeScreen = () => {
    return (
        <Layout>
            <Header/>
            <Stories/>
            <Text>HomeScreen</Text>
        </Layout>
    );
};


