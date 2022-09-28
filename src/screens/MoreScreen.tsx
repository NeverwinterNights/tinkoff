import React from 'react';
import {Text} from 'react-native';
import {Layout} from "../components/Layout";
import {Title} from "../components/Title";
import {Padding} from "../components/Padding";
import {Currencies} from "../components/more/Currencies";
import {Menu} from "../components/more/Menu";

type MoreScreenPropsType = {}


export const MoreScreen = ({}: MoreScreenPropsType) => {


    return (
        <Layout>
            <Title text="More"/>
            <Padding>
                <Currencies/>
                <Menu/>
                <Text className="opacity-50 text-center text-gray-500 my-4">Version 1.0.0</Text>
            </Padding>

        </Layout>
    );
};

