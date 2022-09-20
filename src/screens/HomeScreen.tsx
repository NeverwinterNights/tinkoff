import React from 'react';
import {Text, View} from 'react-native';
import {Header} from "../components/Header";
import {Layout} from "../components/Layout";

type HomeScreenPropsType = {}

export const HomeScreen = () => {
    return (
        <Layout>
            <Header/>
            <Text>HomeScreen</Text>
        </Layout>
    );
};


