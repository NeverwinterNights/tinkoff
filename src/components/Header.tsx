import React from 'react';
import {Padding} from "./Padding";
import {Avatar} from "./Avatar";
import {Text, TouchableOpacity} from "react-native";
import {useAppNavigation} from "../navigation/types";
import {Entypo} from '@expo/vector-icons';
import {useProfile} from "../hooks/useProfile";
import {Loader} from "./Loader";


type HeaderPropsType = {}

export const Header = ({}: HeaderPropsType) => {
     const {isLoading, name} = useProfile()
    const navigation = useAppNavigation()
    return isLoading ? <Loader/> : (
        <Padding style={"flex-row items-center"}>
            <Avatar name={name}/>
            <TouchableOpacity className="flex-row items-end" onPress={()=> navigation.navigate("ProfileScreen")}>
                <Text className="text-gray-800">{name}</Text>
            </TouchableOpacity>
            <Entypo name="chevron-small-right" size={28} color={"grey"}/>
        </Padding>
    );
};

