import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootNavigatorStackParamList} from "./types";
import {NavigationContainer} from "@react-navigation/native";
import {useAuth} from "../hooks/useAuth";
import {AuthScreen} from "../screens/AuthScreen";
import {HomeScreen} from "../screens/HomeScreen";
import {PaymentsScreen} from "../screens/PaymentsScreen";
import {MoreScreen} from "../screens/MoreScreen";
import {ServicesScreen} from "../screens/ServicesScreen";
import {ProfileScreen} from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator<RootNavigatorStackParamList>()


export const Navigation = () => {
    const {user} = useAuth()
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {user ? <>
                    <Stack.Screen name={"HomeScreen"} component={HomeScreen}/>
                    <Stack.Screen name={"PaymentsScreen"} component={PaymentsScreen}/>
                    <Stack.Screen name={"MoreScreen"} component={MoreScreen}/>
                    <Stack.Screen name={"ServicesScreen"} component={ServicesScreen}/>
                    <Stack.Screen name={"ProfileScreen"} component={ProfileScreen}/>

                </> :
                    <Stack.Screen name={"AuthScreen"} component={AuthScreen}/>}
            </Stack.Navigator>

        </NavigationContainer>
    );
};

