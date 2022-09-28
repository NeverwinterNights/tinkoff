import React from 'react';
import {Text, View} from 'react-native';
import {Layout} from "../components/Layout";
import {MaterialIcons} from "@expo/vector-icons";
import {ServicesItem} from "../components/services/ServicesItem";

type ServicesScreenPropsType = {}

export type ServicesType = {
    iconName: keyof typeof MaterialIcons.glyphMap
    title: string
    percent: number
}

const services: ServicesType[] = [
    {
        iconName: "movie",
        title: "Cinema",
        percent: 10
    },
    {
        iconName: "music-note",
        title: "Concerts",
        percent: 35
    },
    {
        iconName: "sports-football",
        title: "Sports",
        percent: 15
    },
    {
        iconName: "monitor",
        title: "Electronics",
        percent: 12
    },
    {
        iconName: "flight",
        title: "Tickets",
        percent: 17
    },
    {
        iconName: "card-giftcard",
        title: "Gifts",
        percent: 50
    },
    {
        iconName: "fitness-center",
        title: "Fitness",
        percent: 11
    },
    {
        iconName: "psychology",
        title: "Psychology",
        percent: 20
    },
    {
        iconName: "pets",
        title: "Veterinary",
        percent: 20
    },
    {
        iconName: "flight",
        title: "Tickets2",
        percent: 17
    },
    {
        iconName: "card-giftcard",
        title: "Gifts2",
        percent: 50
    },
    {
        iconName: "fitness-center",
        title: "Fitness2",
        percent: 11
    },
    {
        iconName: "psychology",
        title: "Psychology2",
        percent: 20
    },
    {
        iconName: "pets",
        title: "Veterinary2",
        percent: 20
    },
    {
        iconName: "monitor",
        title: "Electronics TV",
        percent: 12
    },
    {
        iconName: "music-note",
        title: "Concerts2",
        percent: 35
    },
]

export const ServicesScreen = ({}: ServicesScreenPropsType) => {


    return (
        <Layout>
            <Text className="text-center text-lg mb-6">Barcelona</Text>
            <View className="flex-row flex-wrap justify-center">
                {services.map((item) => <ServicesItem item={item} key={item.title}/>)}

            </View>
        </Layout>
    );
};

