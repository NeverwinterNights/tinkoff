import React from 'react';
import {useProfile} from "../hooks/useProfile";
import {Layout} from "../components/Layout";
import {Title} from "../components/Title";
import {Padding} from "../components/Padding";
import {Loader} from "../components/Loader";
import {InputField} from "../components/InputField";
import {AppButton} from "../components/AppButton";
import {useAuth} from "../hooks/useAuth";
import {useUpdateProfile} from "../hooks/useUpdateProfile";
import {Text, View} from "react-native";

type ProfileScreenPropsType = {}

export const ProfileScreen = ({}: ProfileScreenPropsType) => {
    const {isLoading: isProfileLoading, name, setName, profile} = useProfile()
    const {logout} = useAuth()
    const {isLoading, isSuccess, updateProfile} = useUpdateProfile(name, profile.docID)

    return (
        <Layout>
            <Title text="Profile" isCentered={true}/>
            <Padding>
                {isSuccess && (
                    <View className="bg-green-500 py-2 rounded-lg">
                        <Text className="text-white text-center">Profile updated successfully</Text>
                    </View>
                )}
                {(isProfileLoading || isLoading) ? <Loader/> : <>
                    <InputField onChange={setName} value={name} placeholder="Enter name"/>
                    <AppButton onPress={updateProfile} title="Update profile"/>
                    <AppButton onPress={logout} title="Logout" colors={["bg-gray-200", "#D6D8DB"]}/>
                </>}
            </Padding>
        </Layout>
    );
};

